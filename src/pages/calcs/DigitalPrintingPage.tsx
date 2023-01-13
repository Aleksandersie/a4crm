import { useContext, useState,useEffect } from "react";
import { Button, Card, Container, Form, Modal } from "react-bootstrap";
import { Context } from "../..";
import DigitalPrintCategoryDropdown from "../../components/DigitalPageComponents/DigitalPrintCategoryDropdown/DigitalPrintCategoryDropdown";
import SearchCustomers from "../../components/SearchCustomers/SearchCustomers";
import { adminConst, managerConst } from "../../Const";
import PaperSizeDropdown from "../../components/DigitalPageComponents/PaperSizeDropdown/PaperSizeDropdown";
import PaperThicknessDropdown from "../../components/DigitalPageComponents/PaperThicknessDropdown/PaperThicknessDropdown";
import "./digitalPrintingPageStyle.scss"
import React from "react";
import { createDigitalPrintItem } from "../../calcLogic/digitalPrintCalc";
import { digitalCategoryEnum } from "../../Store/DigitalPrintStore";
import { observer } from "mobx-react-lite";
import { Checkbox, FormControlLabel } from "@mui/material";


const DigitalPrintingPage = observer( () => {
     const { materialList, user, digitalStore,digitalPrintPrice } = useContext(Context);
     const [showFind, setShowFind] = useState(false);
     const numberOfCopyRef = React.useRef<HTMLInputElement>(null)

     useEffect(()=>{
          if (digitalStore.selectedDigitalPrintCategory.desc===digitalCategoryEnum.sheetFeedVinyl){
               digitalPrintPrice.setCurrentDigitalPrintPrice(Number(digitalPrintPrice.digitalPrintPriceList.sheetFeedVinyl))
               console.log('vinyl')
               console.log(digitalPrintPrice.currentDigitalPrintPrice)
          }
          if (digitalStore.selectedDigitalPrintCategory.desc===digitalCategoryEnum.sheetFeed){
               digitalPrintPrice.setCurrentDigitalPrintPrice(digitalPrintPrice.digitalPrintPriceList.sheetFeedPrint)
               console.log('sheet')
               console.log(digitalPrintPrice.currentDigitalPrintPrice)
          }
     },[digitalStore.selectedDigitalPrintCategory])
    
    const testBool = true
    const [twoSided,setTwoSided] = useState(true)

    function addOrder(){
        createDigitalPrintItem(
            digitalStore.selectedDigitalPrintCategory.desc,
            digitalStore.selectedPaperSizeForSheetFeed.size,
            digitalStore.selectedPaperThickness.thickness,
            numberOfCopyRef.current.value,
            digitalPrintPrice.currentDigitalPrintPrice,
            twoSided
            )
    }
     return (
          <Container>
               <Card className="mt-5" style={{ textAlign: "center" }}>
                    <Card.Header>
                         <h4>Калькулятор расчёта цифровой печати</h4>
                    </Card.Header>
                    <Card.Body>
                         <Card.Subtitle>
                              {user.user.role === (adminConst || managerConst) ? (
                                   <div>
                                        <div className="mb-2">Выберите заказчика:</div>
                                        <Button variant="warning" onClick={() => setShowFind(true)}>
                                             {user.selectedCustomer.alias || "Выберите заказчика"}
                                        </Button>

                                        <Modal show={showFind} onHide={() => setShowFind(false)}>
                                             <Modal.Header closeButton>
                                                  <Modal.Title>Выберите заказчика</Modal.Title>
                                             </Modal.Header>
                                             <Modal.Body>
                                                  <SearchCustomers show={setShowFind} />
                                             </Modal.Body>
                                        </Modal>
                                   </div>
                              ) : (
                                   ""
                              )}
                              <div className="d-flex justify-content-center align-items-center gap-5 mt-2">
                                   <div>
                                        <div className="mb-2">Категория заказа:</div>
                                        <DigitalPrintCategoryDropdown />
                                   </div>
                                   <div>
                                        <div className="mb-2">Формат:</div>
                                        <PaperSizeDropdown />
                                   </div>
                                   <div>
                                        <div className="mb-2">Бумага:</div>
                                        <PaperThicknessDropdown />
                                   </div>
                              </div>
                              <div>
                              <div className="pcsInput mt-2">
                                        <div className="mb-2">Тираж:</div>
                                        <Form.Control style={{width:100}} type="number" ref={numberOfCopyRef}/>
                                        <FormControlLabel
                                             control={<Checkbox />}
                                             checked={twoSided}
                                             label="Печать с двух сторон"
                                             value={twoSided}
                                             onChange={()=>setTwoSided(!twoSided)}
                                        />
                                   </div>
                              </div>
                              <Button className="mt-2" onClick={addOrder}>Жмяк</Button>
          
                         </Card.Subtitle>
                    </Card.Body>
               </Card>
          </Container>
     );
});

export default DigitalPrintingPage;

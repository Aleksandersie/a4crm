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
import PreflightTable from "../../components/DigitalPageComponents/PreflightTable/PreflightTable";
import useDigitalPreflightPrice from "../../components/DigitalPageComponents/useDigitalPreflightPrice";
import useDigitalPrintPriceSelector from "../../components/DigitalPageComponents/useDigitalPrintPriceSelector";


const DigitalPrintingPage = observer( () => {
     const { materialList, user, digitalStore,digitalPrintPrice,price } = useContext(Context);
     const [showFind, setShowFind] = useState(false);
     const [numberOfCopy,setNumberOfCopy]=useState<number>(null)
     const [totalPrintSumState,setTotalPrintSumState] = useState(null)
     const [onePcsCostState, setOnePcsCostState] = useState(null)
     const [twoSided,setTwoSided] = useState(false)
    // const numberOfCopyRef = React.useRef<HTMLInputElement>(null)


////////////////////DITAL PRINT PRICE HANDLER/////////////////    
     useEffect(()=>{
          if (digitalStore.selectedDigitalPrintCategory.desc===digitalCategoryEnum.sheetFeedVinyl){
               price.setCurrentPrice(Number(digitalPrintPrice.digitalPrintPriceList.sheetFeedVinyl))
               console.log('vinylNew')
               console.log(price.currentPrice)
          }
          if (digitalStore.selectedDigitalPrintCategory.desc===digitalCategoryEnum.sheetFeed){
               price.setCurrentPrice(digitalPrintPrice.digitalPrintPriceList.sheetFeedPrint)
               console.log('sheet')
               console.log(digitalPrintPrice.currentDigitalPrintPrice)
          }
     },[digitalStore.selectedDigitalPrintCategory])
    
    

    function addOrder(){
        createDigitalPrintItem(
            digitalStore.selectedDigitalPrintCategory.desc,
            digitalStore.currentPaperSize.size,
            digitalStore.selectedPaperThickness.thickness,
            Number(numberOfCopy),
            price.currentPrice,
            twoSided
            )
    }
    // useEffect(()=>{
    //     console.log(numberOfCopy);
    //     if(numberOfCopy===1){
    //         console.log('copy');
    //     }
    //     if(numberOfCopy===2){
    //         console.log('copy2');
    //     }
    //
    // },[numberOfCopy])


    useEffect(()=>{
         const{totalPrintSum,onePcsCost}=useDigitalPreflightPrice(
          numberOfCopy,
          Number(price.currentPrice),
          digitalStore.currentPaperSize.size,
          twoSided
          )
         setTotalPrintSumState(totalPrintSum)
         setOnePcsCostState(onePcsCost)

    },[digitalStore.selectedDigitalPrintCategory,
       numberOfCopy,
       digitalStore.currentPaperSize,
       twoSided
    ])


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
                                        <Form.Control style={{width:100}} 
                                        type="number"
                                        value={numberOfCopy}
                                        onChange={(e)=>setNumberOfCopy(Number(e.target.value))}
                                         />
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
                         <PreflightTable 
                         totalPrintSumState={totalPrintSumState}
                         onePcsCost={onePcsCostState} 
                         />
                         </Card.Subtitle>
                    </Card.Body>
               </Card>
          </Container>
     );
});

export default DigitalPrintingPage;

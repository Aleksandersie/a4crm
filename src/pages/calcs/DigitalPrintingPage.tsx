import { useContext, useState } from "react";
import { Button, Card, Container, Form, Modal } from "react-bootstrap";
import { Context } from "../..";
import DigitalPrintCategoryDropdown from "../../components/DigitalPageComponents/DigitalPrintCategoryDropdown/DigitalPrintCategoryDropdown";
import SearchCustomers from "../../components/SearchCustomers/SearchCustomers";
import { adminConst, managerConst } from "../../Const";
import PaperSizeDropdown from "../../components/DigitalPageComponents/PaperSizeDropdown/PaperSizeDropdown";
import PaperThicknessDropdown from "../../components/DigitalPageComponents/PaperThicknessDropdown/PaperThicknessDropdown";
import "./digitalPrintingPageStyle.scss"
const DigitalPrintingPage = () => {
     const { materialList, user } = useContext(Context);
     const [showFind, setShowFind] = useState(false);

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
                                        <Form.Control style={{width:100}} type="number"/>
                                   </div>
                              </div>
                         </Card.Subtitle>
                    </Card.Body>
               </Card>
          </Container>
     );
};

export default DigitalPrintingPage;

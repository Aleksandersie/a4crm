import React, { useContext, useState } from "react";
import { Button, Card, Dropdown,Modal } from "react-bootstrap";
import CalcInputBlock from "../CalcInputBlock/CalcInputBlock";
import { Paper } from "@mui/material";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import MaterialDropdown from "../MaterialDropdown/MaterialDropdown";
import TypeDropdown from "../TypeDropdown/TypeDropdown";
import CategoryDropdown from "../CategoryDropdown/CategoryDropdown";
import CustomersDropdown from "../CustomersDropdown/CustomersDropdown";
import { adminConst,managerConst } from "../../Const";
import SearchCustomers from "../SearchCustomers/SearchCustomers";


const CalcBlock = observer(() => {
    const navigate = useNavigate();
    const { materialList,user } = useContext(Context);
    const [showFind,setShowFind] = useState(false)
    const goBack = () => {
        navigate(-1);
    };
    return (
        <Paper elevation={3} style={{ textAlign: "center" }} className="mt-4">
            <Card className="text-center ">
                <Card.Header style={{ fontSize: 25, fontWeight: 500 }}>
                    <div >
                        <AiOutlineArrowLeft
                            style={{
                                display: "flex",
                                fontSize: 25,
                                cursor: "pointer",
                                position: "absolute",
                                top: 10,
                            }}
                            onClick={goBack}
                        />
                        <div> Калькулятор расчета печати</div>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Subtitle>
                        {
                            user.user.role === (adminConst || managerConst) ? 
                            <div>

                            <div className="mb-2">Выберите заказчика:</div>
                            <CustomersDropdown />
                            <Button variant="warning" onClick={()=>setShowFind(true)}>Выбрать заказчика</Button>

                            <Modal show={showFind} onHide={()=>setShowFind(false)}>
                             <Modal.Header closeButton>
                               <Modal.Title>Выберите заказчика</Modal.Title>
                             </Modal.Header>
                             <Modal.Body>
                                <SearchCustomers/>
                                </Modal.Body>
                             <Modal.Footer>
                               <Button variant="secondary" onClick={()=>setShowFind(false)}>
                                 Close
                               </Button>
                               <Button variant="primary" onClick={()=>setShowFind(false)}>
                                 Save Changes
                               </Button>
                             </Modal.Footer>
                           </Modal>
                            </div>
                           
                            :
                            ""
                        }
                        
                        <div className="d-flex justify-content-center align-items-center gap-5 mt-2">
                            <div>
                                <div className="mb-2">Категория заказа:</div>
                                <CategoryDropdown />
                            </div>
                            <div>
                                <div className="mb-2">Категория материала:</div>
                                <TypeDropdown />
                            </div>
                            <div>
                                <div className="mb-2">Используемый материал: </div>
                                <MaterialDropdown />
                            </div>
                        </div>
                    </Card.Subtitle>
                    <Card.Title style={{ marginTop: 30 }}>Введите размеры:</Card.Title>
                    <CalcInputBlock />
                </Card.Body>
            </Card>
        </Paper>
    );
});

export default CalcBlock;

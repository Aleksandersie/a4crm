import React, { useContext, useEffect, useRef, useState } from "react";
import { Button, Card, Modal, Table,Form,Spinner } from "react-bootstrap";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import { createOrder } from "../axios/OrderApi";
import { orderClear } from "../../calcLogic/calc";

const SubmitOrder: React.FC = observer(() => {
    const { order } = useContext(Context);

    const [show, setShow] = useState(false);

    const [totalCost, setTotalCost] = useState("0");

    const [orderSpinner,setOrderSpinner] = useState(false)

   const orderMessage = React.useRef(null)


   const intPrint = []

    useEffect(()=>{
        for ( let el of order.order){
           if(el.orderCategory==="Интерьерная печать"){
              console.log("pass");
              
           } 
        }
    },[order.order])
    

    useEffect(() => {
        setTotalCost(
            order.order.reduce(function (sum, order) {
                return sum + order.totalCost;
            }, 0)
        );
    }, [order.order]);

    async function submitOrder() {
        await createOrder(order.order, orderMessage.current.value).finally(() => setShow(false));
        order.setOrder([]);
        orderClear();
    }

    return (
        <div>
            <Card className="mt-5 mb-5">
                <Card.Header style={{ textAlign: "center" }}>
                    <h4>Подтверждение заказа</h4>
                </Card.Header>
                <div className="mt-4 m-auto">
                    <Table
                        striped
                        bordered
                        hover
                        size="sm"
                        style={{ width: 500, textAlign: "center" }}
                    >
                        <tbody>
                            {order.order.map((order, index) => (
                                <tr key={order.random}>
                                    <td>{index + 1}</td>
                                    <td>{order.orderCategory}</td>
                                    <td>
                                        {order.width}x{order.height} м
                                    </td>
                                    <td>{order.count} шт</td>
                                    <td>{order.totalCost} р</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={3}></td>
                                <td style={{ fontWeight: 600 }}>Итого</td>
                                <td style={{ fontWeight: 600 }}>{totalCost} р</td>
                            </tr>
                        </tbody>
                    </Table>
                    <h6 >Ведите описание к заказу</h6>
                    <Form.Control
                    as='textarea' ref={orderMessage} rows={3}
                    />
                </div>

                <Button
                    variant="warning"
                    className="mt-3 mb-3 m-auto"
                    style={{ width: 200 }}
                    // onClick={submitOrder}
                    onClick={() => setShow(true)}
                >
                    Подтвердить и отправить в работу
                </Button>
                <Modal show={show} onHide={() => setShow(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Подтверждение заказа</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                        Подтвердить заказ и отправить в работу?
                       <Spinner animation="border" variant="primary" style={{marginTop:20, width:50,height:50}}/>       
                        </div>
                       
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShow(false)}>
                            Отмена
                        </Button>
                        <Button variant="warning" onClick={submitOrder}>
                            Подтвердить
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Card>
        </div>
    );
});

export default SubmitOrder;

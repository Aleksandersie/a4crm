import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Modal, Table } from "react-bootstrap";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import { createOrder } from "../axios/OrderApi";
import { orderClear } from "../../calcLogic/calc";

const SubmitOrder: React.FC = observer(() => {
    const { order } = useContext(Context);

    const [show, setShow] = useState(false);

    const [totalCost, setTotalCost] = useState("0");
    useEffect(() => {
        setTotalCost(
            order.order.reduce(function (sum, order) {
                return sum + order.totalCost;
            }, 0)
        );
    }, [order.order]);

    async function submitOrder() {
        await createOrder(order.order).finally(() => setShow(false));
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
                    <Modal.Body>Подтвердить заказ и отправить в работу?</Modal.Body>
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

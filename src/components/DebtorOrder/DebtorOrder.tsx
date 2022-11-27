import React, { useContext, useState } from "react";
import { Accordion, Button, Card, FloatingLabel, Form, Modal } from "react-bootstrap";
import OrderElementAccordion from "../OrderPanelString/OrderElementAccordion";
import { BiRuble } from "react-icons/bi";
import { IIncomingOrder } from "../axios/OrderApi";
import { getDebtors, makePayment } from "../axios/financeApi";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";

interface IDebtorOrder {
    debtorOrder: IIncomingOrder;
}

const DebtorOrder: React.FC<IDebtorOrder> = observer(({ debtorOrder }) => {
    const { financeStore } = useContext(Context);

    function payment(randomNumber: number): any {
        makePayment(randomNumber);
        getDebtors() //нужно дождаться выполнения промиса от оплаты
            .then((data) => financeStore.setDebtors(data))
            .finally(() => setShow(false));
    }

    const [show, setShow] = useState<boolean>(false);

    return (
        <Accordion className="m-auto mt-2 mb-2" style={{ width: 950 }}>
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <Card
                        className=" pb-2 pt-3 d-flex flex-row justify-content-evenly  ms-5 me-5 shadow-sm gap-4"
                        style={{
                            minWidth: 300,
                            backgroundColor: "whitesmoke",
                            width: "100% ",
                        }}
                    >
                        <div style={{ textAlign: "center" }}>
                            <h6>{"Номер"}</h6>
                            <p>{debtorOrder.id}</p>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <h6>{"Автор заказа"}</h6>
                            <p>{debtorOrder.author}</p>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <h6>{"Заказчик"}</h6>
                            <p>{debtorOrder.owner}</p>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <h6>{"Код заказа"}</h6>
                            <p>{debtorOrder.randomNumber}</p>
                        </div>

                        <div style={{ textAlign: "center" }}>
                            <h6>{"Время создания"}</h6>
                            <p>{debtorOrder.createdDate}</p>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <h6>{"К оплате"}</h6>
                            <p>
                                {debtorOrder.orderTotalCost}
                                <BiRuble />
                            </p>
                        </div>
                    </Card>
                </Accordion.Header>
                <Accordion.Body style={{ backgroundColor: "whitesmoke" }}>
                    {/*{debtorOrder.orderItems.map((el) => (*/}
                    {/*    <OrderElementAccordion key={el.random} orderAccordion={el} />*/}
                    {/*))}*/}
                    {/*{debtorOrder.orderItems.map((el) => (*/}
                    {/*    <div>{el.random}</div>*/}
                    {/*))}*/}
                    {/*Заказ приходит без строк заказа*/}
                    <Card
                        className={"mt-3 p-3 d-flex flex-row shadow"}
                        style={{ backgroundColor: "whitesmoke" }}
                    >
                        <div className={"m-auto"}>
                            <Button variant={"warning"} onClick={() => setShow(true)}>
                                Проставить оплату
                            </Button>
                        </div>
                    </Card>
                    <Modal show={show} onHide={() => setShow(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Оплата заказа</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Заказ оплачен?</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => setShow(false)}>
                                Отмена
                            </Button>
                            <Button
                                variant="warning"
                                onClick={() => payment(debtorOrder.randomNumber)}
                            >
                                Подтвердить
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
});

export default DebtorOrder;

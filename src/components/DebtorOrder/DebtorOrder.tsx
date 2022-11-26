import React from "react";
import { Accordion, Button, Card, FloatingLabel, Form } from "react-bootstrap";
import OrderElementAccordion from "../OrderPanelString/OrderElementAccordion";
import { BiRuble } from "react-icons/bi";
import { IIncomingOrder } from "../axios/OrderApi";

interface IDebtorOrder {
    debtorOrder: IIncomingOrder;
}

const DebtorOrder: React.FC<IDebtorOrder> = ({ debtorOrder }) => {
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
                    //Заказ приходит без строк заказа
                    <Card
                        className={"mt-3 p-3 d-flex flex-row shadow"}
                        style={{ backgroundColor: "whitesmoke" }}
                    >
                        <div style={{ width: 50 + "%" }}>
                            <FloatingLabel
                                controlId="floatingTextarea2"
                                label="Примечания к заказу"
                            >
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    value={debtorOrder.orderMessage}
                                    style={{ height: "100px" }}
                                />
                            </FloatingLabel>
                        </div>
                        <div style={{ width: 50 + "%" }}>
                            <div
                                className={"d-flex flex-column gap-2 m-auto mb-3"}
                                style={{ width: 250 }}
                            >
                                <Button variant={"warning"}>Принять в работу</Button>
                                <Button variant={"warning"}>Начать выполнение</Button>
                                <Button variant={"warning"}>Заказ готов</Button>
                            </div>

                            <div>
                                <h5>
                                    {"  "}
                                    Сумма заказа:123
                                    <BiRuble />
                                </h5>
                            </div>
                        </div>
                    </Card>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default DebtorOrder;

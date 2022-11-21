import React, { useState } from "react";
import { Accordion, Card, Table } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { BiRuble } from "react-icons/bi";
import OrderElementAccordion from "./OrderElementAccordion";
import { IIncomingOrder } from "../axios/OrderApi";
import { observer } from "mobx-react-lite";
interface IOrderString {
    id: number;
    key: number;
    orderString: IIncomingOrder;
}

const OrderPanelString: React.FC<IOrderString> = observer(({ orderString }) => {
    let orderCost = orderString.orderItems.reduce(function (sum, orderItem) {
        return sum + orderItem.totalCost;
    }, 0);

    return (
        <Accordion className="m-auto mt-2 mb-2" style={{ width: 1000 }}>
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
                            <p>{orderString.id}</p>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <h6>{"Автор заказа"}</h6>
                            <p>{orderString.author}</p>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <h6>{"Заказчик"}</h6>
                            <p>{orderString.owner}</p>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <h6>{"Статус"}</h6>
                            <p>{orderString.orderStatus}</p>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <h6>{"Код заказа"}</h6>
                            <p>{orderString.randomNumber}</p>
                        </div>

                        <div style={{ textAlign: "center" }}>
                            <h6>{"Время создания"}</h6>
                            <p>{orderString.createdDate}</p>
                        </div>
                        {/*<div style={{ textAlign: "center" }}>*/}
                        {/*    <h6>{"Удалить"}</h6>*/}
                        {/*    <AiFillDelete*/}
                        {/*        style={{ fontSize: 22 }}*/}
                        {/*        onClick={() => removeItem(orderItem.random)}*/}
                        {/*    />*/}
                        {/*</div>*/}
                    </Card>
                </Accordion.Header>
                <Accordion.Body>
                    {orderString.orderItems.map((el) => (
                        <OrderElementAccordion key={el.random} orderAccordion={el} />
                    ))}
                    {orderCost}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
});

export default OrderPanelString;

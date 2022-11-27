import React, { FC, useContext, useEffect } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { getAllOrders, IIncomingOrder } from "../components/axios/OrderApi";
import { Context } from "../index";
import { log } from "util";
import OrderPanelString from "../components/OrderPanelString/OrderPanelString";
import OrderPagination from "../orderPagination/OrderPagination";

const OrderPage = observer(() => {
    const { order } = useContext(Context);
    async function get() {
        const get = await getAllOrders(order.orderPage, order.orderLimit).then((data) =>
            order.setOrderInProgress(data)
        );
    }

    useEffect(() => {
        getAllOrders(order.orderPage, order.orderLimit).then((data): IIncomingOrder[] =>
            order.setOrderInProgress(data)
        );
        console.log({ order });
    }, []);

    return (
        <div className={"mt-5 mb-5"}>
            <Container>
                <Card style={{ textAlign: "center" }}>
                    <Card.Header>
                        <h4>Список заказов</h4>
                    </Card.Header>
                    <Button
                        onClick={get}
                        variant={"warning"}
                        style={{ width: 200 }}
                        className={"m-auto mt-2"}
                    >
                        Обновить вручную
                    </Button>

                    {order.orderInProgress.findAll.rows.map((el) => (
                        <OrderPanelString key={el.randomNumber} orderString={el} id={el.id} />
                    ))}
                    <OrderPagination />
                </Card>
            </Container>
        </div>
    );
});

export default OrderPage;

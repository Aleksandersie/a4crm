import React, { FC, useContext, useEffect } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { getAllOrders, IIncomingOrder } from "../components/axios/OrderApi";
import { Context } from "../index";
import { log } from "util";
import OrderPanelString from "../components/OrderPanelString/OrderPanelString";

const OrderPage = observer(() => {
    async function get() {
        const get = await getAllOrders().then((data) => order.setOrderInProgress(data));

        // order.setOrderInProgress(get);

        // console.log({ order });
    }

    useEffect(() => {
        getAllOrders().then((data): IIncomingOrder[] => order.setOrderInProgress(data));
        console.log({ order });
    }, []);

    const { order } = useContext(Context);

    return (
        <div className={"mt-5"}>
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

                    {order.orderInProgress.map((el) => (
                        <OrderPanelString key={el.randomNumber} orderString={el} />
                    ))}
                </Card>
            </Container>
        </div>
    );
});

export default OrderPage;

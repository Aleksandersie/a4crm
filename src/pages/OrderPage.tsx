import React, { FC, useContext } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { getAllOrders } from "../components/axios/OrderApi";
import { Context } from "../index";
import { log } from "util";
import OrderPanelString from "../components/OrderPanelString/OrderPanelString";

const OrderPage = observer(() => {
    async function get() {
        const get = await getAllOrders().then(({ data }) => order.setOrderInProgress({ data }));

        // order.setOrderInProgress(get);

        // console.log({ order });
    }

    const { order } = useContext(Context);

    return (
        <div className={"mt-5"}>
            <Container>
                <Card style={{ textAlign: "center" }}>
                    <Card.Header>
                        <h4>Список заказов</h4>
                    </Card.Header>
                    <Button onClick={get}>get</Button>
                    {order.orderInProgress.data.map((el) => (
                        <OrderPanelString key={el.randomNumber} orderString={el} />
                    ))}
                    {/*{order.orderInProgress.data.map((el) => (*/}
                    {/*    <div>*/}
                    {/*        {el.randomNumber}*/}
                    {/*        {el.orderItems.map((el) => (*/}
                    {/*            <div>{el.orderCategory}</div>*/}
                    {/*        ))}*/}
                    {/*    </div>*/}
                    {/*))}*/}
                </Card>
            </Container>
        </div>
    );
});

export default OrderPage;

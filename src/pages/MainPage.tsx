import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CalcBlock from "../components/CalcBlock/CaclBlock";
import OrderListBlock from "../components/OrderListBlock/OrderListBlock";
import TopStepper from "../components/TopStepper/TopStepper";
import SideBar from "../components/SideBar/SideBar";
import TopBreadCrumbs from "../components/TopBreadCrumbs/TopBreadCrumbs";
import CategoryBlock from "../components/CategoryCard/CategoryBlock";

import OrderTotal from "../components/OrderTotal/OrderTotal";
import { getRetailPrice } from "../components/axios/PriceApi";
import { Context } from "../index";
import { getAllOrders } from "../components/axios/OrderApi";
import { getAllCustomers } from "../components/axios/UserApi";
import { getDebtors } from "../components/axios/financeApi";

const MainPage = () => {
    const { price, order, user, financeStore } = useContext(Context);
    console.log(financeStore);
    useEffect(() => {
        getRetailPrice().then((data) => price.setRetailPrice(data));
    }, []);
    useEffect(() => {
        getAllOrders(order.orderPage, order.orderLimit).then((data) =>
            order.setOrderInProgress(data)
        );
    }, []);
    useEffect(() => {
        getAllCustomers(1, 5).then((data) => user.setCustomers(data));
    }, []);
    useEffect(() => {
        getDebtors().then((data) => financeStore.setDebtors(data));
    }, []);

    return (
        <Container>
            <Row>
                <Col className="col-3 mt-4">
                    <SideBar />
                </Col>
                <Col className="col-9 mt-4">
                    <TopStepper />
                    <TopBreadCrumbs />
                    <CategoryBlock />
                </Col>
            </Row>

            {/*<CalcBlock />*/}
            {/*<OrderListBlock />*/}
        </Container>
    );
};

export default MainPage;

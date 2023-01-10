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
import TemporaryPage from "../components/TemporaryPage/TemporaryPage";
import MainPageCategorySelector from "../components/MainPageCategorySelector/MainPageCategorySelector";

const MainPage = () => {
     const { price, order, user, financeStore } = useContext(Context);
     console.log(financeStore);
     useEffect(() => {
          getRetailPrice().then((data) => price.setCurrentPriceList(data));
     }, []);
     {user.user.isAuth? console.log("y"): console.log("n")}
     useEffect(() => {
          getAllOrders(order.orderPage, order.orderLimit).then((data) =>
               order.setOrderInProgress(data)
          );
     }, []);
     // useEffect(() => {
     //      getAllCustomers(order.orderPage, order.orderLimit).then((data) =>
     //           user.setCustomers(data)
     //      );
     // }, []);
     useEffect(() => {
          getAllCustomers(order.orderPage, order.orderLimit).then((data) => user.setUserList(data));
     }, []);
     useEffect(() => {
          getDebtors().then((data) => financeStore.setDebtors(data));
     }, []);

     return (
          <Container>
               <TemporaryPage />
               <MainPageCategorySelector/>
               {/*<CategoryBlock />*/}
               {/*<Row>*/}
               {/*    <Col className="col-3 mt-4">*/}
               {/*        <SideBar />*/}
               {/*    </Col>*/}
               {/*    <Col className="col-9 mt-4">*/}
               {/*        <TopStepper />*/}
               {/*        <TopBreadCrumbs />*/}
               {/*        <CategoryBlock />*/}
               {/*    </Col>*/}
               {/*</Row>*/}

               {/*<CalcBlock />*/}
               {/*<OrderListBlock />*/}
          </Container>
     );
};

export default MainPage;

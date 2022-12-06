import React, { useContext, useEffect } from "react";
import { Pagination } from "react-bootstrap";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import { getAllOrders, IIncomingOrder } from "../components/axios/OrderApi";
import { getAllCustomers } from "../components/axios/UserApi";

const OrderPagination = observer(() => {
    const { order, user } = useContext(Context);

    const pagesCount = Math.ceil(order.orderInProgress.countPages.count / order.orderLimit);
    const pages: number[] = [];
    for (let i = 0; i < pagesCount; i++) {
        pages.push(i + 1);
    }

    function changePage(p) {
        order.setOrderPage(p);
    }

    useEffect(() => {
        getAllOrders(order.orderPage, order.orderLimit).then((data) =>
            order.setOrderInProgress(data)
        );
    }, [order.orderPage]);

    return (
        <Pagination className={"mt-2 pb-3 m-auto"}>
            {pages.map((p) => (
                <Pagination.Item
                    key={p}
                    active={order.orderPage === p}
                    onClick={() => changePage(p)}
                >
                    {p}
                </Pagination.Item>
            ))}
        </Pagination>
    );
});

export default OrderPagination;

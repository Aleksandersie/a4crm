import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Pagination } from "react-bootstrap";
import { Context } from "../../index";
import { getAllOrders, IIncomingOrder } from "../axios/OrderApi";
import { getAllCustomers } from "../axios/UserApi";

const UserPagination: React.FC = observer(() => {
    const { order, user } = useContext(Context);

    const pagesCount = Math.ceil(user.userList.count / order.orderLimit);
    const pages: number[] = [];
    for (let i = 0; i < pagesCount; i++) {
        pages.push(i + 1);
    }

    console.log(user.userList.rows);
    function changePage(p) {
        order.setOrderPage(p);
    }
    useEffect(() => {
        getAllCustomers(order.orderPage, order.orderLimit).then((data) => user.setUserList(data));
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

export default UserPagination;

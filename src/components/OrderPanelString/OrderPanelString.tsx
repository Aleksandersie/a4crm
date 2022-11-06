import React from "react";
import { Card } from "react-bootstrap";
interface IOrderString {
    key: number;
    orderString: any;
}

const OrderPanelString: React.FC<IOrderString> = ({ orderString }) => {
    return (
        <div>
            {orderString.orderItems.map((el) => (
                <div key={el.createdAt}>{el.price}</div>
            ))}
        </div>
    );
};

export default OrderPanelString;

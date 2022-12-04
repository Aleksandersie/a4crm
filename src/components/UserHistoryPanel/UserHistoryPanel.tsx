import React from "react";
import { Card } from "react-bootstrap";

const UserHistoryPanel = () => {
    return (
        <Card className={"mt-5"} style={{ textAlign: "center" }}>
            <Card.Header>
                <h4>История заказов</h4>
            </Card.Header>
            <h4>В разработке</h4>
        </Card>
    );
};

export default UserHistoryPanel;

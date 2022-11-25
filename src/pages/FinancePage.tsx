import React from "react";
import { Card, Container } from "react-bootstrap";
import DebtorString from "../components/DebtorString/DebtorString";

const FinancePage: React.FC = () => {
    return (
        <Container>
            <Card className={"mt-5"} style={{ textAlign: "center" }}>
                <Card.Header>
                    <h5>Задолжености по заказам</h5>
                </Card.Header>
                <Card.Body>
                    <DebtorString />
                </Card.Body>
            </Card>
        </Container>
    );
};

export default FinancePage;

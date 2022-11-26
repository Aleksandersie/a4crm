import React, { useContext } from "react";
import { Card, Container } from "react-bootstrap";
import DebtorString from "../components/DebtorString/DebtorString";
import { Context } from "../index";

const FinancePage: React.FC = () => {
    const { financeStore } = useContext(Context);
    return (
        <Container>
            <Card className={"mt-5"} style={{ textAlign: "center" }}>
                <Card.Header>
                    <h5>Задолжености по заказам</h5>
                </Card.Header>
                <Card.Body>
                    {financeStore.debtors.map((debtor) => (
                        <DebtorString key={debtor.id} debtor={debtor} />
                    ))}
                </Card.Body>
            </Card>
        </Container>
    );
};

export default FinancePage;

import React, { useContext, useEffect } from "react";
import { Button, Card, Container } from "react-bootstrap";
import DebtorString from "../components/DebtorString/DebtorString";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import { getDebtors } from "../components/axios/financeApi";

const FinancePage: React.FC = () => {
    const { financeStore } = useContext(Context);
    useEffect(() => {
        getDebtors().then((data) => financeStore.setDebtors(data));
    }, []);
    function get() {
        getDebtors().then((data) => financeStore.setDebtors(data));
    }

    return (
        <Container>
            <Card className={"mt-5"} style={{ textAlign: "center" }}>
                <Card.Header>
                    <h5>Задолжености по заказам</h5>
                </Card.Header>
                <Button
                    onClick={get}
                    variant={"warning"}
                    style={{ width: 200 }}
                    className={"m-auto mt-2"}
                >
                    Обновить вручную
                </Button>
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

import React from "react";
import { Accordion, Button, Card, FloatingLabel, Form } from "react-bootstrap";
import OrderElementAccordion from "../OrderPanelString/OrderElementAccordion";
import { BiRuble } from "react-icons/bi";
import { observer } from "mobx-react-lite";
import { IDebtors } from "../../Store/FinanceStore";
import OrderPanelString from "../OrderPanelString/OrderPanelString";
import DebtorOrder from "../DebtorOrder/DebtorOrder";

interface IDebtorString {
    debtor: IDebtors;
}

const DebtorString: React.FC<IDebtorString> = observer(({ debtor }) => {
    const totalDebt = debtor.orders.reduce(function (sum, debtor) {
        return sum + debtor.orderTotalCost;
    }, 0);
    return (
        <Accordion className="m-auto mt-2 mb-2" style={{ width: 1150 }}>
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <Card
                        className=" pb-2 pt-3 d-flex flex-row justify-content-evenly  ms-5 me-5 shadow-sm gap-4"
                        style={{
                            minWidth: 300,
                            backgroundColor: "whitesmoke",
                            width: "100% ",
                        }}
                    >
                        <div style={{ textAlign: "center" }}>
                            <h6>{"Название"}</h6>
                            <p>{debtor.alias}</p>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <h6>{"Сумма задолжености"}</h6>
                            <p>
                                {totalDebt}
                                <BiRuble />
                            </p>
                        </div>
                        {/*<div style={{ textAlign: "center" }}>*/}
                        {/*    <h6>{"Заказчик"}</h6>*/}
                        {/*    <p>{orderString.owner}</p>*/}
                        {/*</div>*/}
                        {/*<div style={{ textAlign: "center" }}>*/}
                        {/*    <h6>{"Статус"}</h6>*/}
                        {/*    <p>{orderString.orderStatus}</p>*/}
                        {/*</div>*/}
                        {/*<div style={{ textAlign: "center" }}>*/}
                        {/*    <h6>{"Оплата"}</h6>*/}
                        {/*    <p>{orderString.orderPaid ? "Оплачен" : "Не оплачен"}</p>*/}
                        {/*</div>*/}
                        {/*<div style={{ textAlign: "center" }}>*/}
                        {/*    <h6>{"Код заказа"}</h6>*/}
                        {/*    <p>{orderString.randomNumber}</p>*/}
                        {/*</div>*/}

                        {/*<div style={{ textAlign: "center" }}>*/}
                        {/*    <h6>{"Время создания"}</h6>*/}
                        {/*    <p>{orderString.createdDate}</p>*/}
                        {/*</div>*/}
                        {/*<div style={{ textAlign: "center" }}>*/}
                        {/*    <h6>{"Удалить"}</h6>*/}
                        {/*    <AiFillDelete*/}
                        {/*        style={{ fontSize: 22 }}*/}
                        {/*        onClick={() => removeItem(orderItem.random)}*/}
                        {/*    />*/}
                        {/*</div>*/}
                    </Card>
                </Accordion.Header>
                <Accordion.Body style={{ backgroundColor: "whitesmoke" }}>
                    {debtor.orders.map((el) => (
                        <DebtorOrder key={el.randomNumber} debtorOrder={el} />
                    ))}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
});

export default DebtorString;

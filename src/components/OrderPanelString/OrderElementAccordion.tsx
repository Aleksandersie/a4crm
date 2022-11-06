import React from "react";
import { Accordion, Card, Table } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { BiRuble } from "react-icons/bi";

interface IOrderAccordion {
    key: any;
    orderAccordion: IAccordionElement;
}

interface IAccordionElement {
    id: number;
    width: string;
    height: string;
    description: string;
    count: number;
    material: string;
    lamination: boolean;
    borderCut: boolean;
    orderCategory: string;
    price: number;
    random: number;
    totalArea: number;
    onePcsArea: number;
    onePcsCost: number;
    totalCost: number;
    createdAt: Date;
    updatedAt: Date;
    orderId: number;
}

const OrderElementAccordion: React.FC<IOrderAccordion> = ({ orderAccordion }) => {
    return (
        <Accordion className="">
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <Card
                        className=" pb-2 pt-3 d-flex flex-row justify-content-center ms-5 me-5 shadow-sm gap-4"
                        style={{
                            minWidth: 300,
                            backgroundColor: "whitesmoke",
                            width: "100% ",
                        }}
                    >
                        <div style={{ textAlign: "center" }}>
                            <h6>{"Категория заказа"}</h6>
                            <p>{orderAccordion.orderCategory}</p>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <h6>{"Материал"}</h6>
                            <p>{orderAccordion.material}</p>
                        </div>
                        <div className="" style={{ textAlign: "center" }}>
                            <h6>{"Размеры"}</h6>
                            <p>
                                {orderAccordion.width}x{orderAccordion.height}
                            </p>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <h6>{"Количество"}</h6>
                            <p>{orderAccordion.count}</p>
                        </div>
                        {/*<div style={{ textAlign: "center" }}>*/}
                        {/*    <h6>{"Удалить"}</h6>*/}
                        {/*    <AiFillDelete*/}
                        {/*        style={{ fontSize: 22 }}*/}
                        {/*        onClick={() => removeItem(orderItem.random)}*/}
                        {/*    />*/}
                        {/*</div>*/}
                    </Card>
                </Accordion.Header>
                <Accordion.Body>
                    <Table striped bordered hover size="sm" className="mt-4">
                        <thead>
                            <tr>
                                <th colSpan={4}>
                                    Размеры изделия: {orderAccordion.width}x{orderAccordion.height}{" "}
                                    м. Количество: {orderAccordion.count} шт. <br /> Материал:{" "}
                                    {orderAccordion.material}
                                </th>
                            </tr>
                            <tr>
                                <th>Общая площадь:</th>
                                <th>Площадь одной штуки:</th>
                                <th>Стоимость одной штуки:</th>
                                <th>Общая стоимость:</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{orderAccordion.totalArea}</td>
                                <td>{orderAccordion.onePcsArea}</td>
                                <td>
                                    {orderAccordion.onePcsCost} <BiRuble />
                                </td>
                                <td>
                                    {orderAccordion.totalCost} <BiRuble />
                                </td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <th colSpan={2}>Описание заказа</th>

                                <th>Ламинация:</th>
                                <th>Подрезка:</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={2}></td>

                                <td>{orderAccordion.lamination ? "Да" : "Нет"} </td>
                                <td>{orderAccordion.borderCut ? "Да" : "Нет"} </td>
                            </tr>
                        </tbody>
                    </Table>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default OrderElementAccordion;

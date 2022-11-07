import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Form, FormControl, Row, Table } from "react-bootstrap";
import startCalc from "../../calcLogic/calc";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import { TextField } from "@mui/material";
import { BiRuble } from "react-icons/bi";
import MaterialSurfaceCheck from "../MaterialSurfaceCheck/MaterialSurfaceCheck";
import LaminationCheck from "../LaminationCheck/LaminationCheck";
import BorderCutCheck from "../BorderCutCheck/BorderCutCheck";
import { orderList } from "../../calcLogic/calc";
import {
    firstDiscountStep,
    firstDiscountValue,
    minOrderValue,
    secondDiscountStep,
    secondDiscountValue,
    thirdDiscountStep,
} from "../../Const";
import { createOrder } from "../axios/OrderApi";
const CalcInputBlock = observer(() => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [description, setDescription] = useState("Наклейки");
    const [count, setCount] = useState(1);
    const [preFlight, setPreFlight] = useState({
        area: 0,
        areaTotal: 0,
        priceOneCount: 0,
        priceTotal: 0,
        minOrder: 0,
        countPerMeter: 0,
    });
    const [warning, setWarrning] = useState("test");
    const [file, setFile] = useState(null)

    const { price } = useContext(Context);
    const { materialList } = useContext(Context);
    const { order } = useContext(Context);
    const { checkStore } = useContext(Context);


    function addFile(e){
        console.log(e.target.files)
    }

    interface IStartCalc {
        (
            width: number,
            height: number,
            description: string,
            count: number,
            currentMaterial: string,
            lamination: boolean,
            borderCut: boolean,
            materialCategory: string,
            currentPrice: number
        ): any[];
    }

    function start() {
        let result: any[] = startCalc(
            width,
            height,
            description,
            count,
            materialList.selectedMaterial.name,
            checkStore.lamination,
            checkStore.borderCut,
            materialList.selectedCategory.name,
            price.currentPrice
        );
        order.setOrder(result);
    }
    console.log(`w:${width} h:${height}`);

    useEffect(() => {
        let area: number = parseFloat((width * height).toFixed(4));
        let areaT: number = parseFloat((area * count).toFixed(4));
        let preFlightPrice: number = price.currentPrice; /////Подтягивает стоимость выбранного маетриала
        if (areaT > firstDiscountStep && areaT < secondDiscountStep) {
            /////Считаем процент скидки в зависимости от общей площади
            let currentDiscountValue = (preFlightPrice * firstDiscountValue) / 100;
            preFlightPrice = preFlightPrice - currentDiscountValue;
        }
        if (areaT >= secondDiscountStep && areaT < thirdDiscountStep) {
            let currentDiscountValue = (preFlightPrice * secondDiscountValue) / 100;
            preFlightPrice = preFlightPrice - currentDiscountValue;
        }
        if (areaT >= thirdDiscountStep && areaT < 1000) {
            // Заглушка пока не готовы все ступени скидки
            let currentDiscountValue = (preFlightPrice * secondDiscountValue) / 100;
            preFlightPrice = preFlightPrice - currentDiscountValue;
        }

        let oneCount: number = parseFloat((area * preFlightPrice).toFixed(2)); // Стоимость одной штуки
        if (oneCount < 1) {
            oneCount = 1;
            setWarrning("Внимание стоимость наклейки не может быть ниже 1 рубля");
        } else {
            setWarrning("");
        }
        let totalCount: number = parseFloat((oneCount * count).toFixed(2)); // Общая стоимость
        let minOrder: number = Math.ceil(minOrderValue / oneCount); // Колличество штук на сумму минимального заказа
        if (minOrder === Infinity) {
            minOrder = null;
        }
        let countPerMeter: number = Math.ceil(1 / area);
        if (countPerMeter === Infinity) {
            countPerMeter = null;
        }
        setPreFlight({
            area: area,
            areaTotal: areaT,
            priceOneCount: oneCount,
            priceTotal: totalCount,
            minOrder: minOrder,
            countPerMeter: countPerMeter,
        });
    }, [width, height, count, price.currentPrice]);

    useEffect(() => {
        // Подтягивание стоимость в зависимости от выбраной категории
        if (materialList.selectedCategory.name === "Интерьерная печать") {
            price.setCurrentPrice(price.retailPrice.vinyl);
            console.log(`intPrint ${price.retailPrice.vinyl}`);
        }
        if (materialList.selectedCategory.name === "Печать и резка") {
            price.setCurrentPrice(price.retailPrice.vinylPC);
            console.log(`printCut ${price.retailPrice.vinylPC}`);
        }
    }, [materialList.selectedCategory, width, height, count]);

    return (
        <div className=" ">
            <Form className="mt-4 m-auto">
                <Row className="m-auto justify-content-center align-items-end">
                    <Col md={2}>
                        <h6 className="m-auto" style={{ textAlign: "center" }}>
                            {"Длина"}
                        </h6>
                        {/*<Form.Control*/}
                        {/*  className="mt-2"*/}
                        {/*  placeholder="Введите длину"*/}
                        {/*  type="number"*/}
                        {/*  value={width}*/}
                        {/*  onChange={(e) => setWidth(e.target.value)}*/}
                        {/*/>*/}
                        <TextField
                            className="mt-3"
                            id="standard-basic"
                            label="Введите длину"
                            type="number"
                            variant="standard"
                            value={width}
                            //@ts-ignore
                            onChange={(e) => setWidth(e.target.value)}
                        />
                    </Col>
                    <Col md={2}>
                        <h6 className="m-auto" style={{ textAlign: "center" }}>
                            {"Ширина"}
                        </h6>
                        {/*<Form.Control*/}
                        {/*  className="mt-2"*/}
                        {/*  placeholder="Введите ширину"*/}
                        {/*  type="number"*/}
                        {/*  value={height}*/}
                        {/*  onChange={(e) => setHeight(e.target.value)}*/}
                        {/*/>*/}
                        <TextField
                            className="mt-3"
                            id="standard-basic"
                            label="Введите ширину"
                            type="number"
                            variant="standard"
                            value={height}
                            //@ts-ignore
                            onChange={(e) => setHeight(e.target.value)}
                        />
                    </Col>
                    <Col md={2}>
                        <h6 className="m-auto" style={{ textAlign: "center" }}>
                            {"Количество"}
                        </h6>
                        {/*<Form.Control*/}
                        {/*  className="mt-2"*/}
                        {/*  placeholder="Введите количество"*/}
                        {/*  type="number"*/}
                        {/*  value={count}*/}
                        {/*  onChange={(event) => setCount(Number(event.target.value))}*/}
                        {/*/>*/}
                        <TextField
                            className="mt-3"
                            id="standard-basic"
                            label="Введите количество"
                            type="number"
                            variant="standard"
                            value={count}
                            onChange={(event) => setCount(Number(event.target.value))}
                        />
                    </Col>
                    {/*<Col md={2}>*/}
                    {/*  <Button variant="warning" onClick={start}>*/}
                    {/*    Добавить в заказ*/}
                    {/*  </Button>*/}
                    {/*</Col>*/}
                </Row>
            </Form>

            <div className="d-flex justify-content-evenly">
                {/* <LaminationCheck />
        <BorderCutCheck /> */}
            </div>
            <div style={{ textAlign: "center" }} className="mt-4 ms-3 me-3">
                <h5>Результаты расчета</h5>

                <Table striped bordered hover size="sm" className="mt-4">
                    <thead>
                        <tr>
                            <th colSpan={4}>
                                Размеры изделия: {width}x{height} м. Количество: {count} шт. <br />{" "}
                                Материал: {materialList.selectedMaterial.name}
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
                            <td>{preFlight.areaTotal}</td>
                            <td>{preFlight.area}</td>
                            <td>
                                {preFlight.priceOneCount} <BiRuble />
                            </td>
                            <td>
                                {preFlight.priceTotal} <BiRuble />
                            </td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th>Минимальный заказ:</th>
                            <th>Штук на м2:</th>
                            <th>Ламинация:</th>
                            <th>Подрезка:</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{preFlight.minOrder}</td>
                            <td>{preFlight.countPerMeter}</td>
                            <td>{checkStore.lamination ? "Да" : "Нет"} </td>
                            <td>{checkStore.borderCut ? "Да" : "Нет"} </td>
                        </tr>
                    </tbody>
                </Table>
                <div>{warning}</div>
                {/*</div>*/}
            </div>

            <Row className="d-flex justify-content-center mt-4 gap-5">
                <Col md={3}>
                    <h6 className="m-auto" style={{ textAlign: "center" }}>
                        {"Описание заказа"}
                    </h6>
                    <Form.Control
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        className="mt-2"
                        placeholder="Введите описание"
                    />
                </Col>
                <Col md={3}>
                    <h6 className="m-auto" style={{ textAlign: "center" }}>
                        {"Прикрепите файл"}
                    </h6>
                    <Form.Control className="mt-2" placeholder="" type="file" onChange={addFile}/>
                </Col>
            </Row>
            <div className="mt-4 gap-3 d-flex justify-content-center mb-3">
                <Button variant="success" style={{ width: 150, height: 62 }}>
                    Сброс значний
                </Button>
                <Button variant="warning" onClick={start} style={{ width: 150 }}>
                    Добавить в заказ
                </Button>
            </div>
        </div>
    );
});

export default CalcInputBlock;

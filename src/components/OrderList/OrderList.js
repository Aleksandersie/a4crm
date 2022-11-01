import {
  Card,
  Col,
  Container,
  Form,
  Row,
  Accordion,
  Table,
} from "react-bootstrap";
import React, { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { Context } from "../../index";
import { orderClear, orderList } from "../../calcLogic/calc";
import { BiRuble } from "react-icons/bi";

const OrderList = ({ orderItem }) => {
  const { order } = useContext(Context);

  const removeItem = (number) => {
    orderClear();
    order.setOrder(order.order.filter((or) => or.random !== number));
    //let test = orderList.filter((el) => el.random !== number);
    console.log({ order });
    // console.log({ orderList });
    // console.log(test);
  };
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
              <p>{orderItem.orderCategory}</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <h6>{"Материал"}</h6>
              <p>{orderItem.material}</p>
            </div>
            <div className="" style={{ textAlign: "center" }}>
              <h6>{"Размеры"}</h6>
              <p>
                {orderItem.width}x{orderItem.height}
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <h6>{"Количество"}</h6>
              <p>{orderItem.count}</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <h6>{"Удалить"}</h6>
              <AiFillDelete
                style={{ fontSize: 22 }}
                onClick={() => removeItem(orderItem.random)}
              />
            </div>
          </Card>
        </Accordion.Header>
        <Accordion.Body>
          <Table striped bordered hover size="sm" className="mt-4">
            <thead>
              <tr>
                <th colSpan={4}>
                  Размеры изделия: {orderItem.width}x{orderItem.height} м.
                  Количество: {orderItem.count} шт. <br /> Материал:{" "}
                  {orderItem.material}
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
                <td>{orderItem.totalArea}</td>
                <td>{orderItem.onePcsArea}</td>
                <td>
                  {orderItem.onePcsCost} <BiRuble />
                </td>
                <td>
                  {orderItem.totalCost} <BiRuble />
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

                <td>{orderItem.lamination ? "Да" : "Нет"} </td>
                <td>{orderItem.borderCut ? "Да" : "Нет"} </td>
              </tr>
            </tbody>
          </Table>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default OrderList;

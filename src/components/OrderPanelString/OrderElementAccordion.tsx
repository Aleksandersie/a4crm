import React, { useState, useContext, useRef } from "react";
import { Accordion, Button, Card, Modal, Table, Form } from "react-bootstrap";
import { AiFillDelete, AiOutlineSetting } from "react-icons/ai";
import { BiRuble } from "react-icons/bi";
import { IOrderItem } from "../../calcLogic/calc";
import { NavLink } from "react-router-dom";
import { MAIN_ROUTE } from "../../routeConst/routeConst";
import axios from "axios";
import { changeOrderCost, downloadFile } from "../axios/OrderApi";
import userEvent from "@testing-library/user-event";
import { Context } from "../..";
import { adminConst } from "../../Const";

interface IOrderAccordion {
     key: any;
     orderAccordion: IOrderItem;
}

// async function download(path) {
//     const fileName = path.split("\\");
//     console.log(fileName);
//
//     const res = await axios
//         .get("http://localhost:3002/api/order/download", { responseType: "blob", params: { path } })
//         .then((response) => {
//             const href = URL.createObjectURL(response.data);
//             const link = document.createElement("a");
//             link.href = href;
//             link.setAttribute("download", fileName[fileName.length - 1]);
//             document.body.appendChild(link);
//             link.click();
//             document.body.removeChild(link);
//             URL.revokeObjectURL(href);
//         });
// }
function download(path) {
     downloadFile(path);
}

const OrderElementAccordion: React.FC<IOrderAccordion> = ({ orderAccordion }) => {
     const { user } = useContext(Context);
     const [showEdit, setShowEdit] = useState<boolean>(false);
     const newPrice = React.useRef<HTMLInputElement>();
     function showPriceModal(random: number, e: React.MouseEvent) {
          e.stopPropagation();
          setShowEdit(true);
     }
     async function editThisPrice(random, e) {
          e.stopPropagation();
          console.log(newPrice.current.value);
          await changeOrderCost(+newPrice.current.value, random);
          setShowEdit(false);
     }

     return (
          <Accordion className="mt-2 shadow">
               <Accordion.Item eventKey="0">
                    <Accordion.Header>
                         <Card
                              className="  pb-1 pt-2 d-flex flex-row justify-content-center ms-5 me-5 shadow-sm gap-4"
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
                              {user.user.role === adminConst ? (
                                   <div style={{ textAlign: "center" }}>
                                        <h6>{"Редактировать стоимость"}</h6>
                                        <p>
                                             {
                                                  <AiOutlineSetting
                                                       onClick={(e: React.MouseEvent) =>
                                                            showPriceModal(orderAccordion.random, e)
                                                       }
                                                  />
                                             }
                                        </p>
                                   </div>
                              ) : (
                                   ""
                              )}
                              <Modal show={showEdit} onHide={() => setShowEdit(false)}>
                                   <Modal.Header closeButton>
                                        <Modal.Title>Изменение стоимости</Modal.Title>
                                   </Modal.Header>
                                   <Modal.Body>
                                        <div>
                                             <p>Новая стоимость</p>
                                             <Form.Control
                                                  type={"number"}
                                                  ref={newPrice}
                                                  placeholder={String(orderAccordion.totalCost)}
                                             />
                                        </div>
                                   </Modal.Body>
                                   <Modal.Footer>
                                        <Button
                                             variant="secondary"
                                             onClick={() => setShowEdit(false)}
                                        >
                                            Закрыть
                                        </Button>
                                        <Button
                                             variant="primary"
                                             onClick={(e: React.MouseEvent) =>
                                                  editThisPrice(orderAccordion.random, e)
                                             }
                                        >
                                             Применить
                                        </Button>
                                   </Modal.Footer>
                              </Modal>

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
                         <Table striped bordered hover size="sm" className="mt-2">
                              <thead>
                                   <tr>
                                        <th colSpan={4}>
                                             Размеры изделия: {orderAccordion.width}x
                                             {orderAccordion.height} м. Количество:{" "}
                                             {orderAccordion.count} шт. <br /> Материал:{" "}
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
                                        <td colSpan={2}>{orderAccordion.description}</td>

                                        <td>{orderAccordion.lamination ? "Да" : "Нет"} </td>
                                        <td>{orderAccordion.borderCut ? "Да" : "Нет"} </td>
                                   </tr>
                              </tbody>
                         </Table>

                         <Button
                              variant={"warning"}
                              onClick={() => download(orderAccordion.filePath)}
                         >
                              Скачать файл
                         </Button>
                    </Accordion.Body>
               </Accordion.Item>
          </Accordion>
     );
};

export default OrderElementAccordion;

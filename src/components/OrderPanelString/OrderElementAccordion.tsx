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
                                   <h6>{"?????????????????? ????????????"}</h6>
                                   <p>{orderAccordion.orderCategory}</p>
                              </div>
                              <div style={{ textAlign: "center" }}>
                                   <h6>{"????????????????"}</h6>
                                   <p>{orderAccordion.material}</p>
                              </div>
                              <div className="" style={{ textAlign: "center" }}>
                                   <h6>{"??????????????"}</h6>
                                   <p>
                                        {orderAccordion.width}x{orderAccordion.height}
                                   </p>
                              </div>
                              <div style={{ textAlign: "center" }}>
                                   <h6>{"????????????????????"}</h6>
                                   <p>{orderAccordion.count}</p>
                              </div>
                              {user.user.role === adminConst ? (
                                   <div style={{ textAlign: "center" }}>
                                        <h6>{"?????????????????????????? ??????????????????"}</h6>
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
                                        <Modal.Title>?????????????????? ??????????????????</Modal.Title>
                                   </Modal.Header>
                                   <Modal.Body>
                                        <div>
                                             <p>?????????? ??????????????????</p>
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
                                            ??????????????
                                        </Button>
                                        <Button
                                             variant="primary"
                                             onClick={(e: React.MouseEvent) =>
                                                  editThisPrice(orderAccordion.random, e)
                                             }
                                        >
                                             ??????????????????
                                        </Button>
                                   </Modal.Footer>
                              </Modal>

                              {/*<div style={{ textAlign: "center" }}>*/}
                              {/*    <h6>{"??????????????"}</h6>*/}
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
                                             ?????????????? ??????????????: {orderAccordion.width}x
                                             {orderAccordion.height} ??. ????????????????????:{" "}
                                             {orderAccordion.count} ????. <br /> ????????????????:{" "}
                                             {orderAccordion.material}
                                        </th>
                                   </tr>
                                   <tr>
                                        <th>?????????? ??????????????:</th>
                                        <th>?????????????? ?????????? ??????????:</th>
                                        <th>?????????????????? ?????????? ??????????:</th>
                                        <th>?????????? ??????????????????:</th>
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
                                        <th colSpan={2}>???????????????? ????????????</th>

                                        <th>??????????????????:</th>
                                        <th>????????????????:</th>
                                   </tr>
                              </thead>
                              <tbody>
                                   <tr>
                                        <td colSpan={2}>{orderAccordion.description}</td>

                                        <td>{orderAccordion.lamination ? "????" : "??????"} </td>
                                        <td>{orderAccordion.borderCut ? "????" : "??????"} </td>
                                   </tr>
                              </tbody>
                         </Table>

                         <Button
                              variant={"warning"}
                              onClick={() => download(orderAccordion.filePath)}
                         >
                              ?????????????? ????????
                         </Button>
                    </Accordion.Body>
               </Accordion.Item>
          </Accordion>
     );
};

export default OrderElementAccordion;

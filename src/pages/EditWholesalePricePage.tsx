import React, { useContext, useEffect, useState } from "react";
import {
     getWholesalePrice,
     updateRetailPriceList,
     updateWholesalePriceList,
} from "../components/axios/PriceApi";
import { Button, Card, Container, Form, Table } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const EditWholesalePricePage = () => {
     const { price } = useContext(Context);

     const [edit, setEdit] = useState({
          vinyl: "" || price.currentPriceList.vinyl,
          vinylPC: "" || price.currentPriceList.vinylPC,
          banner: "" || price.currentPriceList.banner,
     });

     useEffect(() => {
          getWholesalePrice().then((data) => price.setCurrentPriceList(data));
     }, []);

     function test() {
          updateWholesalePriceList(
               price.currentPriceList.priceCategory,
               edit.vinyl,
               edit.vinylPC,
               edit.banner
          );
     }

     return (
          <Container>
               <Card style={{ textAlign: "center", lineHeight: 2 }} className={"mt-5"}>
                    <Card.Header>
                         <h4>Настройка оптовых цен</h4>
                    </Card.Header>
                    <Table
                         striped
                         bordered
                         hover
                         size={"sm"}
                         className={"mt-4  m-auto"}
                         style={{ width: 90 + "%" }}
                    >
                         <thead>
                              <tr>
                                   <th>Название</th>
                                   <th>Цена</th>
                              </tr>
                         </thead>
                         <tbody>
                              <tr>
                                   <th>Пленка</th>
                                   <th>
                                        <Form.Control
                                             placeholder={price.currentPriceList.vinyl}
                                             value={edit.vinyl}
                                             type={"number"}
                                             onChange={(e) =>
                                                  setEdit({ ...edit, vinyl: e.target.value })
                                             }
                                        />
                                   </th>
                              </tr>
                              <tr>
                                   <th>Печать и резка</th>
                                   <th>
                                        <div>
                                             <Form.Control
                                                  placeholder={price.currentPriceList.vinylPC}
                                                  value={edit.vinylPC}
                                                  type={"number"}
                                                  onChange={(e) =>
                                                       setEdit({ ...edit, vinylPC: e.target.value })
                                                  }
                                             />
                                        </div>
                                   </th>
                              </tr>
                              <tr>
                                   <th>Баннер</th>
                                   <th>
                                        <div>
                                             <Form.Control
                                                  placeholder={price.currentPriceList.banner}
                                                  value={edit.banner}
                                                  type={"number"}
                                                  onChange={(e) =>
                                                       setEdit({ ...edit, banner: e.target.value })
                                                  }
                                             />
                                        </div>
                                   </th>
                              </tr>
                         </tbody>
                    </Table>

                    <Button
                         onClick={test}
                         variant={"warning"}
                         style={{ width: 90 + "%" }}
                         className={"m-auto mt-4 mb-4"}
                    >
                         Сохранить изменения
                    </Button>
               </Card>
          </Container>
     );
};

export default EditWholesalePricePage;

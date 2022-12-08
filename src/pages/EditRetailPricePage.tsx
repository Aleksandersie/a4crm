import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Form, Table, Container } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { getRetailPrice, updateRetailPriceList } from "../components/axios/PriceApi";
import { IUser } from "../Store/UserStore";
import { USER_INFO_PAGE } from "../routeConst/routeConst";

const EditRetailPricePage = observer(() => {
     const { price } = useContext(Context);

     const [editRetail, setEditRetail] = useState({
          vinyl: null || price.currentPriceList.vinyl,
          vinylPC: null || price.currentPriceList.vinylPC,
          banner: null || price.currentPriceList.banner,
     });

     useEffect(() => {
          getRetailPrice().then((data) => price.setCurrentPriceList(data));
          console.log({ price });
     }, []);

     function updatePrice() {
          updateRetailPriceList(
               price.currentPriceList.priceCategory,
               editRetail.vinyl,
               editRetail.vinylPC,
               editRetail.banner
          );
     }

     return (
          <Container>
               <Card style={{ textAlign: "center", lineHeight: 2 }} className={"mt-5"}>
                    <Card.Header>
                         <h4>Настройка розничных цен</h4>
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
                                   <th>Текущая цена</th>
                                   <th>Новая цена</th>
                              </tr>
                         </thead>
                         <tbody>
                              <tr>
                                   <th>Пленка</th>
                                   <th>{price.currentPriceList.vinyl}</th>
                                   <th>
                                        <Form.Control
                                             value={editRetail.vinyl}
                                             type={"number"}
                                             onChange={(e) =>
                                                  setEditRetail({
                                                       ...editRetail,
                                                       vinyl: e.target.value,
                                                  })
                                             }
                                        />
                                   </th>
                              </tr>
                              <tr>
                                   <th>Печать и резка</th>
                                   <th>{price.currentPriceList.vinylPC}</th>
                                   <th>
                                        <div>
                                             <Form.Control
                                                  value={editRetail.vinylPC}
                                                  type={"number"}
                                                  onChange={(e) =>
                                                       setEditRetail({
                                                            ...editRetail,
                                                            vinylPC: e.target.value,
                                                       })
                                                  }
                                             />
                                        </div>
                                   </th>
                              </tr>
                              <tr>
                                   <th>Баннер</th>
                                   <th>{price.currentPriceList.banner}</th>
                                   <th>
                                        <div>
                                             <Form.Control
                                                  value={editRetail.banner}
                                                  type={"number"}
                                                  onChange={(e) =>
                                                       setEditRetail({
                                                            ...editRetail,
                                                            banner: e.target.value,
                                                       })
                                                  }
                                             />
                                        </div>
                                   </th>
                              </tr>
                         </tbody>
                    </Table>

                    <Button
                         onClick={updatePrice}
                         variant={"warning"}
                         style={{ width: 90 + "%" }}
                         className={"m-auto mt-4 mb-4"}
                    >
                         Сохранить изменения
                    </Button>
               </Card>
          </Container>
     );
});

export default EditRetailPricePage;

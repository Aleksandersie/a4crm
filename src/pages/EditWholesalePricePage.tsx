import React, { useContext, useEffect, useState } from "react";
import {
     getWholesalePrice,
     updateRetailPriceList,
     updateWholesalePriceList,
} from "../components/axios/PriceApi";
import { Button, Card, Container, Form, Table } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { useNavigate } from "react-router-dom";
import { MAIN_ROUTE } from "../routeConst/routeConst";

const EditWholesalePricePage = observer(() => {
     const { price } = useContext(Context);
     const navigate = useNavigate()

     const [editWholesale, setEditWholesale] = useState({
          vinyl: "" || price.currentPriceList.vinyl,
          vinylPC: "" || price.currentPriceList.vinylPC,
          banner: "" || price.currentPriceList.banner,
     });
     
     const vinylRef = React.useRef<HTMLInputElement>(null)

     useEffect(() => {
          getWholesalePrice().then((data) => price.setCurrentPriceList(data));
     }, []);

    
     function updatePrice() {
          updateWholesalePriceList(
               price.currentPriceList.priceCategory,
               vinylRef.current.value,
               editWholesale.vinylPC,
               editWholesale.banner
          );
          navigate(MAIN_ROUTE)
          console.log(vinylRef.current.value)
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
                              <th>Текущая цена</th>
                              <th>Новая цена</th>
                         </tr>
                    </thead>
                    <tbody>
                         <tr>
                              <th>Пленка</th>
                              <th>{price.currentPriceList.vinyl}</th>
                              <th>
                                   {/* <Form.Control
                                        value={editWholesale.vinyl}
                                        type={"number"}
                                        onChange={(e) =>
                                             setEditWholesale({
                                                  ...editWholesale,
                                                  vinyl: e.target.value,
                                             })
                                        }
                                   /> */}
                                    <Form.Control
                                        placeholder={price.currentPriceList.vinyl}
                                        type={"number"}
                                        ref = {vinylRef}
                                   />
                              </th>
                         </tr>
                         <tr>
                              <th>Печать и резка</th>
                              <th>{price.currentPriceList.vinylPC}</th>
                              <th>
                                   <div>
                                        <Form.Control
                                             value={editWholesale.vinylPC}
                                             type={"number"}
                                             onChange={(e) =>
                                                  setEditWholesale({
                                                       ...editWholesale,
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
                                             value={editWholesale.banner}
                                             type={"number"}
                                             onChange={(e) =>
                                                  setEditWholesale({
                                                       ...editWholesale,
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

export default EditWholesalePricePage;

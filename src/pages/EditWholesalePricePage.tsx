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

    
     const vinylRef = React.useRef<HTMLInputElement>(null)
     const vinylPCRef = React.useRef<HTMLInputElement>(null)
     const bannerRef = React.useRef<HTMLInputElement>(null)

     useEffect(() => {
          getWholesalePrice().then((data) => price.setCurrentPriceList(data));
     }, []);

    
     function updatePrice() {
          updateWholesalePriceList(
               price.currentPriceList.priceCategory,
               vinylRef.current.value||price.currentPriceList.vinyl,
               vinylPCRef.current.value||price.currentPriceList.vinylPC,
               bannerRef.current.value||price.currentPriceList.banner
          );
          navigate(MAIN_ROUTE)
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
                                      
                                        <Form.Control
                                             placeholder={price.currentPriceList.vinyl}                
                                             ref={vinylRef}
                                        />
                                   </th>
                              </tr>
                              <tr>
                                   <th>Печать и резка</th>
                                   <th>{price.currentPriceList.vinylPC}</th>
                                   <th>
                                        <div>
                                        <Form.Control
                                             placeholder={price.currentPriceList.vinylPC}                
                                             ref={vinylPCRef}
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
                                             placeholder={price.currentPriceList.banner}                
                                             ref={bannerRef}
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

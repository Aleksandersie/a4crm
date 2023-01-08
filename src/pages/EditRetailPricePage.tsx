import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Form, Table, Container } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { getRetailPrice, updateRetailPriceList } from "../components/axios/PriceApi";
import { Navigate, useNavigate } from "react-router-dom";
import { MAIN_ROUTE } from "../routeConst/routeConst";
import { useRef } from "react";
import { FaBlackTie } from "react-icons/fa";

const EditRetailPricePage = observer(() => {
     const { price } = useContext(Context);
     const navigate = useNavigate();

     ////////////////////PRINT////////////////////////////
     const vinylRef = React.useRef<HTMLInputElement>(null);
     const bannerRef = React.useRef<HTMLInputElement>(null);
     const photoPaperRef = React.useRef<HTMLInputElement>(null);
     ////////////////////PRINT&CUT////////////////////////
     const vinylPCRef = React.useRef<HTMLInputElement>(null);
     const vinylPCLamRef = React.useRef<HTMLInputElement>(null);
     ////////////////////CUT//////////////////////////////
     const whiteVinylCutRef = React.useRef<HTMLInputElement>(null);
     const colorVinylCutRef = React.useRef<HTMLInputElement>(null);
     const cutOnlyRef = React.useRef<HTMLInputElement>(null);
     const thermalVinylRef = React.useRef<HTMLInputElement>(null)
     
     useEffect(() => {
          getRetailPrice().then((data) => price.setCurrentPriceList(data));
     }, []);

     function updatePrice() {
          updateRetailPriceList(
               price.currentPriceList.priceCategory,
               ////////////////////PRINT////////////////////////////
               vinylRef.current.value || price.currentPriceList.vinyl,
               bannerRef.current.value || price.currentPriceList.banner,
               photoPaperRef.current.value|| price.currentPriceList.photoPapper,
               ////////////////////PRINT&CUT////////////////////////
               vinylPCRef.current.value || price.currentPriceList.vinylPCRef,
               vinylPCLamRef.current.value || price.currentPriceList.vinylPCLam,
               ////////////////////CUT//////////////////////////////
               whiteVinylCutRef.current.value|| price.currentPriceList.whiteVinylCut,
               colorVinylCutRef.current.value|| price.currentPriceList.colorVinylCut,
               cutOnlyRef.current.value|| price.currentPriceList.cutOnlyRef,
               thermalVinylRef.current.value||price.currentPriceList.thermalVinylRef
          );

          console.log(vinylPCLamRef.current.value);
          navigate(MAIN_ROUTE);
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
                                   <th
                                        colSpan={3}
                                        style={{ backgroundColor: "gray", color: "white" }}
                                   >
                                        Печать{" "}
                                   </th>
                              </tr>
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
                              <tr>
                                   <th>Фотобумага</th>
                                   <th>{price.currentPriceList.photoPaper}</th>
                                   <th>
                                        <div>
                                             <Form.Control
                                                  placeholder={price.currentPriceList.photoPaper}
                                                  ref={photoPaperRef}
                                             />
                                        </div>
                                   </th>
                              </tr>
                         </tbody>
                         {/* /////////////////////////PRINT&CUT//////////////////////////////// */}
                         <thead>
                              <tr>
                                   <th
                                        colSpan={3}
                                        style={{ backgroundColor: "gray", color: "white" }}
                                   >
                                        Печать и резка
                                   </th>
                              </tr>
                              <tr>
                                   <th>Название</th>
                                   <th>Текущая цена</th>
                                   <th>Новая цена</th>
                              </tr>
                         </thead>
                         <tbody>
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
                                   <th>Печать и резка с ламинацией</th>
                                   <th>{price.currentPriceList.vinylPCLam}</th>
                                   <th>
                                        <div>
                                             <Form.Control
                                                  placeholder={price.currentPriceList.vinylPCLam}
                                                  ref={vinylPCLamRef}
                                             />
                                        </div>
                                   </th>
                              </tr>
                         </tbody>

                         {/* //////////////////////////////////CUT//////////////////////////////////////////// */}
                         <thead>
                              <tr>
                                   <th
                                        colSpan={3}
                                        style={{ backgroundColor: "gray", color: "white" }}
                                   >
                                        Плоттерная резка
                                   </th>
                              </tr>
                              <tr>
                                   <th>Название</th>
                                   <th>Текущая цена</th>
                                   <th>Новая цена</th>
                              </tr>
                         </thead>
                         <tbody>
                              <tr>
                                   <th>Резка белой плёнки</th>
                                   <th>{price.currentPriceList.whiteVinylCut}</th>
                                   <th>
                                        <div>
                                             <Form.Control
                                                  placeholder={price.currentPriceList.whiteVinylCut}
                                                  ref={whiteVinylCutRef}
                                             />
                                        </div>
                                   </th>
                              </tr>
                              <tr>
                                   <th>Резка цветной плёнки</th>
                                   <th>{price.currentPriceList.colorVinylCut}</th>
                                   <th>
                                        <div>
                                             <Form.Control
                                                  placeholder={price.currentPriceList.colorVinylCut}
                                                  ref={colorVinylCutRef}
                                             />
                                        </div>
                                   </th>
                              </tr>
                              <tr>
                                   <th>Резка без материала</th>
                                   <th>{price.currentPriceList.cutOnly}</th>
                                   <th>
                                        <div>
                                             <Form.Control
                                                  placeholder={price.currentPriceList.cutOnly}
                                                  ref={cutOnlyRef}
                                             />
                                        </div>
                                   </th>
                              </tr>
                              <tr>
                                   <th>Резка термоплёнки</th>
                                   <th>{price.currentPriceList.thermalVinyl}</th>
                                   <th>
                                        <div>
                                             <Form.Control
                                                 placeholder={price.currentPriceList.thermalVinyl}
                                                 ref={thermalVinylRef}
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

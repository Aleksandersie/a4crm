import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Form, Table } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { EDIT_RETAIL_PRICE_PAGE, EDIT_WHOLESALE_PRICE_PAGE } from "../../routeConst/routeConst";

const PriceList = observer(() => {
     const navigate = useNavigate();

     return (
          <Card className={"mt-5"} style={{ textAlign: "center" }}>
               <Card.Header>
                    <h4>Настройка цен</h4>
               </Card.Header>
               <div className="d-flex flex-row gap-5 mt-4 pb-4 justify-content-center">
                    <Button variant="warning" onClick={() => navigate(EDIT_RETAIL_PRICE_PAGE)}>
                         Редактировать розничные цены
                    </Button>
                    <Button variant="warning" onClick={() => navigate(EDIT_WHOLESALE_PRICE_PAGE)}>
                         Редактировать оптовые цены
                    </Button>
               </div>
          </Card>
     );
});

export default PriceList;

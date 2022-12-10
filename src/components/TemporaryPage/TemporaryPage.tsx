import React from "react";
import { Button, Card } from "react-bootstrap";
import { IoIosConstruct } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { INT_PRINT_CALC, LOGIN_ROUTE } from "../../routeConst/routeConst";

const TemporaryPage = () => {
     const navigate = useNavigate();
     return (
          <Card className={"mt-5 shadow"} style={{ textAlign: "center" }}>
               <Card.Header>
                    <h5>Внимание</h5>
               </Card.Header>
               <Card.Body>
                    <IoIosConstruct style={{ fontSize: 125 }} />
                    <h5 style={{ lineHeight: 2 }}>
                         Размещение заказов на данный момент работает в тестовом режиме.
                         <br /> Возможны не точности в расчете стоимости.
                         <br /> Заказ будет передан в производство после проверки менеджером.
                         <br /> Войдите под своим логином или используйте калькулятор в гостевом
                         режиме.
                    </h5>
                    <div className={"d-flex gap-3 justify-content-center mt-3"}>
                         <Button variant="warning" onClick={() => navigate(LOGIN_ROUTE)}>
                              <FaUserCircle size="25px" className="me-2" />
                              Авторизация
                         </Button>
                         <Button variant="warning" onClick={() => navigate(INT_PRINT_CALC)}>
                              <FaUserCircle size="25px" className="me-2" />
                              Войти как гость
                         </Button>
                    </div>
               </Card.Body>
          </Card>
     );
};

export default TemporaryPage;

import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { TbCalculator } from "react-icons/tb";
import { FaUserCircle, FaInfoCircle } from "react-icons/fa";
import { GrMoney } from "react-icons/gr";
import { RiAdminFill } from "react-icons/ri";
// import { useNavigate } from "react-router-dom";
import {
    ADMIN_PANEL,
    FINANCE_PAGE,
    LOGIN_ROUTE,
    MAIN_ROUTE,
    ORDER_PAGE_ROUTE,
    TODO_ROUTE,
} from "../../routeConst/routeConst";
import { observer } from "mobx-react-lite";

import { Context } from "../../index";
// const nav = useNavigate();

import { AiOutlineUnorderedList, AiOutlineSetting } from "react-icons/ai";
import { adminConst, managerConst, workerConst } from "../../Const";

const TopBar: React.FC = observer(() => {
    const { user } = useContext(Context);

    function logOut() {
        user.setUser({});
        user.setIsAuth(false);
        localStorage.setItem("token", "");
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container className="">
                <NavLink
                    to={MAIN_ROUTE}
                    className="text-decoration-none"
                    style={{ color: "white", fontSize: 22 }}
                >
                    <div>
                        {" "}
                        <TbCalculator size="25" className="me-2 mb-1" style={{}} />
                        A4 CRM
                    </div>
                </NavLink>
                <div style={{ color: "white", fontSize: 22 }}>
                    {user.isAuth ? `Здравствуйте, ${user.user.alias}` : ""}
                </div>
                <Nav className="">
                    {/*<NavLink to={ADMIN_PANEL}>*/}
                    {/*  <Button*/}
                    {/*    variant={"warning"}*/}
                    {/*    style={{ height: 41 }}*/}
                    {/*    className={"me-3"}*/}
                    {/*  >*/}
                    {/*    <AiOutlineSetting style={{ fontSize: 22 }} className="me-2" />*/}
                    {/*    Панель менеджера*/}
                    {/*  </Button>*/}
                    {/*</NavLink>*/}
                    {user.user.role === (adminConst || managerConst) ? (
                        <NavLink to={FINANCE_PAGE}>
                            <Button variant={"warning"} style={{ height: 41 }} className={"me-3"}>
                                <GrMoney style={{ fontSize: 22 }} className="me-2" />
                                Финансы
                            </Button>
                        </NavLink>
                    ) : (
                        ""
                    )}
                    {user.user.role === adminConst ? (
                        <NavLink to={ADMIN_PANEL}>
                            <Button variant={"warning"} style={{ height: 41 }} className={"me-3"}>
                                <RiAdminFill style={{ fontSize: 22 }} className="me-2" />
                                Панель администратора
                            </Button>
                        </NavLink>
                    ) : (
                        ""
                    )}
                    {user.isAuth ? (
                        <NavLink to={ORDER_PAGE_ROUTE}>
                            <Button variant={"warning"} style={{ height: 41 }} className={"me-3"}>
                                <AiOutlineSetting style={{ fontSize: 22 }} className="me-2" />
                                Заказы
                            </Button>
                        </NavLink>
                    ) : (
                        "123"
                    )}
                    {user.user.role === (adminConst || managerConst) ? (
                        <NavLink to={TODO_ROUTE}>
                            <Button variant={"warning"} style={{ height: 41 }} className={"me-3"}>
                                <AiOutlineUnorderedList style={{ fontSize: 22 }} className="me-2" />
                                Список задач
                            </Button>
                        </NavLink>
                    ) : (
                        ""
                    )}

                    {user.isAuth ? (
                        <Button onClick={logOut} variant="warning">
                            <FaUserCircle size="25px" className="me-2" />
                            Выйти
                        </Button>
                    ) : (
                        <NavLink to={LOGIN_ROUTE}>
                            <Button variant="warning">
                                <FaUserCircle size="25px" className="me-2" />
                                Авторизация
                            </Button>
                            <Button variant="warning" className="ms-3">
                                <FaInfoCircle size="25px" className="me-2" />
                                Помощь
                            </Button>
                        </NavLink>
                    )}

                    {/* {user.isAuth ? (*/}
                    {/*  <NavLink to={LOGIN_ROUTE}>*/}
                    {/*    <Button onClick={logIn} variant="warning">*/}
                    {/*      Авторизация*/}
                    {/*    </Button>*/}
                    {/*  </NavLink>*/}
                    {/*) : (*/}
                    {/*  <NavLink to={LOGIN_ROUTE}>*/}
                    {/*    <Button onClick={logIn} variant="warning">*/}
                    {/*      123*/}
                    {/*    </Button>*/}
                    {/*  </NavLink>*/}
                    {/*)} */}
                </Nav>
            </Container>
        </Navbar>
    );
});

export default TopBar;

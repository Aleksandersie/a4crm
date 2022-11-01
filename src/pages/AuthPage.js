import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button, Card, Container, Form } from "react-bootstrap";
import { MAIN_ROUTE } from "../routeConst/routeConst";
import { login } from "../components/axios/UserApi";
import { Context } from "../index";

const AuthPage = () => {
    const navigate = useNavigate();
    const { user } = useContext(Context);
    const [loginData, setLoginData] = useState({ email: "", password: "" });

    async function logIn() {
        const userData = await login(loginData.email, loginData.password);
        user.setUser(userData);
        user.setIsAuth(true);
        console.log(userData);
        navigate(MAIN_ROUTE);
    }

    return (
        <Container
            className="d-flex justify-content-center align-content-center"
            style={{ marginTop: 50 }}
        >
            <Card
                className="p-5"
                style={{ width: 600, backgroundColor: "whitesmoke" }}
            >
                <Form className="d-flex flex-column">
                    <h3 className="m-auto" style={{ textAlign: "center" }}>
                        {"Авторизация"}
                    </h3>
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите email"
                        value={loginData.email}
                        onChange={(e) =>
                            setLoginData({
                                ...loginData,
                                email: e.target.value,
                            })
                        }
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите пароль"
                        value={loginData.password}
                        onChange={(e) =>
                            setLoginData({
                                ...loginData,
                                password: e.target.value,
                            })
                        }
                        type="password"
                    />
                    <Button
                        variant={"success"}
                        className=" mt-3 "
                        onClick={logIn}
                    >
                        Войти
                    </Button>
                </Form>
            </Card>
        </Container>
    );
};

export default AuthPage;

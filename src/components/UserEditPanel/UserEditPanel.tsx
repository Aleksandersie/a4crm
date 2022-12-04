import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";

import { observer } from "mobx-react-lite";
import { IUser } from "../../Store/UserStore";

interface IEditableUser {
    user: IUser;
}

const UserEditPanel: React.FC<IEditableUser> = observer(({ user }) => {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");

    function editUser() {
        console.log();
    }

    return (
        <Card style={{ textAlign: "center" }} className={"mt-5"}>
            <Card.Header>
                <h4>Редактирование пользователя</h4>
            </Card.Header>
            <div className={"d-flex flex-row justify-content-center gap-4 mt-4 mb-4"}>
                <div>
                    <h6>Email</h6>
                    <Form.Control
                        placeholder={user.email}
                        value={mail}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setMail(e.target.value)}
                    />
                    <Button variant={"warning"} className={"mt-3"}>
                        Сменить email
                    </Button>
                </div>
                <div>
                    <h6>Пароль</h6>
                    <Form.Control
                        placeholder={user.password}
                        value={password}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    />
                    <Button variant={"warning"} className={"mt-3"}>
                        Сменить пароль
                    </Button>
                </div>
                <div>
                    <h6>Имя</h6>
                    <Form.Control
                        placeholder={user.alias}
                        value={mail}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setMail(e.target.value)}
                    />
                    <Button variant={"warning"} className={"mt-3"}>
                        Сменить имя
                    </Button>
                </div>
                <div>
                    <h6>Роль</h6>
                    <Form.Control
                        placeholder={user.role}
                        value={mail}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setMail(e.target.value)}
                    />
                    <Button variant={"warning"} className={"mt-3"}>
                        Сменить роль
                    </Button>
                </div>
                <div>
                    <h6>Прайс лист</h6>
                    <Form.Control
                        placeholder={user.priceList}
                        value={mail}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setMail(e.target.value)}
                    />
                    <Button variant={"warning"} className={"mt-3"}>
                        Сменить прайс лист
                    </Button>
                </div>
            </div>
            <div className={"mb-4"}>
                <Button variant={"danger"}>Удалить пользователя</Button>
            </div>
        </Card>
    );
});

export default UserEditPanel;

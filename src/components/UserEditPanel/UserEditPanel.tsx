import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { Button, Card, Container, Form, Modal } from "react-bootstrap";

import { observer } from "mobx-react-lite";
import { IUser } from "../../Store/UserStore";
import { updateUserEmail, updateUserPassword } from "../axios/UserApi";
import { set } from "mobx";

interface IEditableUser {
    user: IUser;
}

const UserEditPanel: React.FC<IEditableUser> = observer(({ user }) => {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [showEditEmailModal, setShowEditEmailModal] = useState<boolean>(false);
    const [newEmail, setNewEmail] = useState<string>("");
    const [showEditPasswordModal, setShowEditPasswordModal] = useState<boolean>(false);
    const [newPassword, setNewPassword] = useState<string>("");
    const [showEditAliasModal, setShowEditAliasModal] = useState<boolean>(false);
    const [newAlias, setNewAlias] = useState<string>("");

    async function editEmail(email, alias) {
        await updateUserEmail(newEmail, alias);
        setShowEditEmailModal(false);
    }
    async function editPassword(password, alias) {
        await updateUserPassword(newPassword, alias);
        setShowEditPasswordModal(false);
    }
    async function editAlias(alias, email) {
        console.log({newAlias,email})
        //await updateUserPassword(newAlias, email);
        //setShowEditPasswordModal(false);
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
                    <Button
                        variant={"warning"}
                        className={"mt-3"}
                        onClick={() => setShowEditEmailModal(true)}
                    >
                        Сменить email
                    </Button>
                    <Modal show={showEditEmailModal} onHide={() => setShowEditEmailModal(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Редактирование email</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Отредактируйте email
                            <Form.Control
                                placeholder={user.email}
                                value={newEmail}
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    setNewEmail(e.target.value)
                                }
                            />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                variant="secondary"
                                onClick={() => setShowEditEmailModal(false)}
                            >
                                Отмена
                            </Button>
                            <Button
                                variant="warning"
                                onClick={() => editEmail(newEmail, user.alias)}
                            >
                                Сохранить
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <div>
                    <h6>Пароль</h6>
                    <Form.Control
                        placeholder={user.password}
                        value={password}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    />
                    <Button
                        variant={"warning"}
                        className={"mt-3"}
                        onClick={() => setShowEditPasswordModal(true)}
                    >
                        Сменить пароль
                    </Button>
                    <Modal
                        show={showEditPasswordModal}
                        onHide={() => setShowEditPasswordModal(false)}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Редактирование пароля</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Отредактируйте пароль
                            <Form.Control
                                placeholder={user.password}
                                value={newPassword}
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    setNewPassword(e.target.value)
                                }
                            />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                variant="secondary"
                                onClick={() => setShowEditPasswordModal(false)}
                            >
                                Отмена
                            </Button>
                            <Button
                                variant="warning"
                                onClick={() => editPassword(newPassword, user.alias)}
                            >
                                Сохранить
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <div>
                    <h6>Имя</h6>
                    <Form.Control
                        placeholder={user.alias}
                        value={mail}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setMail(e.target.value)}
                    />
                    <Button variant={"warning"} className={"mt-3"} onClick={()=>setShowEditAliasModal(true)}>
                        Сменить имя
                    </Button>
                    <Modal
                        show={showEditAliasModal}
                        onHide={() => setShowEditAliasModal(false)}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Редактирование имени</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Отредактируйте имя
                            <Form.Control
                                placeholder={user.alias}
                                value={newAlias}
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    setNewAlias(e.target.value)
                                }
                            />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                variant="secondary"
                                onClick={() => setShowEditAliasModal(false)}
                            >
                                Отмена
                            </Button>
                            <Button
                                variant="warning"
                                onClick={() => editAlias(newAlias, user.email)}
                            >
                                Сохранить
                            </Button>
                        </Modal.Footer>
                    </Modal>
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

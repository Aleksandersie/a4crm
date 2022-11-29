import React, { useContext, useState } from "react";
import { Button, Card } from "react-bootstrap";
import CreateUserModal from "./CreateUserModal";
import UserList from "../UserList/UserList";
import { getAllAdmins, getAllCustomers, getAllManagers, getAllWorkers } from "../axios/UserApi";
import { Context } from "../../index";
import SearchUserBar from "../SearchUserBar/SearchUserBar";

const UserPanel = () => {
    const [createModal, setCreateModal] = useState(false);
    const { user } = useContext(Context);
    function getAdmins() {
        getAllAdmins().then((data) => user.setUserList(data));
    }
    function getManagers() {
        getAllManagers().then((data) => user.setUserList(data));
    }
    function getWorkers() {
        getAllWorkers().then((data) => user.setUserList(data));
    }
    function getCustomers() {
        getAllCustomers().then((data) => user.setUserList(data));
    }

    return (
        <div>
            <Card className={"mt-5"} style={{ textAlign: "center" }}>
                <Card.Header>
                    <h4>Панель управления пользователями</h4>
                </Card.Header>
                <div className="mt-4 mb-4 d-flex justify-content-evenly">
                    <Button variant={"warning"} onClick={() => setCreateModal(true)}>
                        Создать пользователя
                    </Button>
                    <CreateUserModal show={createModal} onHide={() => setCreateModal(false)} />
                </div>
                <h4>Список пользователей</h4>
                <div className={"d-flex justify-content-center gap-3 mt-3 mb-3"}>
                    <Button variant={"warning"} onClick={getAdmins}>
                        Администраторы
                    </Button>
                    <Button variant={"warning"} onClick={getManagers}>
                        Менеджеры
                    </Button>
                    <Button variant={"warning"} onClick={getWorkers}>
                        Производство
                    </Button>
                    <Button variant={"warning"} onClick={getCustomers}>
                        Заказчики
                    </Button>
                </div>

                <SearchUserBar />
                <UserList />
            </Card>
        </div>
    );
};

export default UserPanel;

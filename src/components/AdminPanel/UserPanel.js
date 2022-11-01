import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import CreateUserModal from "./CreateUserModal";

const UserPanel = () => {
    const [createModal, setCreateModal] = useState(false);
    const [editModal, setEditModal] = useState(false);

    return (
        <div>
            <Card className={"mt-5"} style={{ textAlign: "center" }}>
                <Card.Header>
                    <h4>Панель пользователей</h4>
                </Card.Header>
                <div className="mt-4 mb-4 d-flex justify-content-evenly">
                    <Button
                        variant={"warning"}
                        onClick={() => setCreateModal(true)}
                    >
                        Создать пользователя
                    </Button>
                    <CreateUserModal
                        show={createModal}
                        onHide={() => setCreateModal(false)}
                    />
                    <Button variant={"warning"}>
                        Редактирование пользователей
                    </Button>
                </div>
            </Card>
        </div>
    );
};

export default UserPanel;

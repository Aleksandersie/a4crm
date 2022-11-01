import React, { useContext, useEffect, useState } from "react";
import {
    Button,
    FormControl,
    Modal,
    Spinner,
    ToggleButton,
} from "react-bootstrap";
import {
    getToDo,
    getTodoByOwner,
    postToDo,
    updateToDo,
} from "../axios/ToDoApi";
import { Context } from "../../index";

const ToDoEdit = ({ show, hide, task }) => {
    useEffect(() => {
        setMessage(task.message);
    }, []);

    const [edit, setEdit] = useState(false);
    const { toDoStore } = useContext(Context);
    const { user } = useContext(Context);

    async function editTask(number) {
        setEdit(true);
        await updateToDo(message, number, priority);

        if (user.user.role === "admin") {
            const res = getToDo()
                .then((data) => toDoStore.setToDoList(data))
                .finally(() => setEdit(false));
        } else {
            const res = getTodoByOwner()
                .then((data) => toDoStore.setToDoList(data))
                .finally(() => setEdit(false));
        }

        //    await getToDo()
        //     .then((data) => toDoStore.setToDoList(data))
        //     .finally(() => setEdit(false));
        hide();
    }

    const [message, setMessage] = useState("");
    const [priority, setPriority] = useState(false);

    return (
        <div>
            <Modal show={show} onHide={hide}>
                <Modal.Header closeButton>
                    <Modal.Title>Редактирование задачи</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Отредактируйте текст
                    <FormControl
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <ToggleButton
                        className="mb-2 mt-3"
                        id="toggle-check"
                        type="checkbox"
                        variant="outline-danger"
                        checked={priority}
                        value="1"
                        onChange={(e) => setPriority(e.currentTarget.checked)}
                    >
                        Срочная задача
                    </ToggleButton>
                </Modal.Body>
                <Modal.Footer>
                    {edit ? (
                        <Spinner
                            animation="border"
                            role="status"
                            className={"m-auto"}
                        >
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    ) : (
                        ""
                    )}
                    <Button variant="secondary" onClick={hide}>
                        Отмена
                    </Button>
                    <Button
                        variant="warning"
                        onClick={() => editTask(task.randomNumber)}
                    >
                        Сохранить
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ToDoEdit;

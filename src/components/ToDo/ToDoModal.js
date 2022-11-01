import React, { useContext, useEffect, useState } from "react";
import {
    Button,
    Dropdown,
    FormControl,
    Modal,
    Spinner,
    ToggleButton,
} from "react-bootstrap";
import {
    getToDo,
    getTodoByOwner,
    postToDo,
    postTodoByCustomOwner,
} from "../axios/ToDoApi";
import { Context } from "../../index";
import { getEmployees } from "../axios/UserApi";
import { adminConst } from "../../Const";

const ToDoModal = ({ show, hide }) => {
    const [message, setMessage] = useState("");
    const { toDoStore } = useContext(Context);
    const [loading, setLoading] = useState(false);
    const [loadingRed, setLoadingRed] = useState(false);
    const [priority, setPriority] = useState(false);

    const [employee, setEmployee] = useState("");

    const { user } = useContext(Context);

    useEffect(() => {
        getEmployees().then((data) => user.setEmployees(data));
        console.log(user);
    }, []);

    function selectEmp(i) {
        user.setSelectedEmployees(i);
        console.log(user.selectedEmployees.alias);
    }

    async function sendTask() {
        if (user.user.role === adminConst) {
            setLoading(true);
            const randomNumber = (Math.random() * 10000).toFixed();
            const createdDate = new Date().toLocaleString();
            await postTodoByCustomOwner(
                message,
                randomNumber,
                priority,
                createdDate,
                user.selectedEmployees.alias
            ).finally(() => setLoading(false));
            setLoadingRed(true);
            await getToDo()
                .then((data) => toDoStore.setToDoList(data))
                .finally(() => setLoadingRed(false));
            setMessage("");
            hide();
        } else {
            setLoading(true);
            const randomNumber = (Math.random() * 10000).toFixed();
            const createdDate = new Date().toLocaleString();
            await postToDo(
                message,
                randomNumber,
                priority,
                createdDate
            ).finally(() => setLoading(false));
            setLoadingRed(true);
            await getTodoByOwner()
                .then((data) => toDoStore.setToDoList(data))
                .finally(() => setLoadingRed(false));
            setMessage("");
            hide();
        }
    }

    // async function sendTask() {
    //     setLoading(true);
    //     const randomNumber = (Math.random() * 10000).toFixed();
    //     await postToDo(message, randomNumber, priority).finally(() =>
    //         setLoading(false)
    //     );
    //     setLoadingRed(true);
    //     await getToDo()
    //         .then((data) => toDoStore.setToDoList(data))
    //         .finally(() => setLoadingRed(false));
    //     setMessage("");
    //     hide();
    // }

    return (
        <div>
            <Modal show={show} onHide={hide}>
                <Modal.Header closeButton>
                    <Modal.Title>Создать задачу</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormControl
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={"Введите описание задачи"}
                        style={{ height: 70 }}
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
                    {user.user.role === adminConst ? (
                        <Dropdown style={{ color: "black" }}>
                            <div className={"mb-2"}>Выберите исполнителя </div>
                            <Dropdown.Toggle
                                variant="outline-warning"
                                id="dropdown-basic"
                                style={{ color: "black" }}
                            >
                                {user.selectedEmployees.alias ||
                                    "Выберите сотрудника"}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {user.employees.map((i) => (
                                    <Dropdown.Item
                                        key={i.alias}
                                        onClick={() => selectEmp(i)}
                                    >
                                        {i.alias}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    ) : (
                        ""
                    )}
                </Modal.Body>
                <Modal.Footer>
                    {loading ? (
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
                    {loadingRed ? (
                        <Spinner
                            animation="border"
                            role="status"
                            className={"m-auto"}
                            variant={"danger"}
                        >
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    ) : (
                        ""
                    )}
                    <Button variant="secondary" onClick={hide}>
                        Отмена
                    </Button>
                    <Button variant="warning" onClick={sendTask}>
                        Сохранить задачу
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ToDoModal;

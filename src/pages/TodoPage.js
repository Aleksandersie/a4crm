import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Container, Spinner } from "react-bootstrap";
import { getToDo, getTodoByOwner } from "../components/axios/ToDoApi";
import ToDoModal from "../components/ToDo/ToDoModal";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import ToDoString from "../components/ToDo/ToDoString";
import ToDoStore from "../Store/ToDo";
import ToDoComplete from "../components/ToDo/ToDoComplete";
import { BiAddToQueue } from "react-icons/bi";

const TodoPage = observer(() => {
    const { toDoStore } = useContext(Context);
    const { user } = useContext(Context);

    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);

    // useEffect(() => {
    //     const res = getToDo()
    //         .then((data) => toDoStore.setToDoList(data))
    //         .finally(() => setLoading(false));
    // }, []);

    ////////////////////////////////////////////////////////////////////////
    useEffect(() => {
        if (user.user.role === "admin") {
            const res = getToDo()
                .then((data) => toDoStore.setToDoList(data))
                .finally(() => setLoading(false));
        } else {
            const res = getTodoByOwner()
                .then((data) => toDoStore.setToDoList(data))
                .finally(() => setLoading(false));
        }
    }, []);

    // useEffect(() => {
    //     setInterval(() => {
    //         const res = getToDo().then((data) => toDoStore.setToDoList(data));
    //     }, 60000);
    // }, []);
    ////////////////////////////////////////////////////////////////////////////////////////////
    // useEffect(() => {
    //     setInterval(() => {
    //         if (user.user.role === "admin") {
    //             const res = getToDo()
    //                 .then((data) => toDoStore.setToDoList(data))
    //                 .finally(() => setLoading(false));
    //         } else {
    //             const res = getTodoByOwner()
    //                 .then((data) => toDoStore.setToDoList(data))
    //                 .finally(() => setLoading(false));
    //         }
    //     }, 60000);
    // }, []);

    return (
        <div>
            <Container>
                {/*{user.user.role === "admin" ? 123 : 321}*/}
                <Card className={"mt-5"} style={{ textAlign: "center" }}>
                    <Card.Header>
                        <h4>Список задач</h4>
                    </Card.Header>
                    <Button
                        variant={"warning"}
                        className={"mt-3 mb-3 m-auto"}
                        style={{ width: 300 }}
                        onClick={() => setShowModal(true)}
                    >
                        <BiAddToQueue
                            style={{ fontSize: 22 }}
                            className={"me-2"}
                        />
                        Добавить новую задачу
                    </Button>
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

                    <ToDoModal
                        show={showModal}
                        hide={() => setShowModal(false)}
                    />

                    <div>
                        {toDoStore.toDoList.map((task, index) => (
                            <ToDoString
                                key={task.randomNumber}
                                task={task}
                                index={index}
                            />
                        ))}
                    </div>
                </Card>
            </Container>
        </div>
    );
});

export default TodoPage;

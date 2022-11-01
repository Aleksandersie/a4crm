import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { Button, Card } from "react-bootstrap";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { Context } from "../../index";
import axios from "axios";
import { removeToDo } from "../axios/ToDoApi";
import ToDoModal from "./ToDoModal";
import ToDoComplete from "./ToDoComplete";
import ToDoEdit from "./ToDoEdit";

const ToDoString = observer(({ task, index }) => {
    const { toDoStore } = useContext(Context);

    const [showComplete, setShowComplete] = useState(false);
    const [editComplete, setEditComplete] = useState(false);

    async function completeTask(number) {
        toDoStore.setToDoList(
            toDoStore.toDoList.filter((task) => task.randomNumber !== number)
        );
        await removeToDo(number);
    }

    async function editTask(number, message) {
        console.log(number);
        console.log(message);
    }

    return (
        <Card
            className={
                "mt-3 mb-3 pt-3 pb-3 m-auto shadow-sm d-flex justify-content-around flex-row"
            }
            style={{ width: 750, backgroundColor: "whitesmoke" }}
            bg={task.highPriority ? "danger" : ""}
        >
            <div style={{ textAlign: "center" }} className={"col-2"}>
                <h6>{"Дата создания"}</h6>
                <p>{task.createdDate}</p>
            </div>
            <div style={{ textAlign: "center" }} className={"col-4"}>
                <h6>{"Описание задачи"}</h6>
                <p>{task.message}</p>
            </div>
            <div style={{ textAlign: "center" }}>
                <h6>{"Редактировать"}</h6>
                <FiEdit
                    style={{ fontSize: 23, cursor: "pointer" }}
                    onClick={() => setEditComplete(true)}
                />
            </div>
            <ToDoEdit
                show={editComplete}
                hide={() => setEditComplete(false)}
                task={task}
            />
            <div style={{ textAlign: "center" }} className={"col-3"}>
                <h6>{"Выполнение"}</h6>
                <Button
                    onClick={() => setShowComplete(true)}
                    variant={"success"}
                >
                    Завершить <AiOutlineCheckCircle style={{ fontSize: 21 }} />
                </Button>
            </div>
            <ToDoComplete
                show={showComplete}
                hide={() => setShowComplete(false)}
                random={task.randomNumber}
            />
        </Card>
    );
});

export default ToDoString;

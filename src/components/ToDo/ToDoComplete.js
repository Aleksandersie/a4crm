import React, { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { removeToDo } from "../axios/ToDoApi";
import { Context } from "../../index";

const ToDoComplete = ({ show, hide, random }) => {
  const { toDoStore } = useContext(Context);

  async function completeTask(number) {
    toDoStore.setToDoList(
      toDoStore.toDoList.filter((task) => task.randomNumber !== number)
    );
    await removeToDo(number);
  }

  return (
    <div>
      <Modal show={show} onHide={hide}>
        <Modal.Header closeButton>
          <Modal.Title>Завершить задачу</Modal.Title>
        </Modal.Header>
        <Modal.Body>Задача выполнена?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hide}>
            Отмена
          </Button>
          <Button variant="warning" onClick={() => completeTask(random)}>
            Да
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ToDoComplete;

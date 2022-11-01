import React, { useState } from "react";
import {
    Button,
    ButtonGroup,
    FormControl,
    Modal,
    ToggleButton,
} from "react-bootstrap";
import {
    adminConst,
    customerConst,
    managerConst,
    retailPrice,
    wholesalePrice,
    workerConst,
} from "../../Const";
import { createUser } from "../axios/UserApi";

let userRole = "";
let userPrice = "";

const CreateUserModal = ({ show, onHide }) => {
    const radios = [
        { name: "Администратор", value: "1", role: adminConst },
        { name: "Менеджер", value: "2", role: managerConst },
        { name: "Заказчик", value: "3", role: customerConst },
        { name: "Производство", value: "4", role: workerConst },
    ];
    const price = [
        { name: "Розничный", value: "5", category: retailPrice },
        { name: "Оптовый", value: "6", category: wholesalePrice },
    ];

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alias, setAlias] = useState("");

    const [radioValue, setRadioValue] = useState("1");
    const [priceList, setPriceList] = useState("1");

    function setRole(e, role) {
        setRadioValue(e);
        userRole = role;
        console.log(role);
    }
    function setPriceFN(e, category) {
        userPrice = category || retailPrice;
        setPriceList(e);
        console.log(userPrice);
        console.log("ok");
    }

    async function userDataForm() {
        if (!userRole) {
            return alert("Укажите роль");
        }
        if (!userPrice && userRole === customerConst) {
            return alert("Укажите прайс лист");
        }

        const userDataOut = await createUser(
            email,
            password,
            alias,
            userRole,
            userPrice
        );
        onHide();
    }

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header>
                <Modal.Title>
                    <div style={{ textAlign: "center" }}>
                        Создание нового пользователя
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div style={{ textAlign: "center" }}>
                    Email
                    <FormControl
                        className={"mt-2 mb-2"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    Пароль
                    <FormControl
                        className={"mt-2 mb-2"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    Отображаемое имя
                    <FormControl
                        className={"mt-2 mb-2"}
                        value={alias}
                        onChange={(e) => setAlias(e.target.value)}
                    />
                    <div className={"d-flex flex-column"}>
                        Роль
                        <ButtonGroup className="mb-2 mt-2">
                            {radios.map((radio, idx) => (
                                <ToggleButton
                                    style={{ color: "black" }}
                                    key={idx}
                                    id={`radio-${idx}`}
                                    type="radio"
                                    variant="outline-warning"
                                    name="radio"
                                    value={radio.value}
                                    checked={radioValue === radio.value}
                                    onChange={(e) =>
                                        setRole(
                                            e.currentTarget.value,
                                            radio.role
                                        )
                                    }
                                >
                                    {radio.name}
                                </ToggleButton>
                            ))}
                        </ButtonGroup>
                    </div>
                    <div className={"d-flex flex-column"}>
                        Прайс лист
                        <ButtonGroup className="mb-2 mt-2">
                            {price.map((radio, idx) => (
                                <ToggleButton
                                    style={{ color: "black" }}
                                    key={idx}
                                    id={`price-${idx}`}
                                    type="radio"
                                    variant="outline-warning"
                                    name="price"
                                    value={radio.value}
                                    disabled={
                                        userRole === "manager" ||
                                        userRole === "admin" ||
                                        userRole === "worker"
                                    }
                                    checked={priceList === radio.value}
                                    onChange={(e) =>
                                        setPriceFN(
                                            e.currentTarget.value,
                                            radio.category
                                        )
                                    }
                                >
                                    {radio.name}
                                </ToggleButton>
                            ))}
                        </ButtonGroup>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Закрыть
                </Button>
                <Button variant="success" onClick={userDataForm}>
                    Сохранить
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateUserModal;

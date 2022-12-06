import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { takeToWorkStatus, completeStatus, inProgressStatus } from "../../Const";

const DropdownOrderFilter = () => {
    const [category, setCategory] = useState("");
    const list = [
        { id: 1, name: "Создан" },
        { id: 2, name: takeToWorkStatus },
        { id: 3, name: inProgressStatus },
        { id: 4, name: completeStatus },
    ];

    useEffect(() => {
        console.log(category);
    }, [category]);

    return (
        <div className={"d-flex flex-row gap-3 align-items-center"}>
            <h6>Сортировать по:</h6>
            <Dropdown style={{ color: "black" }}>
                <Dropdown.Toggle
                    variant="outline-warning"
                    id="dropdown-basic"
                    style={{ color: "black" }}
                >
                    {category || "Выберите категорию"}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {list.map((i) => (
                        <Dropdown.Item key={i.id} onClick={() => setCategory(i.name)}>
                            {i.name}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default DropdownOrderFilter;

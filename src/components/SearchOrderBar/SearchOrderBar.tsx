import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "@mui/material";
import { searchUser } from "../axios/UserApi";
import { Context } from "../../index";
import { searchOrder } from "../axios/OrderApi";

const SearchOrderBar: React.FC = () => {
    const { order } = useContext(Context);
    const [searchWord, setSearchWord] = useState<string>("");

    function word() {
        searchOrder(searchWord)
        //.then((data) => order.setOrderInProgress(data));
        .then((data) => console.log(data));
        console.log({order});
        
    }

    return (
        <div className={"mt-4 m-auto"}>
            <div className={"d-flex flex-row gap-3"}>
                <Form.Control
                    style={{ width: 200 }}
                    placeholder={"Поиск по заказчику"}
                    value={searchWord}
                    onChange={(e) => setSearchWord(e.target.value)}
                />
                <Button variant={"contained"} onClick={word}>
                    Найти
                </Button>
            </div>
        </div>
    );
};

export default SearchOrderBar;
import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "@mui/material";
import { searchUser } from "../axios/UserApi";
import { Context } from "../../index";

const SearchUserBar: React.FC = () => {
    const { user } = useContext(Context);
    const [searchWord, setSearchWord] = useState<string>("");

    function word() {
        searchUser(searchWord).then((data) => user.setUserList(data));
    }

    return (
        <div className={"mt-4 m-auto"}>
            <div className={"d-flex flex-row gap-3"}>
                <Form.Control
                    style={{ width: 200 }}
                    placeholder={"Поиск"}
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

export default SearchUserBar;

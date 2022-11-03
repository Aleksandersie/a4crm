import React, { useContext, useEffect, useState } from "react";
import { Button, Card, FormControl } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { getRetailPrice } from "../axios/PriceApi";
import { logDOM } from "@testing-library/react";
import { Context } from "../../index";
import RetailPrice from "./RetailPrice";

const PriceList = observer(() => {
    const { price } = useContext(Context);

    const [edit, setEdit] = useState({
        banner: null || price.retailPrice.banner,
        vinyl: null || price.retailPrice.vinyl,
    });

    function test() {
        console.log(edit);
    }
    return (
        <div>
            <Card className={"mt-5"} style={{ textAlign: "center" }}>
                <Card.Header>
                    <h4>Настройка цен</h4>
                </Card.Header>
                <div>
                    {price.retailPrice.banner}
                    <FormControl
                        placeholder={price.retailPrice.banner}
                        value={edit.banner}
                        onChange={(e) =>
                            setEdit({ ...edit, banner: e.target.value })
                        }
                    />
                </div>
                <div>
                    <FormControl
                        placeholder={price.retailPrice.vinyl}
                        value={edit.vinyl}
                        onChange={(e) =>
                            setEdit({ ...edit, vinyl: Number(e.target.value) })
                        }
                    />
                </div>
                <Button onClick={test}>123</Button>
            </Card>
        </div>
    );
});

export default PriceList;

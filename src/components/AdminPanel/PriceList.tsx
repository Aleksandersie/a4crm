import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Form, Table } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { getRetailPrice,getWholesalePrice } from "../axios/PriceApi";
import { Context } from "../../index";
import {useNavigate} from "react-router-dom"
import { EDIT_RETAIL_PRICE_PAGE } from "../../routeConst/routeConst";



const PriceList = observer(() => {
    const { price } = useContext(Context);
    const navigate = useNavigate()


    const [editRetail, setEditRetail] = useState({
        vinyl: null || price.currentPriceList.vinyl,
        vinylPC: null || price.currentPriceList.vinylPC,
    });
    const [editWholesale, setEditWholesale] = useState({
        vinyl: null || price.currentPriceList.vinyl,
        vinylPC: null || price.currentPriceList.vinylPC,
    });

   

    const [editRetailPriceModal, setEditRetailPriceModal] = useState<boolean>(false)
    const [editWholesalePriceModal, setEditWholesalePriceModal] = useState<boolean>(false)
    
    async function editRetailFn(){
        await getRetailPrice().then((data) => price.setCurrentPriceList(data))
        console.log(price);
    }
    async function editWholesalePriceFn(){
        await getWholesalePrice().then((data) => price.setCurrentPriceList(data))
        console.log(price);
    }

    const [edit, setEdit] = useState({
        vinyl: null || price.currentPriceList.vinyl,
        vinylPC: null || price.currentPriceList.vinylPC
    });

    function test() {
        console.log(edit);
    }
    return (
        
               
            <Card className={"mt-5"} style={{ textAlign: "center" }}>
                <Card.Header>
                    <h4>Настройка цен</h4>
                </Card.Header>
                <div className="d-flex flex-row gap-5 mt-4 pb-4 justify-content-center">
                <Button variant="warning" onClick={editRetailFn}>
                    Редактировать розничные цены
                    </Button>
                <Button variant="warning" onClick={editWholesalePriceFn}>
                    Редактировать оптовые цены
                    </Button></div>
                    
                    <Button variant="warning" onClick={()=>navigate(EDIT_RETAIL_PRICE_PAGE)}>
                    тест
                    </Button>
            </Card>
        
    );
});

export default PriceList;

import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Form, Table,Container } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { getRetailPrice } from "../components/axios/PriceApi";





const EditRetailPricePage = observer(() => {

    const {price} = useContext(Context)

    useEffect(()=>{
        getRetailPrice().then((data) => price.setCurrentPriceList(data))
    }, [])

    return (<Container><div> {price.currentPriceList.vinyl}</div></Container>)
          
    
});

export default EditRetailPricePage ;
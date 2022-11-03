import React from "react";
import { Container } from "react-bootstrap";
import PriceList from "../components/AdminPanel/PriceList";
import { observer } from "mobx-react-lite";
import UserPanel from "../components/AdminPanel/UserPanel";

const AdminPanel = observer(() => {
    return (
        <Container>
            <UserPanel />
            <PriceList />
        </Container>
    );
});

export default AdminPanel;

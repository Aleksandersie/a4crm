import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getOneUser } from "../components/axios/UserApi";
import UserEditPanel from "../components/UserEditPanel/UserEditPanel";
import { IUser } from "../Store/UserStore";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import UserHistoryPanel from "../components/UserHistoryPanel/UserHistoryPanel";

const UserInfoPage: React.FC = observer(() => {
    const params = useParams();
    const { user } = useContext(Context);
    useEffect(() => {
        getOneUser(params.id).then((data) => user.setEditableUser(data));
    }, []);

    return (
        <Container>
            <UserEditPanel user={user.editableUser} />
            <UserHistoryPanel />
        </Container>
    );
});

export default UserInfoPage;

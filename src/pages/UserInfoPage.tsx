import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneUser } from "../components/axios/UserApi";

const UserInfoPage = () => {
    const params = useParams();
    useEffect(() => {
        console.log(params.id);
        getOneUser(params.id).then((data) => console.log(data));
    }, []);
    return <div>123</div>;
};

export default UserInfoPage;

import { host } from "./axios";
import jwtDecode from "jwt-decode";

export const login = async function (email, password) {
    console.log({ email, password });
    const { data } = await host.post("api/user/login", { email, password });
    localStorage.setItem("token", data.token);
    console.log(data.token);
    return jwtDecode(data.token);
};

export const createUser = async function (
    email,
    password,
    alias,
    role,
    priceCategory
) {
    const { data } = await host.post("api/user", {
        email,
        password,
        alias,
        role,
        priceCategory,
    });
    console.log(data);
};

export const getEmployees = async function () {
    const { data } = await host.get("api/user/getall");
    return data;
};

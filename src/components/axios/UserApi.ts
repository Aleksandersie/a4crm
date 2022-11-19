import { host } from "./axios";
import jwtDecode from "jwt-decode";
import { IUser } from "../../Store/UserStore";

export const login = async function (email: string, password: string) {
    const { data } = await host.post("api/user/login", { email, password });
    localStorage.setItem("token", data.token);
    return jwtDecode<IUser>(data.token);
};

export const createUser = async function (email, password, alias, role, priceCategory) {
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

export const getAllCustomers = async function () {
    const { data } = await host.get<IUser[]>("api/user/getAllCustomers");
    return data;
};

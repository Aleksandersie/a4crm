import { host } from "./axios";
import jwtDecode from "jwt-decode";
import { IGetUser, IUser } from "../../Store/UserStore";

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

export const getAllCustomers = async function (page: number, limit: number) {
    const { data } = await host.get<IGetUser>("api/user/getAllCustomers", {
        params: {
            page,
            limit,
        },
    });
    return data;
};

export const getAllAdmins = async function () {
    const { data } = await host.get<IGetUser>("api/user/getAllAdmins");
    return data;
};
export const getAllManagers = async function () {
    const { data } = await host.get<IGetUser>("api/user/getAllManagers");
    return data;
};
export const getAllWorkers = async function () {
    const { data } = await host.get<IGetUser>("api/user/getAllWorkers");
    return data;
};

export const searchUser = async function (word) {
    const { data } = await host.post<IGetUser>("api/user/searchUser", { word });
    return data;
};

export const getOneUser = async function (id) {
    const { data } = await host.get<IUser>("api/user/getOne/" + id);
    return data;
};

export const updateUserEmail = async function (email, alias) {
    const { data } = await host.post("api/user/updateUserEmail", { email, alias });
    return data;
};
export const updateUserPassword = async function (password, alias) {
    const { data } = await host.post("api/user/updateUserPassword", { password, alias });
    return data;
};
export const updateUserAlias = async function (alias, email) {
    const { data } = await host.post("api/user/updateUserAlias", { alias, email });
    return data;
};
import { host } from "./axios";

export const createOrder = async function (data) {
    const res = await host.post("api/order", { data });
};

export const getAllOrders = async function () {
    const response = await host.get("api/order");
    return response;
};

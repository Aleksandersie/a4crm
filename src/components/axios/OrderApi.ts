import { host } from "./axios";

export const createOrder = async function (data) {
    const res = await host.post("api/order", { data });
};

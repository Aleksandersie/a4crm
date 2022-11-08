import { host } from "./axios";

export const createOrder = async function (data) {
    const res = await host.post("api/order", { data });
};

export const uploadFile = async function (formData) {
    console.log(formData);
    const res = await host.post("api/order/file", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};
export const getAllOrders = async function () {
    const response = await host.get("api/order");
    return response;
};

import { host } from "./axios";
import { IOrderItem } from "../../calcLogic/calc";

export interface IIncomingOrder {
    id: number;
    randomNumber: number;
    owner: string;
    createdDate: string;
    orderItems: IOrderItem[];
}

export const createOrder = async function (data: IOrderItem[]) {
    const res = await host.post("api/order", { data });
};

export const uploadFile = async function (formData) {
    const res = await host.post("api/order/file", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return res;
};
export const getAllOrders = async function () {
    const response = await host.get<IIncomingOrder[]>("api/order");
    return response;
};

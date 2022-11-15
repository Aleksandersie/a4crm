import { host } from "./axios";
import { IOrderItem } from "../../calcLogic/calc";
import axios from "axios";

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

export const downloadFile = async function (path) {
    const fileName = path.split("\\"); //const fileName = path.split("/") для сервера
    console.log(fileName);
    const res = await host
        .get("api/order/download", { responseType: "blob", params: { path } })
        .then((response) => {
            const href = URL.createObjectURL(response.data);
            const link = document.createElement("a");
            link.href = href;
            link.setAttribute("download", fileName[fileName.length - 1]);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(href);
        });
};
export const getAllOrders = async function () {
    const response = await host.get<IIncomingOrder[]>("api/order");
    return response.data;
};

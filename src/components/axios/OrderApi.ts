import { host } from "./axios";
import { IOrderItem } from "../../calcLogic/calc";
import axios from "axios";

export interface IIncomingOrder {
     id: number;
     randomNumber: number;
     owner: string;
     author: string;
     createdDate: string;
     orderStatus: string;
     orderTotalCost: number;
     orderMessage: string;
     orderPaid: boolean;
     orderItems: IOrderItem[];
}

export const createOrder = async function (data: IOrderItem[], orderMessage: string) {
     const res = await host.post("api/order", { data, orderMessage });
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
     const fileName = path.split("\\");
     //const fileName = path.split("/"); //для сервера

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
export const getAllOrders = async function (page: number, limit: number) {
     const response = await host.get<IIncomingOrder[]>("api/order", {
          params: {
               page,
               limit,
          },
     });
     return response.data;
};

export const sendOrderStatus = async function (status: string, randomNumber: number) {
     const res = await host.put("api/order/changeStatus", { status, randomNumber });
     return res.data;
};
export const searchOrder = async function (limit: number, page: number, word: string) {
     const res = await host.get("api/order/searchOrder", {
          params: {
               limit,
               page,
               word,
          },
     });
     return res.data;
};
export const getOrdersByFilter = async function (limit: number, page: number, filter: string) {
     const res = await host.get("api/order/getOrdersByFilter", {
          params: {
               limit,
               page,
               filter,
          },
     });
     return res.data;
};
export const changeOrderCost = async function (newPrice: number, random: number) {
     const res = await host.put("api/order/changeOrderPrice", { newPrice, random });
     return res.data;
};
export const getOrdersByUser = async function (alias){
     const res = await host.get<IIncomingOrder[]>('api/order/searchOrdersByUser',{params:{alias}})
     return res.data
}
export const deleteOrder = async function (randomNumber){
     const res = await host.delete('api/order/deleteOrder',{data:{randomNumber}})
     return res.data
}

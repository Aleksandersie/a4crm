import { host } from "./axios";

export const getDebtors = async function () {
    const res = await host.get("api/order/getCustomersWithNoPaidOrders");
    return res.data;
};

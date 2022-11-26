import { host } from "./axios";
import { IDebtors } from "../../Store/FinanceStore";

export const getDebtors = async function () {
    const res = await host.get<IDebtors[]>("api/order/getCustomersWithNoPaidOrders");
    return res.data;
};

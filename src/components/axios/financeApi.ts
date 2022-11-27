import { host } from "./axios";
import { IDebtors } from "../../Store/FinanceStore";

export const getDebtors = async function () {
    const res = await host.get<IDebtors[]>("api/finance/getCustomersWithNoPaidOrders");
    return res.data;
};

export const makePayment = async function (randomNumber: number) {
    const res = await host.put("api/finance/makePayment", { randomNumber });
    return res.data;
};

import { host } from "./axios";
import { IDebtors } from "../../Store/FinanceStore";

export const getDebtors = async function () {
    const res = await host.get<IDebtors[]>("api/finance/getCustomersWithNoPaidOrders");
    return res.data;
};

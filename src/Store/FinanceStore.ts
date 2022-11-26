import { IIncomingOrder } from "../components/axios/OrderApi";

const { makeAutoObservable } = require("mobx");

export interface IDebtors {
    id: number;
    email: string;
    password: string;
    alias: string;
    role: string;
    priceCategory: string;
    createdAt: Date;
    updatedAt: Date;
    orders: IIncomingOrder[];
}

export default class FinanceStore {
    private _debtors: IDebtors[];
    constructor() {
        this._debtors = [];
        makeAutoObservable(this);
    }

    setDebtors(debtors: IDebtors[]) {
        this._debtors = debtors;
    }
    get debtors() {
        return this._debtors;
    }
}

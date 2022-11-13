import { IOrderItem } from "../calcLogic/calc";
import { IIncomingOrder } from "../components/axios/OrderApi";

const { makeAutoObservable } = require("mobx");

export default class OrderStore {
    private _order: IOrderItem[];
    private _ordersInProgress: IIncomingOrder[];

    constructor() {
        this._order = [];
        this._ordersInProgress = [];

        makeAutoObservable(this);
    }

    setOrder(order: IOrderItem[]) {
        this._order = order;
    }

    get order() {
        return this._order;
    }

    setOrderInProgress(order: IIncomingOrder[]) {
        this._ordersInProgress = order;
    }

    get orderInProgress() {
        return this._ordersInProgress;
    }
}

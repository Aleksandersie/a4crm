import { IOrderItem } from "../calcLogic/calc";
import { IIncomingOrder } from "../components/axios/OrderApi";

const { makeAutoObservable } = require("mobx");

export default class OrderStore {
    private _order: IOrderItem[];
    private _ordersInProgress: IIncomingOrder[];
    private _orderPage: number;
    private _orderLimit: number;
    private _orderCount: number;

    constructor() {
        this._order = [];
        this._ordersInProgress = [];
        this._orderPage = 1;
        this._orderLimit = 4;
        this._orderCount = 0;
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
    setOrderPage(orderPage: number) {
        this._orderPage = orderPage;
    }
    get orderPage() {
        return this._orderPage;
    }
    setOrderLimit(orderLimit: number) {
        this._orderLimit = orderLimit;
    }
    get orderLimit() {
        return this._orderLimit;
    }
    setOrderCount(orderCount: number) {
        this._orderCount = orderCount;
    }
    get orderCount() {
        return this._orderCount;
    }
}

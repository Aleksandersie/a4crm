const { makeAutoObservable } = require("mobx");

export default class OrderStore {
    private _order = {};
    private _ordersInProgress = {};

    constructor() {
        this._order = [];
        this._ordersInProgress = [];

        makeAutoObservable(this);
    }

    setOrder(order) {
        this._order = order;
    }

    get order() {
        return this._order;
    }

    setOrderInProgress(order) {
        this._ordersInProgress = order;
    }

    get orderInProgress() {
        return this._ordersInProgress;
    }
}

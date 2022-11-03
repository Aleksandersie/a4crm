const { makeAutoObservable } = require("mobx");

export default class PriceStore {
    private _retailPrice: {};
    private _priceList: {};
    private _currentPrice: {};

    constructor() {
        this._retailPrice = {};
        this._priceList = {};
        this._currentPrice = {};
        makeAutoObservable(this);
    }
    setPriceList(price) {
        this._priceList = price;
    }
    get priceList() {
        return this._priceList;
    }
    setCurrentPrice(price: number) {
        this._currentPrice = price;
    }
    get currentPrice() {
        return this._currentPrice;
    }

    setRetailPrice(price) {
        this._retailPrice = price;
    }
    get retailPrice() {
        return this._retailPrice;
    }
}

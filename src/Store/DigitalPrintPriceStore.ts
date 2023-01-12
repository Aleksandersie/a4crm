import { makeAutoObservable } from "mobx"


export interface IDigitalPrintPriceList{
    sheetFeedVinyl:number
    sheetFeedPrint:number

}


export default class DigitalPrintPriceStore {
    private _digitalPrintPriceList:IDigitalPrintPriceList;
    private _currentDigitalPrintPrice:number;
    constructor(){
        this._digitalPrintPriceList = {
            sheetFeedVinyl: 200,
            sheetFeedPrint:50
        }
        this._currentDigitalPrintPrice = null

        makeAutoObservable(this)
    }
    setDigitalPrintPriceList(priceList:IDigitalPrintPriceList){
        this._digitalPrintPriceList = priceList
    }
    get digitalPrintPriceList(){
        return this._digitalPrintPriceList
    }
    setCurrentDigitalPrintPrice(price){
        this._currentDigitalPrintPrice = price
    }
    get currentDigitalPrintPrice(){
        return this._currentDigitalPrintPrice
    }

}
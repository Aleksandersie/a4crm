enum digitalPrintPricesEnum{
    sheetFeedVinyl = "sheetFeedVinyl"

}
interface IDigitalPrintPriceList{
    sheetFeedVinyl:number

}

export default class DigitalPrintPriceStore {
    private _digitalPriceList:IDigitalPrintPriceList

    constructor(){
        this._digitalPriceList = {
            sheetFeedVinyl: 200
        }
    }

}
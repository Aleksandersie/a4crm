import { makeAutoObservable } from "mobx"

export interface IDigitalPrintCategory{
    id:number,
    desc:digitalCategory
}

enum digitalCategory{
    sheetFeed =  "Листовая печать" ,
    cards = "Визитки" ,
    sheetFeedVinyl =  "Наклейки в листах" ,
}

export default class DigitalPrintStore{
    private _digitalPrintCategory:IDigitalPrintCategory[]

    constructor(){
        this._digitalPrintCategory = [
            {
                id:1,
                desc:digitalCategory.sheetFeed
            },
            {
                id:2,
                desc:digitalCategory.cards
            },
            {
                id:3,
                desc:digitalCategory.sheetFeedVinyl
            },
        ]
        makeAutoObservable(this)
    }

    setDigitalPrintCategory(category){
        this._digitalPrintCategory = category
    }
    get digitalPrintCategory(){
        return this._digitalPrintCategory
    }

}
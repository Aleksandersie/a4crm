const { makeAutoObservable } = require("mobx");

export interface IPrice {
     priceCategory: string;
     ///print
     vinyl: number;
     banner: number;
     photoPaper: number;
     ///print&cut
     vinylPC: number;
     vinylPCLam:number
     //cut
     whiteVinylCut:number,
     colorVinylCut:number,
     cutOnlyRef: number,
     thermalVinyl:number|string,
     ///////////DIGITAL PRINT///////////////
     sheetFeedVinyl:number
     sheetFeedPrint:number
    
}

export enum enumCurrentPrice {
     vinyl,
     vinylPC,
     banner,
     photoPaper,
}

export default class PriceStore {
     private _retailPrice: {};
     private _currentPriceList: IPrice;
     private _currentPrice: {};

     constructor() {
          this._retailPrice = {};
          this._currentPriceList = <IPrice>{};
          this._currentPrice = {};
          makeAutoObservable(this);
     }
     setCurrentPriceList(price: IPrice) {
          this._currentPriceList = price;
     }
     get currentPriceList() {
          return this._currentPriceList;
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

import { makeAutoObservable } from "mobx";

export interface IDigitalPrintCategory {
     id: number;
     desc: digitalCategoryEnum;
}

export enum digitalCategoryEnum {
     sheetFeed = "Листовая печать",
     cards = "Визитки",
     sheetFeedVinyl = "Наклейки в листах",
}

export default class DigitalPrintStore {
     private _digitalPrintCategory: IDigitalPrintCategory[];
     private _selectedDigitalPrintCategory: IDigitalPrintCategory;
     constructor() {
          this._digitalPrintCategory = [
               {
                    id: 1,
                    desc: digitalCategoryEnum.sheetFeed,
               },
               {
                    id: 2,
                    desc: digitalCategoryEnum.cards,
               },
               {
                    id: 3,
                    desc: digitalCategoryEnum.sheetFeedVinyl,
               },
          ];
          this._selectedDigitalPrintCategory = <IDigitalPrintCategory>{};

          makeAutoObservable(this);
     }

     setDigitalPrintCategory(category) {
          this._digitalPrintCategory = category;
     }
     get digitalPrintCategory() {
          return this._digitalPrintCategory;
     }
     setSelectedDigitalPrintCategory(category: IDigitalPrintCategory) {
          this._selectedDigitalPrintCategory = category;
     }
     get selectedDigitalPrintCategory() {
          return this._selectedDigitalPrintCategory;
     }
}

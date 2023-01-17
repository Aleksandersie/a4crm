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
//////////////////////////////////////////////////
export interface IPaperSizeForSheetFeed {
     id: number;
     size: paperSizeForSheetFeedEnum;
}
export enum paperSizeForSheetFeedEnum {
     a3 = "А3",
     a4 = "A4",
     a5 = "А5",
     a6 = "А6",
}
////////////////////////////////////////////////////
export interface IPaperThickness {
     id: number;
     thickness: paperThicknessEnum;
}
export enum paperThicknessEnum {
     gr130 = "130 гр/м2",
     gr150 = "150 гр/м2",
     gr170 = "170 гр/м2",
     gr200 = "200 гр/м2",
     gr300 = "300 гр/м2",
}

export default class DigitalPrintStore {
     private _digitalPrintCategory: IDigitalPrintCategory[];
     private _selectedDigitalPrintCategory: IDigitalPrintCategory;
     /////////////////////////////////////
     private _currentPaperSize:any
     ////////////////////////////////////////
     private _paperSizeForSheetFeed: IPaperSizeForSheetFeed[];
     private _selectedPaperSizeForSheetFeed: IPaperSizeForSheetFeed;
     ///////////////////////////////////////
     private _paperThickness: IPaperThickness[];
     private _selectedPaperThickness: IPaperThickness;

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
          ///////////////////////////////////////////////////////////////////
          this._paperSizeForSheetFeed = [
               {
                    id: 1,
                    size: paperSizeForSheetFeedEnum.a3,
               },
               {
                    id: 2,
                    size: paperSizeForSheetFeedEnum.a4,
               },
               {
                    id: 3,
                    size: paperSizeForSheetFeedEnum.a5,
               },
               {
                    id: 4,
                    size: paperSizeForSheetFeedEnum.a6,
               },
          ];
          this._selectedPaperSizeForSheetFeed = <IPaperSizeForSheetFeed>{};
          ////////////////////////////////////////
          this._currentPaperSize = {}
          //////////////////////////////////
          this._paperThickness = [
               {
                    id: 1,
                    thickness: paperThicknessEnum.gr130,
               },
               {
                    id: 2,
                    thickness: paperThicknessEnum.gr150,
               },
               {
                    id: 3,
                    thickness: paperThicknessEnum.gr170,
               },
               {
                    id: 4,
                    thickness: paperThicknessEnum.gr200,
               },
               {
                    id: 5,
                    thickness: paperThicknessEnum.gr300,
               },
          ];
          this._selectedPaperThickness = <IPaperThickness>{};

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
     ///////////////////////////////////
     setPaperSizeForSheetFeed(paper) {
          this._paperSizeForSheetFeed = paper;
     }
     get paperSizeForSheetFeed() {
          return this._paperSizeForSheetFeed;
     }
     setSelectedPaperSizeForSheetFeed(paper: IPaperSizeForSheetFeed) {
          this._selectedPaperSizeForSheetFeed = paper;
     }
     get selectedPaperSizeForSheetFeed() {
          return this._selectedPaperSizeForSheetFeed;
     }
     setCurrentPaperSize(paper){
          this._currentPaperSize = paper
     }
     get currentPaperSize(){
          return this._currentPaperSize
     }
     /////////////////////////////////////////////
     setPaperThickness(paper) {
          this._paperThickness = paper;
     }
     get paperThickness() {
          return this._paperThickness;
     }
     setSelectedPaperThickness(paper: IPaperThickness) {
          this._selectedPaperThickness = paper;
     }
     get selectedPaperThickness() {
          return this._selectedPaperThickness;
     }
}

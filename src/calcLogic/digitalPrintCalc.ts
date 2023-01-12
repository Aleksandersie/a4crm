
import { IDigitalPrintPriceList } from "../Store/DigitalPrintPriceStore";
import { digitalCategoryEnum, paperSizeForSheetFeedEnum, paperThicknessEnum } from "../Store/DigitalPrintStore";


const orderArray:IDigitalPrintItem[] = []

interface IDigitalPrintItem{
    category:digitalCategoryEnum;
    paperSize:paperSizeForSheetFeedEnum;
    thickness:paperThicknessEnum;
    numberOfCopies:number|string;
    currentPrice:number   
    twoSided:boolean
}

class DigitalPrintOrderItem implements IDigitalPrintItem{
    category:digitalCategoryEnum;
    paperSize:paperSizeForSheetFeedEnum;
    thickness:paperThicknessEnum;
    numberOfCopies:number|string;
    currentPrice:number
    twoSided:boolean
    constructor(
        category:digitalCategoryEnum,
        paperSize:paperSizeForSheetFeedEnum,
        thickness:paperThicknessEnum,
        numberOfCopies:number|string,
        currentPrice:number,
        twoSided:boolean
        ){
      this.category = category
      this.paperSize = paperSize
      this.thickness = thickness
      this.numberOfCopies = numberOfCopies
      this.currentPrice = currentPrice
      this.twoSided = twoSided
    }
}

interface ICreateDigitalPrintItem{
    (
        category:digitalCategoryEnum,
        paperSize:paperSizeForSheetFeedEnum,
        thickness:paperThicknessEnum,
        numberOfCopies:number|string,
        currentPrice:number,
        twoSided:boolean
    ):void
}

export const createDigitalPrintItem:ICreateDigitalPrintItem = function(category,paperSize,thickness,numberOfCopies,currentPrice,twoSided){
 const item = new DigitalPrintOrderItem(category,paperSize,thickness,numberOfCopies,currentPrice,twoSided)
 orderArray.push(item)
 console.log(orderArray)
}

import { digitalCategoryEnum, paperSizeForSheetFeedEnum, paperThicknessEnum } from "../Store/DigitalPrintStore";


const orderArray:IDigitalPrintItem[] = []

interface IDigitalPrintItem{
    category:digitalCategoryEnum;
    paperSize:paperSizeForSheetFeedEnum;
    thickness:paperThicknessEnum;
    numberOfCopies:number|string;
    
}

class DigitalPrintOrderItem implements IDigitalPrintItem{
    category:digitalCategoryEnum;
    paperSize:paperSizeForSheetFeedEnum;
    thickness:paperThicknessEnum;
    numberOfCopies:number|string;
    constructor(
        category:digitalCategoryEnum,
        paperSize:paperSizeForSheetFeedEnum,
        thickness:paperThicknessEnum,
        numberOfCopies:number|string
        ){
      this.category = category
      this.paperSize = paperSize
      this.thickness = thickness
      this.numberOfCopies = numberOfCopies
    }
}

interface ICreateDigitalPrintItem{
    (
        category:digitalCategoryEnum,
        paperSize:paperSizeForSheetFeedEnum,
        thickness:paperThicknessEnum,
        numberOfCopies:number|string,
    ):any
}

export const createDigitalPrintItem:ICreateDigitalPrintItem = function(category,paperSize,thickness,numberOfCopies){
 const item = new DigitalPrintOrderItem(category,paperSize,thickness,numberOfCopies)
 orderArray.push(item)
 console.log(orderArray)
}
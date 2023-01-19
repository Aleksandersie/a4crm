import { paperSizeForSheetFeedEnum } from "../../Store/DigitalPrintStore";



const useDigitalPreflightPrice = (numberOfCopy,price,paperSize,twoSided)=>{
    //const razor = 100
    const twoSideMultiplier = 2
    let sheetCost = price
    if(paperSize===paperSizeForSheetFeedEnum.a4){
        sheetCost = price / 2
    }
    if(paperSize===paperSizeForSheetFeedEnum.a5){
        sheetCost = price / 4
    }
    if(paperSize===paperSizeForSheetFeedEnum.a6){
        sheetCost = price / 8
    }
    const totalPrintSum =  twoSided? 
    ((numberOfCopy*sheetCost)*twoSideMultiplier):(numberOfCopy*sheetCost)

    
    
    const onePcsCost = 1 * sheetCost
   
    
    return {totalPrintSum,onePcsCost}
} 

export default useDigitalPreflightPrice




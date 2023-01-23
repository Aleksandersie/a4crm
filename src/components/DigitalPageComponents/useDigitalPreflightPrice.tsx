import { digipalPrintDiscountSteps } from "../../Const";
import { paperSizeForSheetFeedEnum } from "../../Store/DigitalPrintStore";



const useDigitalPreflightPrice = (numberOfCopy:number,price,paperSize,twoSided)=>{
    //const razor = 100
   
    

    const twoSideMultiplier = 2
    let sheetCost = price


    
    const priceHandler = function(numberOfCopy){
        switch (numberOfCopy) {
            case 1:
              return 1111
              break;
            case 2:
                return 2222
              break;
            case 3:
              alert( 'Перебор' );
              break;
            default:
              console.log( "Нет таких значений" );
          }
    }
    console.log(priceHandler(numberOfCopy));
    

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




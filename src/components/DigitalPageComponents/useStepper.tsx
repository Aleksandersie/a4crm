import { digitalPrintDiscountSteps, digitalPrintDiscountValue } from "../../Const";


const useStepper = (numberOfCopy,price)=>{
    //let discount:number = null
    let discountPrice = price
    const discountHandler =(numberOfCopy)=>{

            if(numberOfCopy===1){
                return discountPrice = price
            }
            if(numberOfCopy=>digitalPrintDiscountSteps.copies_2 && numberOfCopy<=digitalPrintDiscountSteps.copies_4){
                discountPrice  = price - (price*digitalPrintDiscountValue.stage_1)/100
            }
            if(numberOfCopy>digitalPrintDiscountSteps.copies_4&&numberOfCopy<=digitalPrintDiscountSteps.copies_6){

                discountPrice = price - (price*digitalPrintDiscountValue.stage_2)/100
            }



    }



    discountHandler(numberOfCopy)
    

   
    
    return {discountPrice}
} 

export default useStepper
import { digitalPrintDiscountSteps } from "../../Const";


const useStepper = (numberOfCopy,price)=>{
    let discount:number = null


    const discountHandler =(numberOfCopy)=>{
        switch (numberOfCopy) {
            case digitalPrintDiscountSteps.copies_1:
                return discountPrice = price
                break;
            case digitalPrintDiscountSteps.copies_2:
                return discountPrice  = 5
                break;
            case 5:
                //alert( 'Перебор' );
                break;
            default:
                console.log('не обработано');
        }
    }

    let discountPrice = null

    discountHandler(numberOfCopy)
    

   
    
    return {discountPrice}
} 

export default useStepper
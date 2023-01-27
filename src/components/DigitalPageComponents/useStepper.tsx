import { digitalPrintDiscountSteps, digitalPrintDiscountValue } from "../../Const";


const useStepper = (numberOfCopy,price)=>{

    let discountPrice = price
    const arr = []
    const priceLength = 250
    const start = 90
    const end = 40

    arr.push(start)
    const diff = start - end
    const discount = diff/priceLength
    for (  let i = 0;i<priceLength; i++ ){
        let res = arr[arr.length-1]- discount
        arr.push(res)
    }
    console.log(arr);

    const discountHandler =(numberOfCopy)=> {

        if (numberOfCopy === 1) {
            return discountPrice = price
        }
        if (numberOfCopy => digitalPrintDiscountSteps.copies_2 && numberOfCopy <= digitalPrintDiscountSteps.copies_4) {
            discountPrice = price - (price * digitalPrintDiscountValue.stage_1) / 100
        }
        if (numberOfCopy > digitalPrintDiscountSteps.copies_4 && numberOfCopy <= digitalPrintDiscountSteps.copies_6) {
            discountPrice = price - (price * digitalPrintDiscountValue.stage_2) / 100

        }
        if (numberOfCopy > digitalPrintDiscountSteps.copies_6) {
           // discountPrice = price - (price * digitalPrintDiscountValue.stage_2) / 100
            discountPrice = arr[numberOfCopy]
        }

    }

    discountHandler(numberOfCopy)
    

   
    
    return {discountPrice}
} 

export default useStepper
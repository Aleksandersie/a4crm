import { digitalPrintDiscountSteps, digitalPrintDiscountValue } from "../../Const";


const useStepper = (numberOfCopy,price)=>{

    let discountPrice = price
    /////////////////////////

    const arr = []

    const priceLength = 250
    const startPrice = 100
    const endPrice = 40

    const firstPriceRangeEnd = startPrice * 0.65
    const firstPriceArray = []
    const firstPriceRangeDiff = startPrice - firstPriceRangeEnd
    const firstPriceRangeLength = 9
    const firstDiscountValue = Number((firstPriceRangeDiff / firstPriceRangeLength).toFixed())
    firstPriceArray.push(startPrice)
    for (let i = 0; i<firstPriceRangeLength;i++){
        let result = firstPriceArray[firstPriceArray.length-1] - firstDiscountValue
        firstPriceArray.push(result)
    }
    console.log(firstPriceArray);
    //////////////////////////////////////////////
    const secondPriceRangeDiff = firstPriceArray[firstPriceArray.length-1] - 10
    console.log(secondPriceRangeDiff);

    // arr.push(start)
    // const diff = start - end
    // const discount = diff/priceLength
    // for (  let i = 0;i<priceLength; i++ ){
    //     let res = arr[arr.length-1]- discount
    //     arr.push(res)
    // }
    // console.log(arr);

    const discountHandler =(numberOfCopy)=> {

        if (numberOfCopy <= firstPriceRangeLength ) {
            discountPrice = firstPriceArray[numberOfCopy-1]
        }
        // if (numberOfCopy => digitalPrintDiscountSteps.copies_2 && numberOfCopy <= digitalPrintDiscountSteps.copies_4) {
        //     discountPrice = price - (price * digitalPrintDiscountValue.stage_1) / 100
        // }
        // if (numberOfCopy > digitalPrintDiscountSteps.copies_4 && numberOfCopy <= digitalPrintDiscountSteps.copies_6) {
        //     discountPrice = price - (price * digitalPrintDiscountValue.stage_2) / 100
        //
        // }
        // if (numberOfCopy > digitalPrintDiscountSteps.copies_6) {
        //     // discountPrice = price - (price * digitalPrintDiscountValue.stage_2) / 100
        //     discountPrice = arr[numberOfCopy]
        // }

        // if (numberOfCopy === 1) {
        //     return discountPrice = price
        // }
        // if (numberOfCopy => digitalPrintDiscountSteps.copies_2 && numberOfCopy <= digitalPrintDiscountSteps.copies_4) {
        //     discountPrice = price - (price * digitalPrintDiscountValue.stage_1) / 100
        // }
        // if (numberOfCopy > digitalPrintDiscountSteps.copies_4 && numberOfCopy <= digitalPrintDiscountSteps.copies_6) {
        //     discountPrice = price - (price * digitalPrintDiscountValue.stage_2) / 100
        //
        // }
        // if (numberOfCopy > digitalPrintDiscountSteps.copies_6) {
        //    // discountPrice = price - (price * digitalPrintDiscountValue.stage_2) / 100
        //     discountPrice = arr[numberOfCopy]
        // }

    }

    discountHandler(numberOfCopy)
    

   
    
    return {discountPrice}
} 

export default useStepper
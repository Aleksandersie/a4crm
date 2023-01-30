import { digitalPrintDiscountSteps, digitalPrintDiscountValue } from "../../Const";


const useStepper = (numberOfCopy,price)=>{

    let discountPrice = price
    /////////////////////////

    const startPrice = 100
    const endPrice = 30


    const firstPriceRangeEnd = startPrice * 0.55
    const firstPriceArray = []
    const firstPriceRangeDiff = startPrice - firstPriceRangeEnd
    const firstPriceRangeLength = 9
    const firstDiscountValue = firstPriceRangeDiff / firstPriceRangeLength
    firstPriceArray.push(startPrice)

    for (let i = 0; i<firstPriceRangeLength;i++){
        let result = firstPriceArray[firstPriceArray.length-1] - firstDiscountValue
        firstPriceArray.push(Number(result.toFixed()))
    }
    //////////////////////////////////////////////
    const secondStartPrice = firstPriceArray[firstPriceArray.length-1]-0.5
    const secondPriceEnd = firstPriceArray[firstPriceArray.length-1] - 10
    const secondPriceRangeDiff = secondStartPrice - secondPriceEnd
    const secondPriceArray = []
    const secondPriceRangeLength = 49
    const secondDiscountValue = secondPriceRangeDiff/secondPriceRangeLength
    secondPriceArray.push(secondStartPrice)
    for (let i = 0; i<secondPriceRangeLength;i++){
        let result = secondPriceArray[secondPriceArray.length-1] - secondDiscountValue
        secondPriceArray.push(Number(result.toFixed(2)))
    }

    //////////////////////////////////////////////
    const thirdStartPrice = secondPriceArray[secondPriceArray.length-1]
    const thirdPriceEnd = secondPriceArray[secondPriceArray.length-1] - 10
    const thirdPriceRangeDiff = thirdStartPrice - thirdPriceEnd
    const thirdPriceArray = []
    const thirdPriceRangeLength = 99
    const thirdDiscountValue = thirdPriceRangeDiff/thirdPriceRangeLength
    thirdPriceArray.push(thirdStartPrice)
    for (let i = 0; i<thirdPriceRangeLength;i++){
        let result = thirdPriceArray[thirdPriceArray.length-1] - thirdDiscountValue
        thirdPriceArray.push(Number(result.toFixed(2)))
    }
    /////////////////////////////////////////////
    const fourthStartPrice = thirdPriceArray[thirdPriceArray.length-1]
    const fourthPriceEnd = thirdPriceArray[thirdPriceArray.length-1] - 5
    const fourthPriceRangeDiff = fourthStartPrice - fourthPriceEnd
    const fourthPriceArray = []
    const fourthPriceRangeLength = 89
    const fourthDiscountValue = fourthPriceRangeDiff/fourthPriceRangeLength
    fourthPriceArray.push(fourthStartPrice)
    for (let i = 0; i<fourthPriceRangeLength;i++){
        let result = fourthPriceArray[fourthPriceArray.length-1] - fourthDiscountValue
        fourthPriceArray.push(Number(result.toFixed(2)))
    }
    ////////////////////////////////////////////
    const mainPriceArray = [...firstPriceArray,...secondPriceArray,...thirdPriceArray,...fourthPriceArray]
    console.log('price is',mainPriceArray[numberOfCopy-1]);

    const discountHandler =(numberOfCopy)=> {
        discountPrice = mainPriceArray[numberOfCopy-1]
        if(numberOfCopy>mainPriceArray.length) {
            discountPrice = mainPriceArray[mainPriceArray.length-1]
        }
    }

    discountHandler(numberOfCopy)
    

   
    
    return {discountPrice}
} 

export default useStepper
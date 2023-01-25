import { digitalPrintDiscountSteps, digitalPrintDiscountValue } from "../../Const";


const useStepper = (numberOfCopy,price)=>{
    //let discount:number = null
    let discountPrice = price

    const priceLength = 500
    for (  let i = 0;i++; i<500 ){
        let counter =+ 1;
        console.log("counter", counter);
    }
    const discountHandler =(numberOfCopy)=>{

            if(numberOfCopy===1){
                return discountPrice = price
            }
            if(numberOfCopy=>digitalPrintDiscountSteps.copies_2 && numberOfCopy<=digitalPrintDiscountSteps.copies_4){
                discountPrice  = price - (price*digitalPrintDiscountValue.stage_1)/100
            }
            if(numberOfCopy>digitalPrintDiscountSteps.copies_4 && numberOfCopy<=digitalPrintDiscountSteps.copies_6){
                discountPrice = price - (price*digitalPrintDiscountValue.stage_2)/100
                const priceLength = 100
                const start = 100
                const end = 40
                const arr = []
                arr.push(start)
                const diff = start - end
                const discount = diff/priceLength
                for (  let i = 0;i<priceLength; i++ ){
                     let res = arr[arr.length-1]- discount
                     arr.push(res)
                    // for(let j = 0;j<arr.length; j++){
                    //
                    // }

                    // console.log("counter", counter);
                }
                console.log(arr);

            }


    }



    discountHandler(numberOfCopy)
    

   
    
    return {discountPrice}
} 

export default useStepper
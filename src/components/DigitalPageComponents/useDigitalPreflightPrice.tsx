import { useState } from "react"

//const [value, setValue] = useState('')
const useDigitalPreflightPrice = (numberOfCopy,price)=>{
    
    const totalPrintSum = numberOfCopy*price
    const onePcsCost = 1 * price
    console.log(totalPrintSum)
    return {totalPrintSum,onePcsCost}
} 

export default useDigitalPreflightPrice




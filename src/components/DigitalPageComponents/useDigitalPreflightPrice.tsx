


const useDigitalPreflightPrice = (numberOfCopy,price,paperSize)=>{
    
    const totalPrintSum = numberOfCopy*price
    const onePcsCost = 1 * price
    console.log(totalPrintSum)
    console.log(`papperSize is ${paperSize}`);
    
    return {totalPrintSum,onePcsCost}
} 

export default useDigitalPreflightPrice




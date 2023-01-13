

const useDigitalPreflightPrice = (numberOfCopy,price)=>{

    const totalPrintSum = numberOfCopy*price
    console.log(totalPrintSum)
    return {totalPrintSum}
} 

export default useDigitalPreflightPrice




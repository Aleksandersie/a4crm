import { useContext } from "react";
import { Context } from "../..";
import { digitalCategoryEnum } from "../../Store/DigitalPrintStore"



const useDigitalPrintPriceSelector=(category)=>{
    // const {price} = useContext(Context) 
   if(category===digitalCategoryEnum.sheetFeed){
    // console.log(price);
    
   }
}

export default useDigitalPrintPriceSelector
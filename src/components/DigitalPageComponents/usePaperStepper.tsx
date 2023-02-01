import React from "react";
import { paperThicknessEnum } from "../../Store/DigitalPrintStore";

const UsePaperStepper = (thickness, price) => {
     let paperCost = null;
     const paperLength = Object.keys(paperThicknessEnum).length;
     const costStep = price / paperLength;

     if(thickness===paperThicknessEnum.gr130){
          paperCost = costStep
     }
     if (thickness===paperThicknessEnum.gr150){
          paperCost = costStep * 2
     }
     if (thickness===paperThicknessEnum.gr170){
          paperCost = costStep * 3
     }
     console.log('step',paperCost);
     return { paperCost };
};

export default UsePaperStepper;

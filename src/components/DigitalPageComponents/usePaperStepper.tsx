import React from "react";
import { paperThicknessEnum } from "../../Store/DigitalPrintStore";

const UsePaperStepper = (thickness, price) => {
     let paperCost = null;

     const paperLength = Object.keys(paperThicknessEnum).length;
     const paperMultiplier = []
     let j = 0
     for (let i = 0; i<paperLength; i++){
        j ++
        paperMultiplier.push(j)
     }

     const costStep = price / paperLength;

     if(thickness===paperThicknessEnum.gr130){
          paperCost = 0
     }
     if (thickness===paperThicknessEnum.gr150){
          paperCost = costStep
     }
     if (thickness===paperThicknessEnum.gr170){
          paperCost = costStep * 2
     }
     if (thickness===paperThicknessEnum.gr200){
          paperCost = costStep * 3
     }
     if (thickness===paperThicknessEnum.gr200){
          paperCost = costStep * 4
     }
     if (thickness===paperThicknessEnum.gr300){
          paperCost = costStep * 5
     }
     console.log('step',paperCost);
     return { paperCost };
};

export default UsePaperStepper;

import React from "react";
import { paperThicknessEnum } from "../../Store/DigitalPrintStore";

const UsePaperStepper = (thickness, price) => {
     let paperCost = null;
     const paperLength = Object.keys(paperThicknessEnum).length;
     const costStep = price / paperLength;
     console.log("th", thickness, "price", price);
     console.log("step", costStep);
     return { paperCost };
};

export default UsePaperStepper;

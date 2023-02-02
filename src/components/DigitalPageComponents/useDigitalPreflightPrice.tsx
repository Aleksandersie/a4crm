import { paperSizeForSheetFeedEnum } from "../../Store/DigitalPrintStore";
import useStepper from "./useStepper";
import usePaperStepper from "./usePaperStepper";

const useDigitalPreflightPrice = (numberOfCopy, price, paperSize, twoSided, thickness) => {
     //const razor = 100

     const temporaryPaperPrice = 17;
     const twoSideMultiplier = 2;
     //let sheetCost = price;

     const { discountPrice } = useStepper(numberOfCopy, price);
     const { paperCost } = usePaperStepper(thickness, temporaryPaperPrice);
     let sheetCost = price;
     const currenDiscountPrice = discountPrice;

     if (paperSize === paperSizeForSheetFeedEnum.a3) {
          sheetCost = currenDiscountPrice;
     }
     if (paperSize === paperSizeForSheetFeedEnum.a4) {
          sheetCost = currenDiscountPrice / 2;
     }
     if (paperSize === paperSizeForSheetFeedEnum.a5) {
          sheetCost = currenDiscountPrice / 4;
     }
     if (paperSize === paperSizeForSheetFeedEnum.a6) {
          sheetCost = currenDiscountPrice / 8;
     }
     const totalPrintSum = twoSided
          ? (numberOfCopy * sheetCost * twoSideMultiplier).toFixed(2)
          : (numberOfCopy * sheetCost).toFixed(2);

     const onePcsCost = (1 * sheetCost)+paperCost;

     console.log("paper",paperCost);

     return { totalPrintSum, onePcsCost };
};

export default useDigitalPreflightPrice;

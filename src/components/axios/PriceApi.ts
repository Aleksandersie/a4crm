import { IPrice } from "../../Store/PriceStore";
import { host } from "./axios";

export const getRetailPrice = async function () {
     const { data } = await host.get<IPrice>("api/price/getRetailPrice");
     return data;
};
export const getWholesalePrice = async function () {
     const { data } = await host.get<IPrice>("api/price/getWholesalePrice");
     return data;
};
export const updateRetailPriceList = async function (
     priceCategory: string,
     ////////////////////PRINT////////////////////////////
     vinyl: string,
     banner: string,
     ////////////////////PRINT&CUT////////////////////////
     vinylPC: string,
     vinylPCLam: string
     ////////////////////CUT//////////////////////////////
) {
     const { data } = await host.put("api/price/updateRetailPrice", {
          priceCategory,
          ////////////////////PRINT////////////////////////////
          vinyl,
          banner,
          ////////////////////PRINT&CUT////////////////////////
          vinylPC,
          vinylPCLam,
          ////////////////////CUT//////////////////////////////
     });
     return data;
};
export const updateWholesalePriceList = async function (
     priceCategory: string,
     vinyl: string,
     vinylPC: string,
     banner: string
) {
     const { data } = await host.put("api/price/updateWholesalePrice", {
          priceCategory,
          vinyl,
          vinylPC,
          banner,
     });
     return data;
};

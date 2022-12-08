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

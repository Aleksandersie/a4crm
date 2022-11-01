import { host } from "./axios";

export const getRetailPrice = async function () {
  const { data } = await host.get("api/price");
  return data;
};

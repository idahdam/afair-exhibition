import { gatewayHelper } from "../utils";

const getArt = async () => {
  const body = {};
  const response = await gatewayHelper.http("GET", "arts?populate=*", body);
  return response;
};

export const artService = {
  getArt,
};

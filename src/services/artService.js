import { gatewayHelper } from "../utils";

const getArt = async () => {
  const body = {};
  const response = await gatewayHelper.http("GET", "", body);
  return response;
};

export const artService = {
  getAboutUs,
};

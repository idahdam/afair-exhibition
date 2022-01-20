import { gatewayHelper } from "../utils";

const getArt = async () => {
  const body = {};
  const response = await gatewayHelper.http("GET", "arts?populate=*", body);
  return response;
};

const getArtWithParams = async (params) => {
  const body = {};
  const response = await gatewayHelper.http(
    "GET",
    `arts?filters[tags][$eq]=${params}&populate=*`,
    body
  );
  return response;
};

const getArtsSorted = async (params) => {
  const body = {};
  const response = await gatewayHelper.http(
    "GET",
    `arts?sort=${params}&populate=*`,
    body
  );
  return response;
};

const getArtsFiltered = async (params) => {
  const body = {};
  const response = await gatewayHelper.http(
    "GET",
    `arts?filters[part][$eq]=${params}&populate=*`,
    body
  );
  return response;
};

export const artService = {
  getArt,
  getArtWithParams,
  getArtsSorted,
  getArtsFiltered,
};

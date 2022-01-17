import { gatewayHelper } from "../utils";

const postForm = async () => {
  const body = {};
  const response = await gatewayHelper.http("GET", "", body);
  return response;
};

export const formService = {
  postForm,
};

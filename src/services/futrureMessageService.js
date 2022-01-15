import { gatewayHelper } from "../utils";

const postFutureMessage = async (name) => {
  const body = {};
  const response = await gatewayHelper.http("GET", "", body);
  return response;
};

export const futureMessageService = {
  postForm,
};

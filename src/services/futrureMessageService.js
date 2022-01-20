import { gatewayHelper } from "../utils";

const postFutureMessage = async (name) => {
  const body = {};
  const response = await gatewayHelper.http("POST", "future-messages", body);
  return response;
};

export const futureMessageService = {
  postFutureMessage,
};

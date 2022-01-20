import { gatewayHelper } from "../utils";

const postFutureMessage = async (payload) => {
  const body = {};
  const response = await gatewayHelper.http(
    "POST",
    "future-messages",
    body,
    payload
  );
  return response;
};

export const futureMessageService = {
  postFutureMessage,
};

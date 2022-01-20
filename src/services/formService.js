import { gatewayHelper } from "../utils";

const postForm = async (payload) => {
  const body = {};
  const response = await gatewayHelper.http(
    "POST",
    "guest-lists",
    body,
    payload
  );
  return response;
};

export const formService = {
  postForm,
};

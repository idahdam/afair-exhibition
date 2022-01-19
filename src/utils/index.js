import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

async function http(method, endpoint, body = null, data) {
  const headers = {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  };

  let response = null;

  if (method) {
    response = await axios({
      url: `${BASE_URL}/${endpoint}`,
      method: method.toUpperCase(),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      params: body,
      data: data,
    });
  }

  return response;
}

export const gatewayHelper = {
  http,
};

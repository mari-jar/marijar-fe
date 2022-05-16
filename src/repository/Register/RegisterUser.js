import fetch, { basicAuth } from "../../utils/fetch";
import { baseUrl } from "../index";

const registerUser = (data) => {
  const configs = {
    method: "POST",
    url: `${baseUrl}/user`,
    data,
    headers: {
      Authorization: basicAuth,
    },
  };
  return fetch(configs);
};

export default registerUser;

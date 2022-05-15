import fetch, { basicAuth } from "../../utils/fetch";
import { baseUrl } from "../index";

const loginRepository = (data) => {
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

export default loginRepository;

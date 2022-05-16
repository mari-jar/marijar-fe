import fetch, { basicAuth } from "../../utils/fetch";
import { baseUrl } from "../index";

const requestEmailVerif = (data) => {
  const configs = {
    method: "POST",
    url: `${baseUrl}/user/verify/send`,
    data,
    headers: {
      Authorization: basicAuth,
    },
  };
  return fetch(configs);
};

export default requestEmailVerif;

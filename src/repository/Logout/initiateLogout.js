import fetch from "../../utils/fetch";
import { getToken } from "../../utils/storage";
import { baseUrl } from "../index";

const logoutRepository = (data) => {
  const configs = {
    method: "POST",
    url: `${baseUrl}/user/logout`,
    data,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  };
  return fetch(configs);
};

export default logoutRepository;

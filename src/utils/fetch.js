import axios from "axios";

const fetch = (options) => {
  return new Promise((resolve, reject) => {
    axios(options)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        const defaultError = {
          code: 500,
          status: "error",
          message: "Failed to fetch data. Please contact developer.",
        };
        if (!err.response) reject(defaultError);
        else if (!err.response.data) reject(defaultError);
        else reject(err.response.data);
      });
  });
};

const username = "marijar";
const password = "a9f1aef3-7ee0-4247-a69e-df5a05580824";

export const basicAuth = "Basic" + btoa(username + ":" + password);

export default fetch;

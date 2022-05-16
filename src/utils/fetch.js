import axios from "axios";
import { baseUrl } from "../repository";
import {
  getUserData,
  getRefreshToken,
  setExpireTime,
  setToken,
} from "./storage";
import JwtDecode from "jwt-decode";

const username = "marijar";
const password = "a9f1aef3-7ee0-4247-a69e-df5a05580824";

export const basicAuth = "Basic " + btoa(username + ":" + password);

const fetch = (options) => {
  return new Promise((resolve, reject) => {
    axios(options)
      .then((res) => {
        resolve(res.data);
      })
      .catch(async (err) => {
        const defaultError = {
          code: 500,
          status: "error",
          message: "Failed to fetch data. Please contact developer.",
        };
        if (!err.response) reject(defaultError);
        else if (!err.response.data) reject(defaultError);
        else if (
          [
            "Token is expired",
            "Access token expired!",
            "Authorization token expired",
          ].includes(err.response.data?.message)
        ) {
          fetchRefreshToken((success) => {
            if (success) {
              options = {
                ...options,
                headers: {
                  Authorization: getToken(),
                },
              };
              axios(options)
                .then(({ data }) => {
                  resolve(data);
                })
                .catch((err) => {
                  reject(err.response.data);
                });
            } else {
              reject(defaultError);
              localStorage.clear();
              location.href = "/login";
            }
          });
        } else reject(err.response.data);
      });
  });
};

export async function fetchRefreshToken(callback) {
  if (getUserData()) {
    const options = {
      method: "POST",
      url: `${baseUrl}/user/refresh-token`,
      data: {
        refreshToken: getRefreshToken(),
      },
      headers: {
        Authorization: basicAuth,
      },
    };

    axios(options)
      .then((res) => {
        if (res.data.data.accessToken) {
          const jwtDecode = JwtDecode(res.data.data.accessToken);
          setExpireTime(jwtDecode.exp);
          setToken(res.data.data.accessToken);
          callback(true);
        } else {
          localStorage.clear();
          location.href = "/dashboard";
          callback(false);
        }
      })
      .catch(() => {
        localStorage.clear();
        location.href = "/dashboard";
        callback(false);
      });
  } else {
    callback(false);
  }
}

export default fetch;

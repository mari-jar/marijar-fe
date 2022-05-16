import { useNavigate } from "react-router";
import Cookies from "universal-cookie";
import CryptoJs from "crypto-js";
import { useSelector, useDispatch } from "react-redux";
import { OPTIONS, LOADING, STATUS } from "../redux/keys";
import initiateLogin from "../../../repository/Login/initiateLogin";
import { encKey } from "../../../configs/globalKeys";
import { useSnackbar } from "notistack";
import jwtDecode from "jwt-decode";
import {
  setExpireTime,
  setRefreshToken,
  setToken,
  setUserData,
} from "../../../utils/storage";

function useAction() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = useSelector((s) => s.login);
  const { enqueueSnackbar } = useSnackbar();

  const { REMEMBER, FORGET } = login;

  const cookies = new Cookies();

  const setRemember = (remember) => {
    dispatch({ type: OPTIONS.REMEMBER, remember: remember });
  };

  const forgetPassword = (f) => {
    dispatch({ type: OPTIONS.FORGET, forget: f });
  };

  const _onSubmitForget = async (val) => {
    console.log(val);
  };

  const _onSubmit = async (val) => {
    try {
      dispatch({ type: LOADING.SUBMIT, loading: true });

      if (REMEMBER) {
        const encryptedData = CryptoJs.AES.encrypt(JSON.stringify(val), encKey);
        cookies.set("userInfo", encryptedData.toString(), { path: "/" });
      } else {
        cookies.remove("userInfo");
      }

      const {
        data: { accessToken, id, refreshToken },
      } = await initiateLogin(val);

      const decodedData = jwtDecode(accessToken);

      setToken(accessToken);
      setExpireTime(decodedData.exp);
      setUserData({
        id: id,
        sub: decodedData.sub,
      });
      setRefreshToken(refreshToken);

      navigate("/dashboard");
    } catch (error) {
      const message =
        error.message === "Surel atau kata sandi anda salah"
          ? "Your email or password is incorrect"
          : error.message;
      enqueueSnackbar(message, {
        variant: "error",
        preventDuplicate: true,
        autoHideDuration: 2000,
      });

      dispatch({ type: STATUS.FAILED, message: error.message });
    } finally {
      dispatch({ type: LOADING.SUBMIT, loading: false });
    }
  };

  return {
    _onSubmit,
    _onSubmitForget,
    remember: REMEMBER,
    forget: FORGET,
    setRemember,
    forgetPassword,
  };
}

export default useAction;

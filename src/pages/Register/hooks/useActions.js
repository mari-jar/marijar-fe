import { useEffect } from "react";
import { useSnackbar } from "notistack";
import { CONTAINER, LOADING, STATUS } from "../redux/keys";
import registerUser from "../../../repository/Register/RegisterUser";
import requestEmailVerif from "../../../repository/Register/RequestEmailVerification";
import { useDispatch, useSelector } from "react-redux";
import { setUserData, getUserData } from "../../../utils/storage";

function useAction() {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { WAITING_FOR_CONFIRMATION } = useSelector((s) => s.register);

  const setWaitingConfirmation = (value) => {
    dispatch({ type: CONTAINER.WAITING_FOR_CONFIRMATION, waiting: value });
  };

  useEffect(() => {
    if (WAITING_FOR_CONFIRMATION) {
      enqueueSnackbar("Please check your email!", {
        variant: "info",
        preventDuplicate: true,
        autoHideDuration: 2000,
      });
    }
  }, [WAITING_FOR_CONFIRMATION]);

  const _requestEmail = async () => {
    try {
      const { id } = getUserData();

      await requestEmailVerif({ id: id });
      enqueueSnackbar("Email Sent! Please check your email!", {
        variant: "info",
        preventDuplicate: true,
        autoHideDuration: 2000,
      });
    } catch (error) {
      enqueueSnackbar("Please wait until you can send another verification", {
        variant: "error",
        preventDuplicate: true,
        autoHideDuration: 2000,
      });
    }
  };

  const _onSubmit = async (value) => {
    try {
      dispatch({ type: LOADING.SUBMIT, loading: true });

      const {
        data: { id },
      } = await registerUser({
        name: value.name,
        email: value.email,
        username: value.email,
        phoneNumber: value.phoneNumber,
        password: value.password,
      });

      setUserData({ id: id });

      enqueueSnackbar("Your account is registered!", {
        variant: "success",
        preventDuplicate: true,
        autoHideDuration: 2000,
      });
      await requestEmailVerif({ id: id });

      dispatch({ type: CONTAINER.WAITING_FOR_CONFIRMATION, waiting: true });
    } catch (error) {
      enqueueSnackbar(error.message, {
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
    _requestEmail,
    _onSubmit,
    setWaitingConfirmation,
  };
}

export default useAction;

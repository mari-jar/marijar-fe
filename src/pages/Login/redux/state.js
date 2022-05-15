import { LOADING, OPTIONS, STATUS } from "./keys";

const initialState = {
  [LOADING.SUBMIT]: false,
  [OPTIONS.REMEMBER]: false,
  [OPTIONS.FORGET]: false,
  message: "",
};

export default function reducer(state = initialState, action) {
  const { type, remember, loading, message, forget } = action;

  switch (type) {
    case LOADING.SUBMIT:
      return {
        ...state,
        [LOADING.SUBMIT]: loading,
        message: "",
      };
    case OPTIONS.REMEMBER:
      return {
        ...state,
        [OPTIONS.REMEMBER]: remember,
      };
    case OPTIONS.FORGET:
      return {
        ...state,
        [OPTIONS.FORGET]: forget,
      };
    case STATUS.FAILED:
      return {
        ...state,
        message: message,
      };
    default:
      return state;
  }
}

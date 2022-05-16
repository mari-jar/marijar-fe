import { CONTAINER, LOADING, STATUS } from "./keys";

const initialState = {
  [LOADING.SUBMIT]: false,
  [CONTAINER.WAITING_FOR_CONFIRMATION]: true,
  message: "",
};

export default function reducer(state = initialState, action) {
  const { type, waiting, loading } = action;

  switch (type) {
    case LOADING.SUBMIT:
      return {
        ...state,
        [LOADING.SUBMIT]: loading,
        message: "",
      };
    case CONTAINER.WAITING_FOR_CONFIRMATION:
      return {
        ...state,
        [CONTAINER.WAITING_FOR_CONFIRMATION]: waiting,
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

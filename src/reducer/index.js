import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { routerReducer } from "react-router-redux";
import loginReducer from "../pages/Login/redux/state";

const rootReducer = combineReducers({
  form: formReducer,
  routerReducer,
  login: loginReducer,
});

export default rootReducer;

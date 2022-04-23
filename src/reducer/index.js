import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { routerReducer } from "react-router-redux";

const rootReducer = combineReducers({ form: formReducer, routerReducer });

export default rootReducer;

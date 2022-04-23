import { reduxForm } from "redux-form";
import Component from "./loginForm";
import validate from "./validate";

const initialValues = {
  email: "",
  password: "",
};

export default reduxForm({
  form: "login",
  validate,
  initialValues,
  touchOnBlur: false,
})(Component);

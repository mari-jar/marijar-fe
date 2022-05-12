import { reduxForm } from "redux-form";
import Component from "./registerForm";
import validate from "./validate";

const initialValues = {
  email: "",
  name: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
};

export default reduxForm({
  form: "register",
  validate,
  initialValues,
})(Component);

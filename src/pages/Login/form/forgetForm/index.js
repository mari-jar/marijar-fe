import { reduxForm } from "redux-form";
import Component from "./forgetForm";
import validate from "./validate";

const initialValues = {
  email: "",
};

export default reduxForm({
  form: "forget",
  validate,
  initialValues,
})(Component);

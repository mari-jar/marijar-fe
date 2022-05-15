import React, { useEffect } from "react";
import {
  InputBase,
  FormControl,
  FormHelperText,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Button,
  CircularProgress,
} from "@mui/material";
import { Field } from "redux-form";
import { useNavigate } from "react-router";
import useAction from "../../hooks/useAction";
import Cookies from "universal-cookie";
import CryptoJs from "crypto-js";
import { useSelector } from "react-redux";
import { encKey } from "../../../../configs/globalKeys";

const renderField = ({
  classes,
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <FormControl className={classes.formControl}>
    <p className={classes.formTitle}>{label}</p>
    <InputBase className={classes.inputBase} {...input} {...custom} />
    {touched && invalid && (
      <FormHelperText className={classes.textError}>{error}</FormHelperText>
    )}
  </FormControl>
);

const LoginForm = (props) => {
  const { handleSubmit, classes, change } = props;
  const { remember, setRemember, forgetPassword } = useAction();
  const cookies = new Cookies();

  const userData = cookies.get("userInfo");

  const { SUBMIT } = useSelector((s) => s.login);

  const navigate = useNavigate();

  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction="column" justifyContent="start">
        <Grid item xs={12}>
          <Box mt={1}>
            <Field
              classes={classes}
              fullWidth
              name="email"
              label="Email"
              placeholder="Email Address"
              component={renderField}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            mt={2}
            display="flex"
            flexDirection={"row"}
            justifyContent="end"
            alignItems={"center"}
          >
            <p
              className={classes.forgotButton}
              onClick={(e) => {
                e.preventDefault();
                forgetPassword(false);
              }}
            >
              Back to Sign In
            </p>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box px={2} mt={4}>
            <Button className={classes.buttonLogin} fullWidth type="submit">
              {SUBMIT ? (
                <CircularProgress style={{ color: "#fff" }} size={30} />
              ) : (
                "Reset Password"
              )}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;

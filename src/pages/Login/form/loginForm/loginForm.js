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

  useEffect(() => {
    if (userData) {
      const user = CryptoJs.AES.decrypt(userData, encKey).toString(
        CryptoJs.enc.Utf8
      );

      const data = JSON.parse(user);
      change("email", data.email);
      change("password", data.password);

      setRemember(true);
    } else {
      setRemember(false);
    }
  }, [userData]);

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
          <Box mt={1}>
            <Field
              classes={classes}
              fullWidth
              name="password"
              label="Password"
              type="password"
              placeholder="Password"
              component={renderField}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            mt={2}
            display="flex"
            flexDirection={"row"}
            justifyContent="space-between"
            alignItems={"center"}
          >
            <FormControl>
              <FormControlLabel
                className={classes.rememberButton}
                control={
                  <Checkbox
                    checked={remember}
                    onChange={() => {
                      setRemember(!remember);
                    }}
                  />
                }
                label="Remember Me"
              />
            </FormControl>
            <p
              className={classes.forgotButton}
              onClick={(e) => {
                e.preventDefault();
                forgetPassword(true);
              }}
            >
              Forget Password?
            </p>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box px={2} mt={4}>
            <Button className={classes.buttonLogin} fullWidth type="submit">
              {SUBMIT ? (
                <CircularProgress style={{ color: "#fff" }} size={24} />
              ) : (
                "Sign In"
              )}
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            px={2}
            mt={4}
            display="flex"
            alignItems={"center"}
            justifyContent="center"
          >
            <p
              style={{
                color: "#828282",
                fontSize: "14px",
              }}
            >
              Doesn't have an account?{" "}
              <span
                onClick={() => {
                  navigate("/register");
                }}
                className={classes.forgotButton}
              >
                {" "}
                Register
              </span>
            </p>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;

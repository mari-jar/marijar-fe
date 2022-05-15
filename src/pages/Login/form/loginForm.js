import React from "react";
import {
  InputBase,
  FormControl,
  FormHelperText,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Button,
} from "@mui/material";
import { Field } from "redux-form";
import { useNavigate } from "react-router";

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

const LoginForm = ({ classes, handleSubmit }) => {
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
                control={<Checkbox />}
                label="Remember Me"
              />
            </FormControl>
            <p className={classes.forgotButton}>Forget Password?</p>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box px={2} mt={4}>
            <Button className={classes.buttonLogin} fullWidth type="submit">
              Sign In
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

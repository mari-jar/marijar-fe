import React from "react";
import {
  InputBase,
  FormControl,
  FormHelperText,
  Grid,
  Box,
  CircularProgress,
  Button,
} from "@mui/material";
import { Field } from "redux-form";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

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

  const { SUBMIT_REGISTER } = useSelector((s) => s.register);

  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction="column" justifyContent="start">
        <Grid item xs={12}>
          <Box mt={2}>
            <Field
              classes={classes}
              fullWidth
              name="name"
              label="Name"
              placeholder="Name"
              component={renderField}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box mt={2}>
            <Field
              classes={classes}
              fullWidth
              name="phoneNumber"
              label="Phone Number"
              placeholder="Phone Number"
              component={renderField}
              inputMode="numeric"
              pattern="[0-9]*"
              normalize={(val) => (val || "").replace(/[^\d]/g, "")}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box mt={2}>
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
          <Box mt={2}>
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
          <Box mt={2}>
            <Field
              classes={classes}
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              placeholder="Confirm Password"
              component={renderField}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box px={2} mt={4}>
            <Button className={classes.buttonLogin} fullWidth type="submit">
              {SUBMIT_REGISTER ? (
                <CircularProgress style={{ color: "#fff" }} size={24} />
              ) : (
                "Sign Up"
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
              Already have an account?{" "}
              <span
                onClick={() => {
                  navigate("/login");
                }}
                className={classes.forgotButton}
              >
                {" "}
                Sign In
              </span>
            </p>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;

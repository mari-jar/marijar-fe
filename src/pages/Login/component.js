import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import Page from "../../component/elements/Page";
import { Box, Grid } from "@mui/material";
import Logo from "../../assets/logos.svg";
import LoginForm from "./form/loginForm";
import ForgetForm from "./form/forgetForm";
import Saly from "../../assets/salylog.png";
import useAction from "./hooks/useAction";
import { useSelector } from "react-redux";

const LoginPage = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const { _onSubmit, _onSubmitForget } = useAction();

  const { FORGET } = useSelector((s) => s.login);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  const classes = useStyles();

  const onSubmit = (value) => {
    if (FORGET) {
      _onSubmitForget(value);
    } else {
      _onSubmit(value);
    }
  };

  return (
    <Page
      className={width < 1111 ? classes.rootNoBg : classes.root}
      title="Sign In - Marijar"
    >
      <Grid container direction={"row"} justifyContent="center">
        {width > 1111 && (
          <Grid item xs={8}>
            <Box mx={width <= 1460 ? 10 : width <= 1650 ? 20 : 30} pt={5}>
              <img
                src={Saly}
                alt="saly"
                height={width <= 1460 ? "700px" : "800px"}
              />
            </Box>
          </Grid>
        )}
        <Grid item xs={width > 1111 ? 4 : 10}>
          {width > 1111 ? (
            <Box pt={10} px={5}>
              <Box
                display={"flex"}
                flexDirection="row"
                alignItems="center"
                justifyContent={"start"}
              >
                <Box>
                  <img src={Logo} alt="logo" height={"45px"} />
                </Box>
                <Box ml={2}>
                  <p className={classes.logo}>Marijar.co</p>
                </Box>
              </Box>
              <Box mt={3}>
                <h1>
                  {FORGET ? "Forgot your password?" : "Sign In to Marijar.co"}
                </h1>
              </Box>
              <Box mt={1}>
                <p style={{ fontSize: "14px", maxWidth: "400px" }}>
                  {FORGET
                    ? "Enter email associated with your account and we'll send an email with instruction to recover your account!"
                    : "The journey is waiting for you!"}
                </p>
              </Box>
              <Box mt={2} maxWidth={500}>
                {FORGET ? (
                  <ForgetForm onSubmit={onSubmit} classes={classes} />
                ) : (
                  <LoginForm onSubmit={onSubmit} classes={classes} />
                )}
              </Box>
            </Box>
          ) : (
            <Box
              display={"flex"}
              flexDirection="column"
              alignItems={"center"}
              justifyContent={"center"}
              pt={10}
              px={5}
            >
              <Box
                display={"flex"}
                flexDirection="row"
                alignItems="center"
                justifyContent={"center"}
              >
                <Box>
                  <img src={Logo} alt="logo" height={"45px"} />
                </Box>
                <Box ml={2}>
                  <p className={classes.logo}>Marijar.co</p>
                </Box>
              </Box>
              <Box mt={3}>
                <h1 style={{ textAlign: "center" }}>
                  {FORGET ? "Forgot your password?" : "Sign In to Marijar.co"}
                </h1>
              </Box>
              <Box mt={1}>
                <p style={{ fontSize: "14px", maxWidth: "400px" }}>
                  {FORGET
                    ? "Enter email associated with your account and we'll send an email with instruction to recover your account!"
                    : "The journey is waiting for you!"}
                </p>
              </Box>
              <Box mt={2} minWidth={300} maxWidth={1000}>
                {FORGET ? (
                  <ForgetForm onSubmit={onSubmit} classes={classes} />
                ) : (
                  <LoginForm onSubmit={onSubmit} classes={classes} />
                )}
              </Box>
            </Box>
          )}
        </Grid>
      </Grid>
    </Page>
  );
};

export default LoginPage;

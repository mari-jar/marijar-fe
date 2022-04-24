import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import Page from "../../component/elements/Page";
import { Box, Grid } from "@mui/material";
import Logo from "../../assets/logos.svg";
import LoginForm from "./form";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    console.log(width);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  const classes = useStyles();

  const onSubmit = (val) => {
    navigate("/dashboard");
  };

  return (
    <Page
      className={width < 1090 ? classes.rootNoBg : classes.root}
      title="Login Marijar"
    >
      <Grid container direction={"row"} justifyContent="center">
        {width > 1090 && <Grid item xs={8} />}
        <Grid item xs={width > 1090 ? 4 : 6}>
          <Box py={10} pr={4}>
            <Box
              display={"flex"}
              flexDirection="row"
              alignItems="center"
              justifyContent={width > 1090 ? "start" : "center"}
            >
              <Box>
                <img src={Logo} alt="logo" height={"57px"} />
              </Box>
              <Box ml={5}>
                <p className={classes.logo}>Marijar.co</p>
              </Box>
            </Box>
            <Box mt={3}>
              <h1>Sign In to Marijar.co</h1>
            </Box>
            <Box mt={2}>
              <p>The journey is waiting for you!</p>
            </Box>
            <Box py={2} maxWidth={500}>
              <LoginForm onSubmit={onSubmit} classes={classes} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Page>
  );
};

export default LoginPage;

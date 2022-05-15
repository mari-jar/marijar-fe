import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import Page from "../../component/elements/Page";
import { Box, Grid } from "@mui/material";
import Logo from "../../assets/logos.svg";
import Saly from "../../assets/saly.png";
import { useNavigate } from "react-router";
import RegisterForm from "./form";

const Register = () => {
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
      className={width < 1111 ? classes.rootNoBg : classes.root}
      title="Account Creation - Marijar"
    >
      <Grid container direction={"row"} justifyContent="center">
        {width > 1111 && (
          <Grid item xs={8}>
            <Box mx={width <= 1220 ? 20 : width <= 1460 ? 30 : 40} mt={10}>
              <img src={Saly} alt="saly" height={"600px"} />
            </Box>
          </Grid>
        )}
        <Grid item xs={width > 1111 ? 4 : 10}>
          {width > 1111 ? (
            <Box py={7} px={2}>
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
                <h1>Sign Up to Marijar.co</h1>
              </Box>
              <Box mt={1}>
                <p>Start your journey now!</p>
              </Box>
              <Box mt={2} maxWidth={500}>
                <RegisterForm onSubmit={onSubmit} classes={classes} />
              </Box>
            </Box>
          ) : (
            <Box
              display={"flex"}
              flexDirection="column"
              alignItems={"center"}
              justifyContent={"center"}
              py={7}
              px={2}
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
                <h1 style={{ textAlign: "center" }}>Sign Up to Marijar.co</h1>
              </Box>
              <Box mt={1}>
                <p>Start your journey now!</p>
              </Box>
              <Box mt={2} minWidth={300} maxWidth={500}>
                <RegisterForm onSubmit={onSubmit} classes={classes} />
              </Box>
            </Box>
          )}
        </Grid>
      </Grid>
    </Page>
  );
};

export default Register;

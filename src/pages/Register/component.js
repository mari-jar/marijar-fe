import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import Page from "../../component/elements/Page";
import { Box, Grid } from "@mui/material";
import Logo from "../../assets/logos.svg";
import Saly from "../../assets/saly.png";
import RegisterForm from "./form";
import useAction from "./hooks/useActions";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { clearStorages } from "../../utils/storage";

const Register = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const { _onSubmit, setWaitingConfirmation, _requestEmail } = useAction();

  const { WAITING_FOR_CONFIRMATION } = useSelector((s) => s.register);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  const classes = useStyles();

  const onSubmit = (val) => {
    _onSubmit(val);
  };

  const requestEmail = () => {
    _requestEmail();
  };

  return (
    <Page
      className={width < 1111 ? classes.rootNoBg : classes.root}
      title="Account Creation - Marijar"
    >
      <Grid container direction={"row"} justifyContent="center">
        {width > 1111 && (
          <Grid item xs={8}>
            <Box mx={width <= 1220 ? 20 : width <= 1460 ? 30 : 40} mt={15}>
              <img src={Saly} alt="saly" height={"600px"} />
            </Box>
          </Grid>
        )}
        <Grid item xs={width > 1111 ? 4 : 10}>
          {width > 1111 ? (
            <LargeFormContainer
              classes={classes}
              onSubmit={onSubmit}
              waiting={WAITING_FOR_CONFIRMATION}
              setWaitingConfirmation={setWaitingConfirmation}
              requestEmail={requestEmail}
            />
          ) : (
            <SmallFormContainer
              classes={classes}
              onSubmit={onSubmit}
              waiting={WAITING_FOR_CONFIRMATION}
              setWaitingConfirmation={setWaitingConfirmation}
              requestEmail={requestEmail}
            />
          )}
        </Grid>
      </Grid>
    </Page>
  );
};

export default Register;

const LargeFormContainer = ({
  classes,
  onSubmit,
  waiting,
  setWaitingConfirmation,
  requestEmail,
}) => {
  const navigate = useNavigate();

  return (
    <Box py={10} px={5}>
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
        {waiting ? (
          <h1>Verify Your Account!</h1>
        ) : (
          <h1>Sign Up to Marijar.co</h1>
        )}
      </Box>
      <Box mt={1}>
        {waiting ? (
          <p>
            You have successfully created a Marijar account. <br /> Please check
            your email to verify your email address <br /> and complete your
            registration
          </p>
        ) : (
          <p>Start your journey now!</p>
        )}
      </Box>
      {waiting && (
        <Box
          mt={1}
          display="flex"
          flexDirection={"row"}
          justifyContent="start"
          alignItems={"center"}
        >
          <p
            style={{
              color: "#828282",
              fontSize: "14px",
            }}
          >
            Doesn't see the email verification?{" "}
            <span
              onClick={(e) => {
                e.preventDefault();
                requestEmail();
              }}
              className={classes.forgotButton}
            >
              {" "}
              Request Email
            </span>
          </p>
        </Box>
      )}
      <Box mt={2} maxWidth={500}>
        {waiting ? (
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
              Already verified?{" "}
              <span
                onClick={() => {
                  navigate("/login");
                  clearStorages();
                  setWaitingConfirmation(false);
                }}
                className={classes.forgotButton}
              >
                {" "}
                Sign In
              </span>
            </p>
          </Box>
        ) : (
          <RegisterForm onSubmit={onSubmit} classes={classes} />
        )}
      </Box>
    </Box>
  );
};

const SmallFormContainer = ({
  classes,
  onSubmit,
  waiting,
  setWaitingConfirmation,
}) => {
  const navigate = useNavigate();

  return (
    <Box
      display={"flex"}
      flexDirection="column"
      alignItems={"center"}
      justifyContent={"center"}
      py={10}
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
        {waiting ? (
          <h1 style={{ textAlign: "center" }}>Verify Your Account!</h1>
        ) : (
          <h1 style={{ textAlign: "center" }}>Sign Up to Marijar.co</h1>
        )}
      </Box>
      <Box mt={1}>
        {waiting ? (
          <p>
            You have successfully created a Marijar account. <br /> Please check
            your email to verify your email address <br /> and complete your
            registration
          </p>
        ) : (
          <p>Start your journey now!</p>
        )}
      </Box>
      {waiting && (
        <Box
          mt={1}
          display="flex"
          flexDirection={"row"}
          justifyContent="start"
          alignItems={"center"}
        >
          <p
            style={{
              color: "#828282",
              fontSize: "14px",
            }}
          >
            Doesn't see the email verification?{" "}
            <span
              onClick={(e) => {
                e.preventDefault();
                requestEmail();
              }}
              className={classes.forgotButton}
            >
              {" "}
              Request Email
            </span>
          </p>
        </Box>
      )}
      <Box mt={2} minWidth={300} maxWidth={500}>
        {waiting ? (
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
              Already verified?{" "}
              <span
                onClick={() => {
                  navigate("/login");
                  clearStorages();
                  setWaitingConfirmation(false);
                }}
                className={classes.forgotButton}
              >
                {" "}
                Sign In
              </span>
            </p>
          </Box>
        ) : (
          <RegisterForm onSubmit={onSubmit} classes={classes} />
        )}
      </Box>
    </Box>
  );
};

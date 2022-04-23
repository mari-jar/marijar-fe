import { Box, Button, Container, Grid } from "@mui/material";
import React from "react";
import Page from "../../component/elements/Page";
import nfIcon from "../../assets/rafiki.svg";
import logo from "../../assets/logos.svg";
import useStyles from "./styles";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <Page title="Page not found">
      <Container maxWidth="md">
        <Grid
          container
          direction={"column"}
          justifyContent="center"
          alignItems={"center"}
        >
          <Grid item>
            <Box mt={8} mb={5}>
              <img src={nfIcon} alt="notfound" />
            </Box>
          </Grid>
          <Grid item>
            <h1 className={classes.warningText}>
              Looks like the page you are looking for is not available on our
              site
            </h1>
          </Grid>
          <Grid item>
            <Box my={8} width="300px">
              <Button
                className={classes.button}
                fullWidth
                onClick={() => {
                  navigate("/dashboard");
                }}
              >
                Go To Dashboard
              </Button>
            </Box>
          </Grid>
          <Grid item>
            <Box mt={8} display={"flex"} direction="row" alignItems="center">
              <img width={"20px"} src={logo} alt="logo" />
              <p className={classes.logName}>Marijar.co</p>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default NotFound;

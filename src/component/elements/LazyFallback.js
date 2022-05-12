import React from "react";
import { makeStyles } from "@mui/styles";
import CircularProgress from "@mui/material/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    width: "100%",
  },
  innerDiv: {
    height: "2rem",
    position: "relative",
    width: "2rem",
    overflow: "visible",
  },
}));

const LazyFallback = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.innerDiv}>
        <CircularProgress color="primary" />
      </div>
    </div>
  );
};

export default LazyFallback;

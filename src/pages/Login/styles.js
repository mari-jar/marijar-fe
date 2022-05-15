import { makeStyles } from "@mui/styles";
import loginBg from "../../assets/bgBasic.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${loginBg})`,
    backgroundSize: "cover",
    width: "100%",
    "-webkit-background-size": "cover",
    "-moz-background-size": "cover",
    "-o-background-size": "cover",
    minHeight: "100vh",
  },
  rootNoBg: {
    background: "#fefefe",
    height: "100%",
    transition: "background 1ms ease-in-out",
    minHeight: "100vh",
  },
  logo: {
    fontWeight: "600",
    color: "#828282",
    fontSize: "24px",
  },
  formTitle: {
    fontWeight: "500",
    fontSize: "14px",
    marginLeft: "0.5rem",
  },
  inputBase: {
    background: "#FFFFFF",
    boxShadow: "0px 4px 22px rgba(130, 126, 126, 0.15)",
    borderRadius: "7px",
    padding: ".75rem 1rem",
    width: "100%",
  },
  textError: {
    color: "#FF3838 !important",
  },
  formControl: {
    width: "100%",
  },
  buttonLogin: {
    boxShadow:
      "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px -4px 3px rgba(255, 255, 255, 0.25)",
    borderRadius: "12px",
    background: "linear-gradient(180deg, #22E1D9 0%, #06BCB4 100%)",
    padding: ".8rem 1rem !important",
    color: "#fff !important",
    textTransform: "capitalize !important",
    fontSize: "18px",
    fontWeight: "500",
  },
  forgotButton: {
    "&:hover": {
      textDecoration: "underline",
    },
    color: "#2D9CDB",
    fontSize: "14px",
    cursor: "pointer",
  },
  rememberButton: {
    color: "#828282",
    fontSize: "14px",
  },
}));

export default useStyles;

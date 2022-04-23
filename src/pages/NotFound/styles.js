import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  warningText: {
    fontWeight: 500,
    fontSize: "30px",
    textAlign: "center",
    width: "500px",
  },
  button: {
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
  logName: {
    marginLeft: "1rem",
    fontSize: "12px",
  },
}));

export default useStyles;

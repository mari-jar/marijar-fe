import PropTypes from "prop-types";
import { hot } from "react-hot-loader/root";
import { Provider } from "react-redux";
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./configs/theme";
import GlobalStyles from "./configs/GlobalStyles";
import routes from "./routes";
import { getToken, checkExpireTime, clearStorages } from "./utils/storage";
import { SnackbarProvider } from "notistack";

const loginStatus = () => {
  if (!getToken()) {
    return false;
  } else if (checkExpireTime()) {
    return false;
  } else if (getToken()) {
    return true;
  }
};

const App = ({ store }) => {
  const isLogin = loginStatus();
  const routing = useRoutes(routes(isLogin));

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <GlobalStyles />
          {routing}
        </SnackbarProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default hot(App);

App.propTypes = {
  store: PropTypes.object.isRequired,
};

import { getRefreshToken, clearStorages } from "../../../../utils/storage";
import initiateLogout from "../../../../repository/Logout/initiateLogout";
import { useNavigate } from "react-router";
import { useSnackbar } from "notistack";

function useAction() {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const _initiateLogout = async () => {
    const refreshToken = getRefreshToken();

    const data = { refreshToken };

    try {
      const resp = await initiateLogout(data);
      if (resp.data === "Anda berhasil logout") {
        clearStorages();
        navigate("/login");
        enqueueSnackbar(
          "Anda berhasil keluar, silahkan masuk lagi untuk melanjutkan!",
          {
            variant: "success",
            preventDuplicate: true,
            autoHideDuration: 3000,
          }
        );
      } else {
        throw "";
      }
    } catch (error) {
      clearStorages();
      navigate("/login");
      enqueueSnackbar(
        "Anda berhasil keluar, silahkan masuk lagi untuk melanjutkan!",
        {
          variant: "success",
          preventDuplicate: true,
          autoHideDuration: 3000,
        }
      );
    }
  };

  return {
    _initiateLogout,
  };
}

export default useAction;

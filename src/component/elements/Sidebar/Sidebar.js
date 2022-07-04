import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Divider, Grid } from "@mui/material";
import Icons from "../../../assets/icons";
import { useLocation, useNavigate } from "react-router";
import clsx from "clsx";
import useAction from "./hooks/useAction";

const useStyles = makeStyles((theme) => ({
  root: {
    background:
      "linear-gradient(359.79deg, rgba(194, 255, 205, 0.36) 1.69%, rgba(170, 232, 181, 0.19) 99.82%)",
    width: 256,
    height: "100vh",
  },
  logo: {
    fontWeight: 600,
    fontSize: "20px",
    color: "#4f4f4f",
    marginLeft: "1rem",
  },
  active: {
    display: "block",
    width: "10px",
    height: "50px",
    background: "#39AEA9",
    borderRadius: "15px",
    left: "-3px",
    position: "absolute",
  },
  navItem: {
    "&:hover": {
      color: "#39AEA9",
      backgroundColor: "rgba(255, 255, 255, 0.3)",
    },
    height: "50px",
    cursor: "pointer",
    width: "100%",
    transition: "background .5ms ease-in-out",
    margin: ".2rem 0",
  },
  navTitle: {
    marginLeft: "1rem",
    fontSize: "14px",
    fontWeight: 600,
    color: "#828282",
  },
  botNav: {
    marginLeft: "1rem",
    fontSize: "14px",
    fontWeight: 400,
    color: "#828282",
  },
  navTitleActive: {
    color: theme.palette.primary.main,
  },
  copyright: {
    fontSize: "14px",
    fontWeight: 400,
    color: "#9EA7AD;",
  },
}));

const items = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: {
      active: Icons.homeActive,
      normal: Icons.home,
    },
  },
  {
    name: "Materi Pembelajaran",
    path: "/materi",
    icon: {
      active: Icons.materiActive,
      normal: Icons.materi,
    },
  },
  {
    name: "Kelas",
    path: "/kelas",
    icon: {
      active: Icons.kelasActive,
      normal: Icons.kelas,
    },
  },
  {
    name: "Jadwal",
    path: "/jadwal",
    icon: {
      active: Icons.jadwalActive,
      normal: Icons.jadwal,
    },
  },
  {
    name: "Rekap Nilai",
    path: "/score",
    icon: {
      active: Icons.nilaiActive,
      normal: Icons.nilai,
    },
  },
];

const bottomsItems = [
  {
    name: "Pengaturan",
    path: "/setting",
    icon: {
      active: Icons.settingActive,
      normal: Icons.setting,
    },
  },
  {
    name: "Tentang",
    path: "/about",
    icon: {
      active: Icons.helpActive,
      normal: Icons.help,
    },
  },
  {
    name: "Logout",
    path: "/logout",
    icon: {
      active: Icons.logoutActive,
      normal: Icons.logout,
    },
  },
];

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { _initiateLogout } = useAction();

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        direction={"column"}
        justifyContent="space-between"
        height={"100%"}
      >
        <Grid item>
          <Box
            pt={5}
            px={4}
            display={"flex"}
            flexDirection="row"
            alignItems={"center"}
          >
            <img src={Icons.logo} alt="logo" width={"40px"} />
            <p className={classes.logo}>Marijar.co</p>
          </Box>
          <Box
            mt={10}
            display={"flex"}
            flexDirection="column"
            alignItems={"start"}
          >
            {items.map((item, idx) => {
              const activeItem = item.path === location.pathname;
              return (
                <Box
                  key={"sidebaritem" + idx}
                  display={"flex"}
                  flexDirection="row"
                  alignItems="center"
                  className={classes.navItem}
                  onClick={() => {
                    navigate(item.path);
                  }}
                >
                  {activeItem && <div className={classes.active} />}
                  <Box
                    ml={4}
                    display={"flex"}
                    flexDirection="row"
                    alignItems="center"
                  >
                    <img
                      src={activeItem ? item.icon.active : item.icon.normal}
                      alt="icon-sidebar"
                    />
                    <p
                      className={
                        activeItem
                          ? clsx(classes.navTitle, classes.navTitleActive)
                          : classes.navTitle
                      }
                    >
                      {item.name}
                    </p>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Grid>

        <Grid item>
          <Box px={2} py={2}>
            <Divider
              sx={{
                height: "2px",
                border: "none",
                backgroundColor: "rgba(0, 0, 0, 0.12)",
                color: "rgba(0, 0, 0, 0.12)",
              }}
            />
          </Box>
          <Box display="flex" flexDirection={"column"} alignItems="start">
            <Box>
              {bottomsItems.map((item, idx) => {
                const activeItem = item.path === location.pathname;
                return (
                  <Box
                    key={"sidebaritem" + idx}
                    display={"flex"}
                    flexDirection="row"
                    alignItems="center"
                    className={classes.navItem}
                    onClick={() => {
                      if (item.path === "/logout") {
                        _initiateLogout();
                      } else {
                        navigate(item.path);
                      }
                    }}
                  >
                    {activeItem && <div className={classes.active} />}
                    <Box
                      ml={4}
                      display={"flex"}
                      flexDirection="row"
                      alignItems="center"
                    >
                      <img
                        src={activeItem ? item.icon.active : item.icon.normal}
                        alt="icon-sidebar"
                      />
                      <p
                        className={
                          activeItem
                            ? clsx(classes.botNav, classes.navTitleActive)
                            : classes.botNav
                        }
                      >
                        {item.name}
                      </p>
                    </Box>
                  </Box>
                );
              })}
            </Box>
            <Box
              display={"flex"}
              justifySelf={"center"}
              alignSelf="center"
              py={3}
            >
              <p className={classes.copyright}>&copy; Marijar.Co 2022</p>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Sidebar;

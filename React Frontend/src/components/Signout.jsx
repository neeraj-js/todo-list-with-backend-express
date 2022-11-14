import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";

function Signout() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.setItem("isAuthenticated", false);
    navigate("/");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={logout}
          >
            Log out
          </IconButton>
          <Typography
            sx={{ flexgrow: 1 }}
            variant="h6"
            color="inherit"
            component="div"
          >
            Todo
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Signout;

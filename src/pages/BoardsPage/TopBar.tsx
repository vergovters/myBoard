import { AppBar, Toolbar, Button, Stack } from "@mui/material";
import Logout from "@mui/icons-material/ExitToApp";
import { useNavigate } from "react-router-dom";
import useStore from "../../store";

interface TopBarProps {
  openModal: () => void;
}

export default function TopBar({ openModal }: TopBarProps) {
  const { setLoginStatus } = useStore();
  const navigate = useNavigate();

  const logout = () => {
    setLoginStatus(false);
    navigate("/");
  };

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          justifyContent: "space-between",
        }}
      >
        <h2>Projects</h2>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" onClick={openModal}>
            Create Board
          </Button>
          <Button onClick={logout} startIcon={<Logout />}>
            LogOut
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

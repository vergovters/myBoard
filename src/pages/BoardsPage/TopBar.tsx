import { AppBar, Toolbar, Button, Stack } from "@mui/material";
import Logout from "@mui/icons-material/ExitToApp";

export default function TopBar() {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          justifyContent: "space-between",
        }}
      >
        <h2>Projects</h2>
        <Stack direction="row" spacing={2}>
          <Button variant="contained">Create Board</Button>
          <Button startIcon={<Logout />}>LogOut</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

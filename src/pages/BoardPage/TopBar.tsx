import { memo } from "react";
import { Toolbar, Stack, Typography, IconButton, AppBar } from "@mui/material";
import BackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { colors } from "../../theme";

function BoardTopbar() {
  const navigate = useNavigate();
  const randColor = Math.floor(Math.random() * (6 - 0 + 1) + 0);
  return (
    <AppBar
      position="static"
      sx={{
        borderBottom: "5px solid",
        borderColor: colors[randColor],
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Stack spacing={1} alignItems="center" direction="row">
          <IconButton onClick={() => navigate("/boards")}>
            <BackIcon />
          </IconButton>
          <Typography variant="h6">board1</Typography>
        </Stack>
        <Stack spacing={2} alignItems="center" direction="row">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default memo(BoardTopbar);

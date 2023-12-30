import { Stack, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Draggable } from "react-beautiful-dnd";

function Task({ id, text, index, removeTask, onClick }) {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Typography
        {...(onClick ? { onClick } : {})}
        p={1}
        width="100%"
        border="1px solid"
        borderColor="#777980"
        bgcolor="#45474E"
      >
        {text}
      </Typography>
      <IconButton onClick={removeTask}>
        <DeleteIcon />
      </IconButton>
    </Stack>
  );
}

export default Task;

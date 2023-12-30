import { memo } from "react";
import { Grid, Stack, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/AddCircleOutline";
import Task from "./Task";

function BoardTab({
  name,
  status,
  openAddTaskModal,

  removeTask,
  openShiftTaskModal,
}) {
  console.log("Tab: ", name);
  return (
    <Grid item xs={12} sm={4}>
      <Stack p={3} bgcolor="#000">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography fontWeight={400} variant="h6">
            {name}
          </Typography>
          <IconButton onClick={() => openAddTaskModal(status)}>
            <AddIcon fontSize="small" />
          </IconButton>
        </Stack>
        <Stack mt={3} spacing={2}>
          {/* {tasks.map((task, index) => (
            <Task
              key={task.id}
              text={task.text}
              id={task.id}
              removeTask={() => removeTask(status, task.id)}
              index={index}
            />
          ))} */}
        </Stack>
      </Stack>
    </Grid>
  );
}

export default memo(BoardTab);

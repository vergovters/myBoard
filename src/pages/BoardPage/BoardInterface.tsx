import { useState, useCallback } from "react";
import { Grid } from "@mui/material";
import TaskModal from "./TaskModal";
import BoardTab from "./BoardTab";

export const statusMap = {
  todos: "Todos",
  inProgress: "In Progress",
  completed: "Completed",
};

export default function BoardInterface() {
  return (
    <>
      <Grid container px={4} mt={2} spacing={2}>
        {Object.keys(statusMap).map((status) => (
          <BoardTab key={status} status={status} name={statusMap[status]} />
        ))}
      </Grid>
    </>
  );
}

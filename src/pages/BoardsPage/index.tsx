import { useState } from "react";
import { Grid, Stack } from "@mui/material";
import Modal from "./Modal";
import TopBar from "./TopBar";
import NoBoards from "./NoBoards";
import BoardCard from "./BoardCart";
import { projectApi } from "../../services/Project.service";

const data = [
  {
    name: "Project A",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem.",
    status: "PENDING",
    meto: "AGILE",
    id: 1,
  },
  {
    name: "Project B",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    status: "DONE",
    meto: "KANBAN",
    id: 2,
  },
  {
    name: "Project C",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    status: "INPROGRESS",
    meto: "RUP",
    id: 3,
  },
];

export default function BoardsPage() {
  const [showModal, setShowModal] = useState(false);
  // const { data, error, isLoading } = projectApi.useGetProjectsQuery("");
  return (
    <>
      <TopBar openModal={() => setShowModal(true)} />
      {showModal && <Modal closeModal={() => setShowModal(false)} />}
      <Stack mt={5} px={3}>
        <Grid container spacing={{ xs: 2, sm: 4 }}>
          {data ? (
            data.map((board) => <BoardCard key={board.id} {...board} />)
          ) : (
            <NoBoards />
          )}
        </Grid>
      </Stack>
    </>
  );
}

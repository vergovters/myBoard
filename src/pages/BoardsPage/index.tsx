import { useState } from "react";
import { Grid, Stack } from "@mui/material";
import Modal from "./Modal";
import TopBar from "./TopBar";
import NoBoards from "./NoBoards";
import BoardCard from "./BoardCart";

const data = [
  {
    name: "Project A",
    color: "Blue",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    createdAt: "31.01.2000",
    id: 1,
  },
  {
    name: "Project B",
    color: "Red",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    createdAt: "31.01.2000",
    id: 2,
  },
  {
    name: "Project C",
    color: "Green",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    createdAt: "31.01.2000",
    id: 3,
  },
];

export default function BoardsPage() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <TopBar openModal={() => setShowModal(true)} />
      {showModal && <Modal closeModal={() => setShowModal(false)} />}
      <Stack mt={5} px={3}>
        <Grid container spacing={4}>
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

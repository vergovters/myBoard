import {
  Select,
  MenuItem,
  TextField,
  Button,
  Stack,
  Dialog,
} from "@mui/material";
import { useState } from "react";
import ModalHeader from "../../components/ui/ModalHeader";

interface ModalProps {
  closeModal: () => void;
}

export default function Modal({ closeModal }: ModalProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  return (
    <Dialog open fullWidth maxWidth="xs">
      <Stack p={2}>
        <ModalHeader title="Create Board" onClose={closeModal} />
        <Stack my={5} spacing={3}>
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Board name"
          />
          <TextField
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            label="Board description"
          />
          <Stack direction="row" gap={2}>
            <Select sx={{ width: "100%" }}>
              <MenuItem value="Agile" selected>
                Agile
              </MenuItem>
              <MenuItem value="KANBAN">Kanban</MenuItem>
              <MenuItem value="RUP">Rup</MenuItem>
            </Select>
            <Select sx={{ width: "100%" }}>
              <MenuItem value="TODO">TODO</MenuItem>
              <MenuItem value="INPROGRESS">INPROGRESS</MenuItem>
              <MenuItem value="DONE">DONE</MenuItem>
            </Select>
          </Stack>
        </Stack>
        <Button variant="contained" size="large">
          Create
        </Button>
      </Stack>
    </Dialog>
  );
}

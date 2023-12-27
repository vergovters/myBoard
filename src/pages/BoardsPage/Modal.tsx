import { useState } from "react";
import {
  Dialog,
  Stack,
  TextField,
  Button,
  Box,
  Typography,
} from "@mui/material";
import ModalHeader from "../../components/ui/ModalHeader";
import { colors } from "../../theme";

interface ModalProps {
  closeModal: () => void;
}

export default function Modal({ closeModal }: ModalProps) {
  const [name, setName] = useState("");
  const [color, setColor] = useState(0);
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
          <Stack spacing={1.5} direction="row">
            <Typography>Color: </Typography>
            {colors.map((clr, idx) => (
              <Box
                key={clr}
                onClick={() => setColor(idx)}
                style={{
                  cursor: "pointer",
                  border: color === idx ? "3px solid #383838" : "none",
                  outline: `2px solid ${clr}`,
                  height: 25,
                  width: 25,
                  backgroundColor: clr,
                  borderRadius: "50%",
                }}
              />
            ))}
          </Stack>
        </Stack>
        <Button variant="contained" size="large">
          Create
        </Button>
      </Stack>
    </Dialog>
  );
}

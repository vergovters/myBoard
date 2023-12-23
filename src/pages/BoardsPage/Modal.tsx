import { Dialog, Stack, TextField, Button } from "@mui/material";
import ModalHeader from "../../components/ui/ModalHeader";

export default function Modal() {
  return (
    <Dialog open fullWidth maxWidth="xs">
      <Stack p={2}>
        <ModalHeader title="Create Board" />
        <Stack my={5} spacing={3}>
          <TextField label="Board name" />
        </Stack>
        <Button variant="contained" size="large">
          Create
        </Button>
      </Stack>
    </Dialog>
  );
}

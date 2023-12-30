import OpenIcon from "@mui/icons-material/Launch";
import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { colors } from "../../theme";

interface IBoardProp {
  name: string;
  description: string;
  status: string;
  meto: string;
  id: number;
}

function BoardCard({ name, description, status, meto, id }: IBoardProp) {
  const navigate = useNavigate();
  const randColor = Math.floor(Math.random() * (6 - 0 + 1) + 0);
  return (
    <Grid item xs={12} sm={3}>
      <Stack
        p={2}
        bgcolor="background.paper"
        borderLeft="5px solid"
        borderColor={colors[randColor]}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box width="50%">
            <Typography
              textOverflow="ellipsis"
              overflow="hidden"
              whiteSpace="nowrap"
              fontWeight={400}
              variant="h6"
            >
              {name} ({status})
            </Typography>
          </Box>

          <IconButton onClick={() => navigate(`/boards/${id}`)} size="small">
            <OpenIcon />
          </IconButton>
        </Stack>
        <Typography textOverflow="ellipsis" overflow="hidden">
          {description}
        </Typography>
        <Typography variant="caption" pt={2}>
          {meto}
        </Typography>
      </Stack>
    </Grid>
  );
}

export default BoardCard;

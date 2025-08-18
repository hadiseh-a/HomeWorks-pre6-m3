import { Button, Link, Stack } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

function AlignedButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button
        variant="text"
        color="info"
        onClick={(e) => (e.currentTarget.disabled = true)}
        sx={{ px: 2, py: 0.5 }}
      >
        Text
      </Button>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<PersonIcon />}
        sx={{ px: 2, py: 0.5 }}
      >
        Contained
      </Button>
      <Button variant="outlined" color="primary" sx={{ px: 2, py: 0.5 }}>
        <Link href="https://www.wikipedia.org/">Outlined</Link>
      </Button>
    </Stack>
  );
}

export default AlignedButtons;

import { Box, Stack } from "@mui/material";
import React from "react";

function CustomTheme() {
  return (
    <Stack>
      <Box
        component={"section"}
        sx={{ backgroundColor: "primary.main" }}
        width={100}
        height={100}
      ></Box>
      <Box
        component={"section"}
        bgcolor={"secondary.main"}
        width={100}
        height={100}
      ></Box>
      <Box
        component={"section"}
        bgcolor={"success.main"}
        width={100}
        height={100}
      ></Box>
    </Stack>
  );
}

export default CustomTheme;

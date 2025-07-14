"use client";

import { createTheme } from "@mui/material/styles";
import { faIR } from "@mui/material/locale";

const theme = createTheme(
  {
    palette: {
      mode: "light",
      primary: { main: "#72AEC8" },
      secondary: { main: "#272727" },
      background: { default: "#edf1f3" },
    },
    typography: {
      fontFamily: "var(--font-yekan)",
    },
  },
  faIR
);

export default theme;

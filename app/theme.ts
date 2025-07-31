"use client";

import { createTheme } from "@mui/material/styles";
import { faIR } from "@mui/material/locale";

const theme = createTheme(
  {
    palette: {
      mode: "light",
      primary: { main: "#0a0a0a" },
      secondary: { main: "#ededed" },
      background: { default: "#ededed" },
    },
    typography: {
      fontFamily: "var(--font-yekan)",
    },
  },
  faIR
);

export default theme;

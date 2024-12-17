"use client";
import { palette } from "@/theme/palette";
import { typography } from "@/theme/typograhy";
import { Theme } from "@emotion/react";
import {
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
  createTheme,
} from "@mui/material";

export const MuiThemeProvider = (props: any) => {
  const { children } = props;
  const themeOptions: Theme = {
    palette,
    typography,
    spacing: 10,
    shape: { borderRadius: 4 },
  };
  const theme = createTheme(themeOptions);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={{}} />
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

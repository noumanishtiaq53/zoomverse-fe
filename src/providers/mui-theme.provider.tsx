"use client";
import { palette } from "@/theme/palette";
import { shadows } from "@/theme/shadows";
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
    shadows,
    spacing: 10,
    shape: { borderRadius: 4 },
  };
  const theme = createTheme(themeOptions);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={(theme) => ({
          "& ::selection": { backgroundColor: theme?.palette?.secondary?.main },
        })}
      />
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

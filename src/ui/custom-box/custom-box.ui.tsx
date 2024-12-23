"use client";
import { Box } from "@mui/material";

export const CustomBoxUI = (props: any) => {
  const {
    children,
    color,
    backgroundColor,
    textAlign,
    padding,
    borderRadius,
    display,
    justifyContent,
    alignItems,
    minHeight,
    flexDirection,
    gap,
    maxWidth,
    paddingX,
    boxShadow,
    paddingY,
    onMouseOver,
    onMouseOut,
    hoverStyles,
    customStyles,
  } = props;

  return (
    <Box
      sx={{
        color: color,
        backgroundColor: backgroundColor,
        textAlign: textAlign,
        padding: padding,
        borderRadius: borderRadius,
        display,
        justifyContent,
        alignItems,
        minHeight,
        flexDirection,
        gap,
        maxWidth,
        paddingX,
        boxShadow,
        paddingY,
        ...customStyles,
        "&:hover": {
          ...hoverStyles,
        },
      }}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {children}
    </Box>
  );
};

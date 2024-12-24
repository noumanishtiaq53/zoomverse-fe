"use client";

import { Button } from "@mui/material";

export const CustomButtonUI = (props: any) => {
  const {
    handleClick,
    text,
    variant = "contained",
    color = "primary",
    startIcon,
    endIcon,
    fullWidth,
    size = "large",
    type = "button",
    height,
    borderRadius = 2,
    customStyles,
    hoverStyles,
  } = props;

  // const mappedHeight =

  return (
    <Button
      variant={variant}
      startIcon={startIcon}
      endIcon={endIcon}
      color={color}
      onClick={() => handleClick?.()}
      fullWidth={fullWidth}
      size={size}
      type={type}
      disableElevation
      sx={{
        height: height,
        borderRadius: borderRadius,
        ...customStyles,
        "&:hover": {
          ...hoverStyles,
        },
      }}
    >
      {text}
    </Button>
  );
};

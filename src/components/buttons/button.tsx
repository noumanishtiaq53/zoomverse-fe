"use client";

import { Button } from "@mui/material";

export const CustomButton = (props: any) => {
  const {
    handleClick,
    text,
    variant = "contained",
    color = "primary",
    startIcon,
    endIcon,
  } = props;

  return (
    <Button
      variant={variant}
      startIcon={startIcon}
      endIcon={endIcon}
      color={color}
      onClick={() => handleClick?.()}
    >
      {text}
    </Button>
  );
};

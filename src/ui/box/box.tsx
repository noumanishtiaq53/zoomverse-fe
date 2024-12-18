import { Box } from "@mui/material";

export const CustomBox = (props: any) => {
  const {
    children,
    backgroundImage,
    height = backgroundImage !== undefined ? "100vh" : "auto",
    width = backgroundImage !== undefined ? "100vw" : "auto",
    backgroundSize = "cover",
    backgroundRepeat = "no-repeat",
    color,
    backgroundColor,
    textAlign,
    padding,
    borderRadius,
  } = props;

  return (
    <Box
      sx={{
        backgroundImage: backgroundImage,
        height: height,
        width: width,
        backgroundSize: backgroundSize,
        backgroundRepeat: backgroundRepeat,
        color: color,
        backgroundColor: backgroundColor,
        textAlign: textAlign,
        padding: padding,
        borderRadius: borderRadius,
      }}
    >
      {children}
    </Box>
  );
};

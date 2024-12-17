import { Box } from "@mui/material";

export const CustomBox = (props: any) => {
  const {
    children,
    backgroundImage,
    height = "100vh",
    width = "100vw",
    backgroundSize = "cover",
    backgroundRepeat = "no-repeat",
  } = props;
  return (
    <Box
      sx={{
        backgroundImage: backgroundImage,
        height: height,
        width: width,
        backgroundSize: backgroundSize,
        backgroundRepeat: backgroundRepeat,
      }}
    >
      {children}
    </Box>
  );
};

import { Typography } from "@mui/material";

export const CustomTypography = (props: any) => {
  const {
    text,
    variant,
    component,
    color = "",
    textColor,
    margin,
    marginY,
    textAlign,
  } = props;

  //FOR LATER: const marginApplied = `${marginTop} ${margin}`

  return (
    <Typography
      variant={variant}
      component={component}
      color={color}
      sx={{
        color: textColor,
        margin: margin,
        marginY: marginY,
        textAlign: textAlign,
      }}
    >
      {text}
    </Typography>
  );
};

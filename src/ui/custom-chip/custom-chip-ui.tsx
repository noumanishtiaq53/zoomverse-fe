import { Chip } from "@mui/material";

export const CustomChipUI = (props: any) => {
  const {
    customStyles,
    hoverStyles,
    icon,
    size = "medium",
    label,
    variant = "filled",
    color = "primary",
  } = props;

  return (
    <Chip
      icon={icon}
      label={label}
      size={size}
      color={color}
      variant={variant}
      sx={{ ...customStyles, "&:hover": { ...hoverStyles } }}
    />
  );
};

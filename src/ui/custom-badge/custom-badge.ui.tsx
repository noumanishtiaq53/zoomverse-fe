import { Badge } from "@mui/material";

export const CustomBadgeUI = (props: any) => {
  const {
    children,
    badgeContent,
    color,
    customStyles,
    hoverStyles,
    variant,
    anchorOrigin = { vertical: "top", horizontal: "right" },
    invisible = false,
    max = 99,
    overlap,
    component = "div",
  } = props;

  return (
    <Badge
      badgeContent={badgeContent}
      color={color}
      variant={variant}
      anchorOrigin={anchorOrigin}
      invisible={invisible}
      max={max}
      overlap={overlap}
      component={component}
      sx={{
        ...customStyles,
        "&:hover": {
          ...hoverStyles,
        },
      }}
    >
      {children}
    </Badge>
  );
};

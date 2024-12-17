import { Grid2 } from "@mui/material";

export const CustomGrid = (props: any) => {
  const {
    isContainer,
    children,
    rowSpacing,
    columnSpacing = { xs: 3, md: 4 },
    md = 6,
    lg = 6,
    xl = 6,
    spacing,
    size = undefined,
  } = props;

  return (
    <Grid2
      container={isContainer}
      {...(isContainer
        ? {
            rowSpacing: rowSpacing,
            columnSpacing: columnSpacing,
            spacing: spacing,
          }
        : { size: size ?? { xs: 12, md, lg, xl } })}
    >
      {children}
    </Grid2>
  );
};

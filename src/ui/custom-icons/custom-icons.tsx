export const CustomIcon = (props: any) => {
  const { Icon, iconColor, hoverColor, hasAction = false } = props;
  return (
    <Icon
      sx={{
        color: iconColor,
        cursor: hasAction ? "pointer" : "",
        "&:hover": {
          color: hoverColor,
        },
      }}
    />
  );
};

export const CustomIcons = (props: any) => {
  const { Icon, iconColor, hoverIcon } = props;
  return (
    <Icon
      sx={{
        color: iconColor,
        "&:hover": {
          color: hoverIcon,
        },
      }}
    />
  );
};

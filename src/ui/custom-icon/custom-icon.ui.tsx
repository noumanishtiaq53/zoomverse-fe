export const CustomIconUI = (props: any) => {
  const { Icon, hasAction = false, customStyles, hoverStyles } = props;

  return (
    <Icon
      sx={{
        cursor: hasAction ? "pointer" : "",
        ...customStyles,
        "&:hover": {
          ...hoverStyles,
        },
      }}
    />
  );
};

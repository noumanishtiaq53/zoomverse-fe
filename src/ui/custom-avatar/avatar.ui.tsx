import { Avatar } from "@mui/material";
import { CustomTypography } from "../typography/typography";
import { pxToRem } from "@/utils/css.utils";

export const CustomAvatarUI = (props: any) => {
  const {
    src,
    alt,
    width,
    height,
    backgroundColor,
    variant = "circular",
    avatarInitial,
    margin = "auto",
    customStyles,
    hoverStyles,
  } = props;

  return (
    <Avatar
      src={src}
      alt={alt}
      sx={{
        width: pxToRem(width),
        height: pxToRem(height),
        backgroundColor: backgroundColor,
        margin: margin,
        ...customStyles,
        "&:hover": {
          ...hoverStyles,
        },
      }}
      variant={variant}
    >
      {avatarInitial && (
        <CustomTypography text={avatarInitial} variant="avatarInitial" />
      )}
    </Avatar>
  );
};

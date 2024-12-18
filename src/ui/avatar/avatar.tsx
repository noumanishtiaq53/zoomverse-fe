import { Avatar } from "@mui/material";
import { CustomTypography } from "../typography/typography";

export const CustomAvatar = (props: any) => {
  const {
    src,
    alt,
    width,
    height,
    backgroundColor,
    variant = "circular",
    avatarInitial,
    margin = "auto",
  } = props;
  return (
    <Avatar
      src={src}
      alt={alt}
      sx={{
        width: width,
        height: height,
        backgroundColor: backgroundColor,
        margin: margin,
      }}
      variant={variant}
    >
      {avatarInitial && <CustomTypography text={avatarInitial} />}
    </Avatar>
  );
};

import { CustomAvatarUI } from "@/ui/custom-avatar/avatar.ui";

export const CustomFgImage = (props: any) => {
  const { isStaticImage, fgImage, height } = props;
  const srcFgImage = isStaticImage ? fgImage?.src : fgImage;
  
  return (
    <CustomAvatarUI
      src={srcFgImage}
      variant="square"
      customStyles={{
        width: "100%",
        height: height,
        backgroundColor: "common.white",
      }}
    />
  );
};

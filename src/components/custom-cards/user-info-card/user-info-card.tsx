import { CustomBadgeImage } from "@/components/custom-images/custom-badge-image/custom-badge-image";
import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";
import { CustomTypographyUI } from "@/ui/custom-typography/custom-typography.ui";

export const UserInfoCard = (props: any) => {
  const {
    name = "Your Name Here",
    description = "ioi",
    isHideStatus = false,
    count = 0,
  } = props;

  return (
    <CustomBoxUI
      customStyles={{ display: "flex", alignItems: "center", gap: 1 }}
    >
      <CustomBadgeImage isAvatar count={count} isHideStatus={isHideStatus} />
      <CustomBoxUI>
        <CustomTypographyUI text={name} variant="h6" />
        <CustomTypographyUI text={description} variant="body1" />
      </CustomBoxUI>
    </CustomBoxUI>
  );
};

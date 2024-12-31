import { CustomBadgeImage } from "@/components/custom-images/custom-badge-image/custom-badge-image";
import { PROFILE_AVATAR_DIMENSIONS_TYPES } from "@/constants/dimensions.constant";
import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";
import { CustomTypographyUI } from "@/ui/custom-typography/custom-typography.ui";

export const UserInfoCard = (props: any) => {
  const {
    name = "Your Name Here",
    description = "ioi",
    isHideStatus = false,
    count = 0,
    showInfo = true,
    dimension = PROFILE_AVATAR_DIMENSIONS_TYPES?.EXTRA_SMALL,
  } = props;

  return (
    <CustomBoxUI
      customStyles={{ display: "flex", alignItems: "center", gap: 1 }}
    >
      <CustomBadgeImage
        isAvatar
        count={count}
        isHideStatus={isHideStatus}
        dimension={dimension}
      />
      {showInfo && (
        <CustomBoxUI>
          <CustomTypographyUI text={name} variant="h6" />
          <CustomTypographyUI text={description} variant="body1" />
        </CustomBoxUI>
      )}
    </CustomBoxUI>
  );
};

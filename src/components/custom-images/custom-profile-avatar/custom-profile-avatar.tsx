import { ProfileAvatarCommonImage } from "@/assets/images/common";
import {
  PROFILE_AVATAR_BADGE_DIMENSIONS,
  PROFILE_AVATAR_DIMENSIONS,
  PROFILE_AVATAR_DIMENSIONS_TYPES,
} from "@/constants/dimensions.constant";
import { CustomAvatarUI } from "@/ui/custom-avatar/avatar.ui";
import { CustomBadgeUI } from "@/ui/custom-badge/custom-badge.ui";
import { CustomBadgeAvatar } from "../../custom-badge/custom-badge";
import { CLIP_PATH } from "@/constants/css.constant";

export const CustomProfileAvatar = (props: any) => {
  const { dimension = PROFILE_AVATAR_DIMENSIONS_TYPES?.SMALL } = props;

  return (
    <CustomBadgeUI
      badgeContent={
        <CustomBadgeAvatar
          width={PROFILE_AVATAR_BADGE_DIMENSIONS?.[dimension]?.width}
          height={PROFILE_AVATAR_BADGE_DIMENSIONS?.[dimension]?.height}
        />
      }
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      overlap="circular"
    >
      <CustomAvatarUI
        src={ProfileAvatarCommonImage?.src}
        alt="profile-avatars"
        variant="square"
        customStyles={{
          width: PROFILE_AVATAR_DIMENSIONS?.[dimension]?.width,
          height: PROFILE_AVATAR_DIMENSIONS?.[dimension]?.height,
          clipPath: CLIP_PATH?.POLYGON_AVATAR,
          backgroundColor: "common.white",
          boxShadow: 1,
          borderRadius: 2,
          margin: "auto",
        }}
      />
    </CustomBadgeUI>
  );
};

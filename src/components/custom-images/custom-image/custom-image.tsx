import { ProfileAvatarCommonImage } from "@/assets/images/common";
import { HexagonalCard } from "@/components/custom-cards/hexagonal-card/hexagonal-card";
import { CLIP_PATH } from "@/constants/css.constant";
import {
  PROFILE_AVATAR_DIMENSIONS,
  PROFILE_AVATAR_DIMENSIONS_TYPES,
} from "@/constants/dimensions.constant";
import { CustomAvatarUI } from "@/ui/custom-avatar/custom-avatar.ui";

export const CustomImage = (props: any) => {
  const {
    dimension = PROFILE_AVATAR_DIMENSIONS_TYPES?.LARGE,
    gradientBackground = "linear-gradient(90deg, rgba(97,93,250,1) 0%, rgba(35,210,226,1) 35%, rgba(173,175,202,1) 100%)",
    isStaticImage = true,
    image = ProfileAvatarCommonImage,
    isAvatar = true,
    avatarPadding = 0,
    avatarBgColor = "common.white",
    avatarInitial,
  } = props;

  const srcImage = isStaticImage ? image?.src : image;

  return (
    <HexagonalCard margin={-1} padding={0.5} background={gradientBackground}>
      <HexagonalCard padding={isAvatar ? 0.5 : 0}>
        <CustomAvatarUI
          avatarInitial={avatarInitial}
          src={srcImage}
          alt="profile-avatars"
          variant="square"
          customStyles={{
            width: PROFILE_AVATAR_DIMENSIONS?.[dimension]?.width,
            height: PROFILE_AVATAR_DIMENSIONS?.[dimension]?.height,
            clipPath: CLIP_PATH?.POLYGON_AVATAR,
            backgroundColor: avatarBgColor,
            boxShadow: 1,
            margin: "auto",
            padding: avatarPadding,
          }}
        />
      </HexagonalCard>
    </HexagonalCard>
  );
};

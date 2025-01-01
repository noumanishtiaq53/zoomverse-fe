import { ProfileAvatarCommonImage } from "@/assets/images/common";
import { HexagonalCard } from "@/components/custom-cards/hexagonal-card/hexagonal-card";
import { CLIP_PATH } from "@/constants/css.constant";
import {
  PROFILE_AVATAR_DIMENSIONS,
  PROFILE_AVATAR_DIMENSIONS_TYPES,
} from "@/constants/dimensions.constant";
import { CustomAvatarUI } from "@/ui/custom-avatar/custom-avatar.ui";
import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";

export const CustomImage = (props: any) => {
  const {
    variant,
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
  const mapVariant = variant === "hexagonal" ? "square" : variant;
  const hasPadding = variant === "hexagonal" ? 0.5 : undefined;

  return (
    <HexagonalCard
      padding={hasPadding}
      background={variant === "hexagonal" ? gradientBackground : "none"}
    >
      <HexagonalCard padding={isAvatar ? 0.5 : 0}>
        <CustomAvatarUI
          avatarInitial={avatarInitial}
          src={srcImage}
          alt="profile-avatars"
          variant={mapVariant}
          customStyles={{
            width: PROFILE_AVATAR_DIMENSIONS?.[dimension]?.width,
            height: PROFILE_AVATAR_DIMENSIONS?.[dimension]?.height,
            backgroundColor: avatarBgColor,
            boxShadow: 25,
            margin: "auto",
            padding: avatarPadding,
            ...(variant === "hexagonal"
              ? { clipPath: CLIP_PATH?.POLYGON_AVATAR }
              : {}),
          }}
        />
      </HexagonalCard>
    </HexagonalCard>
  );
};

import { ProfileCoverCommonImage } from "@/assets/images/common";
import { CustomCoverImage } from "@/components/custom-images/custom-cover-image/custom-cover-image";
import { CustomProfileAvatar } from "@/components/custom-images/custom-profile-avatar/custom-profile-avatar";
import {
  COVER_IMAGE_DIMENSIONS_TYPES,
  PROFILE_AVATAR_DIMENSIONS,
  PROFILE_AVATAR_DIMENSIONS_TYPES,
} from "@/constants/dimensions.constant";
import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";
import { pxToRem } from "@/utils/css.utils";

export const ProfileBioImages = (props: any) => {
  const {
    profileDimension = PROFILE_AVATAR_DIMENSIONS_TYPES?.LARGE,
    coverDimension = COVER_IMAGE_DIMENSIONS_TYPES?.LARGE,
  } = props;

  return (
    <CustomBoxUI
      customStyles={{
        position: "relative",
        marginBottom: pxToRem(
          PROFILE_AVATAR_DIMENSIONS?.[profileDimension]?.height / 2
        ),
      }}
    >
      <CustomCoverImage
        fgImage={ProfileCoverCommonImage}
        isStaticImage
        dimension={coverDimension}
      />
      <CustomBoxUI
        component="div"
        customStyles={{
          position: "absolute",
          transform: "scale(1) translate(0%, 50%)",
          width: "100%",
          bottom: 0,
          textAlign: "center",
        }}
      >
        <CustomProfileAvatar dimension={profileDimension} />
      </CustomBoxUI>
    </CustomBoxUI>
  );
};

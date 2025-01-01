import {
  COVER_IMAGE_DIMENSIONS_TYPES,
  PROFILE_AVATAR_DIMENSIONS,
  PROFILE_AVATAR_DIMENSIONS_TYPES,
} from "@/constants/dimensions.constant";
import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";
import { pxToRem } from "@/utils/css.utils";
import { CustomCoverImage } from "../custom-cover-image/custom-cover-image";
import { ProfileCoverCommonImage } from "@/assets/images/common";
import { CustomImage } from "../custom-image/custom-image";

export const CustomInfoImages = (props: any) => {
  const {
    profileDimension = PROFILE_AVATAR_DIMENSIONS_TYPES?.MEDIUM,
    coverDimension = COVER_IMAGE_DIMENSIONS_TYPES?.SMALL,
  } = props;
  return (
    <CustomBoxUI
      customStyles={{
        position: "relative",
        marginBottom: pxToRem(
          -PROFILE_AVATAR_DIMENSIONS?.[profileDimension]?.height / 2
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
          //   display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          //   gap: 3,
          //   marginLeft: 0,
          paddingX: 2,
          transform: " translateY(-50%)",
        }}
      >
        <CustomImage dimension={profileDimension} />
      </CustomBoxUI>
    </CustomBoxUI>
  );
};

import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";
import { DynamicMenuItems } from "../dynamic-menu-items/dynamic-menu-items";
import { ProfileBioImages } from "@/components/custom-images/profile-bio-images/profile-bio-images";
import { PROFILE_AVATAR_DIMENSIONS_TYPES } from "@/constants/dimensions.constant";

export const LeftSideBar = () => {
  return (
    <>
      <ProfileBioImages
        profileDimension={PROFILE_AVATAR_DIMENSIONS_TYPES?.MEDIUM}
      />
      <CustomBoxUI
        customStyles={{
          backgroundColor: "common.white",
          paddingX: 2,
          paddingY: 1,
          boxShadow: 1,
          minHeight: "80vh",
        }}
      >
        <br />
        <br />
        <DynamicMenuItems
          isIconMenu
          flexDirection="column"
          textColor="primary"
        />
      </CustomBoxUI>
    </>
  );
};

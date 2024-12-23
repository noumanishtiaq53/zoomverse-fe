import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";
import { DynamicMenuItems } from "../dynamic-menu-items/dynamic-menu-items";
import { ProfileImageCard } from "@/components/custom-cards/profile-image-card/profile-image-card";
import { PROFILE_AVATAR_DIMENSIONS_TYPES } from "@/constants/dimensions.constant";

export const LeftSideBar = () => {
  return (
    <>
      <ProfileImageCard
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

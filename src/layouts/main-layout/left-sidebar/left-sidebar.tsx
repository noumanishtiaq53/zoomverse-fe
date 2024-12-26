import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";
import { DynamicMenuItems } from "../dynamic-menu-items/dynamic-menu-items";
import { ProfileBioCard } from "@/components/custom-cards/profile-bio-card/profile-bio-card";

export const LeftSideBar = () => {
  return (
    <>
      <ProfileBioCard />
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

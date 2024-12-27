import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";
import { DynamicMenuItems } from "../dynamic-menu-items/dynamic-menu-items";
import { ProfileBioCard } from "@/components/custom-cards/profile-bio-card/profile-bio-card";

export const LeftSideBar = () => {
  return (
    <>
      <ProfileBioCard />
      <CustomBoxUI
        customStyles={{
          paddingY: 1,
          paddingX: 2,
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

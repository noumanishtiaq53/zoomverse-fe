import { CustomBox } from "@/ui/box/box";
import { CustomTypography } from "@/ui/typography/typography";
import { pxToRem } from "@/utils/css.utils";
import { StaticMenuItems } from "../static-menu-items/static-menu-items";
import { CustomSearch } from "@/components/custom-search/custom-search";
import { CustomIcon } from "@/ui/custom-icons/custom-icons";
import { UIGridViewIcon, UISettingsIcon } from "@/assets/ui-icons";
import { onlyIconMenuItemsData } from "../static-menu-items/static-menu-items.data";

export const Header = () => {
  return (
    <CustomBox
      customStyles={{
        backgroundColor: "primary.main",
        padding: 2,
      }}
    >
      <CustomBox
        customStyles={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 3,
        }}
      >
        <CustomTypography text="Flash0Verse" />
        <CustomIcon
          Icon={UIGridViewIcon}
          iconColor="primary.light"
          hoverColor="common.white"
          hasAction
        />
        <StaticMenuItems />
        <CustomBox
          customStyles={{
            width: pxToRem(700),
          }}
        >
          <CustomSearch placeholder="Search here for people and groups" />
        </CustomBox>
        <StaticMenuItems
          menuItemsData={onlyIconMenuItemsData}
          isIconMenu={true}
        />
        <CustomIcon Icon={UISettingsIcon} iconColor="common.white" hasAction />
      </CustomBox>
    </CustomBox>
  );
};

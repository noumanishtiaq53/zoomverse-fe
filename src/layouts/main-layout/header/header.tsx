import { CustomBox } from "@/ui/box/box";
import { CustomTypography } from "@/ui/typography/typography";
import { pxToRem } from "@/utils/css.utils";
import { MenuItems } from "../menu-items/menu-items";
import { CustomSearch } from "@/components/custom-search/custom-search";

export const Header = () => {
  return (
    <CustomBox backgroundColor="primary.main" padding={2}>
      <CustomBox display="flex" alignItems="center" gap={2}>
        <CustomTypography text="Flash0Verse" />
        <MenuItems />
        <CustomBox width={pxToRem(700)}>
          <CustomSearch placeholder="Search here for people and groups" />
        </CustomBox>
      </CustomBox>
    </CustomBox>
  );
};

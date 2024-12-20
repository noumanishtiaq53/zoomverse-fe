import { CustomBox } from "@/ui/box/box";
import { DynamicMenuItems } from "../dynamic-menu-items/dynamic-menu-items";

export const LeftSideBar = () => {
  return (
    <>
      <CustomBox
        backgroundColor="common.white"
        paddingX={2}
        boxShadow={1}
        minHeight="80vh"
      >
        <DynamicMenuItems
          isIconMenu
          flexDirection="column"
          textColor="primary"
        />
      </CustomBox>
    </>
  );
};

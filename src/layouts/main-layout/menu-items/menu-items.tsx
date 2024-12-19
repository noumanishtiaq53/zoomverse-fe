import { CustomLink } from "@/components/custom-link/custom-link";
import { Fragment } from "react";
import { primaryMenuItemsData } from "./menu-items.data";
import { CustomBox } from "@/ui/box/box";

export const MenuItems = (props: any) => {
  const { menuItemsData = primaryMenuItemsData, textColor = "common.white" } =
    props;

  return (
    <>
      <CustomBox display="flex" gap={3} alignItems="center">
        {menuItemsData?.map((menuItem: any) => (
          <Fragment key={menuItem?._id}>
            <CustomLink
              linkText={menuItem?.name}
              linkRoute={menuItem?.route}
              textColor={textColor}
              component="div"
            />
          </Fragment>
        ))}
      </CustomBox>
    </>
  );
};

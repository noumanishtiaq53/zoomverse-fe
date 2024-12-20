import { CustomLink } from "@/components/custom-link/custom-link";
import { Fragment } from "react";
import { primaryMenuItemsData } from "./static-menu-items.data";
import { CustomBox } from "@/ui/box/box";
import { CustomIcon } from "@/ui/custom-icons/custom-icons";
import { CustomTypography } from "@/ui/typography/typography";

export const StaticMenuItems = (props: any) => {
  const {
    menuItemsData = primaryMenuItemsData,
    textColor = "common.white",
    isIconMenu = false,
    flexDirection = "row",
    alignItems,
  } = props;

  return (
    <>
      <CustomBox
        display="flex"
        gap={3}
        alignItems={alignItems}
        flexDirection={flexDirection}
      >
        {menuItemsData?.map((menuItem: any) => (
          <Fragment key={menuItem?._id}>
            <CustomLink
              linkText={
                menuItem?.icon ? (
                  <CustomBox
                    key={menuItem?._id}
                    display="flex"
                    alignItems="center"
                    gap={3}
                  >
                    {(isIconMenu || menuItem?.hasIcon) && (
                      <CustomBox
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <CustomIcon
                          Icon={menuItem?.icon}
                          iconColor="primary.light"
                          hoverColor="common.white"
                        />
                      </CustomBox>
                    )}
                    <CustomTypography text={menuItem?.name} />
                  </CustomBox>
                ) : (
                  menuItem?.name
                )
              }
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

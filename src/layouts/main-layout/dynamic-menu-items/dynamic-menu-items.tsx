"use client";
import { primarySidebarMenuItemsData } from "./dynamic-menu-items.data";
import { CustomLink } from "@/components/custom-link/custom-link";
import { CustomBox } from "@/ui/box/box";
import { CustomIcon } from "@/ui/custom-icons/custom-icons";
import { CustomTypography } from "@/ui/typography/typography";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const DynamicMenuItems = (props: any) => {
  const [isHovered, setIsHovered] = useState("");
  const pathname = usePathname();

  const {
    menuItemsData = primarySidebarMenuItemsData,
    isIconMenu = false,
    hasHover = true,
  } = props;

  return (
    <>
      {menuItemsData?.map((menuItem: any) => (
        <CustomBox
          key={menuItem?._id}
          customStyles={{
            paddingY: 1,
            paddingRight: 2,
            marginBottom: 1.5,
            backgroundColor:
              pathname === menuItem?.route ? "secondary.main" : "",
            borderRadius: pathname === menuItem?.route ? 2 : 0,
            boxShadow: pathname === menuItem?.route ? 2 : 0,
          }}
          hoverStyles={{
            boxShadow: pathname === menuItem?.route ? 0 : 1,
            borderRadius: 2,
          }}
          {...(hasHover
            ? {
                onMouseOver: (e: any) => setIsHovered?.(menuItem?._id),
                onMouseOut: (e: any) => setIsHovered?.(""),
              }
            : {})}
        >
          <CustomLink
            linkText={
              <>
                <CustomBox
                  key={menuItem?._id}
                  customStyles={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    paddingLeft: 0.5,
                  }}
                >
                  {(isIconMenu || menuItem?.hasIcon) && (
                    <CustomBox
                      customStyles={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <CustomIcon
                        Icon={menuItem?.icon}
                        iconColor={
                          pathname === menuItem?.route
                            ? "common.white"
                            : isHovered === menuItem?._id
                            ? "secondary.main"
                            : "grey.0"
                        }
                        hoverColor={
                          isHovered ? "secondary.main" : "secondary.main"
                        }
                      />
                    </CustomBox>
                  )}
                  <CustomTypography text={menuItem?.name} variant="h6" />
                </CustomBox>
              </>
            }
            linkRoute={menuItem?.route}
            textColor={
              pathname === menuItem?.route ? "common.white" : "primary"
            }
          />
        </CustomBox>
      ))}
    </>
  );
};

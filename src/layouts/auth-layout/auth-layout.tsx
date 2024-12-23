"use client";
import { BgAuthImage } from "@/assets/images";
import { CustomBgImage } from "@/components/custom-images/custom-bg-image/custom-bg-image";
import { CustomAvatarUI } from "@/ui/custom-avatar/avatar.ui";
import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";
import { CustomGrid } from "@/ui/grid/grid";
import { CustomTypography } from "@/ui/typography/typography";

export const AuthLayout = (props: any) => {
  const { children } = props;

  return (
    <CustomBgImage isStaticBg bgImage={BgAuthImage}>
      <CustomGrid
        isContainer
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        maxWidth="lg"
        padding={{ xs: 3, md: 4 }}
      >
        <CustomGrid>
          <CustomBoxUI
            customStyles={{
              color: "common.white",
              textAlign: "center",
            }}
          >
            <CustomAvatarUI src={BgAuthImage?.src} />
            <CustomTypography variant="h4" text="Welcome To" />
            <CustomTypography variant="h1" text="FlashOVerse" />
            <CustomTypography
              variant="h5"
              text="MetaHumans possess extraordinary powers, often due to accidents or mutations. The Flash, Barry Allen, gains super-speed from a lightning strike, tapping into the Speed Force, showcasing humanity’s limitless potential for evolution"
            />
          </CustomBoxUI>
        </CustomGrid>
        <CustomGrid>
          <CustomBoxUI
            customStyles={{
              backgroundColor: "common.white",
              padding: 3,
              borderRadius: 4,
            }}
          >
            {children}
          </CustomBoxUI>
        </CustomGrid>
      </CustomGrid>
    </CustomBgImage>
  );
};

"use client";
import { BgAuthImage } from "@/assets/images";
import { CustomAvatar } from "@/ui/avatar/avatar";
import { CustomBox } from "@/ui/box/box";
import { CustomGrid } from "@/ui/grid/grid";
import { CustomTypography } from "@/ui/typography/typography";

export const AuthLayout = (props: any) => {
  const { children } = props;

  return (
    <CustomBox backgroundImage={`url(${BgAuthImage?.src})`}>
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
          <CustomBox color="common.white" textAlign="center">
            <CustomAvatar src={BgAuthImage?.src} />
            <CustomTypography variant="h4" text="Welcome To" />
            <CustomTypography variant="h1" text="FlashOVerse" />
            <CustomTypography
              variant="h5"
              text="MetaHumans possess extraordinary powers, often due to accidents or mutations. The Flash, Barry Allen, gains super-speed from a lightning strike, tapping into the Speed Force, showcasing humanity’s limitless potential for evolution"
            />
          </CustomBox>
        </CustomGrid>
        <CustomGrid>
          <CustomBox
            backgroundColor="common.white"
            padding={3}
            borderRadius={4}
          >
            {children}
          </CustomBox>
        </CustomGrid>
      </CustomGrid>
    </CustomBox>
  );
};

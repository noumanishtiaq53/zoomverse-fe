import { CustomBox } from "@/ui/box/box";
import { RightSideBar } from "./right-sidebar/right-sidebar";
import { LeftSideBar } from "./left-sidebar/left-sidebar";
import { Header } from "./header/header";
import { CustomGrid } from "@/ui/grid/grid";

export const MainLayout = (props: any) => {
  const { children } = props;

  return (
    <>
      <CustomBox display="flex" flexDirection="column" minHeight="100vh">
        <CustomBox>
          <Header />
        </CustomBox>
        <CustomGrid isContainer>
          <CustomGrid size="auto">
            <LeftSideBar />
          </CustomGrid>
          <CustomGrid size="grow">{children}</CustomGrid>
          <CustomGrid size="auto">
            <RightSideBar />
          </CustomGrid>
        </CustomGrid>
      </CustomBox>
    </>
  );
};

import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";
import { RightSideBar } from "./right-sidebar/right-sidebar";
import { LeftSideBar } from "./left-sidebar/left-sidebar";
import { Header } from "./header/header";
import { CustomGrid } from "@/ui/grid/grid";

export const MainLayout = (props: any) => {
  const { children } = props;

  return (
    <>
      <CustomBoxUI>
        <CustomBoxUI>
          <Header />
        </CustomBoxUI>
        <CustomGrid isContainer>
          <CustomGrid size="auto">
            <LeftSideBar />
          </CustomGrid>
          <CustomGrid size="grow">{children}</CustomGrid>
          <CustomGrid size="auto">
            <RightSideBar />
          </CustomGrid>
        </CustomGrid>
      </CustomBoxUI>
    </>
  );
};

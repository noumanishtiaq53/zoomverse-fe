import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";
import { RightSideBar } from "./right-sidebar/right-sidebar";
import { LeftSideBar } from "./left-sidebar/left-sidebar";
import { Header } from "./header/header";
import { CustomGridUI } from "@/ui/custom-grid/custom-grid.ui";

export const MainLayout = (props: any) => {
  const { children } = props;

  return (
    <>
      <CustomBoxUI>
        <CustomBoxUI>
          <Header />
        </CustomBoxUI>
        <CustomGridUI isContainer>
          <CustomGridUI size="auto">
            <LeftSideBar />
          </CustomGridUI>
          <CustomGridUI size="grow" customStyles={{ paddingY:2 }}>
            {children}
          </CustomGridUI>
          <CustomGridUI size="auto">
            <RightSideBar />
          </CustomGridUI>
        </CustomGridUI>
      </CustomBoxUI>
    </>
  );
};

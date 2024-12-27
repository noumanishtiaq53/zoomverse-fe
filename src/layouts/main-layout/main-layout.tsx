import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";
import { RightSideBar } from "./right-sidebar/right-sidebar";
import { LeftSideBar } from "./left-sidebar/left-sidebar";
import { Header } from "./header/header";
import { CustomGridUI } from "@/ui/custom-grid/custom-grid.ui";
import { pxToRem } from "@/utils/css.utils";

export const MainLayout = (props: any) => {
  const { children } = props;

  return (
    <>
      <CustomBoxUI>
        <CustomBoxUI
          customStyles={{
            position: "fixed",
            top: 0,
            zIndex: 1000,
            width: "100%",
          }}
        >
          <Header />
        </CustomBoxUI>

        <CustomBoxUI
          customStyles={{
            maxHeight: "calc(100vh - 100px)",
            display: "flex",
            justifyContent: "space-between",
            gap: 2,
            marginTop: pxToRem(100),
            overflow: "clip",
          }}
        >
          <CustomBoxUI
            customStyles={{
              backgroundColor: "common.white",
              boxShadow: 1,
              overflow: "auto",
              minHeight: "100%",
            }}
          >
            <LeftSideBar />
          </CustomBoxUI>
          <CustomBoxUI customStyles={{ flex: 1, overflow: "auto" }}>
            {children}
          </CustomBoxUI>
          <CustomBoxUI
            customStyles={{
              backgroundColor: "common.white",
              boxShadow: 1,
              overflow: "auto",
              minHeight: "100%",
            }}
          >
            <LeftSideBar />
          </CustomBoxUI>
          {/* <RightSideBar /> */}
        </CustomBoxUI>

        {/* ****++++++++++++++++++++****************** */}
      </CustomBoxUI>
    </>
  );
};

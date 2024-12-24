import { Drawer } from "@mui/material";

export const CustomDrawerUI = (props: any) => {
  const { isPortalOpen, closePortal, anchor = "left", children } = props;

  return (
    <Drawer open={isPortalOpen} onClose={closePortal} anchor={anchor}>
      {children}
    </Drawer>
  );
};

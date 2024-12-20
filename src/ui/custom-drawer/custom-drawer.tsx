import { Drawer } from "@mui/material";

export const CustomDrawer = (props: any) => {
  const { isPortalOpen, closePortal, anchor = "left", children } = props;

  return (
    <Drawer open={isPortalOpen} onClose={closePortal} anchor={anchor}>
      {children}
    </Drawer>
  );
};

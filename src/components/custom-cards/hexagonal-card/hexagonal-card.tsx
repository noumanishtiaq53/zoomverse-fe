import { CLIP_PATH } from "@/constants/css.constant";
import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";
import zIndex from "@mui/material/styles/zIndex";

export const HexagonalCard = (props: any) => {
  const {
    children,
    borderRadius = 2,
    padding = 0.3,
    backgroundColor = "common.white",
    background,
    zIndex,
    margin
  } = props;

  return (
    <CustomBoxUI
      customStyles={{
        backgroundColor,
        background: background,
        boxShadow: 1,
        borderRadius,
        padding,
        clipPath: CLIP_PATH?.POLYGON_AVATAR,
        display: "inline-block",
        zIndex,
        margin
        // position:'relative'
      }}
    >
      {children}
    </CustomBoxUI>
  );
};

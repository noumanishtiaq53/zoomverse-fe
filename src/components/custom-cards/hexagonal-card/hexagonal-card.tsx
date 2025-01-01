import { CLIP_PATH } from "@/constants/css.constant";
import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";

export const HexagonalCard = (props: any) => {
  const {
    children,
    borderRadius = 2,
    padding = 0,
    backgroundColor = "common.white",
    background,
    zIndex,
    margin,
    border = "none",
    display = "inline-flex",
  } = props;

  return (
    <CustomBoxUI
      customStyles={{
        backgroundColor,
        background: background,
        boxShadow: 25,
        borderRadius,
        padding,
        clipPath: CLIP_PATH?.POLYGON_AVATAR,
        zIndex,
        margin,
        border,
        display
        // position:'relative'
      }}
    >
      {children}
    </CustomBoxUI>
  );
};

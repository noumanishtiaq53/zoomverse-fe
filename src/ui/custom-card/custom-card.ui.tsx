import { CustomBoxUI } from "../custom-box/custom-box.ui";

export const CustomCardUI = (props: any) => {
  const {
    children,
    borderRadius = 2,
    backgroundColor = "common.white",
    padding,
    marginX,
    boxShadow = 25,
    height = "100%"
  } = props;

  return (
    <CustomBoxUI
      customStyles={{
        backgroundColor,
        boxShadow,
        borderRadius,
        padding,
        marginX,
        height
      }}
    >
      {children}
    </CustomBoxUI>
  );
};

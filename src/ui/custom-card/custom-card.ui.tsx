import { CustomBoxUI } from "../custom-box/custom-box.ui";

export const CustomCardUI = (props: any) => {
  const {
    children,
    borderRadius = 2,
    backgroundColor = "common.white",
    padding,
  } = props;
  
  return (
    <CustomBoxUI
      customStyles={{
        backgroundColor,
        boxShadow: 1,
        borderRadius,
        padding,
      }}
    >
      {children}
    </CustomBoxUI>
  );
};

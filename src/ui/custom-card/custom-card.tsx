import { CustomBoxUI } from "../custom-box/custom-box.ui";

export const CustomCardUI = (props: any) => {
  const { children, borderRadius = 2 } = props;
  return (
    <CustomBoxUI
      customStyles={{
        backgroundColor: "common.white",
        boxShadow: 1,
        borderRadius,
      }}
    >
      {children}
    </CustomBoxUI>
  );
};

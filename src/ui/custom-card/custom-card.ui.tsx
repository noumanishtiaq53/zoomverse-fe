import { CustomBoxUI } from "../custom-box/custom-box.ui";

export const CustomCardUI = (props: any) => {
  const {
    children,
    borderRadius = 2,
    backgroundColor = "common.white",
    padding,
    marginX,
    boxShadow = 27,
    height,
    cardStyles,
  } = props;

  return (
    <CustomBoxUI
      customStyles={{
        backgroundColor,
        boxShadow,
        borderRadius,
        padding,
        marginX,
        height,
        display: "flex",
        flexDirection: "column",
        maxHeight: "100%",
        minHeight: "100%",
        ...cardStyles,
      }}
    >
      {children}
    </CustomBoxUI>
  );
};

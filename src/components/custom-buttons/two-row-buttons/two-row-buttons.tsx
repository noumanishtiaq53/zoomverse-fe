"use client";

import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";
import { CustomButtonUI } from "@/ui/custom-button/custom-button.ui";

export const TwoRowButtons = (props: any) => {
  const {
    btnTextOne = "Add Friend",
    btnTextTwo = "Send Message",
    primaryBtnAction,
    secondaryBtnAction,
  } = props;

  return (
    <CustomBoxUI
      customStyles={{ display: "flex", alignItems: "center", gap: 1 }}
    >
      <CustomButtonUI
        text={btnTextOne}
        color="primary"
        handleClick={() => primaryBtnAction?.()}
      />
      <CustomButtonUI
        text={btnTextTwo}
        color="secondary"
        handleClick={() => secondaryBtnAction?.()}
      />
    </CustomBoxUI>
  );
};

"use client";
import { CustomButton } from "@/components/buttons/button";
import { CustomGrid } from "@/components/container/grid/grid";
import { FormFields } from "@/features/common-component-map/form-fields/form-fields";
import { successSnackbar } from "@/libs/snackbar.lib";

export default function Home() {
  return (
    <>
      <CustomButton
        handleClick={() => successSnackbar?.()}
        text={"App is on"}
      />
      <br />
      <br />
      <br />
      <FormFields />
      <br />
      <br />

      <CustomGrid isContainer>
        <CustomGrid isContainer={false}>123</CustomGrid>
        <CustomGrid isContainer={false}>123</CustomGrid>
      </CustomGrid>
      <br />
      <br />
    </>
  );
}

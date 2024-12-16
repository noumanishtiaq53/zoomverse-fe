"use client";
import { CustomButton } from "@/components/buttons/button";
import { successSnackbar } from "@/libs/snackbar.lib";

export default function Home() {
  return (
    <>
      <>App</>
      <CustomButton
        handleClick={() => successSnackbar?.()}
        text={"App is on "}
      />
    </>
  );
}

"use client";

import { CustomGrid } from "@/ui/grid/grid";
import { CustomFormProvider } from "@/providers/custom-form-provider";
import { CustomTypography } from "@/ui/typography/typography";
import { CustomButton } from "@/ui/buttons/button";
import { useSignup } from "./use-signup.hook";

export const SignupFeature = () => {
  const { signupFormFields, methods, handleSubmit, submitSignupForm } =
    useSignup();

  return (
    <>
      <CustomTypography
        textAlign="center"
        text="Create your Account"
        variant="h3"
        marginY={4}
      />
      <CustomFormProvider
        methods={methods}
        onSubmit={handleSubmit(submitSignupForm)}
      >
        <CustomGrid isContainer spacing={2}>
          {signupFormFields?.map((formField: any) => (
            <CustomGrid md={12} lg={12} xl={12} key={formField?.id}>
              <formField.component {...formField?.componentProps} />
            </CustomGrid>
          ))}
        </CustomGrid>
        <br />
        <br />
        <CustomButton type="submit" text="Login to your Account" fullWidth />
        <CustomTypography
          textAlign="center"
          text="Create your Account"
          variant="h3"
          marginY={4}
        />
      </CustomFormProvider>
    </>
  );
};

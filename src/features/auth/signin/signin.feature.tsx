"use client";

import { CustomGrid } from "@/ui/grid/grid";
import { useSignin } from "./use-signin.hook";
import { CustomFormProvider } from "@/providers/custom-form-provider";
import { CustomTypography } from "@/ui/typography/typography";
import { CustomButton } from "@/ui/buttons/button";
import { CustomLink } from "@/components/custom-link/custom-link";
import { ROUTES } from "@/constants/routes.constant";

export const SigninFeature = () => {
  const { signinFormFields, methods, handleSubmit, submitSigninForm } =
    useSignin();

  return (
    <>
      <CustomTypography
        textAlign="center"
        text="Account Login"
        variant="h3"
        marginY={4}
      />
      <CustomFormProvider
        methods={methods}
        onSubmit={handleSubmit(submitSigninForm)}
      >
        <CustomGrid isContainer spacing={2}>
          {signinFormFields?.map((formField: any) => (
            <CustomGrid md={12} lg={12} xl={12} key={formField?.id}>
              <formField.component {...formField?.componentProps} />
            </CustomGrid>
          ))}
        </CustomGrid>
        <br />
        <CustomButton type="submit" text="Login to your Account" fullWidth />
        <br />
        <CustomTypography
          textAlign="center"
          text={
            <>
              Already have an account{" "}
              <CustomLink linkRoute={ROUTES?.SIGNUP} linkText={`Signup here`} />
            </>
          }
          variant="subtitle2"
          marginY={1}
        />
      </CustomFormProvider>
    </>
  );
};

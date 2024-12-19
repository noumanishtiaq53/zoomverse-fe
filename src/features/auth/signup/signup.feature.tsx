"use client";

import { CustomGrid } from "@/ui/grid/grid";
import { CustomFormProvider } from "@/providers/custom-form-provider";
import { CustomTypography } from "@/ui/typography/typography";
import { CustomButton } from "@/ui/buttons/button";
import { useSignup } from "./use-signup.hook";
import { CustomLink } from "@/components/custom-link/custom-link";
import { ROUTES } from "@/constants/routes.constant";

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
        <CustomButton type="submit" text="Register Now" fullWidth />
        <br />
        <CustomTypography
          text={
            <>
              You'll receive a confirmation email in your inbox with a link to
              activate your account. If you have any problems,{" "}
              <CustomLink
                linkRoute={ROUTES?.CONTACT_US}
                linkText={`contact us`}
              />
            </>
          }
          variant="subtitle2"
          marginY={1}
        />
      </CustomFormProvider>
    </>
  );
};

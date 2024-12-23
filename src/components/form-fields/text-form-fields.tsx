"use client";
import { Controller, useFormContext } from "react-hook-form";
import { CustomTextFields } from "../../ui/fields/custom-text-fields";
import { Typography } from "@mui/material";
import { CustomTypography } from "@/ui/typography/typography";

export const TextFormFields = (props: any) => {
  const { name, onBlurHandler, ...other } = props;

  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      //   defaultValue={other?.defaultValue || ""}
      render={({ field, fieldState: { error } }) => (
        <>
          <CustomTextFields
            {...field}
            value={field?.value || ""}
            onChange={field?.onChange}
            onBlur={() => {
              onBlurHandler?.();
              field?.onBlur?.();
            }}
            error={!!error}
            startIcon={other?.startIcon}
            endIcon={other?.endIcon}
            helperText={
              <CustomTypography component="span" text={error?.message} />
            }
            {...other}
          />
        </>
      )}
    />
  );
};

export default TextFormFields;

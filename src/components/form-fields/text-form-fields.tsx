import { Controller, useFormContext } from "react-hook-form";
import { CustomTextFields } from "../fields/custom-text-fields";
import { Typography } from "@mui/material";

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
              <Typography
                component={"span"}
                sx={{ display: "block", mt: -1, ml: -1 }}
              >
                {error?.message}
              </Typography>
            }
            {...other}
          />
        </>
      )}
    />
  );
};

export default TextFormFields;

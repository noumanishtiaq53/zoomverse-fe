"use client";
import { CustomCheckbox } from "@/ui/fields/custom-checkbox";
import { Controller, useFormContext } from "react-hook-form";

export const CheckboxFormField = (props: any) => {
  const { name, label, color, size } = props;
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <CustomCheckbox
            name={name}
            label={label}
            value={field?.value}
            onChange={field?.onChange}
            color={color}
            size={size}
          />
        );
      }}
    />
  );
};

export default CheckboxFormField;

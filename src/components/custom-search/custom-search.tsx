"use client";
import { CustomTextFieldUI } from "@/ui/custom-fields/custom-text-field.ui";
import { CustomIconUI } from "@/ui/custom-icon/custom-icon.ui";
import { UISearchIcon } from "@/assets/ui-icons";

export const CustomSearch = (props: any) => {
  const { setSearch, search, placeholder } = props;

  const handleSearch = (e: any) => {
    setSearch?.(e?.target?.value);
  };

  return (
    <CustomTextFieldUI
      label=""
      onChange={handleSearch}
      value={search}
      endIcon={
        <CustomIconUI
          Icon={UISearchIcon}
          customStyles={{ color: "primary.light" }}
        />
      }
      placeholder={placeholder}
      backgroundColor={"primary.dark"}
      borderRadius={2}
      border="none"
      color="common.white"
    />
  );
};

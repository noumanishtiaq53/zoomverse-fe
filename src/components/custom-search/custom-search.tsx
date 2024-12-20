"use client";
import { CustomTextFields } from "@/ui/fields/custom-text-fields";
import { CustomIcon } from "@/ui/custom-icons/custom-icons";
import { UISearchIcon } from "@/assets/ui-icons";

export const CustomSearch = (props: any) => {
  const { setSearch, search, placeholder } = props;

  const handleSearch = (e: any) => {
    setSearch?.(e?.target?.value);
  };

  return (
    <CustomTextFields
      label=""
      onChange={handleSearch}
      value={search}
      endIcon={<CustomIcon Icon={UISearchIcon} iconColor="primary.light" />}
      placeholder={placeholder}
      backgroundColor={"primary.dark"}
      borderRadius={2}
      border="none"
      color="common.white"
    />
  );
};

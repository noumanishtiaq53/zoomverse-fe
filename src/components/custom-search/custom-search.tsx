"use client";
import { CustomTextFields } from "@/ui/fields/custom-text-fields";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export const CustomSearch = (props: any) => {
  const { setSearch, search, placeholder } = props;

  const handleSearch = (e: any) => {
    setSearch(e?.target?.value);
  };

  return (
    <CustomTextFields
      label=""
      onChange={handleSearch}
      value={search}
      endIcon={<SearchIcon />}
      placeholder={placeholder}
      backgroundColor={"common.darkViolet"}
      borderRadius={2}
      border="none"
    />
  );
};

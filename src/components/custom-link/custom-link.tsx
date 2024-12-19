import { CustomTypography } from "@/ui/typography/typography";
import Link from "next/link";
import { ICustomLinkProps } from "./custom-link.interface";

export const CustomLink = (props: ICustomLinkProps) => {
  const {
    linkRoute = "#",
    linkText,
    component = "span",
    textColor = "secondary.main",
  } = props;
  return (
    <Link href={linkRoute}>
      <CustomTypography
        component={component}
        text={linkText}
        variant="overline"
        textColor={textColor}
      />
    </Link>
  );
};

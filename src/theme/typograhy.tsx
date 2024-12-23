import { pxToRem } from "@/utils/css.utils";
import { responsiveFontSizes } from "@/utils/ui-lib.utils";

const FONT_FAMILY = "Rajdhani";

export const typography = {
  fontFamily: FONT_FAMILY,
  h1: {
    fontSize: pxToRem(104), //used
    fontWeight: 600,
    ...responsiveFontSizes({ xs: 36, md: 70, lg: 104 }),
  },
  h2: {
    fontSize: pxToRem(48),
    fontWeight: 700,
  },
  h3: {
    fontSize: pxToRem(26),
    fontWeight: 700, //used
  },
  h4: {
    fontSize: pxToRem(24), //used
    fontWeight: 500,
    padding: 10,
  },
  h5: {
    fontSize: pxToRem(18), //used
    fontWeight: 600,
  },
  h6: {
    fontSize: pxToRem(14), //used
    fontWeight: 700,
  },
  body1: {
    fontSize: pxToRem(16),
    fontWeight: 400,
  },
  body2: {
    fontSize: pxToRem(14),
    fontWeight: 500,
  },
  subtitle1: {
    fontSize: pxToRem(16),
    fontWeight: 400,
  },
  subtitle2: {
    // for help text
    fontSize: pxToRem(14),
    fontWeight: 500,
  },
  caption: {
    fontSize: pxToRem(14),
    fontWeight: 500,
  },
  overline: {
    // for link text
    fontSize: pxToRem(14),
    fontWeight: 600,
    textTransform: "none",
  },
  button: {
    fontSize: pxToRem(14),
    fontWeight: 700,
    textTransform: "none",
    height: pxToRem(54),
  },
  logoText: {
    ...responsiveFontSizes({ xs: 20, md: 26 }),
    fontWeight: 700,
  },
  avatarInitial: {
    fontSize: pxToRem(12),
    fontWeight: 600,
  },
};

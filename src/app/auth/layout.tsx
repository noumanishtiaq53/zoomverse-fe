import { BgAuthImage } from "@/assets/images";
import { CustomBox } from "@/components/container/box/box";

export const AuthLayout = (props: any) => {
  const { children } = props;

  return (
    <CustomBox backgroundImage={`url(${BgAuthImage?.src})`}>
      {children}
    </CustomBox>
  );
};

export default AuthLayout;

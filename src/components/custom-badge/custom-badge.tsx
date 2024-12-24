import { CLIP_PATH } from "@/constants/css.constant";
import { CustomAvatarUI } from "@/ui/custom-avatar/custom-avatar.ui";
import { HexagonalCard } from "../custom-cards/hexagonal-card/hexagonal-card";

export const CustomBadgeAvatar = (props: any) => {
  const { children, width, height } = props;
  return (
    <HexagonalCard>
      <CustomAvatarUI
        avatarInitial={23}
        customStyles={{
          width: width,
          height: height,
          clipPath: CLIP_PATH?.POLYGON_AVATAR,
          backgroundColor: "primary.main",
          boxShadow: 1,
          borderRadius: 2,
        }}
      >
        {children}
      </CustomAvatarUI>
    </HexagonalCard>
  );
};

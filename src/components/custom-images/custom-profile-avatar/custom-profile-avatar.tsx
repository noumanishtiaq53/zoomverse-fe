import {
  PROFILE_AVATAR_BADGE_DIMENSIONS,
  PROFILE_AVATAR_CARD_PADDING,
  PROFILE_AVATAR_DIMENSIONS_TYPES,
} from "@/constants/dimensions.constant";
import { CustomBadgeUI } from "@/ui/custom-badge/custom-badge.ui";
import { CustomBadgeAvatar } from "../../custom-badge/custom-badge";
import { HexagonalCard } from "@/components/custom-cards/hexagonal-card/hexagonal-card";
import { CustomImage } from "../custom-image/custom-image";

export const CustomProfileAvatar = (props: any) => {
  
  const { dimension = PROFILE_AVATAR_DIMENSIONS_TYPES?.LARGE } = props;

  return (
    <HexagonalCard padding={PROFILE_AVATAR_CARD_PADDING?.[dimension]}>
      <CustomBadgeUI
        badgeContent={
          <CustomBadgeAvatar
            width={PROFILE_AVATAR_BADGE_DIMENSIONS?.[dimension]?.width}
            height={PROFILE_AVATAR_BADGE_DIMENSIONS?.[dimension]?.height}
          />
        }
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        overlap="circular"
      >
        <CustomImage dimension={dimension} />
      </CustomBadgeUI>
    </HexagonalCard>
  );
};

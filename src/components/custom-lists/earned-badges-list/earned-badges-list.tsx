import { CustomBadgeImage } from "@/components/custom-images/custom-badge-image/custom-badge-image";
import { PROFILE_AVATAR_DIMENSIONS_TYPES } from "@/constants/dimensions.constant";
import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";
import { Fragment } from "react";

export const EarnedBadgesList = (props: any) => {
  const { earnedBadgesListData = [] } = props;
  return (
    <CustomBoxUI
      customStyles={{
        display: "flex",
        alignItems: "center",
        gap: 3,
        marginY: 2,
      }}
    >
      {earnedBadgesListData?.length &&
        earnedBadgesListData?.slice(0, 3)?.map((badge: any) => (
          <Fragment key={badge._id}>
            <CustomBadgeImage
              dimension={PROFILE_AVATAR_DIMENSIONS_TYPES?.EXTRA_SMALL}
              isAvatar={false}
              count={badge?.count}
              image={badge?.image}
            />
          </Fragment>
        ))}
      {earnedBadgesListData?.length > 3 ? (
        <CustomBadgeImage
          dimension={PROFILE_AVATAR_DIMENSIONS_TYPES?.EXTRA_SMALL}
          isAvatar={false}
          avatarInitial={`+${earnedBadgesListData?.length - 3}`}
          avatarBgColor={"common.disabled"}
        />
      ) : (
        <></>
      )}
    </CustomBoxUI>
  );
};

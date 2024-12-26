import { CustomRecordCount } from "@/components/custom-data-display/custom-record-count/custom-record-count";
import { ProfileBioImages } from "@/components/custom-images/profile-bio-images/profile-bio-images";
import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";
import { CustomCardUI } from "@/ui/custom-card/custom-card.ui";
import { CustomTypographyUI } from "@/ui/custom-typography/custom-typography.ui";
import { Fragment } from "react";
import { customBadgesData, recordItemsListData } from "./profile-bio-card.data";
import {
  COVER_IMAGE_DIMENSIONS_TYPES,
  PROFILE_AVATAR_DIMENSIONS_TYPES,
  PROFILE_BIO_CARD_DIMENSIONS_TYPES,
} from "@/constants/dimensions.constant";
import { CustomBadgeImage } from "@/components/custom-images/custom-badge-image/custom-badge-image";
import { SocialMediaCards } from "../social-media-cards/social-media-cards";

export const ProfileBioCard = (props: any) => {
  const { dimensions = PROFILE_BIO_CARD_DIMENSIONS_TYPES?.PORTRAIT } = props;

  const propsMap = {
    [PROFILE_BIO_CARD_DIMENSIONS_TYPES?.PORTRAIT]: {
      profileDimension: PROFILE_AVATAR_DIMENSIONS_TYPES?.LARGE,
      coverDimension: COVER_IMAGE_DIMENSIONS_TYPES?.MEDIUM,
      flexDirection: "column",
    },
  };

  const data = propsMap?.[dimensions];

  return (
    <CustomCardUI>
      <ProfileBioImages
        profileDimension={data?.profileDimension}
        coverDimension={data?.coverDimension}
      />
      <CustomBoxUI
        customStyles={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          padding: 2,
          flexWrap: "wrap",
          overflow: "auto",
          flexDirection: data?.flexDirection,
        }}
      >
        <CustomBoxUI>
          <CustomTypographyUI text="Marina Valentine" variant="h5" />
          <CustomTypographyUI
            text="www.gamehuntress.com"
            variant="overline"
            customStyles={{
              color: "text.disabled",
            }}
            hoverStyles={{
              color: "secondary.main",
            }}
          />
        </CustomBoxUI>
        <SocialMediaCards />
        <CustomBoxUI
          customStyles={{
            display: "flex",
            alignItems: "center",
            gap: 3,
            marginY: 2,
          }}
        >
          {customBadgesData?.length &&
            customBadgesData?.slice(0, 3)?.map((badge: any) => (
              <Fragment key={badge._id}>
                <CustomBadgeImage
                  dimension={PROFILE_AVATAR_DIMENSIONS_TYPES?.EXTRA_SMALL}
                  isAvatar={false}
                  count={badge?.count}
                  image={badge?.image}
                />
              </Fragment>
            ))}
          {customBadgesData?.length > 3 ? (
            <CustomBadgeImage
              dimension={PROFILE_AVATAR_DIMENSIONS_TYPES?.EXTRA_SMALL}
              isAvatar={false}
              avatarInitial={`+${customBadgesData?.length - 3}`}
              avatarBgColor={"common.disabled"}
            />
          ) : (
            <></>
          )}
        </CustomBoxUI>
        <CustomBoxUI
          customStyles={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {!!recordItemsListData?.length &&
            recordItemsListData?.map((record: any, index: number) => (
              <Fragment key={record?._id}>
                <CustomRecordCount
                  recordCount={record?.count}
                  recordName={record?.name}
                  hasBorder={recordItemsListData?.length - 1 !== index}
                />
              </Fragment>
            ))}
        </CustomBoxUI>
      </CustomBoxUI>
    </CustomCardUI>
  );
};

import { ProfileBioImages } from "@/components/custom-images/profile-bio-images/profile-bio-images";
import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";
import { CustomCardUI } from "@/ui/custom-card/custom-card.ui";
import { CustomTypographyUI } from "@/ui/custom-typography/custom-typography.ui";
import {
  customBadgesData,
  recordItemsListData,
  socialMediaAccountsListData,
} from "./profile-bio-card.data";
import {
  COVER_IMAGE_DIMENSIONS_TYPES,
  PROFILE_AVATAR_DIMENSIONS_TYPES,
  PROFILE_BIO_CARD_DIMENSIONS_TYPES,
} from "@/constants/dimensions.constant";
import { SocialMediaAccountsList } from "../../custom-lists/social-media-accounts-list/social-media-accounts-list";
import { RelationCountList } from "@/components/custom-lists/relation-count-list/relation-count-list";
import { EarnedBadgesList } from "@/components/custom-lists/earned-badges-list/earned-badges-list";
import { TwoRowButtons } from "@/components/custom-buttons/two-row-buttons/two-row-buttons";

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
        <CustomBoxUI customStyles={{}}>
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
        <CustomBoxUI>
          <EarnedBadgesList earnedBadgesListData={customBadgesData} />
        </CustomBoxUI>
        <CustomBoxUI>
          <SocialMediaAccountsList
            socialMediaAccountsListData={socialMediaAccountsListData}
          />
        </CustomBoxUI>
        <CustomBoxUI>
          <RelationCountList relationCountListData={recordItemsListData} />
        </CustomBoxUI>
        <TwoRowButtons />
      </CustomBoxUI>
    </CustomCardUI>
  );
};

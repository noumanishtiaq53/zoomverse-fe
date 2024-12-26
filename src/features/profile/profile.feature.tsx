import { CustomAvatarBadge } from "@/components/custom-badges/custom-avatar-badge/custom-avatar-badge";
import { CustomStatusBadge } from "@/components/custom-badges/custom-status-badge/custom-status-badge";
import { ProfileBioCard } from "@/components/custom-cards/profile-bio-card/profile-bio-card";
import { CustomImage } from "@/components/custom-images/custom-image/custom-image";
import { CustomProfileAvatar } from "@/components/custom-images/custom-profile-avatar/custom-profile-avatar";
import { ProfileBioImages } from "@/components/custom-images/profile-bio-images/profile-bio-images";
import { BADGE_POSITION } from "@/constants/badge-constant";
import {
  PROFILE_AVATAR_BADGE_DIMENSIONS,
  PROFILE_AVATAR_DIMENSIONS_TYPES,
  PROFILE_BIO_CARD_DIMENSIONS_TYPES,
} from "@/constants/dimensions.constant";
import { CustomBadgeUI } from "@/ui/custom-badge/custom-badge.ui";
import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";
import { CustomCardUI } from "@/ui/custom-card/custom-card.ui";

export const ProfileFeature = () => {
  return (
    <>
      <ProfileBioCard
        dimensions={PROFILE_BIO_CARD_DIMENSIONS_TYPES?.LANDSCAPE}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <CustomCardUI></CustomCardUI>
      <br />
      <br />
      <br />
      <br />
      <br />
      <ProfileBioImages />
      <br />
      <br />
      <br />
      <br />
      <br />
      <CustomBoxUI
        customStyles={{
          textAlign: "center",
          border: "1px solid lime",
          backgroundColor: "black",
          p: 3,
        }}
      >
        <CustomProfileAvatar
          dimension={PROFILE_AVATAR_DIMENSIONS_TYPES?.SMALL}
        />
      </CustomBoxUI>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <ProfileBioCard />
    </>
  );
};

import { ProfileBioCard } from "@/components/custom-cards/profile-bio-card/profile-bio-card";
import { CustomProfileAvatar } from "@/components/custom-images/custom-profile-avatar/custom-profile-avatar";
import { ProfileBioImages } from "@/components/custom-images/profile-bio-images/profile-bio-images";
import {
  PROFILE_AVATAR_DIMENSIONS_TYPES,
  PROFILE_BIO_CARD_DIMENSIONS_TYPES,
} from "@/constants/dimensions.constant";
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

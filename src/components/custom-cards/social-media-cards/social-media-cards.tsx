import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";
import { CustomCardUI } from "@/ui/custom-card/custom-card.ui";
import { CustomIconUI } from "@/ui/custom-icon/custom-icon.ui";
import { socialMediaAccountsData } from "./social-media-cards.data";

export const SocialMediaCards = () => {
  return (
    <CustomBoxUI
      customStyles={{ display: "flex", alignItems: "center", gap: 2 }}
    >
      {socialMediaAccountsData?.length &&
        socialMediaAccountsData?.map((account: any) => (
          <CustomCardUI
            key={account?._id}
            backgroundColor={account?.backgroundColor}
            padding={0.7}
          >
            <CustomBoxUI
              customStyles={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CustomIconUI
                Icon={account?.icon}
                customStyles={{ color: "common.white" }}
              />
            </CustomBoxUI>
          </CustomCardUI>
        ))}
    </CustomBoxUI>
  );
};

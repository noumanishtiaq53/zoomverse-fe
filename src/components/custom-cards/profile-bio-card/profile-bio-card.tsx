import { CustomRecordCount } from "@/components/custom-data-display/custom-record-count/custom-record-count";
import { ProfileBioImages } from "@/components/custom-images/profile-bio-images/profile-bio-images";
import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";
import { CustomCardUI } from "@/ui/custom-card/custom-card.ui";
import { CustomTypographyUI } from "@/ui/custom-typography/custom-typography.ui";
import { Fragment } from "react";
import { recordItemsListData } from "./profile-bio-card.data";
import { CustomProfileAvatar } from "@/components/custom-images/custom-profile-avatar/custom-profile-avatar";
import { HexagonalCard } from "../hexagonal-card/hexagonal-card";

export const ProfileBioCard = () => {
  return (
    <CustomCardUI>
      <ProfileBioImages />
      <CustomBoxUI
        customStyles={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          padding: 2,
          flexWrap: "wrap",
          overflow: "auto",
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
          />
        </CustomBoxUI>
        <CustomBoxUI>
          {/* <HexagonalCard padding={1.5} backgroundColor="secondary.main"> */}
            <CustomProfileAvatar />
          {/* </HexagonalCard> */}
        </CustomBoxUI>
        <CustomBoxUI
          customStyles={{
            display: "flex",
            alignItems: "center",
            gap: 0.2,
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
          {/* <CustomRecordCount />
          <CustomRecordCount />
          <CustomRecordCount /> */}
        </CustomBoxUI>
      </CustomBoxUI>
    </CustomCardUI>
  );
};

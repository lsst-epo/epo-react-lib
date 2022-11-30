import { FunctionComponent } from "react";
import { ShareButtonProps } from "@/types/share-button";

import { TwitterShareButton } from "react-share";
import { useTranslation } from "react-i18next";
import BaseButton from "./BaseButton/BaseButton";

const TwitterButton: FunctionComponent<ShareButtonProps> = ({ url, title }) => {
  const { t } = useTranslation();

  return (
    <TwitterShareButton
      url={url}
      title={t("share.twitter_title", { title })}
      hashtags={["RubinObs"]}
    >
      <BaseButton
        label="Twitter"
        icon="shareTwitter"
        iconSize={44}
        bgColor="#38a8e0"
        bgHoverColor="#98d0f1"
      />
    </TwitterShareButton>
  );
};

TwitterButton.displayName = "Share.TwitterButton";

export default TwitterButton;

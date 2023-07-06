import { FacebookShareButton } from "react-share";
import { useTranslation } from "react-i18next";
import BaseButton from "./BaseButton/BaseButton";
import { FunctionComponent } from "react";
import { ShareButtonProps } from "@/types/share-button";

const FacebookButton: FunctionComponent<ShareButtonProps> = ({
  url,
  title,
}) => {
  const { t } = useTranslation();

  return (
    <FacebookShareButton
      url={url}
      quote={t("share.facebook_quote", { title })}
      hashtag="#RubinObs"
    >
      <BaseButton
        label="Facebook"
        icon="shareFacebook"
        iconSize={32}
        bgColor="#3d5a99"
        bgHoverColor="#98a5cb"
      />
    </FacebookShareButton>
  );
};

FacebookButton.displayName = "Share.FacebookButton";

export default FacebookButton;

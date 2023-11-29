import { FunctionComponent } from "react";
import { ShareButtonProps } from "@/types/share-button";
import { useTranslation } from "react-i18next";
import BaseButton from "./BaseButton/BaseButton";
import * as Styled from "./styles";

const TwitterButton: FunctionComponent<ShareButtonProps> = ({
  url,
  title,
  className,
  showText,
  ...shareProps
}) => {
  const { t } = useTranslation();

  return (
    <Styled.TwitterShareButton
      title={t("share.twitter_title", { title })}
      hashtags={["RubinObs"]}
      {...{ ...shareProps, url, className }}
    >
      <BaseButton
        label="Twitter"
        icon="shareTwitter"
        iconSize={44}
        showText={showText}
      />
    </Styled.TwitterShareButton>
  );
};

TwitterButton.displayName = "Share.TwitterButton";

export default TwitterButton;

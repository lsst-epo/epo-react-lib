import { useTranslation } from "react-i18next";
import BaseButton from "./BaseButton/BaseButton";
import { FunctionComponent } from "react";
import { ShareButtonProps } from "@/types/share-button";
import * as Styled from "./styles";

const FacebookButton: FunctionComponent<ShareButtonProps> = ({
  url,
  title,
  className,
  showText,
  ...shareProps
}) => {
  const { t } = useTranslation();

  return (
    <Styled.FacebookShareButton
      quote={t("share.facebook_quote", { title })}
      hashtag="#RubinObs"
      {...{ ...shareProps, className, url }}
    >
      <BaseButton
        label="Facebook"
        icon="shareFacebook"
        iconSize={32}
        showText={showText}
      />
    </Styled.FacebookShareButton>
  );
};

FacebookButton.displayName = "Share.FacebookButton";

export default FacebookButton;

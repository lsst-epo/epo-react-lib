import { useTranslation } from "react-i18next";
import BaseButton from "./BaseButton/BaseButton";
import { FunctionComponent } from "react";
import { ShareButtonProps } from "@/types/share-button";
import * as Styled from "./styles";

const EmailButton: FunctionComponent<ShareButtonProps> = ({
  title,
  url,
  className,
  showText,
  ...shareProps
}) => {
  const { t } = useTranslation();

  return (
    <Styled.EmailShareButton
      subject={t("share.email_subject", {
        title,
      })}
      body={url}
      {...{ ...shareProps, className, url }}
    >
      <BaseButton
        label={t("share.email")}
        icon="shareEmail"
        iconSize={40}
        showText={showText}
      />
    </Styled.EmailShareButton>
  );
};

EmailButton.displayName = "Share.EmailButton";

export default EmailButton;

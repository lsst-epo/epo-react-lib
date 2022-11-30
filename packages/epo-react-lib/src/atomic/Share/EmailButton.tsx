import { EmailShareButton } from "react-share";
import { useTranslation } from "react-i18next";
import BaseButton from "./BaseButton/BaseButton";
import { FunctionComponent } from "react";
import { ShareButtonProps } from "@/types/share-button";

const EmailButton: FunctionComponent<ShareButtonProps> = ({ title, url }) => {
  const { t } = useTranslation();

  return (
    <EmailShareButton
      url={url}
      subject={t("share.email_subject", {
        title,
      })}
      body={url}
    >
      <BaseButton
        label={t("share.email")}
        icon="shareEmail"
        iconSize={40}
        bgColor="var(--turquoise85)"
        bgHoverColor="#7fb3b1"
      />
    </EmailShareButton>
  );
};

EmailButton.displayName = "Share.EmailButton";

export default EmailButton;

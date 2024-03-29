import { ShareButtonProps } from "@/types/share-button";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import * as Styled from "./styles";
import BaseButton from "./BaseButton/BaseButton";

const CopyUrlButton: FunctionComponent<
  Pick<ShareButtonProps, "url" | "className" | "showText">
> = ({ url, className, showText }) => {
  const { t } = useTranslation();

  function onClick() {
    if (!navigator.clipboard) return;

    navigator.clipboard.writeText(url).then(() => {}, console.error);
  }

  return (
    <Styled.CopyUrlButton {...{ className, onClick }}>
      <BaseButton
        label={t("share.copy_url")}
        icon="shareCopyUrl"
        iconSize={20}
        showText={showText}
      />
    </Styled.CopyUrlButton>
  );
};

CopyUrlButton.displayName = "Share.CopyUrlButton";

export default CopyUrlButton;

import { forwardRef } from "react";
import { IoIosLink } from "react-icons/io";
import * as Styled from "./styles";
import { useTranslation } from "react-i18next";

interface CopyUrlButtonProps {
  url: string;
  className?: string;
}

const CopyUrlButton = forwardRef<HTMLButtonElement, CopyUrlButtonProps>(
  ({ url, className }, ref) => {
    const { t } = useTranslation();

    const onClick = async () => {
      if (!navigator.clipboard) return;

      try {
        await navigator.clipboard.writeText(url);
      } catch (error) {
        console.error(error);
      }
    };

    return (
      <Styled.CopyUrlButton
        title={t("share.copy_url")}
        ref={ref}
        {...{ className, onClick }}
      >
        <IoIosLink />
      </Styled.CopyUrlButton>
    );
  }
);

CopyUrlButton.displayName = "Molecule.Share.CopyUrl";

export default CopyUrlButton;

import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import Button from "@rubin-epo/epo-react-lib/Button";

interface ResetButtonProps {
  isDisabled?: boolean;
  onResetCallback: () => void;
  className?: string;
}

const ResetButton: FunctionComponent<ResetButtonProps> = ({
  isDisabled,
  onResetCallback,
  className,
}) => {
  const { t } = useTranslation();
  return (
    <Button
      style={{ "--button-text-align": "left" }}
      disabled={isDisabled}
      icon="RotateLeftWithCenter"
      iconSize="2em"
      onClick={() => onResetCallback && onResetCallback()}
      className={className}
      isBlock
    >
      {t("colorTool.actions.reset")}
    </Button>
  );
};

ResetButton.displayName = "Atomic.Button.Reset";

export default ResetButton;

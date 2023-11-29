import IconComposer from "@/svg/IconComposer";
import { FunctionComponent } from "react";
import * as Styled from "./styles";

interface BaseButtonProps {
  label: string;
  icon: string;
  iconSize?: number;
  showText?: boolean;
}

const BaseButton: FunctionComponent<BaseButtonProps> = ({
  label,
  icon,
  iconSize,
  showText = false,
}) => {
  return (
    <>
      {showText && label}
      <Styled.Wrapper>
        <IconComposer icon={icon} size={iconSize} />
        {!showText && <Styled.SrText>{label}</Styled.SrText>}
      </Styled.Wrapper>
    </>
  );
};

BaseButton.displayName = "Share.BaseButton";

export default BaseButton;

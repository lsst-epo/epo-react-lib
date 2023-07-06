import IconComposer from "@/svg/IconComposer";
import { FunctionComponent } from "react";
import * as Styled from "./styles";

interface BaseButtonProps {
  label: string;
  icon: string;
  iconSize?: number;
  bgColor?: string;
  bgHoverColor?: string;
}

const BaseButton: FunctionComponent<BaseButtonProps> = ({
  label,
  icon,
  iconSize,
  bgColor = "#000",
  bgHoverColor = "#000",
}) => {
  return (
    <Styled.Wrapper $bgColor={bgColor} $bgHoverColor={bgHoverColor}>
      <IconComposer icon={icon} size={iconSize} />
      <Styled.SrText>{label}</Styled.SrText>
    </Styled.Wrapper>
  );
};

BaseButton.displayName = "Share.BaseButton";

export default BaseButton;

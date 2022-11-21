import { useTranslation } from "react-i18next";
import IconComposer from "@/svg/IconComposer";
import { useCarouselContext } from "../context";
import * as Styled from "./styles";

function PrevButton() {
  const { t } = useTranslation();
  const { prevButtonProps } = useCarouselContext();

  return (
    <Styled.Button {...(prevButtonProps as any)}>
      <Styled.SrText>{t("pagination.previous")}</Styled.SrText>
      <IconComposer icon="caret" />
    </Styled.Button>
  );
}

PrevButton.displayName = "Carousel.PrevButton";

export default PrevButton;

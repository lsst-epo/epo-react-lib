import { useTranslation } from "react-i18next";
import IconComposer from "@/svg/IconComposer";
import { useCarouselContext } from "../context";
import * as Styled from "./styles";

function NextButton() {
  const { t } = useTranslation();
  const { nextButtonProps } = useCarouselContext();

  return (
    <Styled.Button {...(nextButtonProps as any)} data-testid="carousel-next">
      <Styled.SrText>{t("pagination.next")}</Styled.SrText>
      <IconComposer icon="caret" />
    </Styled.Button>
  );
}

NextButton.displayName = "Carousel.NextButton";

export default NextButton;

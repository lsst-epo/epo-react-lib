import { useTranslation } from "react-i18next";
import { useCarouselContext } from "../context";
import * as Styled from "./styles";

function Status() {
  const { t } = useTranslation();
  const { active, length } = useCarouselContext();

  return (
    <Styled.Status aria-live="polite">
      {t("pagination.showing-current-slide", { current: active + 1, length })}
    </Styled.Status>
  );
}

Status.displayName = "Carousel.Status";

export default Status;

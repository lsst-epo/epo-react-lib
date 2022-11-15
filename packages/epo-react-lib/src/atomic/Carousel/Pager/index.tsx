import { useTranslation } from "react-i18next";
import { useCarouselContext } from "../context";
import * as Styled from "./styles";

function Pager() {
  const { t } = useTranslation();
  const { active, setActive, length, pageDotProps } = useCarouselContext();
  const stepArray = [...Array(length).keys()];

  return (
    <Styled.List>
      {stepArray.map((step) => (
        <li key={step}>
          <Styled.Button
            {...pageDotProps}
            aria-current={active === step ? "step" : null}
            onClick={() => setActive(step)}
          >
            <Styled.SrText>
              {t("pagination.current-slide", { current: step + 1 })}
            </Styled.SrText>
          </Styled.Button>
        </li>
      ))}
    </Styled.List>
  );
}

Pager.displayName = "Carousel.Pager";

export default Pager;

import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { SourceType } from "@/types/astro";
import * as Styled from "./styles";
import { Reset } from "@/atomic/Button";

interface SelectionListProps {
  className?: string;
  onRemoveCallback: () => void;
  sources: Array<{ type: SourceType; id: string }>;
}

const SelectionList: FunctionComponent<SelectionListProps> = ({
  className,
  onRemoveCallback,
  sources = [],
}) => {
  const { t } = useTranslation();
  return (
    <Styled.SelectionWrapper>
      <Styled.SelectionList className={className}>
        {sources.map(({ type, id }) => {
          return (
            <Styled.DescriptionWrapper key={id}>
              <dt>
                {t("source_selector.selected_source", {
                  type: t(`source_selector.sources.${type}`),
                })}
              </dt>
              <dd>{id}</dd>
            </Styled.DescriptionWrapper>
          );
        })}
      </Styled.SelectionList>
      <Reset
        isDisabled={sources.length < 1}
        onResetCallback={onRemoveCallback}
      />
    </Styled.SelectionWrapper>
  );
};

SelectionList.displayName = "Widgets.SelectionList";

export default SelectionList;

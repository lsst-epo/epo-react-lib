import { FunctionComponent } from "react";
import IconComposer from "@rubin-epo/epo-react-lib/IconComposer";
import { useTranslation } from "react-i18next";
import { SourceType } from "@/types/astro";
import * as Styled from "./styles";

interface SelectionListProps {
  className?: string;
  onRemoveCallback: (id: string) => void;
  sources: Array<{ type: SourceType; id: string }>;
}

const SelectionList: FunctionComponent<SelectionListProps> = ({
  className,
  onRemoveCallback,
  sources = [],
}) => {
  const { t } = useTranslation();
  return (
    <Styled.SelectionList className={className}>
      {sources.map(({ type, id }) => {
        return (
          <Styled.Selection key={id}>
            {t("source_selector.selected_source", {
              type: t(`source_selector.sources.${type}`),
            })}
            <Styled.RemoveSelectionButton onClick={() => onRemoveCallback(id)}>
              {id}
              <IconComposer icon="CloseCircle" size="1.5em" />
            </Styled.RemoveSelectionButton>
          </Styled.Selection>
        );
      })}
    </Styled.SelectionList>
  );
};

SelectionList.displayName = "Widgets.SelectionList";

export default SelectionList;

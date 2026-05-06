import { FunctionComponent } from "react";
import IconComposer from "@/svg/IconComposer";
import * as Styled from "./styles";

export type SortDirection = "asc" | "desc" | "none";

export interface SortButtonProps {
  sortDirection?: SortDirection
}

const SortButton : FunctionComponent<SortButtonProps> = ({sortDirection}) => { 
  return (
    <Styled.SortButton sortDirection={sortDirection}>
      <IconComposer icon="CaretUp" className="top-caret"/>
      <IconComposer icon="CaretDown" className="bottom-caret" />
    </Styled.SortButton>
    
  );
};

export default SortButton;
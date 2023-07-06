import { FunctionComponent, ReactNode } from "react";
import * as Styled from "./styles";

interface AccordionProps {
  summary: string;
  children: ReactNode;
}

const Accordion: FunctionComponent<AccordionProps> = ({
  summary,
  children,
}) => {
  return (
    <details>
      <Styled.Summary>
        <Styled.Icon aria-hidden />
        <span>{summary}</span>
      </Styled.Summary>
      <Styled.Details>{children}</Styled.Details>
    </details>
  );
};

Accordion.displayName = "Atomic.Accordion";

export default Accordion;

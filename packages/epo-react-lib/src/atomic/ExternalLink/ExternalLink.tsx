import { FunctionComponent, ReactNode } from "react";
import * as Styled from "./styles";

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
  [key: string]: any;
}

const ExternalLink: FunctionComponent<ExternalLinkProps> = ({
  href,
  children,
  ...restProps
}) => (
  <Styled.Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    {...restProps}
  >
    {children}
  </Styled.Link>
);

export default ExternalLink;

ExternalLink.displayName = "Atomic.ExternalLink";

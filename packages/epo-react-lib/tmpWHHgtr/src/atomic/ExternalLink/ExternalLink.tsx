import { FunctionComponent, HTMLProps, ReactNode } from "react";
import * as Styled from "./styles";

interface ExternalLinkProps extends HTMLProps<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
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
    {...(restProps as any)}
  >
    {children}
  </Styled.Link>
);

export default ExternalLink;

ExternalLink.displayName = "Atomic.ExternalLink";

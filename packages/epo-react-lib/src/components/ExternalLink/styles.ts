import styled from "styled-components";
import { focusDefault } from "@/styles/mixins/appearance";

export const Link = styled.a`
  ${focusDefault()}
  color: var(--link-color, #117273);
`;

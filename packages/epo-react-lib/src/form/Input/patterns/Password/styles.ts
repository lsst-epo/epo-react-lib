import { aHidden, protoButton } from "@/styles/mixins/appearance";
import styled from "styled-components";
import { Input as BaseInput } from "../../styles";

export const Wrapper = styled.div`
  position: relative;
`;

export const Toggle = styled.button`
  ${protoButton()}
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  padding-inline-end: 18px;
  padding-inline-start: 18px;
  color: var(--neutral30);

  &[aria-selected="true"] {
    color: var(--turquoise85);
  }
`;

export const SrText = styled.span`
  ${aHidden}
`;

export const Input = styled(BaseInput)`
  padding-right: ${40 + 18 * 3}px;
`;

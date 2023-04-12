import styled from "styled-components";
import { fluidScale } from "@/styles/utils";
import Error from "@/form/Error";

export const Label = styled.label`
  display: block;
  font-weight: var(--FormField-Label-font-weight, 600);
  font-size: var(--FormField-Label-font-size, ${fluidScale("20px", "16px")});
  line-height: 1.5;
`;

export const InputError = styled(Error)`
  margin-block-start: ${fluidScale("1px", "5px")};
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 1.5;
`;

export const InputWrapper = styled.div`
  padding-block-start: var(--FormField-InputWrapper-padding-block-start, 9px);
`;

import styled from "styled-components";
import { fluidScale } from "@/styles/utils";
import { ScreenreaderText } from "@/styles/utils";

export const Error = styled.p`
  color: #cf4040;
  font-size: ${fluidScale("20px", "16px")};
  line-height: 1.5;
`;

export const ErrorLabel = ScreenreaderText;

import { ScreenreaderText } from "@/styles/utils";
import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--share-background-color, #000);
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--share-size, 40px);
  height: var(--share-size, 40px);
  border: transparent solid 2px;
  border-radius: 50%;
  color: var(--white);
  transition: background-color 0.2s, border-color 0.2s;
`;

export const SrText = ScreenreaderText;

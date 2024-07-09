import styled from "styled-components";

export const SelectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(var(--PADDING_SMALL, 20px) / 2);
`;

export const SelectionList = styled.dl`
  display: flex;
  flex-direction: column;
  gap: calc(var(--PADDING_SMALL, 20px) / 2);
  margin: 0;
  padding: 0;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  gap: 1ch;
`;

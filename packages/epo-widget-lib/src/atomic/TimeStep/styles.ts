import styled from "styled-components";

export const TimeStepContainer = styled.div`
  background-color: var(--neutral20, #dce0e3);
  border-radius: 5px;
  color: var(--neutral95, "#1F2121");
  display: grid;
  grid-template-areas: "header" "time";
  font-weight: var(--FONT_WEIGHT_NORMAL, 400);
  min-width: 70px;
  max-width: fit-content;
`;
export const Header = styled.h2`
  border-bottom: 1px solid var(--neutral95, "#1F2121");
  font-weight: inherit;
  font-size: 12px;
  line-height: 1;
  grid-area: header;
  text-align: center;
  margin: 0;
  padding: 10px;
`;

export const Time = styled.time`
  grid-area: time;
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: 1fr;
  grid-auto-columns: 1fr;
`;

export const Interval = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  line-height: 1.6;

  &:not(:first-of-type) {
    border-left: 1px solid var(--neutral95, "#1F2121");
  }
`;

export const Number = styled.span`
  font-size: 14px;
`;
export const Step = styled.span`
  font-size: 8px;
`;

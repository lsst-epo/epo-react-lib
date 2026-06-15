"use clients";
import styled from "styled-components";
import Button from "@rubin-epo/epo-react-lib/Button";
import SlideoutInfoCard from "@rubin-epo/epo-react-lib/SlideoutInfoCard";

export const SlideoutWrapper = styled(SlideoutInfoCard)`
  z-index: 10;
`;

export const Label = styled.div`
  padding: 0px 4px;
  margin-top: 4px;
  font-weight: var(--medium);
  color: var(--black);
  background-color: color-mix(in srgb, var(--white) 75%, transparent);
  border: 1px solid color-mix(in srgb, var(--white) 75%, transparent);;
  border-radius: 5px;
  color-adjust: exact;
  z-index: 10000;
  height: fit-content;
`;

export const ButtonWrapper = styled(Button)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  margin: var(--minPadding);
  /* stylelint-disable-next-line declaration-no-important */
  color: var(--white) !important;
  background-color: var(--error);
}
`;

export const SlideoutPanel = styled.div`
  background-color: var(--neutral10);
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em;
  font-size: 0.75rem;
  width: 50ch;

  & > * + * {
    margin-block-start: 1em;
  }
  & > h3 {
    margin: 0px;
    text-align: center;
  }
`;

export const SlideoutRow = styled.div`
  display: flex;
  gap: 10px;
  margin: 0px;
  color: var(--black);
`;

export const SlideoutColLeft = styled.div`
  flex: 1;
  padding: 0px 15px 0px 15px;
  border: 1px solid #ccc;
  background-color: #ccc;
  border-radius: 15px;
  font-weight: bold;
`;

export const SlideoutColRight = styled.div`
  flex: 1;
  padding: 0px 15px 0px 15px;
  border: 1px solid #ccc;
  background-color: #ccc;
  border-radius: 15px;
  text-align: right;
`;
"use client";
import styled from "styled-components";

export const PlaybackSpeedContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 110px;
  position: absolute;
  right: 20px;
  top: 10px;
  height: 95%;
  
  @container orbital-sim-context (width < 650px) {
    height: 85%;
  }

  @container orbital-sim-context (height < 575px) {
    height: 75%;
  }
`;

export const PlaybackControlsContainer = styled.div`
    width: auto;
    display: flex;
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    font-size: 17px;
`;

export const PlaybackSpeedSliderHeader = styled.div`
  z-index: 2;
  padding: 5px;
  text-align: center;
  background-color: rgba(255,255,255, 0.8);
  border: 1px solid --black;
  border-radius: 10px;
  grid-area: 1 / 1 / 2 / 3; 
  height: fit-content;
`;

export const PlaybackSpeedTitle = styled.h4`
  font-size: 18px;
  font-weight: var(--regular);
  line-height: 1.5;
  color: var(--black);
  margin: 0;
`;

export const PlaybackSpeedSliderLabel = styled.div`
  font-size: 13px;
  line-height: 1.333;
  color: var(--black);
  font-size: 12.5px;
`;

export const PlaybackSpeedSliderLabelTop = styled.div`
  grid-area: 2 / 2 / 3 / 3;   
  font-size: 13px;
  line-height: 1.333;
  color: var(--black);
  z-index: 2;
  width: 70px;
  padding: 5px;
  color: var(--white);
  text-align: center;
  background-color: rgb(from var(--basePrimary) r g b / 80%);
  border: 1px solid var(--black);
  border-radius: 10px;
  height: fit-content;
`;

export const PlaybackSpeedSliderLabelBottom = styled.div`
  grid-area: 4 / 2 / 5 / 3;
  font-size: 13px;
  line-height: 1.333;
  color: var(--black);
  z-index: 2;
  width: 70px;
  padding: 5px;
  color: var(--white);
  text-align: center;
  background-color: rgb(from var(--basePrimary) r g b / 80%);
  border: 1px solid var(--black);
  border-radius: 10px;
  height: fit-content;
  align-self: center;
`;

export const PlaybackSpeedSliderWrapper = styled.span`
  z-index: 2;
  width: fit-content;
  grid-area: 2 / 1 / 5 / 2;

  & > div:first-of-type {
    height: stretch;
  }
`;

export const ElapsedTimeContainer = styled.div`
  grid-area: 5 / 1 / 6 / 3; 
  font-size: 13px;
  line-height: 1.333;
  color: var(--black);
  z-index: 2;
  color: var(--black);
  text-align: center;
  background-color: rgb(from var(--white) r g b / 80%);
  border: 1px solid var(--black);
  border-radius: 10px;
  height: fit-content;
`;

export const ElapsedTimeTitle = styled.div`
  font-size: 13px;
  line-height: 1.333;
  color: var(--black);
  padding-top: 5px;
`;

export const ElapsedTimeInner = styled.div`
  display: flex;
  flex-flow: nowrap;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 5px;
  border-top: 1px solid var(--black);
`;

export const ElapsedTimeBlock = styled.div`
  width: 50px;
`;

export const ElapsedVal = styled.div`
  font-size: 18px;
  font-weight: var(--regular);
  line-height: 1.5;
  color: var(--black);
  color: var(--black);
`;

export const ElapsedTimeDivider = styled.div`
  display: block;
  width: 1px;
  height: 50px;
  background-color: var(--black);
`;

export const ElapsedLabel = styled.div`
  font-size: 13px;
  line-height: 1.333;
  color: var(--black);
  color: var(--black);
`;
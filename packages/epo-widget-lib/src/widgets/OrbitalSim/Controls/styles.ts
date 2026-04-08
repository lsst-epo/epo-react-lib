"use client";
import styled from "styled-components";

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
  position: absolute;
  top: 34px;
  right: 10px;
  z-index: 2;
  width: 110px;
  padding: 5px;
  text-align: center;
  background-color: rgba(255,255,255, 0.8);
  border: 1px solid --black;
  border-radius: 10px;
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
  right: 25px;
  top: 100px;
  font-size: 13px;
  line-height: 1.333;
  color: var(--black);
  position: absolute;
  // right: var(--minPadding) / 2;
  z-index: 2;
  width: 70px;
  padding: 5px;
  color: var(--white);
  text-align: center;
  background-color: rgb(from var(--basePrimary) r g b / 80%);
  border: 1px solid var(--black);
  border-radius: 10px;
`;

export const PlaybackSpeedSliderLabelBottom = styled.div`
  right: 25px;
  bottom: 200px;
  font-size: 13px;
  line-height: 1.333;
  color: var(--black);
  position: absolute;
  // right: var(--minPadding) / 2;
  z-index: 2;
  width: 70px;
  padding: 5px;
  color: var(--white);
  text-align: center;
  background-color: rgb(from var(--basePrimary) r g b / 80%);
  border: 1px solid var(--black);
  border-radius: 10px;
`;

export const PlaybackSpeedSliderWrapper = styled.span`
  position: absolute;
  z-index: 2;
  height: 50px;
  top: 25%;
  right: 5rem;
  width: fit-content;
`;

export const ElapsedTimeContainer = styled.div`
  font-size: 13px;
  line-height: 1.333;
  color: var(--black);
  position: absolute;
  right: 10px;
  bottom: 100px;
  z-index: 2;
  color: var(--black);
  text-align: center;
  background-color: rgb(from var(--white) r g b / 80%);
  border: 1px solid var(--black);
  border-radius: 10px;
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
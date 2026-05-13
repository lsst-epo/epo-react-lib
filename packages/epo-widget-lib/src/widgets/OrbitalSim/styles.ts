"use client";
import styled, { createGlobalStyle } from "styled-components";
import { Canvas } from '@react-three/fiber';

export const GlobalStyles = createGlobalStyle`
  :root {
    --white: #ffffff;
    --black: #000000;
    --lightBlue: #bee7f5;
    --boldRed: #df0039;

    --ral5018HR: #087f80;
    --neutral10: #f3f3f3;
    --neutral20: #737373;
    --basePrimary: var(--ral5018HR);
    --error: var(--boldRed);

    --break40: 420px;
    --break100: 1284px;

    --minPadding: 20px;
    --containerMaxWidth: var(--break100);
    --offset: 300px;

    --regular: 400;
    --medium: 500;

    --duration: 0.2s;
    --durationSlow: 0.4s;
    --timing: ease;

    --siteProgressHeight: 26px;
    --siteToolbarHeight: 64px;
    --siteHeaderHeight: calc(var(--siteProgressHeight) + var(--siteToolbarHeight));
    --pageNavHeight: 64px;
    --headingWithSpaceHeight: 90px;
    --tallestSquareWidget: calc(100vh - var(--pageNavHeight) - var(--siteHeaderHeight) - var(--headingWithSpaceHeight) - var(--minPadding));
  }
`;

export const OrbitalSimWrapper = styled.div`
    position: relative;
    overflow: hidden;
    height: var(--tallestSquareWidget);
    min-height: 500px;
    background-color: #000000;
    color-adjust: exact;
    container-type: size;
    container-name: orbital-sim-context;
`;

export const CanvasWrapper = styled(Canvas)`
    position: relative;
    z-index: 1;
`;

export const SunLabel = styled.div`
  padding: 2px 4px;
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

export const SwappableOrbitsContainer = styled.aside`
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  z-index: 10;
  background-color: #fff;
  width: 10%;
  min-width: fit-content;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const SwappableOrbitButton = styled.button`
  width: 100%;
  padding: 12px 16px;
  text-align: left;
  background-color: #F3F3F3;
  color: #017F80;
  text-align: center;

  &:hover {
    background-color: #017F80;
    color: #fff;
  }

  &[data-active="true"] {
    background-color: #017F80;
    color: #fff;
  }
`;
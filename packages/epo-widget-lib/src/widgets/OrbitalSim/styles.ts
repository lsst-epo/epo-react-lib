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
    --siteHeaderHeight: var(--siteProgressHeight) + var(--siteToolbarHeight);
    --pageNavHeight: 64px;
    --headingWithSpaceHeight: 90px;
    // --tallestSquareWidget: calc(100vh - var(--pageNavHeight) - var(--siteHeaderHeight) - var(--headingWithSpaceHeight) - var(--minPadding));
  }
`;

export const OrbitalSimWrapper = styled.div`
    position: relative;
    // height: var(--tallestSquareWidget);
    height: 750px; // revisit this close to MVP
    // min-height: var(--break40);
    min-height: 500px;
    background-color: var(--black);
    color-adjust: exact;
`;

export const CanvasWrapper = styled(Canvas)`
    display: inline;
    position: relative;
    height: 100%;
    z-index: 1;
`;


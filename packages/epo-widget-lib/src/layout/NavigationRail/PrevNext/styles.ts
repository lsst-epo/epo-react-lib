"use client";
import { Button as BaseButton } from "@rubin-epo/epo-react-lib";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-inline-start: auto;
`;

export const Button = styled(BaseButton)`
  padding-block: 10px;
  border-radius: 0px;
`;

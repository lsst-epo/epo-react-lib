import {
  EmailShareButton as EmailBase,
  FacebookShareButton as FacebookBase,
  TwitterShareButton as TwitterBase,
} from "react-share";
import styled from "styled-components";
import { protoButton } from "@/styles/mixins/appearance";

export const CopyUrlButton = styled.button`
  --share-background-color: var(--turquoise70);
  ${protoButton()};

  &:hover {
    --share-background-color: #7ac1c2;
  }
`;

export const EmailShareButton = styled(EmailBase)`
  --share-background-color: var(--turquoise85);

  &:hover {
    --share-background-color: #7fb3b1;
  }
`;

export const FacebookShareButton = styled(FacebookBase)`
  --share-background-color: #3d5a99;

  &:hover {
    --share-background-color: #98a5cb;
  }
`;

export const TwitterShareButton = styled(TwitterBase)`
  --share-background-color: #38a8e0;

  &:hover {
    --share-background-color: #98d0f1;
  }
`;

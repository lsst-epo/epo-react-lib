import { ComponentProps, forwardRef } from "react";
import { TwitterShareButton } from "react-share";
import { FaXTwitter } from "react-icons/fa6";
import * as Styled from "./styles";

const TwitterXButton = forwardRef<
  HTMLButtonElement,
  Omit<ComponentProps<typeof TwitterShareButton>, "ref" | "children">
>((props, ref) => {
  return (
    <Styled.Twitter resetButtonStyle={false} {...props} ref={ref}>
      <FaXTwitter />
    </Styled.Twitter>
  );
});

TwitterXButton.displayName = "Share.Molecule.TwitterX";

export default TwitterXButton;

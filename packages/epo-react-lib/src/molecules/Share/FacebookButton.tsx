import { ComponentProps, forwardRef } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FacebookShareButton } from "react-share";
import * as Styled from "./styles";

const FacebookButton = forwardRef<
  HTMLButtonElement,
  Omit<ComponentProps<typeof FacebookShareButton>, "ref" | "children">
>((props, ref) => {
  return (
    <Styled.Facebook resetButtonStyle={false} {...props} ref={ref}>
      <FaFacebookF />
    </Styled.Facebook>
  );
});

FacebookButton.displayName = "Molecule.Share.Facebook";

export default FacebookButton;

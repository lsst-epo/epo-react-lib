import { ComponentProps, forwardRef } from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { LinkedinShareButton } from "react-share";
import * as Styled from "./styles";

const LinkedInButton = forwardRef<
  HTMLButtonElement,
  Omit<ComponentProps<typeof LinkedinShareButton>, "ref" | "children">
>((props, ref) => {
  return (
    <Styled.LinkedIn
      htmlTitle={"LinkedIn"}
      resetButtonStyle={false}
      {...props}
      ref={ref}
    >
      <FaLinkedinIn />
    </Styled.LinkedIn>
  );
});

LinkedInButton.displayName = "Molecule.Share.LinkedIn";

export default LinkedInButton;

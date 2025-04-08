import { EmailShareButton } from "react-share";
import { ComponentProps, forwardRef } from "react";
import IconComposer from "@/svg/IconComposer";
import * as Styled from "./styles";

const EmailButton = forwardRef<
  HTMLButtonElement,
  Omit<ComponentProps<typeof EmailShareButton>, "ref" | "children">
>((props, ref) => {
  return (
    <Styled.Email resetButtonStyle={false} {...props} ref={ref}>
      <IconComposer icon="shareEmail" size={40} />
    </Styled.Email>
  );
});

export default EmailButton;

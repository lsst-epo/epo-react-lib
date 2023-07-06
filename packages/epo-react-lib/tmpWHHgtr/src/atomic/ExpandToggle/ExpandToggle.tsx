import { FunctionComponent, HTMLProps, MouseEventHandler } from "react";
import ExpandCollapse from "@/svg/unique/ExpandCollapse";
import * as Styled from "./styles";

interface ExpandToggleProps extends HTMLProps<HTMLButtonElement> {
  isOpen: boolean;
  onToggle: MouseEventHandler<HTMLButtonElement>;
  controlsId: string;
  isHidden: boolean;
}

const ExpandToggle: FunctionComponent<ExpandToggleProps> = ({
  isOpen,
  onToggle,
  controlsId,
  isHidden,
  ...buttonProps
}) => {
  return (
    <Styled.Button
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-controls={controlsId}
      aria-hidden={isHidden}
      {...(buttonProps as any)}
    >
      <ExpandCollapse isOpen={isOpen} />
    </Styled.Button>
  );
};

ExpandToggle.displayName = "Atomic.ExpandToggle";

export default ExpandToggle;

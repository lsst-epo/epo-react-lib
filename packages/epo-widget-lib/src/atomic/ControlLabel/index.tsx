import { FunctionComponent, ReactNode, useId } from "react";

type Props = {
  label: ReactNode;
  input: (id: string) => ReactNode;
  labelBy?: boolean;
};

const ControlLabel: FunctionComponent<Props> = ({ label, input, labelBy }) => {
  const controlId = useId();
  const props = labelBy ? { id: controlId } : { htmlFor: controlId };

  return (
    <label {...props}>
      {label}
      {input && input(controlId)}
    </label>
  );
};

ControlLabel.displayName = "Atomic.ControlLabel";

export default ControlLabel;

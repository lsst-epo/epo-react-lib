import { FunctionComponent } from "react";
interface ResetButtonProps {
    isDisabled?: boolean;
    onResetCallback: () => void;
    className?: string;
}
declare const ResetButton: FunctionComponent<ResetButtonProps>;
export default ResetButton;

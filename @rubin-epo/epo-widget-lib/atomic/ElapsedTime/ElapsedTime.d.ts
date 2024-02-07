import { FunctionComponent } from "react";
type TimeInterval = "year" | "day" | "hour" | "minute" | "second";
type TimeSteps = {
    [key in TimeInterval]?: number;
};
export interface TimeStepProps extends TimeSteps {
    className?: string;
}
declare const ElapsedTime: FunctionComponent<TimeStepProps>;
export default ElapsedTime;

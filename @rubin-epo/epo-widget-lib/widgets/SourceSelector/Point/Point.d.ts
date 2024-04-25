import { SourceType } from '../../../types/astro';
import { FunctionComponent, MouseEventHandler } from "react";
export interface PointProps {
    type: SourceType;
    isSelected: boolean;
    isActive: boolean;
    x: number;
    y: number;
    radius?: number;
    className?: string;
    color: string;
    onClickCallback?: MouseEventHandler<SVGCircleElement>;
}
declare const Point: FunctionComponent<PointProps>;
export default Point;

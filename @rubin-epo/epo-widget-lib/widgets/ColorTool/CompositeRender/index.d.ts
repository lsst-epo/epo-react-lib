/// <reference types="react" />
interface CompositeRendererProps {
    layers: Array<HTMLCanvasElement>;
    renderLayers: Array<boolean>;
    width: number;
    height: number;
}
declare const CompositeRenderer: import("react").ForwardRefExoticComponent<CompositeRendererProps & import("react").RefAttributes<HTMLCanvasElement>>;
export default CompositeRenderer;

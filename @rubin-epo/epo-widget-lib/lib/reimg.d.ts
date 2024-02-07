declare function fromSvg(svgElement: SVGElement): {
    [key: string]: Function;
};
declare function fromCanvas(canvasElement: HTMLCanvasElement): {
    [key: string]: Function;
};
export { fromSvg, fromCanvas };

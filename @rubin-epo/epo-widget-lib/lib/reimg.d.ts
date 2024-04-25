declare function fromSvg(svgElement: SVGElement): {
    [key: string]: (...args: any) => any;
};
declare function fromCanvas(canvasElement: HTMLCanvasElement): {
    [key: string]: (...args: any) => any;
};
export { fromSvg, fromCanvas };

export declare const getFilters: (filters: {
    [key: string]: number | undefined;
}) => string;
export declare const updateColor: (ctx: CanvasRenderingContext2D, color: string, width: number, height: number) => void;
export declare const mergeCanvases: (ctx: CanvasRenderingContext2D, layers: HTMLCanvasElement[] | undefined, width: number, height: number) => void;

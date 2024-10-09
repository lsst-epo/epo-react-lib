export const getGradientImage = (width: number = 200, height: number = 200) => {
  const canvas = document.createElement("canvas");

  canvas.width = width;
  canvas.height = height;

  const context = canvas.getContext("2d");

  if (!context) return "";

  const gradient = context.createLinearGradient(0, 0, width, height);

  gradient.addColorStop(0, "#bfa4b3");
  gradient.addColorStop(0.5, "#8d86a6");
  gradient.addColorStop(1, "#535473");

  context.fillStyle = gradient;
  context.fillRect(0, 0, width, height);

  return canvas.toDataURL();
};

export const generateCantoSrcSet = (cantoUrl: string, width?: number) => {
  const sizes = [100, 240, 320, 500, 640, 800, 2050].filter((size) =>
    width ? size < width : true
  );

  return sizes.map((size) => {
    return {
      src: `${cantoUrl}${size}`,
      size,
    };
  });
};

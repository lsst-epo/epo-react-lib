function OutputProcessor(encodedData: string): { [key: string]: Function };
function OutputProcessor(
  encodedData: string,
  svgElement: SVGElement
): { [key: string]: Function };
function OutputProcessor(
  encodedData: string,
  svgElement?: SVGElement
): { [key: string]: Function } {
  const isPng = function () {
    return encodedData.indexOf("data:image/png") === 0;
  };

  const downloadImage = function (data: string, filename: string) {
    var a = document.createElement("a");
    a.href = data;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
  };

  return {
    toBase64: function () {
      return encodedData;
    },
    toImg: function () {
      const imgElement = document.createElement("img");
      imgElement.src = encodedData;
      return imgElement;
    },
    toCanvas: function (callback: (canvas: HTMLCanvasElement) => void) {
      const canvas = document.createElement("canvas");
      const boundedRect = svgElement?.getBoundingClientRect();
      canvas.width = boundedRect?.width || 0;
      canvas.height = boundedRect?.height || 0;
      const canvasCtx = canvas.getContext("2d");

      var img = this.toImg();
      img.onload = function () {
        canvasCtx?.drawImage(img, 0, 0);
        callback(canvas);
      };
    },
    toPng: function () {
      if (isPng()) {
        var img = document.createElement("img");
        img.src = encodedData;
        return img;
      }

      this.toCanvas(function (canvas: HTMLCanvasElement) {
        var img = document.createElement("img");
        img.src = canvas.toDataURL();
        return img;
      });
    },
    toJpeg: function (quality: number) {
      // quality should be between 0-1
      quality = quality || 1.0;
      ((q) => {
        this.toCanvas(function (canvas: HTMLCanvasElement) {
          var img = document.createElement("img");
          img.src = canvas.toDataURL("image/jpeg", q);
          return img;
        });
      })(quality);
    },
    downloadPng: function (filename: string) {
      filename = filename || "image.png";
      if (isPng()) {
        // it's a canvas already
        downloadImage(encodedData, filename);
        return;
      }

      // convert to canvas first
      this.toCanvas(function (canvas: HTMLCanvasElement) {
        downloadImage(canvas.toDataURL(), filename);
      });
    },
  };
}

function fromSvg(svgElement: SVGElement) {
  const svgString = new XMLSerializer().serializeToString(svgElement);
  return OutputProcessor(
    "data:image/svg+xml;base64," + btoa(svgString),
    svgElement
  );
}

function fromCanvas(canvasElement: HTMLCanvasElement) {
  const dataUrl = canvasElement.toDataURL();
  return OutputProcessor(dataUrl);
}

export { fromSvg, fromCanvas };

import { jsx as _jsx } from "react/jsx-runtime";
import { useCanvaConfig } from "./hooks/useCanvaConfig";
export var Canvas = function (_a) {
    var canvasRef = _a.canvasRef, aspect = _a.aspect, confirmImage = _a.confirmImage, cropConfig = _a.cropConfig, imageUrl = _a.imageUrl, originalImageSize = _a.originalImageSize, proportions = _a.proportions, renderSize = _a.renderSize, sizeConfig = _a.sizeConfig, step = _a.step;
    useCanvaConfig({
        aspect: aspect,
        canvasRef: canvasRef,
        confirmImage: confirmImage,
        cropConfig: cropConfig,
        imageUrl: imageUrl,
        originalImageSize: originalImageSize,
        proportions: proportions,
        renderSize: renderSize,
        sizeConfig: sizeConfig,
        step: step
    });
    return _jsx("canvas", { ref: canvasRef });
};

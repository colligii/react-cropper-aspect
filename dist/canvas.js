var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useCanvaConfig } from "./hooks/useCanvaConfig";
export var Canvas = function (_a) {
    var canvasRef = _a.canvasRef, aspect = _a.aspect, confirmImage = _a.confirmImage, cropConfig = _a.cropConfig, imageUrl = _a.imageUrl, originalImageSize = _a.originalImageSize, proportions = _a.proportions, renderSize = _a.renderSize, sizeConfig = _a.sizeConfig, step = _a.step, canvasClassName = _a.canvasClassName;
    var canvasProps = {};
    if (canvasClassName) {
        canvasProps.className = canvasClassName;
    }
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
    return _jsx("canvas", __assign({ ref: canvasRef }, canvasProps));
};

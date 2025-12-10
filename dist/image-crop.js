import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo, useRef, useState } from "react";
import Cropper from "./cropper";
import { Canvas } from "./canvas";
export var ImageCrop = function (_a) {
    var file = _a.file, aspect = _a.aspect, proportions = _a.proportions, sizeConfig = _a.sizeConfig, step = _a.step, confirmImage = _a.confirmImage, canvasClassName = _a.canvasClassName;
    var _b = useState(null), renderSize = _b[0], setRenderSize = _b[1];
    var originalImageSize = useRef(null);
    var _c = useState({ ratio: 0.2, startX: 0, startY: 0 }), cropConfig = _c[0], setCropConfig = _c[1];
    var canvasRef = useRef(null);
    var imageUrl = useMemo(function () {
        return URL.createObjectURL(file);
    }, [file]);
    if (step === 'selecting') {
        return _jsx(Cropper, { imageUrl: imageUrl, aspect: aspect, confirmImage: confirmImage, cropConfig: cropConfig, proportions: proportions, setCropConfig: setCropConfig, sizeConfig: sizeConfig, originalImageSize: originalImageSize, renderSize: renderSize, setRenderSize: setRenderSize, step: step });
    }
    console.log(step, imageUrl);
    if ((step === 'end' || step === 'confirm') && imageUrl) {
        return _jsx(Canvas, { aspect: aspect, canvasRef: canvasRef, confirmImage: confirmImage, cropConfig: cropConfig, imageUrl: imageUrl, originalImageSize: originalImageSize, proportions: proportions, renderSize: renderSize, sizeConfig: sizeConfig, step: step, canvasClassName: canvasClassName });
    }
    return _jsx("h1", { children: "Some error hapened :(" });
};

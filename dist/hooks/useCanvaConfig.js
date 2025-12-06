import { useEffect } from "react";
import { getProportion } from "../utils/getProportions";
export var useCanvaConfig = function (_a) {
    var canvasRef = _a.canvasRef, step = _a.step, originalImageSize = _a.originalImageSize, renderSize = _a.renderSize, cropConfig = _a.cropConfig, aspect = _a.aspect, proportions = _a.proportions, sizeConfig = _a.sizeConfig, imageUrl = _a.imageUrl, confirmImage = _a.confirmImage;
    useEffect(function () {
        var canvas = canvasRef.current;
        var ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext("2d");
        if (step === 'end' && canvas && ctx && renderSize && originalImageSize.current) {
            var displayedWidth = renderSize.width * cropConfig.ratio;
            var displayedHeight = (renderSize.width / aspect) * cropConfig.ratio;
            var sx = cropConfig.startX * (originalImageSize.current.width / renderSize.width);
            var sy = cropConfig.startY * (originalImageSize.current.height / renderSize.height);
            var _a = getProportion(proportions, sizeConfig), maxWidth = _a.maxWidth, maxHeight = _a.maxHeight;
            var widthProportion = maxWidth / displayedWidth;
            var heightProportion = maxHeight / displayedHeight;
            var proportion = Math.min(widthProportion, heightProportion);
            var sWidth = displayedWidth * proportion;
            var sHeight = displayedHeight * proportion;
            canvas.width = sWidth;
            canvas.height = sHeight;
            var img = new Image();
            img.src = imageUrl;
            ctx.drawImage(img, sx, sy, sWidth, sHeight, 0, 0, sWidth, sHeight);
            canvas.toDataURL("image/png");
        }
        if (step === 'confirm' && canvas) {
            canvas.toBlob(function (blob) {
                if (!blob)
                    return;
                var file = new File([blob], "".concat(crypto.randomUUID(), ".png"), { type: 'image/png' });
                confirmImage(file);
            });
        }
    }, [step]);
};

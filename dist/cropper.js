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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef } from "react";
import { getProportion } from "./utils/getProportions";
import { useManageMouseTouchUpAndDownEvent } from "./hooks/manageMouseTouchUpAndDownEvent";
import { useResizer } from "./hooks/useResizer";
import { useCanvaConfig } from "./hooks/useCanvaConfig";
import { getMouseOrTouchPosition } from "./utils/getMouseOrTouchPostion";
import { calculateCropConfig } from "./utils/calculateCropConfig";
export default function Cropper(_a) {
    var imageUrl = _a.imageUrl, proportions = _a.proportions, sizeConfig = _a.sizeConfig, aspect = _a.aspect, step = _a.step, confirmImage = _a.confirmImage, cropConfig = _a.cropConfig, setCropConfig = _a.setCropConfig, renderSize = _a.renderSize, setRenderSize = _a.setRenderSize, originalImageSize = _a.originalImageSize;
    var resizeDownRef = useRef(null);
    var wrapperRef = useRef(null);
    var positionMouseDownRef = useRef(false);
    var oldMouse = useRef(null);
    var canvasRef = useRef(null);
    var handleAllMouseUp = function () {
        oldMouse.current = null;
        resizeDownRef.current = null;
        positionMouseDownRef.current = false;
    };
    var calculateProps = function () {
        var imgSize = originalImageSize.current;
        if (!imgSize)
            throw Error("image size is not loaded");
        var _a = getProportion(proportions, sizeConfig), maxWidth = _a.maxWidth, maxHeight = _a.maxHeight;
        var widthProportion = maxWidth / imgSize.width;
        var heightProportion = maxHeight / imgSize.height;
        var proportion = Math.min(widthProportion, heightProportion);
        setRenderSize({ width: imgSize.width * proportion, height: imgSize.height * proportion });
    };
    useManageMouseTouchUpAndDownEvent(handleAllMouseUp);
    useResizer(originalImageSize, calculateProps);
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
    var handleImgLoad = function (event) {
        var imgElem = event.target;
        setRenderSize({ width: imgElem.width, height: imgElem.height });
    };
    var handleImgSize = function (event) {
        var imgElem = event.target;
        originalImageSize.current = { width: imgElem.width, height: imgElem.height };
        calculateProps();
    };
    var handlePositionMouseDown = function () {
        positionMouseDownRef.current = true;
    };
    var handlePositionMouseUpOut = function () {
        oldMouse.current = null;
        positionMouseDownRef.current = false;
    };
    var handleResizeDown = function (type) {
        return function () {
            resizeDownRef.current = type;
        };
    };
    var handleMouseDownUp = function (event) {
        if (!renderSize)
            return;
        var div = event.target;
        var rect = div.getBoundingClientRect();
        var _a = getMouseOrTouchPosition(event), clientX = _a.clientX, clientY = _a.clientY;
        var mouseX = clientX - rect.left;
        var mouseY = clientY - rect.top;
        var width = renderSize.width * cropConfig.ratio;
        var height = renderSize.width / aspect * cropConfig.ratio;
        if (positionMouseDownRef.current) {
            if (!oldMouse.current) {
                oldMouse.current = { top: mouseY, left: mouseX };
                return;
            }
            var diffMouseLeft = mouseX - oldMouse.current.left;
            var diffMouseTop = mouseY - oldMouse.current.top;
            var left_1 = Math.max(0, Math.min(renderSize.width - width, cropConfig.startX + diffMouseLeft));
            var top_1 = Math.max(0, Math.min(renderSize.height - height, cropConfig.startY + diffMouseTop));
            oldMouse.current = { top: mouseY, left: mouseX };
            setCropConfig(function (data) { return (__assign(__assign({}, data), { startX: left_1, startY: top_1 })); });
        }
        else if (resizeDownRef.current) {
            var rect_1 = wrapperRef.current.getBoundingClientRect();
            var _b = getMouseOrTouchPosition(event), clientX_1 = _b.clientX, clientY_1 = _b.clientY;
            var mouseX_1 = clientX_1 - rect_1.left;
            var mouseY_1 = clientY_1 - rect_1.top;
            setCropConfig(function (data) {
                return calculateCropConfig({
                    data: data,
                    aspect: aspect,
                    height: height,
                    mouseX: mouseX_1,
                    mouseY: mouseY_1,
                    renderSize: renderSize,
                    resizeDownRef: resizeDownRef,
                    width: width
                });
            });
        }
    };
    if (step === 'selecting') {
        if (!renderSize) {
            return _jsx("img", { src: imageUrl, onLoad: handleImgSize, alt: "Image to crop", className: "hidden w-24" });
        }
        return (_jsxs("div", { className: "relative overflow-hidden w-full h-full", draggable: false, ref: wrapperRef, onMouseDown: function (e) { return e.preventDefault(); }, onTouchStart: function (e) { return e.preventDefault(); }, onDragStart: function (e) { return e.preventDefault(); }, onMouseMove: handleMouseDownUp, onTouchMove: handleMouseDownUp, children: [renderSize && (_jsxs(_Fragment, { children: [_jsx("div", { className: "z-20 absolute", style: {
                                background: 'rgba(0,0,0,0.7)',
                                width: renderSize.width + 'px',
                                height: renderSize.height + 'px',
                            } }), _jsx("div", { className: "z-30 absolute", style: {
                                width: (renderSize.width * cropConfig.ratio) + 'px',
                                height: (renderSize.width / aspect * cropConfig.ratio) + 'px',
                                top: cropConfig.startY + 'px',
                                left: cropConfig.startX + 'px',
                            }, children: _jsxs("div", { className: "overflow-hidden relative w-full h-full active:cursor-grab", children: [_jsx("div", { className: "absolute left-0 top-0 border-l-3 border-t-3 border-white w-4 h-4 z-30 hover:cursor-se-resize", onMouseDown: handleResizeDown('top-left'), onTouchStart: handleResizeDown('top-left') }), _jsx("div", { className: "absolute right-0 top-0 border-r-3 border-t-3 border-white w-4 h-4 z-30 hover:cursor-sw-resize", onMouseDown: handleResizeDown('top-right'), onTouchStart: handleResizeDown('top-right') }), _jsx("div", { className: "absolute left-0 bottom-0 border-l-3 border-b-3 border-white w-4 h-4 z-30 hover:cursor-ne-resize", onMouseDown: handleResizeDown('bottom-left'), onTouchStart: handleResizeDown('bottom-left') }), _jsx("div", { className: "absolute right-0 bottom-0 border-r-3 border-b-3 border-white w-4 h-4 z-30 hover:cursor-nw-resize", onMouseDown: handleResizeDown('bottom-right'), onTouchStart: handleResizeDown('bottom-right') }), _jsx("img", { className: "relative z-10 max-w-max", onMouseDown: handlePositionMouseDown, onTouchStart: handlePositionMouseDown, onMouseUp: handlePositionMouseUpOut, onTouchEnd: handlePositionMouseUpOut, style: {
                                            top: '-' + cropConfig.startY + 'px',
                                            left: '-' + cropConfig.startX + 'px',
                                        }, width: renderSize.width, height: renderSize.height, src: imageUrl, alt: "Image to crop" })] }) })] })), _jsx("img", { className: "object-cover relative z-10 min-w-full", style: { minWidth: renderSize.width, minHeight: renderSize.height }, width: renderSize.width, height: renderSize.height, src: imageUrl, onLoad: handleImgLoad, alt: "Image to crop" })] }));
    }
}

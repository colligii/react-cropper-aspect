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
export var calculateCropConfig = function (_a) {
    var data = _a.data, mouseX = _a.mouseX, mouseY = _a.mouseY, width = _a.width, height = _a.height, renderSize = _a.renderSize, aspect = _a.aspect, resizeDownRef = _a.resizeDownRef;
    var newWidth = null;
    var newHeight = null;
    var finalLeft = data.startX;
    var finalTop = data.startY;
    if (resizeDownRef.current === "bottom-right") {
        newWidth = mouseX - data.startX + 6;
        newHeight = mouseY - data.startY + 6;
    }
    else if (resizeDownRef.current === "bottom-left") {
        newHeight = mouseY - data.startY + 6;
        var leftDiff = mouseX - data.startX;
        newWidth = width - leftDiff;
        finalLeft = data.startX + leftDiff;
    }
    else if (resizeDownRef.current === 'top-right') {
        newWidth = mouseX - data.startX + 6;
        var topDiff = mouseY - data.startY;
        newHeight = (topDiff * -1) + height;
    }
    else if (resizeDownRef.current === 'top-left') {
        var leftDiff = mouseX - data.startX;
        newWidth = width - leftDiff;
        var topDiff = mouseY - data.startY;
        newHeight = (topDiff * -1) + height;
    }
    else
        return data;
    var ratio = Math.max(newWidth / renderSize.width, newHeight / (renderSize.width / aspect));
    if (resizeDownRef.current === 'top-right' || resizeDownRef.current === 'top-left') {
        var oldBottomToTopDistance = data.startY + height;
        finalTop = oldBottomToTopDistance - (renderSize.width / aspect * ratio);
        if (resizeDownRef.current === 'top-left') {
            var leftToEndDiff = data.startX + width;
            finalLeft = leftToEndDiff - (renderSize.width * ratio);
        }
    }
    var realWidth = (renderSize.width * ratio), realHeight = (renderSize.width / aspect * ratio);
    if (finalLeft < 0 || finalTop < 0 || realHeight + finalTop > renderSize.height || realWidth + finalLeft > renderSize.width)
        return data;
    return __assign(__assign({}, data), { ratio: Math.min(1, ratio), startX: finalLeft, startY: finalTop });
};

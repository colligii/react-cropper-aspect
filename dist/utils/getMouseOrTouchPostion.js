export var getMouseOrTouchPosition = function (event) {
    var _a, _b, _c, _d;
    return {
        clientX: 'touches' in event ? (_b = (_a = event.touches[0]) === null || _a === void 0 ? void 0 : _a.clientX) !== null && _b !== void 0 ? _b : 0 : event.clientX,
        clientY: 'touches' in event ? (_d = (_c = event.touches[0]) === null || _c === void 0 ? void 0 : _c.clientY) !== null && _d !== void 0 ? _d : 0 : event.clientY,
    };
};

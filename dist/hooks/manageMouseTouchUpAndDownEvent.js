import { useEffect } from "react";
export var useManageMouseTouchUpAndDownEvent = function (handleAllMouseUp) {
    useEffect(function () {
        document.body.addEventListener('mouseup', handleAllMouseUp);
        document.body.addEventListener('touchend', handleAllMouseUp);
        return function () {
            document.body.removeEventListener('touchend', handleAllMouseUp);
            document.body.removeEventListener('mouseup', handleAllMouseUp);
        };
    }, []);
};

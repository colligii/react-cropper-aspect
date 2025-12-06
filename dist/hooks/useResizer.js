import { useEffect } from "react";
export var useResizer = function (originalImageSize, calculateProps) {
    useEffect(function () {
        var el = document.body;
        if (!el)
            return;
        var observer = new ResizeObserver(function () {
            if (originalImageSize.current)
                calculateProps();
        });
        observer.observe(el);
        return function () { return observer.disconnect(); };
    }, []);
};

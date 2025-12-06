export var getProportion = function (proportions, sizeConfig) {
    var rightProportion = Object.entries(proportions).find(function (_a) {
        var key = _a[0], value = _a[1];
        return value(document.body.clientWidth);
    });
    if (!rightProportion)
        throw Error('Not proportion find for this screen');
    return sizeConfig[rightProportion[0]];
};

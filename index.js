module.exports = function aspectToRect(aspectRatio, options, result) {
    var r = result || {width: 0, height: 0};

    singleAspectToRect(aspectRatio, options, r);

    return r;
};

function singleAspectToRect(aspectRatio, options, r) {
    var minWidth = 0, maxWidth = Number.MAX_VALUE, minHeight = 0, maxHeight = Number.MAX_VALUE;
    var minMaxDefined;

    if (options.width) {
        minMaxDefined = false;
        if (options.width.hasOwnProperty("min")) {
            minMaxDefined = true;
            minWidth = +options.width.min;
        }
        if (options.width.hasOwnProperty("max")) {
            minMaxDefined = true;
            maxWidth = +options.width.max;
        }
        if (!minMaxDefined) {
            minWidth = maxWidth = +options.width;
        }
    }

    if (options.height) {
        minMaxDefined = false;
        if (options.height.hasOwnProperty("min")) {
            minMaxDefined = true;
            minHeight = +options.height.min;
        }
        if (options.height.hasOwnProperty("max")) {
            minMaxDefined = true;
            maxHeight = +options.height.max;
        }
        if (!minMaxDefined) {
            minHeight = maxHeight = +options.height;
        }
    }

    var w1 = minWidth;
    var h1 = w1 / aspectRatio;
    if (h1 < minHeight) {
        h1 = minHeight;
    }
    if (h1 > maxHeight) {
        h1 = maxHeight;
    }
    var a1 = w1/h1;

    var h2 = minHeight;
    var w2 = h2 * aspectRatio;
    if (w2 < minWidth) {
        w2 = minWidth;
    }
    if (w2 > maxWidth) {
        w2 = maxWidth;
    }
    var a2 = w2/h2;

    if (Math.abs(a1 - aspectRatio) < Math.abs(a2 - aspectRatio)) {
        r.width = w1;
        r.height = h1;
    }
    else {
        r.width = w2;
        r.height = h2;
    }

}

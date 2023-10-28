var ElemUtil = /** @class */ (function () {
    function ElemUtil() {
    }
    ElemUtil.closest = function (element, selector) {
        if (element.closest)
            return element.closest(selector);
        while (element) {
            if (ElemUtil.matches(element, selector)) {
                return element;
            }
            else {
                element = element.parentElement;
            }
        }
        return null;
    };
    ElemUtil.matches = function (element, selector) {
        if (element["matchesSelector"])
            return element["matchesSelector"](selector);
        if (element["mozMatchesSelector"])
            return element["mozMatchesSelector"](selector);
        if (element["msMatchesSelector"])
            return element["msMatchesSelector"](selector);
        if (element["oMatchesSelector"])
            return element["oMatchesSelector"](selector);
        if (element["webkitMatchesSelector"])
            return element["webkitMatchesSelector"](selector);
        var matches = (element.document || element.ownerDocument).querySelectorAll(selector);
        var i = matches.length;
        while (--i >= 0 && matches.item(i) !== element) { }
        return i > -1;
    };
    return ElemUtil;
}());
export default ElemUtil;
//# sourceMappingURL=elemUtil.js.map
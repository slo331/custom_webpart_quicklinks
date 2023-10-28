// The left navigation selects what kind of link picking to do
export var NavState;
(function (NavState) {
    NavState[NavState["site"] = 0] = "site";
    NavState[NavState["link"] = 1] = "link";
    NavState[NavState["image"] = 2] = "image";
})(NavState || (NavState = {}));
var ApprovedImage = /** @class */ (function () {
    function ApprovedImage() {
        this.RelativeURL = null;
        this.Name = null;
        this.Thumbnail = null;
    }
    return ApprovedImage;
}());
export { ApprovedImage };
var ImageLibrary = /** @class */ (function () {
    function ImageLibrary() {
        this.libUrl = null;
        this.cdnUrl = null;
    }
    return ImageLibrary;
}());
export { ImageLibrary };
//# sourceMappingURL=ILinkPickerPanelState.js.map
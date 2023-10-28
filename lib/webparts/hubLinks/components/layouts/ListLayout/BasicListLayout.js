import * as React from 'react';
import { Logger } from "@pnp/logging";
import * as strings from 'hubLinksStrings';
import { DefaultButton } from 'office-ui-fabric-react';
import styles from './Styles.module.scss';
var BasicListLayout = /** @class */ (function () {
    function BasicListLayout(webpart) {
        this.LOG_SOURCE = "BasicListLayout";
        this.webpart = webpart;
    }
    Object.defineProperty(BasicListLayout.prototype, "webpart", {
        get: function () {
            return this._webpart;
        },
        set: function (v) {
            this._webpart = v;
        },
        enumerable: false,
        configurable: true
    });
    BasicListLayout.prototype.render = function (items, isEditMode) {
        var _this = this;
        try {
            return (React.createElement("ul", { className: styles["hubLinks"] + (this.webpart.props.isEdit ? " " + styles["edit"] : "") },
                items &&
                    items.map(function (item) {
                        return (React.createElement("li", { key: "item-" + items.indexOf(item), role: "link", id: "item-" + items.indexOf(item), draggable: isEditMode, onDragStart: _this.webpart.startDrag.bind(_this.webpart), onMouseDown: _this.webpart.mouseDragDown.bind(_this.webpart), onDragEnter: _this.webpart.moveItem.bind(_this.webpart), onDragEnd: _this.webpart.endDrag.bind(_this.webpart), "data-index": items.indexOf(item) },
                            item.Icon && item.Icon.length > 0 &&
                                React.createElement("i", { className: "fas " + item.Icon + " " + styles["faIcon"], "aria-hidden": "true" }),
                            item.NewTab &&
                                React.createElement("a", { className: styles["linktitle"], href: item.URL, target: "blank", "data-interception": "off" }, item.Title),
                            !item.NewTab &&
                                React.createElement("a", { className: styles["linktitle"], href: item.URL }, item.Title),
                            _this.webpart.props.showDescription &&
                                React.createElement("p", { className: styles["linkdescription"] }, item.Description),
                            isEditMode &&
                                React.createElement("div", { className: styles["editControls"] },
                                    React.createElement(DefaultButton, { iconProps: { iconName: "Clear" }, onClick: _this.webpart.deleteBox.bind(_this.webpart), className: styles["right-button"] }),
                                    React.createElement(DefaultButton, { iconProps: { iconName: "Edit" }, onClick: _this.webpart.editBox.bind(_this.webpart), className: styles["right-button"] }),
                                    React.createElement("i", { className: "ms-Icon ms-Icon--Move " + styles["left-button"], id: "drag-handle", "aria-hidden": "true" }))));
                    }),
                (!items || items.length < 1) && isEditMode &&
                    Array.apply(null, Array(1 - (items ? items.length : 0))).map(function (o, i) {
                        return (React.createElement("li", { className: "col-md-4 " + styles["emptyBox"] },
                            React.createElement("div", { role: "button", onClick: _this.webpart.openLinkPicker.bind(_this.webpart) }, strings.PlaceholderButtonText)));
                    })));
        }
        catch (err) {
            Logger.write(err + " - " + this.LOG_SOURCE + " (render)", 3 /* Error */);
            return null;
        }
    };
    return BasicListLayout;
}());
export default BasicListLayout;
//# sourceMappingURL=BasicListLayout.js.map
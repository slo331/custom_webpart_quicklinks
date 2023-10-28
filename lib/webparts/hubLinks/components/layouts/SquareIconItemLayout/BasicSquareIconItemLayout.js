import * as React from 'react';
import { Logger } from "@pnp/logging";
import * as strings from 'hubLinksStrings';
import { DefaultButton } from 'office-ui-fabric-react';
import styles from './Styles.module.scss';
var BasicSquareIconItemLayout = /** @class */ (function () {
    function BasicSquareIconItemLayout(webpart) {
        this.LOG_SOURCE = "BasicSquareIconItemLayout";
        this.webpart = webpart;
    }
    Object.defineProperty(BasicSquareIconItemLayout.prototype, "webpart", {
        get: function () {
            return this._webpart;
        },
        set: function (v) {
            this._webpart = v;
        },
        enumerable: false,
        configurable: true
    });
    BasicSquareIconItemLayout.prototype.render = function (items, isEditMode) {
        var _this = this;
        try {
            return (React.createElement("div", { className: styles["hubLinks"] + " " + (this.webpart.props.isEdit ? " " + styles["edit"] : "") },
                items &&
                    items.map(function (item) {
                        return item.NewTab ? (React.createElement("a", { key: "item-" + items.indexOf(item), role: "link", id: "item-" + items.indexOf(item), draggable: isEditMode, onDragStart: _this.webpart.startDrag.bind(_this.webpart), onMouseDown: _this.webpart.mouseDragDown.bind(_this.webpart), onDragEnter: _this.webpart.moveItem.bind(_this.webpart), onDragEnd: _this.webpart.endDrag.bind(_this.webpart), "data-index": items.indexOf(item), href: item.URL, className: styles["tile"] + " " + styles["color-" + _this.webpart.props.textColor] + " " + styles["background-" + _this.webpart.props.backgroundColor] + " " + styles["border-" + _this.webpart.props.borderColor], "data-interception": "off", target: "_blank" },
                            React.createElement("div", { className: styles["fontawesome"] + " " + styles["icon"] },
                                React.createElement("i", { className: "fas " + item.Icon + " fa-3x " + styles["color"] + " " + styles[_this.webpart.props.textColor] })),
                            React.createElement("div", { className: styles["shader"] }),
                            React.createElement("div", { className: styles["cell-divider"] + " " + styles[_this.webpart.props.borderColor] }),
                            React.createElement("div", { className: styles["title"] + " " + styles["color"] + " " + styles[_this.webpart.props.textColor] }, item.Title),
                            React.createElement("div", { className: styles["description"] + " " + styles["color"] + " " + styles[_this.webpart.props.textColor] }, item.Description),
                            isEditMode &&
                                React.createElement("div", { className: styles["editControls"] },
                                    React.createElement(DefaultButton, { iconProps: { iconName: "Clear" }, onClick: _this.webpart.deleteBox.bind(_this.webpart), className: styles["right-button"] }),
                                    React.createElement(DefaultButton, { iconProps: { iconName: "Edit" }, onClick: _this.webpart.editBox.bind(_this.webpart), className: styles["right-button"] }),
                                    React.createElement("i", { className: "ms-Icon ms-Icon--Move " + styles["left-button"], id: "drag-handle", "aria-hidden": "true" })))) :
                            (React.createElement("a", { key: "item-" + items.indexOf(item), role: "link", id: "item-" + items.indexOf(item), draggable: isEditMode, onDragStart: _this.webpart.startDrag.bind(_this.webpart), onMouseDown: _this.webpart.mouseDragDown.bind(_this.webpart), onDragEnter: _this.webpart.moveItem.bind(_this.webpart), onDragEnd: _this.webpart.endDrag.bind(_this.webpart), "data-index": items.indexOf(item), href: item.URL, className: styles["tile"] + " " + styles["color-" + _this.webpart.props.textColor] + " " + styles["background-" + _this.webpart.props.backgroundColor] + " " + styles["border-" + _this.webpart.props.borderColor] },
                                React.createElement("div", { className: styles["fontawesome"] + " " + styles["icon"] },
                                    React.createElement("i", { className: "fas " + item.Icon + " fa-3x " + styles["color"] + " " + styles[_this.webpart.props.textColor] })),
                                React.createElement("div", { className: styles["shader"] }),
                                React.createElement("div", { className: styles["cell-divider"] + " " + styles[_this.webpart.props.borderColor] }),
                                React.createElement("div", { className: styles["title"] + " " + styles["color"] + " " + styles[_this.webpart.props.textColor] }, item.Title),
                                React.createElement("div", { className: styles["description"] + " " + styles["color"] + " " + styles[_this.webpart.props.textColor] }, item.Description),
                                isEditMode &&
                                    React.createElement("div", { className: styles["editControls"] },
                                        React.createElement(DefaultButton, { iconProps: { iconName: "Clear" }, onClick: _this.webpart.deleteBox.bind(_this.webpart), className: styles["right-button"] }),
                                        React.createElement(DefaultButton, { iconProps: { iconName: "Edit" }, onClick: _this.webpart.editBox.bind(_this.webpart), className: styles["right-button"] }),
                                        React.createElement("i", { className: "ms-Icon ms-Icon--Move " + styles["left-button"], id: "drag-handle", "aria-hidden": "true" }))));
                    }),
                (!items || items.length < 1) && isEditMode &&
                    Array.apply(null, Array(1 - (items ? items.length : 0))).map(function (o, i) {
                        return (React.createElement("div", { className: "col-md-4 " + styles["emptyBox"] },
                            React.createElement("div", { role: "button", onClick: _this.webpart.openLinkPicker.bind(_this.webpart) }, strings.PlaceholderButtonText)));
                    })));
        }
        catch (err) {
            Logger.write(err + " - " + this.LOG_SOURCE + " (render)", 3 /* Error */);
            return null;
        }
    };
    return BasicSquareIconItemLayout;
}());
export default BasicSquareIconItemLayout;
//# sourceMappingURL=BasicSquareIconItemLayout.js.map
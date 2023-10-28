import * as React from 'react';
import * as strings from 'hubLinksStrings';
import { DefaultButton } from 'office-ui-fabric-react';
import styles from './Styles.module.scss';
var BasicTileLayout = /** @class */ (function () {
    function BasicTileLayout(webpart) {
        this.webpart = webpart;
    }
    Object.defineProperty(BasicTileLayout.prototype, "webpart", {
        get: function () {
            return this._webpart;
        },
        set: function (v) {
            this._webpart = v;
        },
        enumerable: false,
        configurable: true
    });
    BasicTileLayout.prototype.render = function (items, isEditMode) {
        var _this = this;
        return (React.createElement("div", { className: styles["hubLinks"] + " " + (this.webpart.props.isEdit ? " " + styles["edit"] : "") },
            items &&
                items.map(function (item) {
                    return item.NewTab ? (React.createElement("div", { key: "item-" + items.indexOf(item), role: "link", id: "item-" + items.indexOf(item), draggable: isEditMode, onDragStart: _this.webpart.startDrag.bind(_this.webpart), onMouseDown: _this.webpart.mouseDragDown.bind(_this.webpart), onDragEnter: _this.webpart.moveItem.bind(_this.webpart), onDragEnd: _this.webpart.endDrag.bind(_this.webpart), "data-index": items.indexOf(item), className: styles["box"] + " " + styles["color-" + _this.webpart.props.textColor] + " " + styles["background-" + _this.webpart.props.backgroundColor] + " " + styles["border-" + _this.webpart.props.borderColor], "data-interception": "off" },
                        React.createElement("a", { href: item.URL, target: "_blank" },
                            React.createElement("div", { className: styles["fontawesome"] + " " + styles["icon"] },
                                React.createElement("i", { className: "fas " + item.Icon + " fa-3x " + styles["color"] + " " + styles[_this.webpart.props.textColor] })),
                            React.createElement("div", { className: styles["cell-divider"] }),
                            React.createElement("div", { className: styles["title"] + " " + styles["color"] + " " + styles[_this.webpart.props.textColor] }, item.Title),
                            React.createElement("div", { className: styles["description"] + " " + styles["color"] + " " + styles[_this.webpart.props.textColor] }, item.Description)),
                        isEditMode &&
                            React.createElement("div", { className: styles["editControls"] },
                                React.createElement(DefaultButton, { iconProps: { iconName: "Clear" }, onClick: function (e) { e.stopPropagation(); e.preventDefault(); _this.webpart.deleteBox.call(_this.webpart, e); }, className: styles["right-button"] }),
                                React.createElement(DefaultButton, { iconProps: { iconName: "Edit" }, onClick: function (e) { e.stopPropagation(); e.preventDefault(); _this.webpart.editBox.call(_this.webpart, e); }, className: styles["right-button"] }),
                                React.createElement("i", { className: "ms-Icon ms-Icon--Move " + styles["left-button"], onClick: function (e) { e.preventDefault(); e.stopPropagation(); }, id: "drag-handle", "aria-hidden": "true" })))) :
                        (React.createElement("div", { key: "item-" + items.indexOf(item), role: "link", id: "item-" + items.indexOf(item), draggable: isEditMode, onDragStart: _this.webpart.startDrag.bind(_this.webpart), onMouseDown: _this.webpart.mouseDragDown.bind(_this.webpart), onDragEnter: _this.webpart.moveItem.bind(_this.webpart), onDragEnd: _this.webpart.endDrag.bind(_this.webpart), "data-index": items.indexOf(item), className: styles["box"] + " " + styles["color-" + _this.webpart.props.textColor] + " " + styles["background-" + _this.webpart.props.backgroundColor] + " " + styles["border-" + _this.webpart.props.borderColor] },
                            React.createElement("a", { href: item.URL },
                                React.createElement("div", { className: styles["fontawesome"] + " " + styles["icon"] },
                                    React.createElement("i", { className: "fas " + item.Icon + " fa-3x " + styles["color"] + " " + styles[_this.webpart.props.textColor] })),
                                React.createElement("div", { className: styles["cell-divider"] + " " + styles[_this.webpart.props.borderColor] }),
                                React.createElement("div", { className: styles["title"] + " " + styles["color"] + " " + styles[_this.webpart.props.textColor] }, item.Title),
                                React.createElement("div", { className: styles["description"] + " " + styles["color"] + " " + styles[_this.webpart.props.textColor] }, item.Description)),
                            isEditMode &&
                                React.createElement("div", { className: styles["editControls"] },
                                    React.createElement(DefaultButton, { iconProps: { iconName: "Clear" }, onClick: function (e) { e.stopPropagation(); e.preventDefault(); _this.webpart.deleteBox.call(_this.webpart, e); }, className: styles["right-button"] }),
                                    React.createElement(DefaultButton, { iconProps: { iconName: "Edit" }, onClick: function (e) { e.stopPropagation(); e.preventDefault(); _this.webpart.editBox.call(_this.webpart, e); }, className: styles["right-button"] }),
                                    React.createElement("i", { className: "ms-Icon ms-Icon--Move " + styles["left-button"], onClick: function (e) { e.preventDefault(); e.stopPropagation(); }, id: "drag-handle", "aria-hidden": "true" }))));
                }),
            (!items || items.length < 1) && isEditMode &&
                Array.apply(null, Array(1 - (items ? items.length : 0))).map(function (o, i) {
                    return (React.createElement("div", { className: "col-md-4 " + styles["emptyBox"] },
                        React.createElement("div", { role: "button", onClick: _this.webpart.openLinkPicker.bind(_this.webpart) }, strings.PlaceholderButtonText)));
                })));
    };
    return BasicTileLayout;
}());
export default BasicTileLayout;
//# sourceMappingURL=BasicTileLayout.js.map
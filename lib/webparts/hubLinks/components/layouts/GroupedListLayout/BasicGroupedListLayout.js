var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import { Logger } from "@pnp/logging";
import { DefaultButton } from 'office-ui-fabric-react';
import styles from './Styles.module.scss';
var BasicGroupedListLayout = /** @class */ (function () {
    function BasicGroupedListLayout(webpart) {
        this.LOG_SOURCE = "BasicGroupedListLayout";
        this.groupDefault = {};
        this.webpart = webpart;
        if (webpart.props.defaultExpand) {
            this.groupDefault['data-expanded'] = true;
        }
    }
    Object.defineProperty(BasicGroupedListLayout.prototype, "webpart", {
        get: function () {
            return this._webpart;
        },
        set: function (v) {
            this._webpart = v;
        },
        enumerable: false,
        configurable: true
    });
    BasicGroupedListLayout.prototype.render = function (items, isEditMode) {
        var _this = this;
        try {
            return (React.createElement("div", { className: styles.hubLinks + (this.webpart.props.isEdit ? " " + styles.edit : "") },
                items &&
                    items.map(function (item) {
                        return (React.createElement("div", __assign({ className: styles.grouped }, _this.groupDefault, { onClick: _this.webpart.toggleGroup.bind(_this), "data-group": "group-" + item.Heading.Title }),
                            React.createElement("div", { role: "button", className: styles.groupHeader },
                                item.Heading.Title,
                                React.createElement("div", { className: styles.expand },
                                    React.createElement("i", { className: "fas fa-angle-right", "aria-hidden": "true" })),
                                React.createElement("div", { className: styles.collapse },
                                    React.createElement("i", { className: "fas fa-angle-down", "aria-hidden": "true" }))),
                            React.createElement("ul", null, item.Links && item.Links.map(function (link) {
                                return (React.createElement("li", { className: styles.linkItem, key: "item-" + link.index + link.Title.replace(" ", ""), role: "link", draggable: isEditMode, onDragStart: _this.webpart.startDrag.bind(_this.webpart), onMouseDown: _this.webpart.mouseDragDown.bind(_this.webpart), onDragEnter: _this.webpart.moveItem.bind(_this.webpart), onDragEnd: _this.webpart.endDrag.bind(_this.webpart), "data-index": link.index },
                                    link.Icon && link.Icon.length > 0 &&
                                        React.createElement("i", { className: "fas " + link.Icon + " " + styles["faIcon"], "aria-hidden": "true" }),
                                    link.NewTab &&
                                        React.createElement("a", { className: styles.linktitle, href: link.URL, target: "blank", "data-interception": "off" }, link.Title),
                                    !link.NewTab &&
                                        React.createElement("a", { className: styles.linktitle, href: link.URL }, link.Title),
                                    _this.webpart.props.showDescription &&
                                        React.createElement("p", { className: styles.linkdescription }, link.Description),
                                    isEditMode &&
                                        React.createElement("div", { className: styles.editControls },
                                            React.createElement(DefaultButton, { iconProps: { iconName: "Clear" }, onClick: _this.webpart.deleteBox.bind(_this.webpart), className: styles["right-button"] }),
                                            React.createElement(DefaultButton, { iconProps: { iconName: "Edit" }, onClick: _this.webpart.editBox.bind(_this.webpart), className: styles["right-button"] }),
                                            React.createElement("i", { style: { display: "none" }, className: "ms-Icon ms-Icon--Move " + styles["left-button"], id: "drag-handle", "aria-hidden": "true" }))));
                            }))));
                    }),
                !items && isEditMode &&
                    React.createElement("div", null, "Please configure the list mapping in the property pane of this web part.")));
        }
        catch (err) {
            Logger.write(err + " - " + this.LOG_SOURCE + " (render)", 3 /* Error */);
            return null;
        }
    };
    return BasicGroupedListLayout;
}());
export default BasicGroupedListLayout;
//# sourceMappingURL=BasicGroupedListLayout.js.map
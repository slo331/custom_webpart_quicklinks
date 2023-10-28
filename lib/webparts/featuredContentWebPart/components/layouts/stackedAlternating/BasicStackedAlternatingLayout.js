import * as React from 'react';
import * as strings from 'featuredContentWebPartStrings';
import { DefaultButton } from 'office-ui-fabric-react';
import FeaturedContentFactory from '../FeaturedContentFactory';
import styles from './Styles.module.scss';
var BasicStackedLayout = /** @class */ (function () {
    function BasicStackedLayout(webpart) {
        this.webpart = webpart;
    }
    Object.defineProperty(BasicStackedLayout.prototype, "webpart", {
        get: function () {
            return this._webpart;
        },
        set: function (v) {
            this._webpart = v;
        },
        enumerable: false,
        configurable: true
    });
    BasicStackedLayout.prototype.render = function (items, isEditMode) {
        var _this = this;
        return (React.createElement("div", { className: styles["featured-content"] },
            items &&
                items.map(function (item) {
                    return (React.createElement("div", { className: styles["featured-content-item"] + " " + (isEditMode ? styles["edit"] : ""), key: "item-" + items.indexOf(item), role: "link", id: "item-" + items.indexOf(item), draggable: isEditMode, onDragStart: _this.webpart.startDrag.bind(_this.webpart), onMouseDown: _this.webpart.mouseDragDown.bind(_this.webpart), onDragEnter: _this.webpart.moveItem.bind(_this.webpart), onDragEnd: _this.webpart.endDrag.bind(_this.webpart), "data-index": items.indexOf(item) },
                        React.createElement("div", { role: "presentation", className: styles["box-container"] },
                            React.createElement("div", { className: styles["image"] },
                                item.NewTab &&
                                    React.createElement("a", { className: styles["featured-content-link"], href: item.URL, target: "blank", "data-interception": "off" }),
                                !item.NewTab &&
                                    React.createElement("a", { className: styles["featured-content-link"], href: item.URL }),
                                React.createElement("img", { src: item["Image"] + FeaturedContentFactory.getWidthHeightQueryStringAppendForImage(item.Image), alt: item.ImageAlternate })),
                            React.createElement("div", { className: styles["content"] },
                                React.createElement("div", { className: styles["title"] },
                                    item.NewTab &&
                                        React.createElement("a", { className: styles["featured-content-link"], href: item.URL, target: "blank", "data-interception": "off" }, item.Title),
                                    !item.NewTab &&
                                        React.createElement("a", { className: styles["featured-content-link"], href: item.URL }, item.Title)),
                                React.createElement("span", { className: styles["description"] }, item.Description),
                                React.createElement("span", { className: styles["rich-text-field"], dangerouslySetInnerHTML: { __html: item.Content } }))),
                        isEditMode &&
                            React.createElement("div", { className: styles["edit-controls"] },
                                React.createElement(DefaultButton, { iconProps: { iconName: "Clear" }, onClick: _this.webpart.deleteBox.bind(_this.webpart), className: styles["right-button"] }),
                                React.createElement(DefaultButton, { iconProps: { iconName: "Edit" }, onClick: _this.webpart.editBox.bind(_this.webpart), className: styles["right-button"] }),
                                React.createElement("i", { className: "ms-Icon ms-Icon--Move " + styles["left-button"], id: "drag-handle", "aria-hidden": "true" }))));
                }),
            (!items || items.length < 1) && isEditMode &&
                Array.apply(null, Array(1 - (items ? items.length : 0))).map(function (o, i) {
                    return (React.createElement("div", { className: styles["featured-content-item"] + styles["empty"] },
                        React.createElement("div", { role: "button", onClick: _this.webpart.createNewItemFromLink.bind(_this.webpart) }, strings.PlaceholderButtonText)));
                }),
            React.createElement("div", { className: styles["clear"] })));
    };
    return BasicStackedLayout;
}());
export default BasicStackedLayout;
//# sourceMappingURL=BasicStackedAlternatingLayout.js.map
import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react';
import * as strings from 'featuredContentWebPartStrings';
import FeaturedContentFactory from '../FeaturedContentFactory';
import styles from './Styles.module.scss';
var BasicHorizontalTitleOnlyLayout = /** @class */ (function () {
    function BasicHorizontalTitleOnlyLayout(webpart) {
        this.webpart = webpart;
    }
    Object.defineProperty(BasicHorizontalTitleOnlyLayout.prototype, "webpart", {
        get: function () {
            return this._webpart;
        },
        set: function (v) {
            this._webpart = v;
        },
        enumerable: false,
        configurable: true
    });
    BasicHorizontalTitleOnlyLayout.prototype.createNewItemFromLink = function (event) {
        this.webpart.props.resetActiveIndex();
        this.webpart.openLinkPicker(event);
    };
    BasicHorizontalTitleOnlyLayout.prototype.render = function (items, isEditMode) {
        var _this = this;
        return (React.createElement("div", { className: styles["featured-content"] },
            items &&
                items.map(function (item) {
                    return (React.createElement("div", { className: styles["featured-content-item"] + " " + (isEditMode ? styles["edit"] : ""), key: "item-" + items.indexOf(item), role: "link", id: "item-" + items.indexOf(item), draggable: isEditMode, onDragStart: _this.webpart.startDrag.bind(_this.webpart), onMouseDown: _this.webpart.mouseDragDown.bind(_this.webpart), onDragEnter: _this.webpart.moveItem.bind(_this.webpart), onDragEnd: _this.webpart.endDrag.bind(_this.webpart), "data-index": items.indexOf(item) },
                        React.createElement("div", { className: styles["featured-content-picture-container"] },
                            React.createElement("img", { src: item["Image"] + FeaturedContentFactory.getWidthHeightQueryStringAppendForImage(item.Image), className: "largepictureimg", alt: item.ImageAlternate })),
                        React.createElement("div", { className: styles["featured-content-title"] }, item.Title),
                        item.NewTab &&
                            React.createElement("a", { className: styles["featured-content-link"], href: item.URL, target: "blank", "data-interception": "off" }),
                        !item.NewTab &&
                            React.createElement("a", { className: styles["featured-content-link"], href: item.URL }),
                        isEditMode &&
                            React.createElement("div", { className: styles["edit-controls"] },
                                React.createElement(DefaultButton, { iconProps: { iconName: "Clear" }, onClick: _this.webpart.deleteBox.bind(_this.webpart), className: styles["right-button"] }),
                                React.createElement(DefaultButton, { iconProps: { iconName: "Edit" }, onClick: _this.webpart.editBox.bind(_this.webpart), className: styles["right-button"] }),
                                React.createElement("i", { className: "ms-Icon ms-Icon--Move " + styles["left-button"], id: "drag-handle", "aria-hidden": "true" }))));
                }),
            (!items || items.length < 3) && isEditMode &&
                Array.apply(null, Array(3 - (items ? items.length : 0))).map(function (o, i) {
                    return (React.createElement("div", { className: styles["featured-content-item"] + " " + styles["empty"] },
                        React.createElement("div", { role: "button", onClick: _this.webpart.createNewItemFromLink.bind(_this.webpart) }, strings.PlaceholderButtonText)));
                }),
            React.createElement("div", { className: styles["clear"] })));
    };
    return BasicHorizontalTitleOnlyLayout;
}());
export default BasicHorizontalTitleOnlyLayout;
//# sourceMappingURL=BasicHorizontalTitleOnlyLayout.js.map
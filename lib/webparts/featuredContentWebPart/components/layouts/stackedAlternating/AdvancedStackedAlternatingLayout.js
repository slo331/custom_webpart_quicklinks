import * as React from 'react';
import FeaturedContentFactory from '../FeaturedContentFactory';
import styles from './Styles.module.scss';
var urlField = "URL";
var imageField = "Image";
var contentField = "Content";
var descriptionField = "Description";
var openNewTabField = "NewTab";
var AdvancedStackedLayout = /** @class */ (function () {
    function AdvancedStackedLayout(webpart) {
        this.webpart = webpart;
    }
    AdvancedStackedLayout.prototype.render = function (items, isEditMode) {
        return (React.createElement("div", { className: styles["featured-content"] },
            items &&
                items.map(function (item) {
                    return (React.createElement("div", { className: styles["featured-content-item"] },
                        React.createElement("div", { role: "presentation", className: styles["box-container"] },
                            React.createElement("div", { className: styles["image"] },
                                item[openNewTabField] &&
                                    React.createElement("a", { className: styles["featured-content-link"], href: item[urlField], target: "_blank", "data-interception": "off" }),
                                !item[openNewTabField] &&
                                    React.createElement("a", { className: styles["featured-content-link"], href: item[urlField] }),
                                item[imageField] &&
                                    React.createElement("img", { src: item[imageField] + FeaturedContentFactory.getWidthHeightQueryStringAppendForImage(item[imageField]) })),
                            React.createElement("div", { className: styles["content"] },
                                React.createElement("div", { className: styles["title"] },
                                    item[openNewTabField] &&
                                        React.createElement("a", { className: styles["featured-content-link"], href: item[urlField], target: "_blank", "data-interception": "off" }, item[urlField + "_text"]),
                                    !item[openNewTabField] &&
                                        React.createElement("a", { className: styles["featured-content-link"], href: item[urlField] }, item[urlField + "_text"])),
                                React.createElement("span", { className: styles["description"] }, item[descriptionField]),
                                React.createElement("span", { className: styles["rich-text-field"], dangerouslySetInnerHTML: { __html: item[contentField] } })))));
                }),
            !items && isEditMode &&
                React.createElement("div", null, "Please configure the list mapping in the property pane of this web part."),
            React.createElement("div", { className: styles["clear"] })));
    };
    return AdvancedStackedLayout;
}());
export default AdvancedStackedLayout;
//# sourceMappingURL=AdvancedStackedAlternatingLayout.js.map
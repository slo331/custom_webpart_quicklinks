import * as React from 'react';
import FeaturedContentFactory from '../FeaturedContentFactory';
import styles from './Styles.module.scss';
var urlField = "URL";
var imageField = "Image";
var imageAltField = "ImageAlternate";
var openNewTabField = "NewTab";
var AdvancedHorizontalTitleOnlyLayout = /** @class */ (function () {
    function AdvancedHorizontalTitleOnlyLayout(webpart) {
        this.webpart = webpart;
    }
    AdvancedHorizontalTitleOnlyLayout.prototype.render = function (items, isEditMode) {
        return (React.createElement("div", { className: styles["featured-content"] },
            items &&
                items.map(function (item) {
                    return (React.createElement("div", { className: styles["featured-content-item"] },
                        React.createElement("div", { className: styles["featured-content-picture-container"] }, item["Image"] &&
                            React.createElement("img", { src: item["Image"] + FeaturedContentFactory.getWidthHeightQueryStringAppendForImage(item[imageField]), className: "largepictureimg", alt: item[imageAltField] })),
                        React.createElement("div", { className: styles["featured-content-title"] }, item[urlField + "_text"]),
                        item[openNewTabField] &&
                            React.createElement("a", { className: styles["featured-content-link"], href: item[urlField], target: "blank", "data-interception": "off" }),
                        !item[openNewTabField] &&
                            React.createElement("a", { className: styles["featured-content-link"], href: item[urlField] })));
                }),
            !items && isEditMode &&
                React.createElement("div", null, "Please configure the list mapping in the property pane of this web part."),
            React.createElement("div", { className: styles["clear"] })));
    };
    return AdvancedHorizontalTitleOnlyLayout;
}());
export default AdvancedHorizontalTitleOnlyLayout;
//# sourceMappingURL=AdvancedHorizontalTitleOnlyLayout.js.map
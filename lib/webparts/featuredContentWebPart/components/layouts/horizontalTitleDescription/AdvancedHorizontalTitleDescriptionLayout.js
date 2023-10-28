import * as React from 'react';
import FeaturedContentFactory from '../FeaturedContentFactory';
import styles from './Styles.module.scss';
var urlField = "URL";
var imageField = "Image";
var descriptionField = "Description";
var openNewTabField = "NewTab";
var AdvancedHorizontalTitleDescriptionLayout = /** @class */ (function () {
    function AdvancedHorizontalTitleDescriptionLayout(webpart) {
        this.webpart = webpart;
    }
    AdvancedHorizontalTitleDescriptionLayout.prototype.render = function (items, isEditMode) {
        return (React.createElement("div", { className: styles["featured-content"] },
            items &&
                items.map(function (item) {
                    return (React.createElement("div", { className: styles["featured-content-item"] },
                        React.createElement("div", { className: styles["featured-content-picture-container"] }, item[imageField] &&
                            React.createElement("img", { src: item[imageField] + FeaturedContentFactory.getWidthHeightQueryStringAppendForImage(item[imageField]), className: "largepictureimg" })),
                        React.createElement("div", { className: styles["featured-content-title"] }, item[urlField + "_text"]),
                        React.createElement("div", { className: styles["featured-content-desc"], dangerouslySetInnerHTML: { __html: item[descriptionField] } }),
                        item[openNewTabField] &&
                            React.createElement("a", { className: styles["featured-content-link"], href: item[urlField], target: "blank", "data-interception": "off" }),
                        !item[openNewTabField] &&
                            React.createElement("a", { className: styles["featured-content-link"], href: item[urlField] })));
                }),
            !items && isEditMode &&
                React.createElement("div", null, "Please configure the list mapping in the property pane of this web part."),
            React.createElement("div", { className: styles["clear"] })));
    };
    return AdvancedHorizontalTitleDescriptionLayout;
}());
export default AdvancedHorizontalTitleDescriptionLayout;
//# sourceMappingURL=AdvancedHorizontalTitleDescriptionLayout.js.map
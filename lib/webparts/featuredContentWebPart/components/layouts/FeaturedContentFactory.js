import AdvancedHorizontalTitleOnlyLayout from './horizontalTitleOnly/AdvancedHorizontalTitleOnlyLayout';
import BasicHorizontalTitleOnlyLayout from './horizontalTitleOnly/BasicHorizontalTitleOnlyLayout';
import AdvancedHorizontalTitleDescriptionLayout from './horizontalTitleDescription/AdvancedHorizontalTitleDescriptionLayout';
import BasicHorizontalTitleDescriptionLayout from './horizontalTitleDescription/BasicHorizontalTitleDescriptionLayout';
import AdvancedStackedLayout from './stacked/AdvancedStackedLayout';
import BasicStackedLayout from './stacked/BasicStackedLayout';
import AdvancedStackedAlternatingLayout from './stackedAlternating/AdvancedStackedAlternatingLayout';
import BasicStackedAlternatingLayout from './stackedAlternating/BasicStackedAlternatingLayout';
export var FeaturedContentLayout;
(function (FeaturedContentLayout) {
    FeaturedContentLayout[FeaturedContentLayout["HorizontalTitleOnly"] = 0] = "HorizontalTitleOnly";
    FeaturedContentLayout[FeaturedContentLayout["HorizontalTitleAndDescription"] = 1] = "HorizontalTitleAndDescription";
    FeaturedContentLayout[FeaturedContentLayout["Vertical"] = 2] = "Vertical";
    FeaturedContentLayout[FeaturedContentLayout["VerticalAlternating"] = 3] = "VerticalAlternating";
})(FeaturedContentLayout || (FeaturedContentLayout = {}));
var FeaturedContentFactory = /** @class */ (function () {
    function FeaturedContentFactory() {
    }
    FeaturedContentFactory.getLayout = function (layout, isAdvancedMode, webPart) {
        if (!isAdvancedMode) {
            switch (layout) {
                case FeaturedContentLayout.HorizontalTitleAndDescription: return new BasicHorizontalTitleDescriptionLayout(webPart);
                case FeaturedContentLayout.Vertical: return new BasicStackedLayout(webPart);
                case FeaturedContentLayout.VerticalAlternating: return new BasicStackedAlternatingLayout(webPart);
                default: return new BasicHorizontalTitleOnlyLayout(webPart);
            }
        }
        else {
            switch (layout) {
                case FeaturedContentLayout.HorizontalTitleAndDescription: return new AdvancedHorizontalTitleDescriptionLayout(webPart);
                case FeaturedContentLayout.Vertical: return new AdvancedStackedLayout(webPart);
                case FeaturedContentLayout.VerticalAlternating: return new AdvancedStackedAlternatingLayout(webPart);
                default: return new AdvancedHorizontalTitleOnlyLayout(webPart);
            }
        }
    };
    FeaturedContentFactory.getWidthHeightQueryStringAppendForImage = function (imageUrl) {
        if (imageUrl.indexOf(window.location.origin) > -1 && imageUrl.indexOf("?") > -1) {
            return "&width=252&height=200";
        }
        else if (imageUrl.indexOf(window.location.origin) > -1) {
            return "?width=252&height=200";
        }
        else {
            return "";
        }
    };
    return FeaturedContentFactory;
}());
export default FeaturedContentFactory;
//# sourceMappingURL=FeaturedContentFactory.js.map
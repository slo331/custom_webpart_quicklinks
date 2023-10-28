import * as React from 'react';
import { Logger } from "@pnp/logging";
import styles from './Styles.module.scss';
var AdvancedListLayout = /** @class */ (function () {
    function AdvancedListLayout(webpart) {
        this.LOG_SOURCE = "AdvancedListLayout";
        this.webpart = webpart;
    }
    Object.defineProperty(AdvancedListLayout.prototype, "webpart", {
        get: function () {
            return this._webpart;
        },
        set: function (v) {
            this._webpart = v;
        },
        enumerable: false,
        configurable: true
    });
    AdvancedListLayout.prototype.render = function (items, isEditMode) {
        var _this = this;
        try {
            return (React.createElement("ul", { className: styles["hubLinks"] + (this.webpart.props.isEdit ? " " + styles["edit"] : "") },
                items &&
                    items.map(function (item) {
                        return (React.createElement("li", null,
                            item.Icon && item.Icon.length > 0 &&
                                React.createElement("i", { className: "fas " + item.Icon + " " + styles["faIcon"], "aria-hidden": "true" }),
                            item.NewTab &&
                                React.createElement("a", { className: styles["linktitle"], href: item.URL, target: "blank", "data-interception": "off" }, item.Title),
                            !item.NewTab &&
                                React.createElement("a", { className: styles["linktitle"], href: item.URL }, item.Title),
                            _this.webpart.props.showDescription &&
                                React.createElement("p", { className: styles["linkdescription"] }, item.Description)));
                    }),
                !items && isEditMode &&
                    React.createElement("div", null, "Please configure the list mapping in the property pane of this web part.")));
        }
        catch (err) {
            Logger.write(err + " - " + this.LOG_SOURCE + " (render)", 3 /* Error */);
            return null;
        }
    };
    return AdvancedListLayout;
}());
export default AdvancedListLayout;
//# sourceMappingURL=AdvancedListLayout.js.map
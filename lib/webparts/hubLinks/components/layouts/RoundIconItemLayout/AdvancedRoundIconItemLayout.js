import * as React from 'react';
import { Logger } from "@pnp/logging";
import styles from './Styles.module.scss';
var AdvancedRoundIconItemLayoutLayout = /** @class */ (function () {
    function AdvancedRoundIconItemLayoutLayout(webpart) {
        this.LOG_SOURCE = "AdvancedRoundIconItemLayoutLayout";
        this.webpart = webpart;
    }
    Object.defineProperty(AdvancedRoundIconItemLayoutLayout.prototype, "webpart", {
        get: function () {
            return this._webpart;
        },
        set: function (v) {
            this._webpart = v;
        },
        enumerable: false,
        configurable: true
    });
    AdvancedRoundIconItemLayoutLayout.prototype.render = function (items, isEditMode) {
        try {
            return (React.createElement("ul", { className: styles["hubLinks"] + " " + styles["themed"] + (this.webpart.props.isEdit ? " " + styles["edit"] : "") },
                items &&
                    items.map(function (item) {
                        return item.NewTab ? (React.createElement("a", { href: item.URL, target: "blank", "data-interception": "off" },
                            React.createElement("li", null,
                                React.createElement("i", { className: "fas " + item.Icon + " " + styles["faIcon"], "aria-hidden": "true" }),
                                React.createElement("div", { className: styles["text"] },
                                    React.createElement("p", { className: styles["linktitle"] }, item.Title),
                                    React.createElement("p", { className: styles["linkdescription"] }, item.Description))))) : (React.createElement("a", { href: item.URL },
                            React.createElement("li", null,
                                React.createElement("i", { className: "fas " + item.Icon + " " + styles["faIcon"], "aria-hidden": "true" }),
                                React.createElement("div", { className: styles["text"] },
                                    React.createElement("p", { className: styles["linktitle"] }, item.Title),
                                    React.createElement("p", { className: styles["linkdescription"] }, item.Description)))));
                    }),
                !items && isEditMode &&
                    React.createElement("div", null, "Please configure the list mapping in the property pane of this web part.")));
        }
        catch (err) {
            Logger.write(err + " - " + this.LOG_SOURCE + " (render)", 3 /* Error */);
            return null;
        }
    };
    return AdvancedRoundIconItemLayoutLayout;
}());
export default AdvancedRoundIconItemLayoutLayout;
//# sourceMappingURL=AdvancedRoundIconItemLayout.js.map
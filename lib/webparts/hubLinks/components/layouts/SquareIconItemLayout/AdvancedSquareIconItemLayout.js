import * as React from 'react';
import { Logger } from "@pnp/logging";
import styles from './Styles.module.scss';
var AdvancedSquareIconItemLayoutLayout = /** @class */ (function () {
    function AdvancedSquareIconItemLayoutLayout(webpart) {
        this.LOG_SOURCE = "AdvancedSquareIconItemLayoutLayout";
        this.webpart = webpart;
    }
    Object.defineProperty(AdvancedSquareIconItemLayoutLayout.prototype, "webpart", {
        get: function () {
            return this._webpart;
        },
        set: function (v) {
            this._webpart = v;
        },
        enumerable: false,
        configurable: true
    });
    AdvancedSquareIconItemLayoutLayout.prototype.render = function (items, isEditMode) {
        var _this = this;
        try {
            return (React.createElement("div", { className: styles["hubLinks"] + " " + (this.webpart.props.isEdit ? " " + styles["edit"] : "") },
                items &&
                    items.map(function (item) {
                        return item.NewTab ?
                            (React.createElement("a", { href: item.URL, "data-interception": "off", target: "_blank", className: styles["tile"] + " " + styles["color-" + _this.webpart.props.textColor] + " " + styles["background-" + _this.webpart.props.backgroundColor] + " " + styles["border-" + _this.webpart.props.borderColor] },
                                React.createElement("div", { className: styles["fontawesome"] + " " + styles["icon"] },
                                    React.createElement("i", { className: "fas " + item.Icon + " fa-3x " + styles["color"] + " " + styles[_this.webpart.props.textColor] })),
                                React.createElement("div", { className: styles["shader"] }),
                                React.createElement("div", { className: styles["cell-divider"] + " " + styles[_this.webpart.props.borderColor] }),
                                React.createElement("div", { className: styles["title"] + " " + styles["color"] + " " + styles[_this.webpart.props.textColor] }, item.Title),
                                React.createElement("div", { className: styles["description"] + " " + styles["color"] + " " + styles[_this.webpart.props.textColor] }, item.Description))) :
                            (React.createElement("a", { href: item.URL, className: styles["tile"] + " " + styles["color-" + _this.webpart.props.textColor] + " " + styles["background-" + _this.webpart.props.backgroundColor] + " " + styles["border-" + _this.webpart.props.borderColor] },
                                React.createElement("div", { className: styles["fontawesome"] + " " + styles["icon"] },
                                    React.createElement("i", { className: "fas " + item.Icon + " fa-3x " + styles["color"] + " " + styles[_this.webpart.props.textColor] })),
                                React.createElement("div", { className: styles["shader"] }),
                                React.createElement("div", { className: styles["cell-divider"] + " " + styles[_this.webpart.props.borderColor] }),
                                React.createElement("div", { className: styles["title"] + " " + styles["color"] + " " + styles[_this.webpart.props.textColor] }, item.Title),
                                React.createElement("div", { className: styles["description"] + " " + styles["color"] + " " + styles[_this.webpart.props.textColor] }, item.Description)));
                    }),
                !items && isEditMode &&
                    React.createElement("div", null, "Please configure the list mapping in the property pane of this web part.")));
        }
        catch (err) {
            Logger.write(err + " - " + this.LOG_SOURCE + " (render)", 3 /* Error */);
            return null;
        }
    };
    return AdvancedSquareIconItemLayoutLayout;
}());
export default AdvancedSquareIconItemLayoutLayout;
//# sourceMappingURL=AdvancedSquareIconItemLayout.js.map
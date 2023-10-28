var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from "react";
import { Logger } from "@pnp/logging";
import isEqual from "lodash/isEqual";
import styles from './WebPartTitle.module.scss';
var WebPartTitleState = /** @class */ (function () {
    function WebPartTitleState() {
    }
    return WebPartTitleState;
}());
export { WebPartTitleState };
var WebPartTitle = /** @class */ (function (_super) {
    __extends(WebPartTitle, _super);
    function WebPartTitle(props) {
        var _this = _super.call(this, props) || this;
        _this.LOG_SOURCE = "WebPartTitle";
        _this.saveTitle = function (event) {
            event.preventDefault();
            var title = event.target.innerText;
            _this.props.updateTitle(title);
        };
        _this.state = new WebPartTitleState();
        return _this;
    }
    WebPartTitle.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
            return false;
        return true;
    };
    WebPartTitle.prototype.render = function () {
        try {
            return (React.createElement("div", { "data-component": this.LOG_SOURCE },
                React.createElement("h3", { role: "heading", "data-component": this.LOG_SOURCE, className: styles.wpheader },
                    React.createElement("div", { contentEditable: this.props.editMode, suppressContentEditableWarning: true, onBlur: this.saveTitle, dangerouslySetInnerHTML: { __html: this.props.title } }))));
        }
        catch (err) {
            Logger.write(err + " - " + this.LOG_SOURCE + " (render)", 3 /* Error */);
            return null;
        }
    };
    return WebPartTitle;
}(React.Component));
export default WebPartTitle;
//# sourceMappingURL=WebPartTitle.js.map
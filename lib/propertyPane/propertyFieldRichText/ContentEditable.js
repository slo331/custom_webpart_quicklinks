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
import * as React from 'react';
var ContentEditable = /** @class */ (function (_super) {
    __extends(ContentEditable, _super);
    function ContentEditable(props) {
        var _this = _super.call(this, props) || this;
        _this.emitChange = _this.emitChange.bind(_this);
        return _this;
    }
    ContentEditable.prototype.render = function () {
        this.htmlEl = React.createElement('div', {
            onInput: this.emitChange,
            onBlur: this.emitChange,
            contentEditable: true,
            style: this.props.style,
            id: this.props.id,
            className: this.props.className,
            dangerouslySetInnerHTML: { __html: this.props.html }
        }, this.props.children);
        return this.htmlEl;
    };
    ContentEditable.prototype.shouldComponentUpdate = function (nextProps) {
        // We need not rerender if the change of props simply reflects the user's edits.
        // Rerendering in this case would make the cursor/caret jump
        // Rerender if there is no element yet... (somehow?)
        if (!document.getElementById(this.props.id)) {
            return true;
        }
        // ...or if html really changed... (programmatically, not by user edit)
        if (nextProps.html !== document.getElementById(this.props.id).innerHTML && nextProps.html !== this.props.html) {
            return true;
        }
    };
    ContentEditable.prototype.componentDidUpdate = function () {
        if (this.state && this.props.html !== document.getElementById(this.props.id).innerHTML) {
            // Perhaps React (whose VDOM gets outdated because we often prevent
            // rerendering) did not update the DOM. So we update it manually now.
            document.getElementById(this.props.id).innerHTML = this.props.html;
        }
    };
    ContentEditable.prototype.emitChange = function (evt) {
        if (!evt.target)
            return;
        var html = evt.target.innerHTML;
        if (this.props.onChange && html !== this.lastHtml) {
            this.props.onChange(html);
        }
        this.lastHtml = html;
    };
    return ContentEditable;
}(React.Component));
export default ContentEditable;
//# sourceMappingURL=ContentEditable.js.map
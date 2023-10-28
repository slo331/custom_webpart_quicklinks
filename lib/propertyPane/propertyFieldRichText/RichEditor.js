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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import * as React from 'react';
import styles from '../PropertyFields.module.scss';
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import ContentEditable from './ContentEditable';
var RichEditor = /** @class */ (function (_super) {
    __extends(RichEditor, _super);
    function RichEditor(props) {
        var _this = _super.call(this, props) || this;
        _this.applyFormat = function (command) {
            if (command === 'createLink') {
                var url = prompt("Enter the URL:", "https://");
                document.execCommand(command, false, url);
            }
            else {
                document.execCommand(command, false, "");
            }
            var editor = document.querySelector('#rte-editor-' + _this.props.id);
            if (editor)
                editor['focus']();
        };
        _this.onChange = function (html) {
            _this.setState({ value: html });
            _this.props.onChange(html);
            _this.checkEnabledFormatting();
        };
        _this.checkEnabledFormatting = function () {
            var formatting = __spreadArrays(_this.state.formatting);
            for (var _i = 0, formatting_1 = formatting; _i < formatting_1.length; _i++) {
                var format = formatting_1[_i];
                if (format.command === "unlink" || format.command === "createLink")
                    continue;
                format.on = document.queryCommandState(format.command);
            }
            _this.setState({ formatting: formatting });
        };
        _this.state = {
            value: _this.props.value,
            hiddenDialog: true,
            link: '',
            formatting: [
                { title: "Bold", name: "Bold", command: "bold", on: false },
                { title: "Italic", name: "Italic", command: "italic", on: false },
                { title: "Underline", name: "Underline", command: "underline", on: false },
                { title: "Ordered List", name: "NumberedList", command: "insertorderedlist", on: false },
                { title: "Unordered List", name: "BulletedList", command: "insertunorderedlist", on: false },
                { title: "Indent", name: "IncreaseIndentLegacy", command: "indent", on: false },
                { title: "Outdent", name: "DecreaseIndentLegacy", command: "outdent", on: false },
                { title: "Link", name: "Link", command: "createLink", on: false },
                { title: "Unlink", name: "RemoveLink", command: "unlink", on: false },
            ]
        };
        document.addEventListener('selectionchange', function (e) {
            _this.checkEnabledFormatting();
        });
        return _this;
    }
    RichEditor.prototype.componentDidMount = function () {
        this.checkEnabledFormatting();
    };
    //use the passed in React nodes or a plain <div> if no React child nodes are defined
    RichEditor.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: styles.rte },
            this.state.formatting.map(function (format, index) {
                return (React.createElement(IconButton, { className: "rte-button" + (format.on ? " " + styles.on : ""), iconProps: { iconName: format.name }, onClick: function () { return _this.applyFormat.call(_this, format.command); }, title: format.title }));
            }),
            React.createElement(ContentEditable, { onChange: function (e) { return _this.onChange.call(_this, e); }, html: this.state.value, id: "rte-editor-" + this.props.id, className: styles["rte-editor"] })));
    };
    return RichEditor;
}(React.Component));
export default RichEditor;
//# sourceMappingURL=RichEditor.js.map
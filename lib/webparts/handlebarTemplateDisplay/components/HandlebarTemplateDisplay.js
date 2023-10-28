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
import * as strings from 'handlebarTemplateDisplayStrings';
import { Button, CommandButton } from "office-ui-fabric-react";
import * as Handlebars from 'handlebars';
import 'file-saver';
import styles from './HandlebarTemplateDisplay.module.scss';
import LinkPickerPanel from "../../../components/LinkPickerPanel/LinkPickerPanel";
import { LinkType } from "../../../components/LinkPickerPanel/ILinkPickerPanelProps";
import WebPartTitle from "../../../components/WebPartTitle/WebPartTitle";
var specialChar = "    ";
var HandlebarTemplateDisplay = /** @class */ (function (_super) {
    __extends(HandlebarTemplateDisplay, _super);
    function HandlebarTemplateDisplay(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(HandlebarTemplateDisplay.prototype, "templateExport", {
        get: function () {
            return this._templateExport;
        },
        set: function (v) {
            this._templateExport = v;
        },
        enumerable: false,
        configurable: true
    });
    HandlebarTemplateDisplay.prototype.setTitle = function (event) {
        this.props.setTitle(event.target.value);
    };
    HandlebarTemplateDisplay.prototype.openTemplateLinkPicker = function (event) {
        var _this = this;
        if (this.linkPickerPanel) {
            this.linkPickerPanel.pickLink()
                .then(function (_a) {
                var name = _a.name, url = _a.url;
                _this.props.setTemplateUrl(url, name);
            });
        }
    };
    HandlebarTemplateDisplay.prototype.openStyleLinkPicker = function (event) {
        var _this = this;
        if (this.linkPickerPanel) {
            this.linkPickerPanel.pickLink()
                .then(function (_a) {
                var name = _a.name, url = _a.url;
                _this.props.setStyleUrl(url, name);
            });
        }
    };
    HandlebarTemplateDisplay.prototype.openScriptLinkPicker = function (event) {
        var _this = this;
        if (this.linkPickerPanel) {
            this.linkPickerPanel.pickLink()
                .then(function (_a) {
                var name = _a.name, url = _a.url;
                _this.props.setScriptUrl(url, name);
            });
        }
    };
    HandlebarTemplateDisplay.prototype.copyTemplate = function (event) {
        var template = new Blob([this.templateExport], { type: "text/html;charset=utf-8" });
        window["saveAs"](template, "example.html");
    };
    HandlebarTemplateDisplay.prototype.componentDidMount = function () {
        if (this.props.jsUrl) {
            var script = document.createElement("script");
            script.src = this.props.jsUrl;
            script.async = true;
            document.body.appendChild(script);
        }
        if (this.props.cssUrl) {
            var link = document.createElement("link");
            link.href = this.props.cssUrl;
            link.rel = "stylesheet";
            link.type = "text/css";
            document.head.appendChild(link);
        }
    };
    HandlebarTemplateDisplay.prototype.render = function () {
        var _this = this;
        var template = this.props.isOptimized ? Handlebars.template(eval('(' + this.props.template + ')')) : Handlebars.compile(this.props.template);
        return (React.createElement("div", { "data-component": "HandlebarTemplateDisplay" },
            React.createElement(WebPartTitle, { editMode: this.props.isEdit, title: this.props.title, updateTitle: this.props.setTitle }),
            React.createElement("div", { className: this.props.containerClass },
                this.props.items.length > 0 && this.props.templateUrl && this.props.items.map(function (item) { return _this.templateRender(item, template); }),
                this.props.items.length > 0 && this.props.isEdit && !this.props.templateUrl && this.noTemplateRender(this.props.items[0]),
                this.props.items.length === 0 && !this.props.listIsSelected && this.renderConfigureWebPartView()),
            React.createElement(LinkPickerPanel, { className: styles["link-picker"], webPartContext: this.props.context, webAbsUrl: this.props.context.pageContext.web.absoluteUrl, linkType: LinkType.any, ref: function (ref) { _this.linkPickerPanel = ref; } })));
    };
    HandlebarTemplateDisplay.prototype.renderSeeAll = function () {
        return (React.createElement("a", { href: this.props.webUrl + '/_layouts/15/SeeAll.aspx?Page=' + this.props.serverRelativeUrl + '&InstanceId=' + this.props.instanceId, style: { float: 'right' } }, "See All"));
    };
    HandlebarTemplateDisplay.prototype.templateRender = function (item, template) {
        return (React.createElement("span", { dangerouslySetInnerHTML: { __html: template(item) } }));
    };
    HandlebarTemplateDisplay.prototype.noTemplateRender = function (item) {
        this.templateExport = this.buildExampleTemplate(item);
        var template = Handlebars.compile(this.templateExport);
        return (React.createElement("div", null,
            React.createElement("div", { style: { position: 'relative' } },
                React.createElement(Button, { iconProps: { iconName: "Download" }, style: { position: "absolute", right: '0', top: "0" }, onClick: this.copyTemplate.bind(this) }, strings.DownloadButtonText)),
            React.createElement("div", { style: { border: '1px solid #DEDEDE', marginBottom: '5px', padding: '7px' }, dangerouslySetInnerHTML: { __html: template(item) } })));
    };
    HandlebarTemplateDisplay.prototype.buildExampleTemplate = function (obj, path) {
        if (path === void 0) { path = ""; }
        var template = "";
        var separator = path ? "." : "";
        for (var _i = 0, _a = Object.getOwnPropertyNames(obj).sort(); _i < _a.length; _i++) {
            var key = _a[_i];
            var o = obj[key];
            if (key.indexOf(".") !== key.length - 1) {
                if (o && typeof o === 'object') {
                    template += this.getLeadingTab(path) + '<div style="margin-left:10px;">';
                    template += '\n' + this.getLeadingTab(path) + '    <span style="font-weight:bold;">';
                    template += key + ": ";
                    template += "</span>";
                    template += "\n" + this.getLeadingTab(path) + "    <span>";
                    template += this.buildExampleTemplate(o, path + separator + key);
                    template += "</span>";
                    template += "\n" + this.getLeadingTab(path) + "</div>\n";
                }
                else {
                    template += this.getLeadingTab(path) + '<div style="margin-left:10px;">';
                    template += '\n' + this.getLeadingTab(path) + '    <span style="font-weight:bold;">';
                    template += key + ": ";
                    template += "</span>";
                    template += "\n" + this.getLeadingTab(path) + '    <span style="word-wrap:break-word;">';
                    template += "{{" + path + separator + key + "}}";
                    template += "</span>";
                    template += this.getLeadingTab(path) + "\n</div>\n";
                }
            }
        }
        return template;
    };
    HandlebarTemplateDisplay.prototype.getLeadingTab = function (path) {
        var periodFinder = new RegExp(/\./g);
        var periods = periodFinder.exec(path);
        var periodCount = periods ? periods.length : 0;
        var leading = "";
        for (var i = 0; i < periodCount; i++) {
            leading += specialChar;
        }
        return leading;
    };
    HandlebarTemplateDisplay.prototype.renderConfigureWebPartView = function () {
        return (React.createElement(CommandButton, { iconProps: { iconName: "Settings" }, onClick: this.openPropertyPane.bind(this) }, strings.ConfigureWebPartButtonText));
    };
    HandlebarTemplateDisplay.prototype.openPropertyPane = function (event) {
        this.props.context.propertyPane.open();
    };
    return HandlebarTemplateDisplay;
}(React.Component));
export default HandlebarTemplateDisplay;
//# sourceMappingURL=HandlebarTemplateDisplay.js.map
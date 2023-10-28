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
import { CommandButton } from 'office-ui-fabric-react';
import { Logger } from "@pnp/logging";
import styles from './HubLinks.module.scss';
import * as strings from 'hubLinksStrings';
import { HubLinksLayout } from './layouts/HubLinksLayout';
import HubLinksFactory from './layouts/HubLinksFactory';
import LinkPickerPanel from '../../../components/LinkPickerPanel/LinkPickerPanel';
import { LinkType } from '../../../components/LinkPickerPanel/ILinkPickerPanelProps';
import ElemUtil from "../../../utilities/element/elemUtil";
import WebPartTitle from "../../../components/WebPartTitle/WebPartTitle";
var HubLinks = /** @class */ (function (_super) {
    __extends(HubLinks, _super);
    function HubLinks(props) {
        var _this = _super.call(this, props) || this;
        _this.LOG_SOURCE = "HubLinks";
        return _this;
    }
    Object.defineProperty(HubLinks.prototype, "dragElement", {
        get: function () {
            return this._dragElement;
        },
        set: function (v) {
            this._dragElement = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HubLinks.prototype, "mouseTarget", {
        get: function () {
            return this._mouseTarget;
        },
        set: function (v) {
            this._mouseTarget = v;
        },
        enumerable: false,
        configurable: true
    });
    HubLinks.prototype.mouseDragDown = function (event) {
        this.mouseTarget = event.target;
    };
    HubLinks.prototype.startDrag = function (event) {
        try {
            event.stopPropagation();
            if (event.currentTarget.querySelector('#drag-handle').contains(this.mouseTarget)) {
                this.dragElement = event.currentTarget;
                event.dataTransfer.eventAllowed = "move";
                event.dataTransfer.setData('text/plan', 'drag-handle');
            }
            else {
                event.preventDefault();
            }
        }
        catch (err) {
            Logger.write(err + " - " + this.LOG_SOURCE + " (startDrag)", 3 /* Error */);
        }
    };
    HubLinks.prototype.isbefore = function (a, b) {
        try {
            if (a.parentNode == b.parentNode) {
                for (var cur = a; cur; cur = cur.previousSibling) {
                    if (cur === b) {
                        return true;
                    }
                }
            }
        }
        catch (err) {
            Logger.write(err + " - " + this.LOG_SOURCE + " (isbefore)", 3 /* Error */);
        }
        return false;
    };
    HubLinks.prototype.endDrag = function (event) {
        try {
            var indexArr_1 = [];
            //If Grouped Layout, update GroupBy field if group has changed
            if (this.props.layoutMode == HubLinksLayout.GroupedListLayout) {
                var currentGroup = ElemUtil.closest(event.currentTarget, '[data-group]');
                var groupProp = currentGroup.getAttribute('data-group');
                if (groupProp.length > 0) {
                    var group = groupProp.split("-")[1];
                    if (group.length > 0)
                        this.props.setGroup(event.currentTarget.getAttribute('data-index'), group);
                }
            }
            var currentElements = ElemUtil.closest(event.currentTarget, '[data-reactroot]').querySelectorAll('[data-index]');
            currentElements.forEach(function (element) { indexArr_1.push(parseInt(element.getAttribute('data-index'))); });
            this.props.rearrangeItems(indexArr_1);
        }
        catch (err) {
            Logger.write(err + " - " + this.LOG_SOURCE + " (endDrag)", 3 /* Error */);
        }
    };
    HubLinks.prototype.moveItem = function (event) {
        try {
            if (this.isbefore(this.dragElement, ElemUtil.closest(event.target, '[data-index]'))) {
                ElemUtil.closest(event.target, '[data-index]').parentNode.insertBefore(this.dragElement, ElemUtil.closest(event.target, '[data-index]'));
            }
            else {
                if (!this.dragElement.contains(ElemUtil.closest(event.target, '[data-index]')))
                    ElemUtil.closest(event.target, '[data-index]').parentNode.insertBefore(this.dragElement, ElemUtil.closest(event.target, '[data-index]').nextSibling);
            }
        }
        catch (err) {
            Logger.write(err + " - " + this.LOG_SOURCE + " (moveItem)", 3 /* Error */);
        }
    };
    HubLinks.prototype.toggleGroup = function (event) {
        try {
            if (event.target.tagName === 'A')
                return;
            event.stopPropagation();
            event.preventDefault();
            var element = ElemUtil.closest(event.target, "[data-group]");
            if (element.getAttributeNode('data-expanded')) {
                element.removeAttribute('data-expanded');
            }
            else {
                element.setAttribute('data-expanded', "");
            }
        }
        catch (err) {
            Logger.write(err + " - " + this.LOG_SOURCE + " (toggleGroup)", 3 /* Error */);
        }
    };
    HubLinks.prototype.addBox = function (event) {
        this.props.editItem(-1);
    };
    HubLinks.prototype.editBox = function (event) {
        try {
            event.stopPropagation();
            event.preventDefault();
            this.props.editItem(ElemUtil.closest(event.target, '[data-index]').getAttribute("data-index"));
        }
        catch (err) {
            Logger.write(err + " - " + this.LOG_SOURCE + " (editBox)", 3 /* Error */);
        }
        return false;
    };
    HubLinks.prototype.deleteBox = function (event) {
        try {
            event.stopPropagation();
            event.preventDefault();
            if (confirm(strings.DeleteItemConfirmMessage))
                this.props.deleteItem(ElemUtil.closest(event.target, '[data-index]').getAttribute("data-index"));
        }
        catch (err) {
            Logger.write(err + " - " + this.LOG_SOURCE + " (deleteBox)", 3 /* Error */);
        }
        return false;
    };
    // Open the link picker - called from onClick of Change (link) button
    HubLinks.prototype.openLinkPicker = function (event, currentUrl) {
        var _this = this;
        if (currentUrl === void 0) { currentUrl = ""; }
        this.linkPickerPanel.pickLink(currentUrl).then(function (_a) {
            var name = _a.name, url = _a.url;
            _this.props.setUrl(url, name);
        });
    };
    HubLinks.prototype.render = function () {
        try {
            return this.props.usesListMode ? this.renderAdvancedWebPart() : this.renderBasicWebPart();
        }
        catch (err) {
            Logger.write(err + " - " + this.LOG_SOURCE + " (render)", 3 /* Error */);
            return null;
        }
    };
    HubLinks.prototype.renderBasicWebPart = function () {
        var _this = this;
        try {
            return (React.createElement("div", { "data-reactroot": true, "data-component": "HubLinks-Basic" },
                React.createElement(WebPartTitle, { editMode: this.props.isEdit, title: this.props.title, updateTitle: this.props.setTitle }),
                this.props.isEdit &&
                    React.createElement(CommandButton, { iconProps: { iconName: 'Add' }, onClick: this.addBox.bind(this) }, strings.AddNewButtonText),
                HubLinksFactory.getLayout(this.props.layoutMode, false, this).render(this.props.hubLinksItems, this.props.isEdit),
                this.props.isEdit &&
                    React.createElement(LinkPickerPanel, { webPartContext: this.props.context, className: styles["link-picker"], webAbsUrl: this.props.context.pageContext.web.absoluteUrl, linkType: LinkType.any, ref: function (ref) { _this.linkPickerPanel = ref; } })));
        }
        catch (err) {
            Logger.write(err + " - " + this.LOG_SOURCE + " (renderBasicWebPart)", 3 /* Error */);
            return null;
        }
    };
    HubLinks.prototype.renderAdvancedWebPart = function () {
        try {
            return (React.createElement("div", { "data-component": "HubLinks-Advanced" },
                React.createElement(WebPartTitle, { editMode: this.props.isEdit, title: this.props.title, updateTitle: this.props.setTitle }),
                HubLinksFactory.getLayout(this.props.layoutMode, true, this).render(this.props.links, this.props.isEdit)));
        }
        catch (err) {
            Logger.write(err + " - " + this.LOG_SOURCE + " (renderAdvancedWebPart)", 3 /* Error */);
            return null;
        }
    };
    return HubLinks;
}(React.Component));
export default HubLinks;
//# sourceMappingURL=HubLinks.js.map
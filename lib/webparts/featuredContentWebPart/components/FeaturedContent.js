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
import styles from './FeaturedContentWebPart.module.scss';
import * as strings from 'featuredContentWebPartStrings';
import FeaturedContentFactory from './layouts/FeaturedContentFactory';
import { LinkType } from "../../../components/LinkPickerPanel/ILinkPickerPanelProps";
import LinkPickerPanel from "../../../components/LinkPickerPanel/LinkPickerPanel";
import ElemUtil from "../../../utilities/element/elemUtil";
import WebPartTitle from "../../../components/WebPartTitle/WebPartTitle";
var FeaturedContent = /** @class */ (function (_super) {
    __extends(FeaturedContent, _super);
    function FeaturedContent(props) {
        var _this = _super.call(this, props) || this;
        _this.LOG_SOURCE = "FeaturedContent";
        _this.state = {
            isLinkPanelOpen: false,
            isSiteSelected: false,
            linkEntered: "",
            linkValid: false
        };
        return _this;
    }
    Object.defineProperty(FeaturedContent.prototype, "dragElement", {
        get: function () {
            return this._dragElement;
        },
        set: function (v) {
            this._dragElement = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FeaturedContent.prototype, "mouseTarget", {
        get: function () {
            return this._mouseTarget;
        },
        set: function (v) {
            this._mouseTarget = v;
        },
        enumerable: false,
        configurable: true
    });
    FeaturedContent.prototype.setTitle = function (event) {
        this.props.setTitle(event.target.value);
    };
    FeaturedContent.prototype.addBox = function (event) {
        this.setState({
            isLinkPanelOpen: false,
            isSiteSelected: true,
            linkValid: false,
            linkEntered: ""
        });
        this.props.editItem(-1);
    };
    FeaturedContent.prototype.editBox = function (event) {
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
    FeaturedContent.prototype.deleteBox = function (event) {
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
    FeaturedContent.prototype.mouseDragDown = function (event) {
        this.mouseTarget = event.target;
    };
    FeaturedContent.prototype.startDrag = function (event) {
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
    FeaturedContent.prototype.isbefore = function (a, b) {
        if (a.parentNode == b.parentNode) {
            for (var cur = a; cur; cur = cur.previousSibling) {
                if (cur === b) {
                    return true;
                }
            }
        }
        return false;
    };
    FeaturedContent.prototype.endDrag = function (event) {
        try {
            var indexArr_1 = [];
            var currentElements = ElemUtil.closest(event.currentTarget, '[data-reactroot]').querySelectorAll('[data-index]');
            currentElements.forEach(function (element) { indexArr_1.push(parseInt(element.getAttribute('data-index'))); });
            this.props.rearrangeItems(indexArr_1);
        }
        catch (err) {
            Logger.write(err + " - " + this.LOG_SOURCE + " (endDrag)", 3 /* Error */);
        }
    };
    FeaturedContent.prototype.moveItem = function (event) {
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
    FeaturedContent.prototype.render = function () {
        var body = (this.props.usesListMode) ? this.renderAdvancedWebPart() : this.renderBasicWebPart();
        // Insert retired web part message
        return (React.createElement(React.Fragment, null, body));
    };
    FeaturedContent.prototype.openLinkPicker = function (event) {
        var _this = this;
        this.linkPickerPanel.pickLink().then(function (_a) {
            var name = _a.name, url = _a.url;
            _this.props.setUrl(url, name);
        });
    };
    FeaturedContent.prototype.createNewItemFromLink = function (event) {
        this.props.resetActiveIndex();
        this.openLinkPicker(event);
    };
    FeaturedContent.prototype.renderBasicWebPart = function () {
        var _this = this;
        try {
            return (React.createElement("div", { "data-component": "FeaturedContent-Basic" },
                React.createElement(WebPartTitle, { editMode: this.props.isEdit, title: this.props.title, updateTitle: this.props.setTitle }),
                this.props.isEdit &&
                    React.createElement(CommandButton, { className: styles["new-item"], iconProps: { iconName: 'Add' }, onClick: this.addBox.bind(this) }, strings.AddNewButtonText),
                FeaturedContentFactory.getLayout(this.props.layoutMode, false, this).render(this.props.featuredContentItems, this.props.isEdit),
                this.props.isEdit &&
                    React.createElement(LinkPickerPanel, { webPartContext: this.props.context, className: styles["link-picker"], webAbsUrl: this.props.context.pageContext.web.absoluteUrl, linkType: LinkType.any, ref: function (ref) { _this.linkPickerPanel = ref; } })));
        }
        catch (err) {
            Logger.write(err + " - " + this.LOG_SOURCE + " (renderBasicWebPart)", 3 /* Error */);
        }
    };
    FeaturedContent.prototype.renderAdvancedWebPart = function () {
        try {
            return (React.createElement("div", { "data-component": "FeaturedContent-Advanced" },
                React.createElement(WebPartTitle, { editMode: this.props.isEdit, title: this.props.title, updateTitle: this.props.setTitle }),
                FeaturedContentFactory.getLayout(this.props.layoutMode, true, this).render(this.props.links, this.props.isEdit)));
        }
        catch (err) {
            Logger.write(err + " - " + this.LOG_SOURCE + " (renderAdvancedWebPart)", 3 /* Error */);
        }
    };
    return FeaturedContent;
}(React.Component));
export default FeaturedContent;
//# sourceMappingURL=FeaturedContent.js.map
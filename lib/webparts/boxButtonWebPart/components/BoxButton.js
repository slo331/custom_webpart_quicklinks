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
import { DefaultButton, CommandButton } from 'office-ui-fabric-react';
import { Logger } from "@pnp/logging";
import styles from './BoxButtonWebPart.module.scss';
import * as strings from 'boxButtonWebPartStrings';
import LinkPickerPanel from '../../../components/LinkPickerPanel/LinkPickerPanel';
import { LinkType } from '../../../components/LinkPickerPanel/ILinkPickerPanelProps';
import ElemUtil from "../../../utilities/element/elemUtil";
import { DisplayMode } from '@microsoft/sp-core-library';
import WebPartTitle from "../../../components/WebPartTitle/WebPartTitle";
var urlField = "URL";
var iconField = "Font Awesome Icon";
var isThemedField = "Has Blue Background";
var openNewTabField = "Open Link in New Tab";
var BoxButton = /** @class */ (function (_super) {
    __extends(BoxButton, _super);
    function BoxButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.LOG_SOURCE = "BoxButton";
        // ** Event handlers for link picker **
        // Open the link picker - called from onClick of Change (link) button
        _this.openLinkPicker = function (event) {
            if (_this.linkPickerPanel) {
                _this.linkPickerPanel.pickLink()
                    .then(function (_a) {
                    var name = _a.name, url = _a.url;
                    _this.props.setUrl(name, url);
                });
            }
        };
        // ** Event handlers for buttons **/
        // User clicks + button to add a link
        _this.addBox = function (event) {
            _this.props.editItem(-1);
        };
        // User clicks edit button on a link
        _this.editBox = function (event) {
            try {
                event.stopPropagation();
                event.preventDefault();
                _this.props.editItem(ElemUtil.closest(event.target, '[data-index]').getAttribute("data-index"));
            }
            catch (err) {
                Logger.write(err + " - " + _this.LOG_SOURCE + " (editBox)", 3 /* Error */);
            }
            return false;
        };
        // User clicks delete button on a link
        _this.deleteBox = function (event) {
            try {
                event.stopPropagation();
                event.preventDefault();
                if (confirm(strings.DeleteItemConfirmMessage))
                    _this.props.deleteItem(ElemUtil.closest(event.target, '[data-index]').getAttribute("data-index"));
            }
            catch (err) {
                Logger.write(err + " - " + _this.LOG_SOURCE + " (deleteBox)", 3 /* Error */);
            }
            return false;
        };
        _this.checkEventDone = function (event) {
            if (_this.eventDone) {
                _this.eventDone = false;
                return false;
            }
        };
        // Event handlers for drag and drop
        _this.mouseDragDown = function (event) {
            _this.mouseTarget = event.target;
        };
        _this.startDrag = function (event) {
            try {
                event.stopPropagation();
                if (event.currentTarget.querySelector('#drag-handle').contains(_this.mouseTarget)) {
                    _this.dragElement = event.currentTarget;
                    event.dataTransfer.eventAllowed = "move";
                    event.dataTransfer.setData('text/plan', 'drag-handle');
                }
                else {
                    event.preventDefault();
                }
            }
            catch (err) {
                Logger.write(err + " - " + _this.LOG_SOURCE + " (startDrag)", 3 /* Error */);
            }
        };
        _this.endDrag = function (event) {
            try {
                var indexArr_1 = [];
                var currentElements = ElemUtil.closest(event.currentTarget, '[data-reactroot]').querySelectorAll('[data-index]');
                currentElements.forEach(function (element) { indexArr_1.push(parseInt(element.getAttribute('data-index'))); });
                _this.props.rearrangeItems(indexArr_1);
            }
            catch (err) {
                Logger.write(err + " - " + _this.LOG_SOURCE + " (endDrag)", 3 /* Error */);
            }
        };
        _this.moveItem = function (event) {
            try {
                if (_this.isbefore(_this.dragElement, ElemUtil.closest(event.target, '[data-index]'))) {
                    ElemUtil.closest(event.target, '[data-index]').parentNode.insertBefore(_this.dragElement, ElemUtil.closest(event.target, '[data-index]'));
                }
                else {
                    if (!_this.dragElement.contains(ElemUtil.closest(event.target, '[data-index]')))
                        ElemUtil.closest(event.target, '[data-index]').parentNode.insertBefore(_this.dragElement, ElemUtil.closest(event.target, '[data-index]').nextSibling);
                }
            }
            catch (err) {
                Logger.write(err + " - " + _this.LOG_SOURCE + " (moveItem)", 3 /* Error */);
            }
        };
        return _this;
    }
    Object.defineProperty(BoxButton.prototype, "dragElement", {
        get: function () {
            return this._dragElement;
        },
        set: function (v) {
            this._dragElement = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoxButton.prototype, "mouseTarget", {
        get: function () {
            return this._mouseTarget;
        },
        set: function (v) {
            this._mouseTarget = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoxButton.prototype, "eventDone", {
        get: function () {
            return this._eventDone;
        },
        set: function (v) {
            this._eventDone = v;
        },
        enumerable: false,
        configurable: true
    });
    BoxButton.prototype.setTitle = function (event) {
        this.props.setTitle(event.target.value);
    };
    BoxButton.prototype.isbefore = function (a, b) {
        if (a.parentNode == b.parentNode) {
            for (var cur = a; cur; cur = cur.previousSibling) {
                if (cur === b) {
                    return true;
                }
            }
        }
        return false;
    };
    // ** Render functions **
    BoxButton.prototype.render = function () {
        var body = (this.props.usesListMode) ? this.renderAdvancedWebPart() : this.renderBasicWebPart();
        // Insert retired web part message
        return (React.createElement(React.Fragment, null,
            (this.props.displayMode == DisplayMode.Edit) &&
                React.createElement("div", { className: styles.editMode }, strings.RetiredMessage),
            body));
    };
    // Render the "basic" web part with editable links
    BoxButton.prototype.renderBasicWebPart = function () {
        var _this = this;
        try {
            return (React.createElement("div", { "data-component": "BoxButton-Basic" },
                React.createElement(WebPartTitle, { editMode: this.props.isEdit, title: this.props.title, updateTitle: this.props.setTitle }),
                this.props.isEdit &&
                    React.createElement(CommandButton, { className: styles["new-item"], iconProps: { iconName: 'Add' }, onClick: this.addBox.bind(this) }, strings.AddNewButtonText),
                this.props.data.length > 0 && this.props.data.map(function (item) {
                    return _this.renderBasicDefaultLayout(item);
                }),
                this.props.data.length === 0 &&
                    React.createElement("div", { className: styles["box-link"] },
                        React.createElement("div", { className: styles["empty-box"] },
                            React.createElement("div", { role: "button", onClick: this.openLinkPicker.bind(this) }, strings.PlaceholderButtonText))),
                this.props.isEdit &&
                    React.createElement(LinkPickerPanel, { webPartContext: this.props.context, className: styles["link-picker"], webAbsUrl: this.props.context.pageContext.web.absoluteUrl, linkType: LinkType.any, ref: function (ref) { _this.linkPickerPanel = ref; } })));
        }
        catch (err) {
            Logger.write(err + " - " + this.LOG_SOURCE + " (renderBasicWebPart)", 3 /* Error */);
            return null;
        }
    };
    BoxButton.prototype.renderBasicDefaultLayout = function (item) {
        try {
            return (React.createElement("div", { className: styles["box-link"], role: "link", id: "item-" + this.props.data.indexOf(item), key: "item-" + this.props.data.indexOf(item), draggable: this.props.isEdit, onDragStart: this.startDrag.bind(this), onMouseDown: this.mouseDragDown.bind(this), onDragEnter: this.moveItem.bind(this), onDragEnd: this.endDrag.bind(this), "data-index": this.props.data.indexOf(item) },
                item.openNew &&
                    React.createElement("a", { href: item.url, target: "blank", "data-interception": "off" },
                        React.createElement("div", { className: styles["box-button"] + " " + (item.isBlue ? styles["themed"] : "") + " " + (this.props.isEdit ? styles["edit"] : "") },
                            React.createElement("i", { className: item.icon ? "fa " + item.icon : "" }),
                            item.name)),
                !item.openNew &&
                    React.createElement("a", { href: item.url },
                        React.createElement("div", { className: styles["box-button"] + " " + (item.isBlue ? styles["themed"] : "") + " " + (this.props.isEdit ? styles["edit"] : "") },
                            React.createElement("i", { className: item.icon ? "fa " + item.icon : "" }),
                            item.name)),
                this.props.isEdit &&
                    React.createElement("div", { className: styles["edit-controls"] },
                        React.createElement(DefaultButton, { iconProps: { iconName: "Clear" }, onClick: this.deleteBox.bind(this) }),
                        React.createElement(DefaultButton, { iconProps: { iconName: "Edit" }, onClick: this.editBox.bind(this) }),
                        React.createElement("i", { className: "ms-Icon ms-Icon--Move", id: "drag-handle", "aria-hidden": "true" }))));
        }
        catch (err) {
            Logger.write(err + " - " + this.LOG_SOURCE + " (renderBasicDefaultLayout)", 3 /* Error */);
            return null;
        }
    };
    // Render the "advanced" web part, which is list-driven
    BoxButton.prototype.renderAdvancedWebPart = function () {
        var _this = this;
        try {
            return (React.createElement("div", { "data-component": "BoxButton-Advanced" },
                React.createElement(WebPartTitle, { editMode: this.props.isEdit, title: this.props.title, updateTitle: this.props.setTitle }),
                this.props.links.length > 0 && this.props.links.map(function (item) {
                    return _this.renderAdvancedDefaultLayout(item);
                })));
        }
        catch (err) {
            Logger.write(err + " - " + this.LOG_SOURCE + " (renderAdvancedWebPart)", 3 /* Error */);
            return null;
        }
    };
    BoxButton.prototype.renderAdvancedDefaultLayout = function (item) {
        try {
            return (React.createElement("div", { className: styles["box-link"], role: "link", key: "item-" + this.props.links.indexOf(item) },
                item[openNewTabField] &&
                    React.createElement("a", { href: item[urlField], target: "blank", "data-interception": "off" },
                        React.createElement("div", { className: styles["box-button"] + " " + (item[isThemedField] ? styles["themed"] : "") },
                            React.createElement("i", { className: item[iconField] ? "fa " + item[iconField] : "" }),
                            item[urlField + "_text"])),
                !item[openNewTabField] &&
                    React.createElement("a", { href: item[urlField] },
                        React.createElement("div", { className: styles["box-button"] + " " + (item[isThemedField] ? styles["themed"] : "") },
                            React.createElement("i", { className: item[iconField] ? "fa " + item[iconField] : "" }),
                            item[urlField + "_text"]))));
        }
        catch (err) {
            Logger.write(err + " - " + this.LOG_SOURCE + " (renderAdvancedDefaultLayout)", 3 /* Error */);
            return null;
        }
    };
    return BoxButton;
}(React.Component));
export default BoxButton;
//# sourceMappingURL=BoxButton.js.map
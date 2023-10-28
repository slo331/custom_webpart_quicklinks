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
import * as strings from 'propertyFieldStrings';
import RichEditor from './RichEditor';
import styles from "../PropertyFields.module.scss";
import { IconButton, PrimaryButton, Dialog, DialogType, DialogFooter, Pivot, PivotItem, DefaultButton } from 'office-ui-fabric-react';
var PropertyFieldRichTextHost = /** @class */ (function (_super) {
    __extends(PropertyFieldRichTextHost, _super);
    function PropertyFieldRichTextHost(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            value: _this.props.currentValue ? _this.props.currentValue : "",
            modalValue: "",
            openModal: false,
            editHtml: false,
            selectedPivotKey: "0",
            modalHtml: ""
        };
        return _this;
    }
    PropertyFieldRichTextHost.prototype.componentWillReceiveProps = function (nextProps) {
        this.setState({ value: nextProps.currentValue });
    };
    PropertyFieldRichTextHost.prototype.onChange = function (value) {
        this.props.onChange(value);
        this.setState({ value: value });
    };
    PropertyFieldRichTextHost.prototype.openModal = function () {
        this.setState({
            openModal: true,
            modalValue: this.state.value,
            modalHtml: this.state.value
        });
    };
    PropertyFieldRichTextHost.prototype.saveCloseModal = function () {
        if (this.state.selectedPivotKey === "0") {
            this.setState({ value: this.state.modalValue });
        }
        else {
            this.setState({ value: this.state.modalHtml });
        }
        this.closeModal();
        this.props.onChange(this.state.value);
    };
    PropertyFieldRichTextHost.prototype.closeModal = function () {
        this.setState({
            openModal: false,
            modalHtml: "",
            selectedPivotKey: "0",
            modalValue: ""
        });
    };
    PropertyFieldRichTextHost.prototype.confirmCloseModal = function () {
        if (confirm("Do you want to save your changes to the Body before closing the modal?")) {
            this.saveCloseModal();
        }
        else {
            this.closeModal();
        }
    };
    PropertyFieldRichTextHost.prototype.dialogPivotChanged = function (item) {
        if (item.props.itemKey === "0") {
            this.setState({ modalValue: this.state.modalHtml });
        }
        else {
            this.setState({ modalHtml: this.state.modalValue });
        }
        this.setState({ selectedPivotKey: item.props.itemKey });
    };
    PropertyFieldRichTextHost.prototype.onModalHtmlEditorChange = function (event) {
        this.setState({ modalHtml: event.target.value });
    };
    PropertyFieldRichTextHost.prototype.onModalRTEditorChange = function (value) {
        this.setState({ modalValue: value });
        this.setState({ modalHtml: value });
    };
    PropertyFieldRichTextHost.prototype.render = function () {
        return (React.createElement("div", { className: styles["custom-rte"], "data-prop": this.props.label },
            React.createElement("label", { className: "title-label" }, this.props.label),
            true && //Discuss feature with Dave F. (modal flyout of editor)
                React.createElement(IconButton, { className: styles["expand-button"], title: strings.OpenModalTitle, onClick: this.openModal.bind(this), ariaDescription: strings.OpenModalTitle, iconProps: { iconName: "FullScreen" } }),
            true && //Discuss feature with Dave F. (modal flyout of editor)
                React.createElement(Dialog, { isOpen: this.state.openModal, className: styles["modal-rte"], onDismiss: this.confirmCloseModal.bind(this), isBlocking: true, isDarkOverlay: true, containerClassName: styles["custom-rte"], type: DialogType.close },
                    React.createElement(Pivot, { onLinkClick: this.dialogPivotChanged.bind(this), selectedKey: this.state.selectedPivotKey },
                        React.createElement(PivotItem, { linkText: strings.RichTextModalRTEPivotLabel, itemKey: "0" },
                            React.createElement(RichEditor, { onChange: this.onModalRTEditorChange.bind(this), value: this.state.modalValue, id: "modal" })),
                        React.createElement(PivotItem, { linkText: strings.RichTextModalHTMLPivotLabel, itemKey: "1" },
                            React.createElement("textarea", { id: "rte-html-editor", className: styles["modal-rte-html"], value: this.state.modalHtml, onChange: this.onModalHtmlEditorChange.bind(this) }))),
                    React.createElement(DialogFooter, null,
                        React.createElement(PrimaryButton, { onClick: this.saveCloseModal.bind(this), text: strings.RichTextModalSaveText }),
                        React.createElement(DefaultButton, { onClick: this.closeModal.bind(this), text: strings.RichTextModalCancelText }))),
            React.createElement(RichEditor, { onChange: this.onChange.bind(this), value: this.props.currentValue, id: "default" })));
    };
    return PropertyFieldRichTextHost;
}(React.Component));
export default PropertyFieldRichTextHost;
//# sourceMappingURL=PropertyFieldRichTextHost.js.map
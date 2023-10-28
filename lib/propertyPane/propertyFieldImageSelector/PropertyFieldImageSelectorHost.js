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
import { PrimaryButton, ChoiceGroup } from 'office-ui-fabric-react';
import { ImageDisplayType } from './PropertyFieldImageSelector';
import * as strings from 'propertyFieldStrings';
import styles from "../PropertyFields.module.scss";
import { LinkType } from "../../components/LinkPickerPanel/ILinkPickerPanelProps";
import LinkPickerPanel from "../../components/LinkPickerPanel/LinkPickerPanel";
var PropertyFieldImageSelectorHost = /** @class */ (function (_super) {
    __extends(PropertyFieldImageSelectorHost, _super);
    function PropertyFieldImageSelectorHost(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            imageMode: _this.props.imageMode ? _this.props.imageMode : ImageDisplayType.Custom,
        };
        return _this;
    }
    PropertyFieldImageSelectorHost.prototype.getIcon = function (imageMode) {
        switch (ImageDisplayType[imageMode]) {
            case ImageDisplayType.Auto: return "Photo2";
            case ImageDisplayType.Custom: return "Photo2Add";
        }
    };
    PropertyFieldImageSelectorHost.prototype.getChoiceLabelText = function (imageMode) {
        switch (ImageDisplayType[imageMode]) {
            case ImageDisplayType.Auto: return strings.ImageSelectorTypeAuto;
            case ImageDisplayType.Custom: return strings.ImageSelectorTypeCustom;
        }
    };
    PropertyFieldImageSelectorHost.prototype.changeImageType = function (ev, option) {
        this.props.changeImageMode(Number(option.key));
        this.setState({ imageMode: Number(option.key) });
    };
    PropertyFieldImageSelectorHost.prototype.getPropertyByString = function (o, s) {
        s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
        s = s.replace(/^\./, ''); // strip a leading dot
        var a = s.split('.');
        for (var i = 0, n = a.length; i < n; ++i) {
            var k = a[i];
            if (k in o) {
                o = o[k];
            }
            else {
                return;
            }
        }
        return o;
    };
    PropertyFieldImageSelectorHost.prototype.openLinkPicker = function (event) {
        var _this = this;
        this.linkPickerPanel.pickLink().then(function (_a) {
            var name = _a.name, url = _a.url;
            _this.props.changeImage(url, name);
            _this.render();
        });
    };
    PropertyFieldImageSelectorHost.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: styles["image-selector"] },
            React.createElement(ChoiceGroup, { className: styles["root"], onChange: this.changeImageType.bind(this), selectedKey: this.state.imageMode.toString(), options: [
                    {
                        key: ImageDisplayType.Auto.toString(),
                        iconProps: { iconName: 'Photo2' },
                        text: strings.ImageSelectorTypeAuto
                    },
                    {
                        key: ImageDisplayType.Custom.toString(),
                        iconProps: { iconName: 'Photo2Add' },
                        text: strings.ImageSelectorTypeCustom
                    }
                ] }),
            React.createElement("div", { className: styles["preview"] },
                React.createElement("label", { className: "title-label" }, this.props.label),
                (this.state.imageMode != ImageDisplayType.Auto || this.getPropertyByString(this.props.properties.properties, this.props.targetProperty)) &&
                    React.createElement("img", { src: this.getPropertyByString(this.props.properties.properties, this.props.targetProperty), role: "presentation", width: "150px", height: "119px", alt: "" }),
                this.state.imageMode == ImageDisplayType.Auto && !this.getPropertyByString(this.props.properties.properties, this.props.targetProperty) &&
                    React.createElement("div", null, strings.NoPreviewText),
                React.createElement(PrimaryButton, { hidden: this.state.imageMode == ImageDisplayType.Auto, onClick: this.openLinkPicker.bind(this) }, strings.ChangeImageButtonText)),
            React.createElement(LinkPickerPanel, { webPartContext: this.props.context, className: styles["link-picker"], webAbsUrl: this.props.context.pageContext.web.absoluteUrl, linkType: LinkType.image | LinkType.folder, ref: function (ref) { _this.linkPickerPanel = ref; } })));
    };
    return PropertyFieldImageSelectorHost;
}(React.Component));
export default PropertyFieldImageSelectorHost;
//# sourceMappingURL=PropertyFieldImageSelectorHost.js.map
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { PropertyPaneFieldType } from "@microsoft/sp-property-pane";
import PropertyFieldImageSelectorHost from './PropertyFieldImageSelectorHost';
var PropertyFieldImageSelectorBuilder = /** @class */ (function () {
    function PropertyFieldImageSelectorBuilder(_targetProperty, _properties) {
        this.type = PropertyPaneFieldType.Custom;
        this.render = this.render.bind(this);
        this.targetProperty = _targetProperty;
        this.properties = _properties;
        this.context = _properties.context;
        this.properties.onRender = this.render;
        this.label = _properties.label;
        this.key = _properties.key;
        this.changeImage = _properties.changeImage;
        this.changeImageMode = _properties.changeImageMode;
        this.imageMode = _properties.imageMode;
    }
    PropertyFieldImageSelectorBuilder.prototype.render = function (elem) {
        var element = React.createElement(PropertyFieldImageSelectorHost, {
            onRender: this.render,
            properties: this.properties,
            context: this.context,
            targetProperty: this.targetProperty,
            label: this.label,
            key: this.key,
            changeImage: this.changeImage,
            changeImageMode: this.changeImageMode,
            imageMode: this.imageMode
        });
        ReactDom.render(element, elem);
    };
    return PropertyFieldImageSelectorBuilder;
}());
export function PropertyPaneImageSelector(targetProperty, properties) {
    var newProperties = {
        onRender: null,
        properties: properties.properties,
        context: properties.context,
        targetProperty: targetProperty,
        label: properties.label,
        key: properties.key,
        changeImage: properties.changeImage,
        changeImageMode: properties.changeImageMode,
        imageMode: properties.imageMode
    };
    return new PropertyFieldImageSelectorBuilder(targetProperty, newProperties);
}
export var ImageDisplayType;
(function (ImageDisplayType) {
    ImageDisplayType[ImageDisplayType["Auto"] = 0] = "Auto";
    ImageDisplayType[ImageDisplayType["Custom"] = 1] = "Custom";
})(ImageDisplayType || (ImageDisplayType = {}));
//# sourceMappingURL=PropertyFieldImageSelector.js.map
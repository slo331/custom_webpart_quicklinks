import * as React from 'react';
import * as ReactDom from 'react-dom';
import { PropertyPaneFieldType } from "@microsoft/sp-property-pane";
import PropertyFieldRichTextHost from './PropertyFieldRichTextHost';
var PropertyFieldRichTextBuilder = /** @class */ (function () {
    function PropertyFieldRichTextBuilder(_targetProperty, _properties) {
        this.type = PropertyPaneFieldType.Custom;
        this.render = this.render.bind(this);
        this.targetProperty = _targetProperty;
        this.properties = _properties;
        this.properties.onRender = this.render;
        this.label = _properties.label;
        this.key = _properties.key;
        this.onChange = _properties.onChange;
    }
    PropertyFieldRichTextBuilder.prototype.render = function (elem) {
        var element = React.createElement(PropertyFieldRichTextHost, {
            onRender: this.render,
            currentValue: this.getPropertyByString(this.properties.properties, this.targetProperty).toString(),
            label: this.label,
            onChange: this.onChange.bind(this)
        });
        ReactDom.render(element, elem);
    };
    PropertyFieldRichTextBuilder.prototype.getPropertyByString = function (o, s) {
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
    return PropertyFieldRichTextBuilder;
}());
export function PropertyPaneRichText(targetProperty, properties) {
    var newProperties = {
        onRender: null,
        properties: properties.properties,
        label: properties.label,
        key: "richText",
        onChange: properties.onChange
    };
    return new PropertyFieldRichTextBuilder(targetProperty, newProperties);
}
//# sourceMappingURL=PropertyFieldRichText.js.map
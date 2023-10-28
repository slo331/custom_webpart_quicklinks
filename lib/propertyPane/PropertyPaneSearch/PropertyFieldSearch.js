import * as React from 'react';
import * as ReactDom from 'react-dom';
import { PropertyPaneFieldType } from "@microsoft/sp-property-pane";
import PropertyFieldSearchHost from './PropertyFieldSearchHost';
var PropertyFieldSearchBuilder = /** @class */ (function () {
    function PropertyFieldSearchBuilder(_targetProperty, _properties) {
        this.type = PropertyPaneFieldType.Custom;
        this.render = this.render.bind(this);
        this.targetProperty = _targetProperty;
        this.properties = _properties;
        this.properties.onRender = this.render;
        this.properties.key = _properties.key;
    }
    PropertyFieldSearchBuilder.prototype.render = function (elem) {
        var element = React.createElement(PropertyFieldSearchHost, {
            onRender: this.render,
            render: this.properties.render,
            onPropertyChange: this.properties.onPropertyChange,
            properties: this.properties,
            targetProperty: this.targetProperty,
            key: this.key
        });
        ReactDom.render(element, elem);
    };
    return PropertyFieldSearchBuilder;
}());
export function PropertyPaneSearch(targetProperty, properties) {
    var newProperties = {
        onRender: null,
        properties: properties.properties,
        targetProperty: targetProperty,
        onPropertyChange: properties.onPropertyChange,
        render: properties.render,
        key: properties.key
    };
    return new PropertyFieldSearchBuilder(targetProperty, newProperties);
}
//# sourceMappingURL=PropertyFieldSearch.js.map
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { PropertyPaneFieldType } from "@microsoft/sp-property-pane";
import PropertyFieldGroupSortHost from './PropertyFieldGroupSortHost';
var PropertyFieldGroupSortBuilder = /** @class */ (function () {
    function PropertyFieldGroupSortBuilder(_targetProperty, _properties) {
        this.type = PropertyPaneFieldType.Custom;
        this.disabled = false;
        this.deferredValidationTime = 200;
        this.disableReactivePropertyChanges = false;
        this.render = this.render.bind(this);
        this.targetProperty = _properties.targetProperty;
        this.properties = _properties;
        this.label = _properties.label;
        this.initialValue = _properties.initialValue;
        this.properties.onDispose = this.dispose;
        this.properties.onRender = this.render;
        this.onPropertyChange = _properties.onPropertyChange;
        this.customProperties = _properties.properties;
        this.key = _properties.key;
        if (_properties.disabled === true)
            this.disabled = _properties.disabled;
        this.onGetErrorMessage = _properties.onGetErrorMessage;
        if (_properties.deferredValidationTime !== undefined)
            this.deferredValidationTime = _properties.deferredValidationTime;
        this.placeHolder = _properties.placeHolder;
        this.renderWebPart = _properties.render;
        if (_properties.disableReactivePropertyChanges !== undefined && _properties.disableReactivePropertyChanges != null)
            this.disableReactivePropertyChanges = _properties.disableReactivePropertyChanges;
    }
    PropertyFieldGroupSortBuilder.prototype.render = function (elem) {
        var element = React.createElement(PropertyFieldGroupSortHost, {
            label: this.label,
            initialValue: this.initialValue,
            placeHolder: this.placeHolder,
            targetProperty: this.targetProperty,
            onDispose: this.dispose,
            onRender: this.render,
            onPropertyChange: this.onPropertyChange,
            properties: this.customProperties,
            key: this.key,
            disabled: this.disabled,
            onGetErrorMessage: this.onGetErrorMessage,
            deferredValidationTime: this.deferredValidationTime,
            render: this.renderWebPart,
            disableReactivePropertyChanges: this.disableReactivePropertyChanges
        });
        ReactDom.render(element, elem);
    };
    PropertyFieldGroupSortBuilder.prototype.dispose = function (elem) {
    };
    return PropertyFieldGroupSortBuilder;
}());
export function PropertyPaneGroupSort(targetProperty, properties) {
    var newProperties = {
        label: properties.label,
        targetProperty: targetProperty,
        placeHolder: properties.placeHolder,
        initialValue: properties.initialValue,
        onPropertyChange: properties.onPropertyChange,
        properties: properties.properties,
        onDispose: null,
        onRender: null,
        key: properties.key,
        disabled: properties.disabled,
        onGetErrorMessage: properties.onGetErrorMessage,
        deferredValidationTime: properties.deferredValidationTime,
        render: properties.render,
        disableReactivePropertyChanges: properties.disableReactivePropertyChanges
    };
    return new PropertyFieldGroupSortBuilder(targetProperty, newProperties);
}
//# sourceMappingURL=PropertyFieldGroupSort.js.map
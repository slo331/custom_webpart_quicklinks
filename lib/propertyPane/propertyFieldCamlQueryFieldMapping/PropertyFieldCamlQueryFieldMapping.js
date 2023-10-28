/**
 * @file PropertyFieldCamlQueryFieldMapping.ts
 * Define a custom field of type PropertyFieldCamlQueryFieldMapping for
 * the SharePoint Framework (SPfx)
 *
 * @copyright 2017 Shire
 * Released under MIT licence
 *
 * Uses the PropertyFieldCamlQuery by Olivier Carpentier
 *
 */
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { PropertyPaneFieldType } from "@microsoft/sp-property-pane";
import PropertyFieldCamlQueryFieldMappingHost from './PropertyFieldCamlQueryFieldMappingHost';
export var PropertyFieldCamlQueryOrderBy;
(function (PropertyFieldCamlQueryOrderBy) {
    PropertyFieldCamlQueryOrderBy[PropertyFieldCamlQueryOrderBy["Id"] = 0] = "Id";
    PropertyFieldCamlQueryOrderBy[PropertyFieldCamlQueryOrderBy["Title"] = 1] = "Title";
})(PropertyFieldCamlQueryOrderBy || (PropertyFieldCamlQueryOrderBy = {}));
export var SPFieldRequiredLevel;
(function (SPFieldRequiredLevel) {
    SPFieldRequiredLevel[SPFieldRequiredLevel["Required"] = 0] = "Required";
    SPFieldRequiredLevel[SPFieldRequiredLevel["Optional"] = 1] = "Optional";
})(SPFieldRequiredLevel || (SPFieldRequiredLevel = {}));
export var SPFieldType;
(function (SPFieldType) {
    SPFieldType[SPFieldType["Boolean"] = 0] = "Boolean";
    SPFieldType[SPFieldType["Choice"] = 1] = "Choice";
    SPFieldType[SPFieldType["Counter"] = 2] = "Counter";
    SPFieldType[SPFieldType["Date"] = 3] = "Date";
    SPFieldType[SPFieldType["DateTime"] = 4] = "DateTime";
    SPFieldType[SPFieldType["Integer"] = 5] = "Integer";
    SPFieldType[SPFieldType["Lookup"] = 6] = "Lookup";
    SPFieldType[SPFieldType["Number"] = 7] = "Number";
    SPFieldType[SPFieldType["Text"] = 8] = "Text";
    SPFieldType[SPFieldType["URL"] = 9] = "URL";
    SPFieldType[SPFieldType["User"] = 10] = "User";
    SPFieldType[SPFieldType["Taxonomy"] = 11] = "Taxonomy";
})(SPFieldType || (SPFieldType = {}));
export var SortDirection;
(function (SortDirection) {
    SortDirection[SortDirection["Ascending"] = 0] = "Ascending";
    SortDirection[SortDirection["Descending"] = 1] = "Descending";
})(SortDirection || (SortDirection = {}));
/**
 * @interface
 * Represents a PropertyFieldCamlQuery object
 *
 */
var PropertyFieldCamlQueryBuilder = /** @class */ (function () {
    /**
     * @function
     * Ctor
     */
    function PropertyFieldCamlQueryBuilder(_targetProperty, _properties) {
        var _this = this;
        //Properties defined by IPropertyPaneField
        this.type = PropertyPaneFieldType.Custom;
        this.renderWebpart = function () { _this.properties.render(); };
        this.disabled = false;
        this.deferredValidationTime = 200;
        this.render = this.render.bind(this);
        this.targetProperty = _targetProperty;
        this.properties = _properties;
        this.properties.onDispose = this.dispose;
        this.properties.onRender = this.render;
        this.label = _properties.label;
        this.context = _properties.context;
        this.dataPropertyPath = _properties.dataPropertyPath;
        this.query = _properties.query;
        this.baseTemplate = _properties.baseTemplate;
        this.orderBy = _properties.orderBy;
        this.includeHidden = _properties.includeHidden;
        this.showOrderBy = _properties.showOrderBy;
        this.showMax = _properties.showMax;
        this.showFilters = _properties.showFilters;
        this.showCreate = _properties.showCreate;
        this.fieldMappings = _properties.fieldMappings;
        this.createFields = _properties.createFields;
        this.createTitleRequired = _properties.createTitleRequired;
        this.max = _properties.max;
        this.onPropertyChange = _properties.onPropertyChange;
        this.customProperties = _properties.properties;
        this.key = _properties.key;
        if (_properties.disabled === true)
            this.disabled = _properties.disabled;
        this.onGetErrorMessage = _properties.onGetErrorMessage;
        if (_properties.deferredValidationTime !== undefined)
            this.deferredValidationTime = _properties.deferredValidationTime;
    }
    PropertyFieldCamlQueryBuilder.prototype.onPropertyChange = function (propertyPath, oldValue, newValue) { };
    /**
     * @function
     * Renders the SPListPicker field content
     */
    PropertyFieldCamlQueryBuilder.prototype.render = function (elem) {
        //Construct the JSX properties
        var element = React.createElement(PropertyFieldCamlQueryFieldMappingHost, {
            label: this.label,
            targetProperty: this.targetProperty,
            context: this.context,
            query: this.query,
            dataPropertyPath: this.dataPropertyPath,
            baseTemplate: this.baseTemplate,
            orderBy: this.orderBy,
            includeHidden: this.includeHidden,
            showOrderBy: this.showOrderBy,
            showMax: this.showMax,
            showFilters: this.showFilters,
            showCreate: this.showCreate,
            fieldMappings: this.fieldMappings,
            createFields: this.createFields,
            createTitleRequired: this.createTitleRequired,
            max: this.max,
            onDispose: this.dispose,
            onRender: this.render,
            onPropertyChange: this.onPropertyChange,
            properties: this.customProperties,
            key: this.key,
            disabled: this.disabled,
            onGetErrorMessage: this.onGetErrorMessage,
            deferredValidationTime: this.deferredValidationTime,
            render: this.renderWebpart
        });
        //Calls the REACT content generator
        ReactDom.render(element, elem);
    };
    /**
     * @function
     * Disposes the current object
     */
    PropertyFieldCamlQueryBuilder.prototype.dispose = function (elem) {
    };
    return PropertyFieldCamlQueryBuilder;
}());
/**
 * @function
 * Helper method to create a SPList Picker on the PropertyPane.
 * @param targetProperty - Target property the SharePoint list picker is associated to.
 * @param properties - Strongly typed SPList Picker properties.
 */
export function PropertyFieldCamlQueryFieldMapping(targetProperty, properties) {
    //Create an internal properties object from the given properties
    var newProperties = {
        label: properties.label,
        targetProperty: targetProperty,
        context: properties.context,
        query: properties.query,
        dataPropertyPath: properties.dataPropertyPath,
        baseTemplate: properties.baseTemplate,
        orderBy: properties.orderBy,
        includeHidden: properties.includeHidden,
        showOrderBy: properties.showOrderBy,
        showMax: properties.showMax,
        showFilters: properties.showFilters,
        showCreate: properties.showCreate,
        fieldMappings: properties.fieldMappings,
        createFields: properties.createFields,
        createTitleRequired: properties.createTitleRequired,
        render: properties.render,
        max: properties.max,
        onPropertyChange: properties.onPropertyChange,
        properties: properties.properties,
        onDispose: null,
        onRender: null,
        key: properties.key,
        disabled: properties.disabled,
        onGetErrorMessage: properties.onGetErrorMessage,
        deferredValidationTime: properties.deferredValidationTime
    };
    //Calls the PropertyFieldCamlQuery builder object
    //This object will simulate a PropertyFieldCustom to manage his rendering process
    return new PropertyFieldCamlQueryBuilder(targetProperty, newProperties);
}
//# sourceMappingURL=PropertyFieldCamlQueryFieldMapping.js.map
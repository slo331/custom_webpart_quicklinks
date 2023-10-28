import { IPropertyPaneField } from "@microsoft/sp-property-pane";
import { IWebPartContext } from '@microsoft/sp-webpart-base';
export declare enum PropertyFieldCamlQueryOrderBy {
    Id = 0,
    Title = 1
}
export declare enum SPFieldRequiredLevel {
    Required = 0,
    Optional = 1
}
export interface IList {
    title?: string;
    id?: string;
    isDocLib?: boolean;
}
export interface ISort {
    title?: string;
    direction?: SortDirection;
}
export interface IField {
    name: string;
    internalName: string;
    kind: SPFieldType;
}
export interface IMapping {
    name?: string;
    type?: SPFieldType;
    mappedTo?: string;
    enabled?: boolean;
    requiredLevel?: SPFieldRequiredLevel;
    field?: string;
}
export declare enum SPFieldType {
    Boolean = 0,
    Choice = 1,
    Counter = 2,
    Date = 3,
    DateTime = 4,
    Integer = 5,
    Lookup = 6,
    Number = 7,
    Text = 8,
    URL = 9,
    User = 10,
    Taxonomy = 11
}
export declare enum SortDirection {
    Ascending = 0,
    Descending = 1
}
/**
 * @interface
 * Public properties of the PropertyFieldCamlQuery custom field
 *
 */
export interface IPropertyFieldCamlQueryFieldMappingProps {
    /**
     * @var
     * Property field label displayed on top
     */
    label: string;
    context: IWebPartContext;
    dataPropertyPath: string;
    query: string;
    baseTemplate?: number;
    includeHidden?: boolean;
    orderBy?: PropertyFieldCamlQueryOrderBy;
    showOrderBy?: boolean;
    showMax?: boolean;
    showFilters?: boolean;
    showCreate?: boolean;
    fieldMappings: IMapping[];
    createFields?: string[];
    createTitleRequired?: boolean;
    render(): void;
    max?: number;
    /**
     * @function
     * Defines a onPropertyChange function to raise when the selected value changed.
     * Normally this function must be always defined with the 'this.onPropertyChange'
     * method of the web part object.
     */
    onPropertyChange(propertyPath: string, oldValue: any, newValue: any): void;
    /**
   * @var
   * Parent Web Part properties
   */
    properties: any;
    /**
     * @var
     * An UNIQUE key indicates the identity of this control
     */
    key?: string;
    /**
     * Whether the property pane field is enabled or not.
     */
    disabled?: boolean;
    /**
     * The method is used to get the validation error message and determine whether the input value is valid or not.
     *
     *   When it returns string:
     *   - If valid, it returns empty string.
     *   - If invalid, it returns the error message string and the text field will
     *     show a red border and show an error message below the text field.
     *
     *   When it returns Promise<string>:
     *   - The resolved value is display as error message.
     *   - The rejected, the value is thrown away.
     *
     */
    onGetErrorMessage?: (value: string) => string | Promise<string>;
    /**
     * Custom Field will start to validate after users stop typing for `deferredValidationTime` milliseconds.
     * Default value is 200.
     */
    deferredValidationTime?: number;
}
/**
 * @interface
 * Private properties of the PropertyFieldCamlQuery custom field.
 * We separate public & private properties to include onRender & onDispose method waited
 * by the PropertyFieldCustom, witout asking to the developer to add it when he's using
 * the PropertyFieldCamlQuery.
 *
 */
export interface IPropertyFieldCamlQueryFieldMappingPropsInternal extends IPropertyFieldCamlQueryFieldMappingProps {
    label: string;
    targetProperty: string;
    context: IWebPartContext;
    query: string;
    dataPropertyPath: string;
    baseTemplate?: number;
    orderBy?: PropertyFieldCamlQueryOrderBy;
    includeHidden?: boolean;
    showOrderBy?: boolean;
    showMax?: boolean;
    showFilters?: boolean;
    showCreate?: boolean;
    fieldMappings: IMapping[];
    createFields?: string[];
    createTitleRequired?: boolean;
    render(): void;
    max?: number;
    onRender(elem: HTMLElement): void;
    onDispose(elem: HTMLElement): void;
    onPropertyChange(propertyPath: string, oldValue: any, newValue: any): void;
    properties: any;
    key: string;
    disabled?: boolean;
    onGetErrorMessage?: (value: string) => string | Promise<string>;
    deferredValidationTime?: number;
}
/**
 * @function
 * Helper method to create a SPList Picker on the PropertyPane.
 * @param targetProperty - Target property the SharePoint list picker is associated to.
 * @param properties - Strongly typed SPList Picker properties.
 */
export declare function PropertyFieldCamlQueryFieldMapping(targetProperty: string, properties: IPropertyFieldCamlQueryFieldMappingProps): IPropertyPaneField<IPropertyFieldCamlQueryFieldMappingPropsInternal>;
//# sourceMappingURL=PropertyFieldCamlQueryFieldMapping.d.ts.map
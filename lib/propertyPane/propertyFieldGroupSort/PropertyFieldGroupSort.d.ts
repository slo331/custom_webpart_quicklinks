import { IPropertyPaneField } from "@microsoft/sp-property-pane";
export interface IPropertyFieldGroupSortProps {
    label: string;
    initialValue?: string[];
    placeHolder?: string;
    onPropertyChange(propertyPath: string, oldValue: any, newValue: any): void;
    render(): void;
    disableReactivePropertyChanges?: boolean;
    properties?: any;
    key?: string;
    disabled?: boolean;
    onGetErrorMessage?: (value: string) => string | Promise<string>;
    deferredValidationTime?: number;
}
export interface IPropertyFieldGroupSortPropsInternal extends IPropertyFieldGroupSortProps {
    label: string;
    initialValue?: string[];
    placeHolder?: string;
    targetProperty: string;
    onRender(elem: HTMLElement): void;
    onDispose(elem: HTMLElement): void;
    onPropertyChange(propertyPath: string, oldValue: any, newValue: any): void;
    render(): void;
    disableReactivePropertyChanges?: boolean;
    properties: any;
    disabled?: boolean;
    onGetErrorMessage?: (value: string) => string | Promise<string>;
    deferredValidationTime?: number;
}
export declare function PropertyPaneGroupSort(targetProperty: string, properties: IPropertyFieldGroupSortProps): IPropertyPaneField<IPropertyFieldGroupSortPropsInternal>;
//# sourceMappingURL=PropertyFieldGroupSort.d.ts.map
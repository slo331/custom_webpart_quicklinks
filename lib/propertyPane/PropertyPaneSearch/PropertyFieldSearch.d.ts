import { IPropertyPaneField } from "@microsoft/sp-property-pane";
export interface IPropertyFieldSearchProps {
    properties?: any;
    onPropertyChange(property: string, oldValue: any, newValue: any): void;
    render: () => void;
    key?: string;
}
export interface IPropertyFieldSearchPropsInternal extends IPropertyFieldSearchProps {
    onRender(elem: HTMLElement): void;
    onPropertyChange(property: string, oldValue: any, newValue: any): void;
    render: () => void;
    targetProperty: string;
    key?: string;
}
export declare function PropertyPaneSearch(targetProperty: string, properties: IPropertyFieldSearchProps): IPropertyPaneField<IPropertyFieldSearchPropsInternal>;
//# sourceMappingURL=PropertyFieldSearch.d.ts.map
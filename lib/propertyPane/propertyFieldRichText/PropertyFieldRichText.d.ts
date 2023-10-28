import { IPropertyPaneField, IPropertyPaneCustomFieldProps } from "@microsoft/sp-property-pane";
export interface IPropertyFieldRichTextProps {
    properties?: any;
    label?: string;
    onChange: (content: string) => void;
}
export interface IPropertyFieldRichTextPropsInternal extends IPropertyFieldRichTextProps, IPropertyPaneCustomFieldProps {
}
export declare function PropertyPaneRichText(targetProperty: string, properties: IPropertyFieldRichTextProps): IPropertyPaneField<IPropertyFieldRichTextPropsInternal>;
//# sourceMappingURL=PropertyFieldRichText.d.ts.map
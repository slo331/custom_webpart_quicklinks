import { WebPartContext } from "@microsoft/sp-webpart-base";
import { IPropertyPaneField } from "@microsoft/sp-property-pane";
export interface IPropertyFieldImageSelectorProps {
    properties?: any;
    context?: WebPartContext;
    label: string;
    key?: string;
    imageMode: ImageDisplayType;
    changeImage?: (url: string, name?: string) => void;
    changeImageMode?: (imageDisplayMode: ImageDisplayType) => void;
}
export interface IPropertyFieldImageSelectorPropsInternal extends IPropertyFieldImageSelectorProps {
    onRender(elem: HTMLElement): void;
    context?: WebPartContext;
    targetProperty: string;
    label: string;
    key?: string;
    imageMode: ImageDisplayType;
    changeImage?: (url: string, name?: string) => void;
    changeImageMode?: (imageDisplayMode: ImageDisplayType) => void;
}
export declare function PropertyPaneImageSelector(targetProperty: string, properties: IPropertyFieldImageSelectorProps): IPropertyPaneField<IPropertyFieldImageSelectorPropsInternal>;
export declare enum ImageDisplayType {
    Auto = 0,
    Custom = 1
}
//# sourceMappingURL=PropertyFieldImageSelector.d.ts.map
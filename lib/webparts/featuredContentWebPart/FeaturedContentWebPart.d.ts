import "core-js/stable/array/from";
import "core-js/stable/array/fill";
import "core-js/stable/array/iterator";
import "core-js/stable/promise";
import "core-js/stable/reflect";
import "es6-map/implement";
import "whatwg-fetch";
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { IPropertyPaneConfiguration } from "@microsoft/sp-property-pane";
import { ImageDisplayType } from "../../propertyPane/propertyFieldImageSelector/PropertyFieldImageSelector";
import { FeaturedContentLayout } from "./components/layouts/FeaturedContentFactory";
export interface IFeaturedItem {
    Image: string;
    ImageAlternate: string;
    Title: string;
    URL: string;
    NewTab: boolean;
    Description: string;
    Content: string;
    PreviewImageUrl: string;
    CustomImageUrl: string;
    ImageMode: ImageDisplayType;
}
export interface IFeaturedContentWebPartProps {
    featuredContentItems: IFeaturedItem[];
    title: string;
    usesListMode: boolean;
    advancedCamlQuery: string;
    advancedCamlData: string;
    layoutMode: FeaturedContentLayout;
}
export default class FeaturedContentWebPart extends BaseClientSideWebPart<IFeaturedContentWebPartProps> {
    constructor();
    onInit(): Promise<void>;
    private _webpart;
    get webpart(): any;
    set webpart(v: any);
    private _activeIndex;
    get activeIndex(): number;
    set activeIndex(v: number);
    render(): void;
    protected get dataVersion(): Version;
    openLinkSelector(event: any): void;
    itemValidation(length: number, required: boolean, errorText: string, value: string): Promise<string>;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
    getWebPartPropertyPane(): IPropertyPaneConfiguration;
    getEditItemPropertyPane(): IPropertyPaneConfiguration;
    private rearrangeBasicItems;
    private editBasicItem;
    private deleteBasicItem;
    private checkImage;
    private setUrl;
    private setTitle;
    private resetIndex;
    private onContentChange;
}
//# sourceMappingURL=FeaturedContentWebPart.d.ts.map
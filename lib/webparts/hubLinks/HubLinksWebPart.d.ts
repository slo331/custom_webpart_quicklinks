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
import { IHubLinksItem } from './components/IHubLinksItem';
import { HubLinksLayout } from './components/layouts/HubLinksLayout';
import "@pnp/sp/webs";
import "@pnp/sp/lists";
export interface IHubLinksWebPartProps {
    listQuery: string;
    data: string;
    title: string;
    defaultExpand: boolean;
    hubLinksItems: IHubLinksItem[];
    usesListMode: boolean;
    layoutMode: HubLinksLayout;
    groups: string[];
    showDescription: boolean;
    version: string;
    tileColor: string;
    tileColorProp: string;
    tileBorderColor: string;
    tileBorderColorProp: string;
    tileBackgroundColor: string;
    tileBackgroundColorProp: string;
}
export default class HubLinksWebPart extends BaseClientSideWebPart<IHubLinksWebPartProps> {
    private LOG_SOURCE;
    private _webpart;
    private _activeIndex;
    private _itemPropertyPane;
    constructor();
    onInit(): Promise<void>;
    get webpart(): any;
    get activeIndex(): number;
    set activeIndex(v: number);
    private _groupItems;
    render(): void;
    private _checkUpdateProperties;
    protected get dataVersion(): Version;
    openLinkSelector(event: any): void;
    itemValidation(length: number, required: boolean, errorText: string, value: string): Promise<string>;
    private _updateGroupsProperty;
    protected onPropertyPaneFieldChanged(propertyPath: string, oldValue: any, newValue: any): void;
    getThemeProperty(color: string): "black" | "white" | "primaryText" | "themePrimary" | "themeSecondary" | "themeTertiary";
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
    getBasicPropertyPane(): IPropertyPaneConfiguration;
    getEditItemPropertyPane(): IPropertyPaneConfiguration;
    protected onPropertyPaneConfigurationComplete(): void;
}
//# sourceMappingURL=HubLinksWebPart.d.ts.map
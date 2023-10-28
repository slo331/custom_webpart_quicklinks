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
export interface IBoxButton {
    name: string;
    url: string;
    icon: string;
    isBlue: boolean;
    openNew: boolean;
}
export interface IBoxButtonWebPartWebPartProps {
    name: string;
    fontAwesomeIcon: string;
    url: string;
    isThemed: boolean;
    newTab: boolean;
    data: IBoxButton[];
    title: string;
    usesListMode: boolean;
    advancedCamlQuery: string;
    advancedCamlData: string;
}
export default class BoxButtonWebPartWebPart extends BaseClientSideWebPart<IBoxButtonWebPartWebPartProps> {
    private LOG_SOURCE;
    constructor();
    onInit(): Promise<void>;
    private _webpart;
    get webpart(): any;
    set webpart(v: any);
    private _activeIndex;
    get activeIndex(): number;
    set activeIndex(v: number);
    render(): void;
    setTitle(title: string): void;
    private openLinkSelector;
    private itemValidation;
    protected get dataVersion(): Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
    getBasicPropertyPane(): IPropertyPaneConfiguration;
    getEditItemPropertyPane(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=BoxButtonWebPart.d.ts.map
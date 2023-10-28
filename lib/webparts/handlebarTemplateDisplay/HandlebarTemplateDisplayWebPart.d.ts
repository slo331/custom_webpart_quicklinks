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
import "@pnp/sp/search";
export interface IHandlebarTemplateDisplayWebPartProps {
    title: string;
    listQuery: string;
    listQueryData: string;
    handlebarTemplateUrl: string;
    containerClass: string;
    cssUrl: string;
    jsUrl: string;
    usesSearchSource: boolean;
    searchSource: string;
    optimizedTemplate: boolean;
    precompiledTemplate: string;
}
export default class HandlebarTemplateDisplayWebPart extends BaseClientSideWebPart<IHandlebarTemplateDisplayWebPartProps> {
    constructor();
    onInit(): Promise<void>;
    private _fields;
    get fields(): any[];
    set fields(v: any[]);
    private _webpart;
    get webpart(): any;
    set webpart(v: any);
    render(): void;
    protected get dataVersion(): Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
    private getListBackedPropertyPaneConfiguration;
    private getSearchBackedPropertyPaneConfiguration;
    openTemplateSelector(event: any): void;
    openStyleSelector(event: any): void;
    openScriptSelector(event: any): void;
    setTitle(title: string): void;
    setTemplateUrl(url: string, name?: string): void;
    setCSSUrl(url: string, name?: string): void;
    setJSUrl(url: string, name?: string): void;
}
//# sourceMappingURL=HandlebarTemplateDisplayWebPart.d.ts.map
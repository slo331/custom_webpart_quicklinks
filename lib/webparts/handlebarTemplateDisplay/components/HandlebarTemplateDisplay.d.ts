import * as React from 'react';
import { IWebPartContext } from "@microsoft/sp-webpart-base";
import 'file-saver';
export interface IHandlebarTemplateDisplayProps {
    isEdit: boolean;
    isSearch: boolean;
    title: string;
    items: any[];
    webUrl: string;
    serverRelativeUrl: string;
    instanceId: string;
    templateUrl: string;
    template: TemplateSpecification;
    isOptimized: boolean;
    cssUrl: string;
    jsUrl: string;
    context: IWebPartContext;
    containerClass: string;
    listIsSelected: boolean;
    setTitle: (title: string) => void;
    setTemplateUrl: (url: string, name?: string) => void;
    setStyleUrl: (url: string, name?: string) => void;
    setScriptUrl: (url: string, name?: string) => void;
}
export interface IHandlebarDisplayTemplateState {
}
export default class HandlebarTemplateDisplay extends React.Component<IHandlebarTemplateDisplayProps, IHandlebarDisplayTemplateState> {
    private linkPickerPanel;
    constructor(props: any);
    private _templateExport;
    get templateExport(): string;
    set templateExport(v: string);
    setTitle(event: any): void;
    openTemplateLinkPicker(event: any): void;
    openStyleLinkPicker(event: any): void;
    openScriptLinkPicker(event: any): void;
    copyTemplate(event: any): void;
    componentDidMount(): void;
    render(): React.ReactElement<IHandlebarTemplateDisplayProps>;
    private renderSeeAll;
    private templateRender;
    private noTemplateRender;
    private buildExampleTemplate;
    private getLeadingTab;
    private renderConfigureWebPartView;
    private openPropertyPane;
}
//# sourceMappingURL=HandlebarTemplateDisplay.d.ts.map
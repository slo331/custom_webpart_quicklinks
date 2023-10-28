import * as React from 'react';
import { IWebPartContext } from '@microsoft/sp-webpart-base';
import { HubLinksLayout } from './layouts/HubLinksLayout';
export interface IHubLinksProps {
    defaultExpand: boolean;
    links: any[];
    title: string;
    setTitle: any;
    setUrl: Function;
    isEdit: boolean;
    hubLinksItems: any[];
    usesListMode: boolean;
    editItem: Function;
    deleteItem: Function;
    rearrangeItems: Function;
    setGroup: Function;
    resetActiveIndex: Function;
    advancedCamlData: string;
    context: IWebPartContext;
    layoutMode: HubLinksLayout;
    showDescription: boolean;
    textColor: string;
    backgroundColor: string;
    borderColor: string;
}
export interface IHubLinksState {
}
export default class HubLinks extends React.Component<IHubLinksProps, IHubLinksState> {
    private LOG_SOURCE;
    constructor(props: any);
    private _dragElement;
    get dragElement(): any;
    set dragElement(v: any);
    private _mouseTarget;
    get mouseTarget(): any;
    set mouseTarget(v: any);
    mouseDragDown(event: any): void;
    startDrag(event: any): void;
    isbefore(a: any, b: any): boolean;
    endDrag(event: any): void;
    moveItem(event: any): void;
    toggleGroup(event: any): void;
    addBox(event: any): void;
    editBox(event: any): boolean;
    deleteBox(event: any): boolean;
    private linkPickerPanel;
    openLinkPicker(event: any, currentUrl?: string): void;
    render(): React.ReactElement<IHubLinksProps>;
    renderBasicWebPart(): JSX.Element;
    renderAdvancedWebPart(): JSX.Element;
}
//# sourceMappingURL=HubLinks.d.ts.map
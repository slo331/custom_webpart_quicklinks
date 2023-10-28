import * as React from 'react';
import { IWebPartContext } from '@microsoft/sp-webpart-base';
import { IFeaturedItem } from '../FeaturedContentWebPart';
import { FeaturedContentLayout } from './layouts/FeaturedContentFactory';
import { DisplayMode } from '@microsoft/sp-core-library';
export interface IFeaturedContentProps {
    featuredContentItems: IFeaturedItem[];
    links: any[];
    isEdit: boolean;
    usesListMode: boolean;
    title: string;
    setTitle: (title: string) => void;
    setUrl: (url: string, name?: string) => void;
    editItem: (index: number) => void;
    deleteItem: (index: number) => void;
    rearrangeItems: (newOrder: number[]) => void;
    resetActiveIndex: () => void;
    advancedCamlQuery: string;
    advancedCamlData: string;
    context: IWebPartContext;
    layoutMode: FeaturedContentLayout;
    displayMode: DisplayMode;
}
export interface IFeaturedContentState {
    isLinkPanelOpen: boolean;
    isSiteSelected: boolean;
    linkValid: boolean;
    linkEntered: string;
}
export default class FeaturedContent extends React.Component<IFeaturedContentProps, IFeaturedContentState> {
    private LOG_SOURCE;
    constructor(props: any);
    private _dragElement;
    get dragElement(): any;
    set dragElement(v: any);
    private _mouseTarget;
    get mouseTarget(): any;
    set mouseTarget(v: any);
    setTitle(event: any): void;
    addBox(event: any): void;
    editBox(event: any): boolean;
    deleteBox(event: any): boolean;
    mouseDragDown(event: any): void;
    startDrag(event: any): void;
    isbefore(a: any, b: any): boolean;
    endDrag(event: any): void;
    moveItem(event: any): void;
    render(): React.ReactElement<IFeaturedContentProps>;
    private linkPickerPanel;
    openLinkPicker(event: any): void;
    createNewItemFromLink(event: any): void;
    renderBasicWebPart(): JSX.Element;
    renderAdvancedWebPart(): JSX.Element;
}
//# sourceMappingURL=FeaturedContent.d.ts.map
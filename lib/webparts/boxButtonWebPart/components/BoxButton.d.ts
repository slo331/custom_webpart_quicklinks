import * as React from 'react';
import { IWebPartContext } from '@microsoft/sp-webpart-base';
import { IBoxButton } from '../BoxButtonWebPart';
import { DisplayMode } from '@microsoft/sp-core-library';
export interface IBoxButtonProps {
    name: string;
    fontAwesomeIcon: string;
    url: string;
    isThemed: boolean;
    newTab: boolean;
    data: IBoxButton[];
    isEdit: boolean;
    title: string;
    usesListMode: boolean;
    advancedCamlQuery: string;
    advancedCamlData: string;
    links: any[];
    setTitle: (title: string) => void;
    setUrl: Function;
    editItem: Function;
    deleteItem: Function;
    rearrangeItems: Function;
    context: IWebPartContext;
    displayMode: DisplayMode;
}
export interface IBoxButtonState {
}
export default class BoxButton extends React.Component<IBoxButtonProps, IBoxButtonState> {
    private LOG_SOURCE;
    private linkPickerPanel;
    private _dragElement;
    get dragElement(): any;
    set dragElement(v: any);
    private _mouseTarget;
    get mouseTarget(): any;
    set mouseTarget(v: any);
    private _eventDone;
    get eventDone(): boolean;
    set eventDone(v: boolean);
    setTitle(event: any): void;
    openLinkPicker: (event: any) => void;
    addBox: (event: any) => void;
    editBox: (event: any) => boolean;
    deleteBox: (event: any) => boolean;
    checkEventDone: (event: any) => boolean;
    mouseDragDown: (event: any) => void;
    startDrag: (event: any) => void;
    isbefore(a: any, b: any): boolean;
    endDrag: (event: any) => void;
    moveItem: (event: any) => void;
    render(): React.ReactElement<IBoxButtonProps>;
    renderBasicWebPart(): JSX.Element;
    renderBasicDefaultLayout(item: IBoxButton): JSX.Element;
    renderAdvancedWebPart(): JSX.Element;
    renderAdvancedDefaultLayout(item: any): JSX.Element;
}
//# sourceMappingURL=BoxButton.d.ts.map
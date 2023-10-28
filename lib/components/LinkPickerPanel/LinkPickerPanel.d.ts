import * as React from 'react';
import { ILinkPickerPanel, ILinkPickerChoice } from './ILinkPickerPanel';
import { ILinkPickerPanelProps } from './ILinkPickerPanelProps';
import { ILinkPickerPanelState } from './ILinkPickerPanelState';
export default class LinkPickerPanel extends React.Component<ILinkPickerPanelProps, ILinkPickerPanelState> implements ILinkPickerPanel {
    constructor(props: any);
    render(): JSX.Element;
    private resolvePickLink;
    private rejectPickLink;
    pickLink(currentUrl?: string): Promise<ILinkPickerChoice>;
    private openLinkPanel;
    private closeLinkPanel;
    private addMessageListener;
    private removeMessageListener;
    private onMessageReceived;
    private getDocPickerUrl;
    private getImageLibraries;
    private getApprovedImages;
    private onSiteNavClick;
    private onLinkNavClick;
    private onImageNavClick;
    private onNavClick;
    private onLinkTextChange;
    private onOkButtonClick;
    private onCancelButtonClick;
    private onImageSelect;
    private isValidLink;
}
//# sourceMappingURL=LinkPickerPanel.d.ts.map
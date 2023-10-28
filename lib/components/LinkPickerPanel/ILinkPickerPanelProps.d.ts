import { IWebPartContext } from '@microsoft/sp-webpart-base';
export declare enum LinkType {
    doc = 1,
    page = 2,
    image = 4,
    folder = 8,
    developer = 16,
    any = 31,
    all = -1
}
export interface ILinkPickerPanelProps {
    webPartContext: IWebPartContext;
    className?: string;
    webAbsUrl: string;
    linkType: LinkType;
}
//# sourceMappingURL=ILinkPickerPanelProps.d.ts.map
export interface IHubLinksItemHeading {
    Title: string;
    Id: number;
}
export interface IHubLinksItem {
    index: string;
    Title: string;
    URL: string;
    Description: string;
    Icon: string;
    NewTab: boolean;
    GroupBy: string;
}
export interface IHubLinksGroupItem {
    Heading: IHubLinksItemHeading;
    Links: Array<IHubLinksItem>;
}
export declare class HubLinksItem implements IHubLinksItem {
    index: string;
    Title: string;
    URL: string;
    Description: string;
    Icon: string;
    NewTab: boolean;
    GroupBy: string;
    constructor(index?: string, Title?: string, URL?: string, Description?: string, Icon?: string, NewTab?: boolean, GroupBy?: string);
}
export declare class HubLinksItemHeading implements IHubLinksItemHeading {
    Title: string;
    Id: number;
    constructor(Title?: string, Id?: number);
}
export declare class HubLinksGroupItem implements IHubLinksGroupItem {
    Heading: IHubLinksItemHeading;
    Links: Array<IHubLinksItem>;
    constructor(Heading?: IHubLinksItemHeading, Links?: Array<IHubLinksItem>);
}
//# sourceMappingURL=IHubLinksItem.d.ts.map
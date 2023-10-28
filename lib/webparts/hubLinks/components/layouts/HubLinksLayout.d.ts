import { IHubLinksItem, HubLinksGroupItem } from '../IHubLinksItem';
export declare enum HubLinksLayout {
    RoundIconItemLayout = 0,
    ListLayout = 1,
    GroupedListLayout = 2,
    TileLayout = 3,
    SquareIconItemLayout = 4
}
export interface IHubLinksLayout {
    render(items: IHubLinksItem[] | HubLinksGroupItem[], isEditMode: boolean): JSX.Element;
}
//# sourceMappingURL=HubLinksLayout.d.ts.map
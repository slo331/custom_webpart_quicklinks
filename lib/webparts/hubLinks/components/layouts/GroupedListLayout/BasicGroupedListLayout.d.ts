import { IHubLinksLayout } from "../HubLinksLayout";
import HubLinksWebPart from "../../HubLinks";
import { IHubLinksGroupItem } from "../../IHubLinksItem";
export default class BasicGroupedListLayout implements IHubLinksLayout {
    private LOG_SOURCE;
    private groupDefault;
    constructor(webpart: HubLinksWebPart);
    private _webpart;
    get webpart(): HubLinksWebPart;
    set webpart(v: HubLinksWebPart);
    render(items: IHubLinksGroupItem[], isEditMode: boolean): JSX.Element;
}
//# sourceMappingURL=BasicGroupedListLayout.d.ts.map
import { IHubLinksLayout } from '../HubLinksLayout';
import HubLinksWebPart from "../../HubLinks";
export default class AdvancedGroupedListLayout implements IHubLinksLayout {
    private LOG_SOURCE;
    private groupDefault;
    constructor(webpart: HubLinksWebPart);
    private _webpart;
    get webpart(): HubLinksWebPart;
    set webpart(v: HubLinksWebPart);
    render(items: any[], isEditMode: boolean): JSX.Element;
}
//# sourceMappingURL=AdvancedGroupedListLayout.d.ts.map
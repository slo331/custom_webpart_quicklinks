import { IHubLinksItem } from '../../IHubLinksItem';
import { IHubLinksLayout } from '../HubLinksLayout';
import HubLinksWebPart from "../../HubLinks";
export default class AdvancedListLayout implements IHubLinksLayout {
    private LOG_SOURCE;
    constructor(webpart: HubLinksWebPart);
    private _webpart;
    get webpart(): HubLinksWebPart;
    set webpart(v: HubLinksWebPart);
    render(items: IHubLinksItem[], isEditMode: boolean): JSX.Element;
}
//# sourceMappingURL=AdvancedListLayout.d.ts.map
import { IFeaturedItem } from '../../../FeaturedContentWebPart';
import { IFeaturedContentLayout } from '../FeaturedContentFactory';
import FeaturedContentWebPart from "../../FeaturedContent";
export default class BasicHorizontalTitleOnlyLayout implements IFeaturedContentLayout {
    constructor(webpart: FeaturedContentWebPart);
    private _webpart;
    get webpart(): FeaturedContentWebPart;
    set webpart(v: FeaturedContentWebPart);
    createNewItemFromLink(event: any): void;
    render(items: IFeaturedItem[], isEditMode: boolean): JSX.Element;
}
//# sourceMappingURL=BasicHorizontalTitleOnlyLayout.d.ts.map
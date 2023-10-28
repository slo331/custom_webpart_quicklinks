import { IFeaturedItem } from '../../../FeaturedContentWebPart';
import { IFeaturedContentLayout } from '../FeaturedContentFactory';
import FeaturedContentWebPart from "../../FeaturedContent";
export default class BasicHorizontalTitleDescriptionLayout implements IFeaturedContentLayout {
    constructor(webpart: FeaturedContentWebPart);
    private _webpart;
    get webpart(): FeaturedContentWebPart;
    set webpart(v: FeaturedContentWebPart);
    render(items: IFeaturedItem[], isEditMode: boolean): JSX.Element;
}
//# sourceMappingURL=BasicHorizontalTitleDescriptionLayout.d.ts.map
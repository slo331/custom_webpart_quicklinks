import { IFeaturedItem } from '../../../FeaturedContentWebPart';
import { IFeaturedContentLayout } from '../FeaturedContentFactory';
import FeaturedContentWebPart from "../../FeaturedContent";
export default class BasicStackedLayout implements IFeaturedContentLayout {
    constructor(webpart: FeaturedContentWebPart);
    private _webpart;
    get webpart(): FeaturedContentWebPart;
    set webpart(v: FeaturedContentWebPart);
    render(items: IFeaturedItem[], isEditMode: boolean): JSX.Element;
}
//# sourceMappingURL=BasicStackedLayout.d.ts.map
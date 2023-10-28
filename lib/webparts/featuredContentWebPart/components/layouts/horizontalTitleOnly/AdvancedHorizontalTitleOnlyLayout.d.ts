import { IFeaturedItem } from '../../../FeaturedContentWebPart';
import { IFeaturedContentLayout } from '../FeaturedContentFactory';
import FeaturedContentWebPart from '../../FeaturedContent';
export default class AdvancedHorizontalTitleOnlyLayout implements IFeaturedContentLayout {
    constructor(webpart: FeaturedContentWebPart);
    private webpart;
    render(items: IFeaturedItem[], isEditMode: boolean): JSX.Element;
}
//# sourceMappingURL=AdvancedHorizontalTitleOnlyLayout.d.ts.map
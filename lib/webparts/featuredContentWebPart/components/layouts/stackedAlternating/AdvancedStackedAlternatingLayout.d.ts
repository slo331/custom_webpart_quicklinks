import { IFeaturedItem } from '../../../FeaturedContentWebPart';
import { IFeaturedContentLayout } from '../FeaturedContentFactory';
import FeaturedContentWebPart from '../../FeaturedContent';
export default class AdvancedStackedLayout implements IFeaturedContentLayout {
    constructor(webpart: FeaturedContentWebPart);
    private webpart;
    render(items: IFeaturedItem[], isEditMode: boolean): JSX.Element;
}
//# sourceMappingURL=AdvancedStackedAlternatingLayout.d.ts.map
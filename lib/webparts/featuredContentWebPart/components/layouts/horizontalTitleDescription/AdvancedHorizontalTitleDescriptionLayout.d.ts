import { IFeaturedItem } from '../../../FeaturedContentWebPart';
import { IFeaturedContentLayout } from '../FeaturedContentFactory';
export default class AdvancedHorizontalTitleDescriptionLayout implements IFeaturedContentLayout {
    constructor(webpart: any);
    private webpart;
    render(items: IFeaturedItem[], isEditMode: boolean): JSX.Element;
}
//# sourceMappingURL=AdvancedHorizontalTitleDescriptionLayout.d.ts.map
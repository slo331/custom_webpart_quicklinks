import { IFeaturedItem } from '../../FeaturedContentWebPart';
import FeaturedContentWebPart from '../FeaturedContent';
export declare enum FeaturedContentLayout {
    HorizontalTitleOnly = 0,
    HorizontalTitleAndDescription = 1,
    Vertical = 2,
    VerticalAlternating = 3
}
export interface IFeaturedContentLayout {
    render(items: IFeaturedItem[], isEditMode: boolean): JSX.Element;
}
export default class FeaturedContentFactory {
    static getLayout(layout: FeaturedContentLayout, isAdvancedMode: boolean, webPart: FeaturedContentWebPart): IFeaturedContentLayout;
    static getWidthHeightQueryStringAppendForImage(imageUrl: string): string;
}
//# sourceMappingURL=FeaturedContentFactory.d.ts.map
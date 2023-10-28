export declare enum NavState {
    site = 0,
    link = 1,
    image = 2
}
export declare class ApprovedImage {
    RelativeURL: string;
    Name: string;
    Thumbnail: string;
}
export declare class ImageLibrary {
    libUrl: string;
    cdnUrl: string;
}
export interface ILinkPickerPanelState {
    isOpen?: boolean;
    navState?: NavState;
    isUrlValid?: boolean;
    url?: string;
    showImageTab: boolean;
    images?: Array<ApprovedImage>;
    imageLibs?: Array<ImageLibrary>;
}
//# sourceMappingURL=ILinkPickerPanelState.d.ts.map
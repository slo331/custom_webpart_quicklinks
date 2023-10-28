import { IWebPartContext } from '@microsoft/sp-webpart-base';
export declare class Usage {
    WebPartName: string;
    AbsoluteUrl: string;
    Version: string;
    CustomData1: string;
    CustomData2: string;
    CustomData3: string;
    CustomData4: string;
    CustomData5: string;
    constructor(webPartName: string, absoluteUrl: string, version: string, customData1: string, customData2: string, customData3: string, customData4: string, customData5: string);
}
export declare class WebPartLogger {
    static logUsage(context: IWebPartContext, urlsToCheck?: string[]): Promise<void>;
}
//# sourceMappingURL=usagelogger.d.ts.map
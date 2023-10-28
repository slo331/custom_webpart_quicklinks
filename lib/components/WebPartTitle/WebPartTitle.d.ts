import * as React from "react";
export interface IWebPartTitleProps {
    editMode: boolean;
    title: string;
    updateTitle: (title: string) => void;
}
export interface IWebPartTitleState {
}
export declare class WebPartTitleState implements IWebPartTitleState {
    constructor();
}
export default class WebPartTitle extends React.Component<IWebPartTitleProps, IWebPartTitleState> {
    private LOG_SOURCE;
    constructor(props: any);
    shouldComponentUpdate(nextProps: Readonly<IWebPartTitleProps>, nextState: Readonly<IWebPartTitleState>): boolean;
    private saveTitle;
    render(): React.ReactElement<IWebPartTitleProps>;
}
//# sourceMappingURL=WebPartTitle.d.ts.map
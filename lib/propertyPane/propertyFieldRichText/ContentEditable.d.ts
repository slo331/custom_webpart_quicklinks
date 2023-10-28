import * as React from 'react';
export interface IContentEditableProps {
    html: string;
    id?: string;
    className?: string;
    style?: {};
    onChange: (event: any) => void;
}
export interface IContentEditableState {
}
export default class ContentEditable extends React.Component<IContentEditableProps, IContentEditableState> {
    constructor(props: any);
    htmlEl: any;
    lastHtml: string;
    render(): any;
    shouldComponentUpdate(nextProps: any): boolean;
    componentDidUpdate(): void;
    emitChange(evt: any): void;
}
//# sourceMappingURL=ContentEditable.d.ts.map
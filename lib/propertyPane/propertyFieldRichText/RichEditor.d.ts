import * as React from 'react';
export interface IRichEditorProps {
    id?: string;
    value: string;
    onChange: (string: any) => void;
}
export interface IRichEditorState {
    value: string;
    hiddenDialog: boolean;
    link: string;
    formatting: IFormatIcon[];
}
export interface IFormatIcon {
    title: string;
    name: string;
    command: string;
    on: boolean;
}
export default class RichEditor extends React.Component<IRichEditorProps, IRichEditorState> {
    constructor(props: IRichEditorProps);
    applyFormat: (command: any) => void;
    onChange: (html: any) => void;
    checkEnabledFormatting: () => void;
    componentDidMount(): void;
    render(): JSX.Element;
}
//# sourceMappingURL=RichEditor.d.ts.map
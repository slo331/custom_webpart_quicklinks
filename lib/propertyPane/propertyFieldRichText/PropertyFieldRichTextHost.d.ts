import * as React from 'react';
import { PivotItem } from 'office-ui-fabric-react';
export interface IPropertyFieldRichTextHostProps {
    onChange: (html: string) => void;
    currentValue: string;
    label: string;
    onRender: (elem: HTMLElement) => void;
}
export interface IPropertyFieldRichTextHostState {
    value: any;
    modalValue: any;
    selectedPivotKey: string;
    openModal: boolean;
    editHtml: boolean;
    modalHtml: string;
}
export default class PropertyFieldRichTextHost extends React.Component<IPropertyFieldRichTextHostProps, IPropertyFieldRichTextHostState> {
    constructor(props: IPropertyFieldRichTextHostProps);
    componentWillReceiveProps(nextProps: any): void;
    onChange(value: any): void;
    openModal(): void;
    saveCloseModal(): void;
    closeModal(): void;
    confirmCloseModal(): void;
    dialogPivotChanged(item: PivotItem): void;
    onModalHtmlEditorChange(event: any): void;
    onModalRTEditorChange(value: string): void;
    render(): JSX.Element;
}
//# sourceMappingURL=PropertyFieldRichTextHost.d.ts.map
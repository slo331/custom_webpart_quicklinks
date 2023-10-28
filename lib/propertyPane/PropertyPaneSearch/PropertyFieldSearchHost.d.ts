import * as React from 'react';
import { IPropertyFieldSearchPropsInternal } from './PropertyFieldSearch';
import "@pnp/sp/search";
import { ISort } from '@pnp/sp/search';
import { IDropdownOption } from 'office-ui-fabric-react';
export interface IPropertyFieldSearchHostProps extends IPropertyFieldSearchPropsInternal {
}
export interface IPropertyFieldSearchHostState {
    query: string;
    selectProperties: string;
    sort: ISort[];
    rows?: number;
}
export default class PropertyFieldSearchHost extends React.Component<IPropertyFieldSearchHostProps, IPropertyFieldSearchHostState> {
    directions: IDropdownOption[];
    sortProperties: IDropdownOption[];
    constructor(props: IPropertyFieldSearchHostProps);
    onQueryChange: (value: string) => void;
    onSelectPropertiesChanged: (value: string) => void;
    addSort: () => void;
    removeSort: (index: number) => void;
    changeSortProperty: (option: IDropdownOption, selectedIndex: number, index: number) => void;
    changeSortDirection: (option: IDropdownOption, selectedIndex: number, index: number) => void;
    onChangedMax: (newValue?: number) => void;
    saveSearchQuery: (state: IPropertyFieldSearchHostState) => void;
    render(): JSX.Element;
}
//# sourceMappingURL=PropertyFieldSearchHost.d.ts.map
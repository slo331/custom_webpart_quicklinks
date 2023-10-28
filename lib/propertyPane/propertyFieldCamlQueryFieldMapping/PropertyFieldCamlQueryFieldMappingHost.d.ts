/**
 * @file PropertyFieldCamlQueryHost.tsx
 * Renders the controls for PropertyFieldCamlQuery component
 *
 * @copyright 2017 Shire
 * Released under MIT licence
 *
 * Uses the PropertyFieldSPListQueryHost by Olivier Carpentier
 *
 */
import * as React from 'react';
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/fields";
import "@pnp/sp/views";
import { IPropertyFieldCamlQueryFieldMappingPropsInternal, IField, IList, ISort, IMapping } from './PropertyFieldCamlQueryFieldMapping';
import { IDropdownOption } from 'office-ui-fabric-react';
import { List } from 'linqts';
/**
 * @interface
 * PropertyFieldCamlQueryHost properties interface
 *
 */
export interface IPropertyFieldCamlQueryFieldMappingHostProps extends IPropertyFieldCamlQueryFieldMappingPropsInternal {
}
export interface IFilter {
    field?: string;
    fieldKind?: number;
    operator?: string;
    value?: string;
}
export interface IPropertyFieldCamlQueryFieldMappingHostState {
    lists: IList[];
    fields: List<IField>;
    arranged: IDropdownOption[];
    selectedList?: IList;
    sort?: ISort;
    max?: number;
    operators?: IDropdownOption[];
    filters?: IFilter[];
    filterType: string;
    fieldMappings?: IMapping[];
    errorMessage?: string;
    loadedList: boolean;
    loadedFields: boolean;
    isCreateOpen: boolean;
    newListTitle: string;
}
/**
 * @class
 * Renders the controls for PropertyFieldCamlQuery component
 */
export default class PropertyFieldCamlQueryFieldMappingHost extends React.Component<IPropertyFieldCamlQueryFieldMappingHostProps, IPropertyFieldCamlQueryFieldMappingHostState> {
    private LOG_SOURCE;
    private latestValidateValue;
    private async;
    private delayedValidate;
    private _stateCopy;
    get stateCopy(): IPropertyFieldCamlQueryFieldMappingHostState;
    set stateCopy(value: IPropertyFieldCamlQueryFieldMappingHostState);
    /**
     * @function
     * Constructor
     */
    constructor(props: IPropertyFieldCamlQueryFieldMappingHostProps);
    componentDidMount(): void;
    /**
     * @function
     * Loads the list from SharePoint current web site
     */
    private _loadLists;
    private _loadFields;
    private _getKindForType;
    private _getFieldList;
    private getFieldByInternalName;
    private _saveQuery;
    /**
     * @function
     * Validates the new custom field value
     */
    private _validate;
    /**
     * @function
     * Notifies the parent Web Part of a property value change
     */
    private _notifyAfterValidate;
    /**
     * @function
     * Called when the component will unmount
     */
    componentWillUnmount(): void;
    /**
     * @function
     * Raises when a list has been selected
     */
    private _onChangedList;
    private _onChangedField;
    private _onChangedArranged;
    private _onChangedMax;
    private _onClickAddFilter;
    private _onClickRemoveFilter;
    private _onChangedFilterType;
    private _onChangedFilterField;
    private _onChangedFilterOperator;
    private _onChangedFilterValue;
    private _onChangedFieldMapping;
    private _openCreateNewListDialog;
    private _changeNewListTitle;
    private _createNewList;
    private _saveAndReloadData;
    private _cancelListCreate;
    private _openListInNewTab;
    /**
     * @function
     * Renders the controls
     */
    render(): JSX.Element;
}
//# sourceMappingURL=PropertyFieldCamlQueryFieldMappingHost.d.ts.map
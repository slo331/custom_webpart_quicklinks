var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import * as React from 'react';
import * as strings from 'propertyFieldStrings';
import "@pnp/sp/search";
import { SortDirection } from '@pnp/sp/search';
import { TextField, Label, Dropdown, Button, ButtonType, Slider } from 'office-ui-fabric-react';
import styles from '../PropertyFields.module.scss';
var PropertyFieldSearchHost = /** @class */ (function (_super) {
    __extends(PropertyFieldSearchHost, _super);
    function PropertyFieldSearchHost(props) {
        var _this = _super.call(this, props) || this;
        _this.onQueryChange = function (value) {
            var state = JSON.parse(JSON.stringify(_this.state));
            state.query = value;
            _this.setState({ query: value });
            _this.saveSearchQuery(state);
        };
        _this.onSelectPropertiesChanged = function (value) {
            var state = JSON.parse(JSON.stringify(_this.state));
            state.selectProperties = value;
            _this.setState({ selectProperties: value });
            _this.saveSearchQuery(state);
        };
        _this.addSort = function () {
            var state = JSON.parse(JSON.stringify(_this.state));
            var sort = __spreadArrays(state.sort);
            sort.push({ Property: '', Direction: SortDirection.Ascending });
            _this.setState({ sort: sort });
            _this.saveSearchQuery(state);
        };
        _this.removeSort = function (index) {
            var state = JSON.parse(JSON.stringify(_this.state));
            state.sort.splice(index, 1);
            _this.setState({ sort: state.sort });
            _this.saveSearchQuery(state);
        };
        _this.changeSortProperty = function (option, selectedIndex, index) {
            var state = JSON.parse(JSON.stringify(_this.state));
            var sort = __spreadArrays(state.sort);
            sort[index].Property = option.key;
            _this.setState({ sort: sort });
            _this.saveSearchQuery(state);
        };
        _this.changeSortDirection = function (option, selectedIndex, index) {
            var state = JSON.parse(JSON.stringify(_this.state));
            var sort = __spreadArrays(state.sort);
            sort[index].Direction = Number(option.key);
            _this.setState({ sort: sort });
            _this.saveSearchQuery(state);
        };
        _this.onChangedMax = function (newValue) {
            var state = JSON.parse(JSON.stringify(_this.state));
            state.rows = newValue;
            _this.setState({ rows: newValue });
            _this.saveSearchQuery(state);
        };
        _this.saveSearchQuery = function (state) {
            var val = _this.props.properties.properties[_this.props.targetProperty];
            _this.props.properties.properties[_this.props.targetProperty] = JSON.stringify(state);
            _this.props.onPropertyChange(_this.props.targetProperty, val, JSON.stringify(state));
            _this.props.render();
        };
        _this.state = _this.props.properties.properties[_this.props.targetProperty] ?
            JSON.parse(_this.props.properties.properties[_this.props.targetProperty]) :
            {
                query: '',
                selectProperties: '',
                sort: [],
                rows: 10
            };
        _this.directions = [];
        _this.directions.push({ key: Number(SortDirection.Ascending), text: strings.Ascending });
        _this.directions.push({ key: Number(SortDirection.Descending), text: strings.Descending });
        _this.sortProperties = [];
        _this.sortProperties.push({ key: "LastModifiedTime", text: "Modified" });
        _this.sortProperties.push({ key: "Created", text: "Created" });
        _this.sortProperties.push({ key: "ViewsLifeTime", text: "Views" });
        _this.sortProperties.push({ key: "ViewsRecent", text: "Recent Views" });
        _this.sortProperties.push({ key: "Rank", text: "Rank" });
        return _this;
    }
    PropertyFieldSearchHost.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement(TextField, { label: strings.SearchQueryLabel, multiline: true, rows: 5, onChange: function (ev, newValue) { return _this.onQueryChange.call(_this, newValue); }, value: this.state.query }),
            React.createElement(Label, null, strings.SortLabel),
            this.state.sort !== null && this.state.sort.length > 0 ? this.state.sort.map(function (v, i) {
                return (React.createElement("div", null,
                    React.createElement(Dropdown, { label: strings.SortPropertyLabel, disabled: false, options: _this.sortProperties, selectedKey: v.Property, onChanged: function (option, selectIndex) { return _this.changeSortProperty(option, selectIndex, i); } }),
                    React.createElement(Dropdown, { label: strings.SortDirectionLabel, disabled: false, options: _this.directions, selectedKey: v.Direction, onChanged: function (option, selectIndex) { return _this.changeSortDirection(option, selectIndex, i); } }),
                    React.createElement(Button, { buttonType: ButtonType.command, onClick: function () { return _this.removeSort.call(_this, i); }, iconProps: { iconName: "Delete" } }, strings.SPListQueryRemove)));
            }) : '',
            React.createElement(Button, { buttonType: ButtonType.command, onClick: this.addSort.bind(this), iconProps: { iconName: "Add" } }, strings.SPListQueryAdd),
            React.createElement(Slider, { label: strings.SPListQueryMax, min: 1, className: styles["slider"], max: 100, defaultValue: this.state.rows, onChange: this.onChangedMax })));
    };
    return PropertyFieldSearchHost;
}(React.Component));
export default PropertyFieldSearchHost;
//# sourceMappingURL=PropertyFieldSearchHost.js.map
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
import * as React from 'react';
import { Async, Label, CommandButton } from 'office-ui-fabric-react';
import styles from "../PropertyFields.module.scss";
var PropertyFieldGroupSortHost = /** @class */ (function (_super) {
    __extends(PropertyFieldGroupSortHost, _super);
    function PropertyFieldGroupSortHost(props) {
        var _this = _super.call(this, props) || this;
        _this.async = new Async(_this);
        _this.state = { errorMessage: '', currentValue: _this.props.initialValue };
        _this.onValueChanged = _this.onValueChanged.bind(_this);
        _this.validate = _this.validate.bind(_this);
        _this.notifyAfterValidate = _this.notifyAfterValidate.bind(_this);
        _this.delayedValidate = _this.async.debounce(_this.validate, _this.props.deferredValidationTime);
        return _this;
    }
    PropertyFieldGroupSortHost.prototype.onValueChanged = function (newValue) {
        this.setState({ currentValue: newValue });
        this.delayedValidate(newValue);
    };
    PropertyFieldGroupSortHost.prototype.validate = function (value) {
        var _this = this;
        if (this.props.onGetErrorMessage === null || this.props.onGetErrorMessage === undefined) {
            this.notifyAfterValidate(this.props.initialValue, value);
            return;
        }
        if (this.latestValidateValue === value)
            return;
        this.latestValidateValue = value;
        var result = this.props.onGetErrorMessage(value.join(',') || '');
        if (result !== undefined) {
            if (typeof result === 'string') {
                if (result === undefined || result === '')
                    this.notifyAfterValidate(this.props.initialValue, value);
                this.setState({ errorMessage: result });
            }
            else {
                result.then(function (errorMessage) {
                    if (errorMessage === undefined || errorMessage === '')
                        _this.notifyAfterValidate(_this.props.initialValue, value);
                    _this.setState({ errorMessage: errorMessage });
                });
            }
        }
        else {
            this.notifyAfterValidate(this.props.initialValue, value);
        }
    };
    PropertyFieldGroupSortHost.prototype.notifyAfterValidate = function (oldValue, newValue) {
        this.props.properties[this.props.targetProperty] = newValue;
        this.props.onPropertyChange(this.props.targetProperty, oldValue, newValue);
        if (!this.props.disableReactivePropertyChanges && this.props.render != null)
            this.props.render();
    };
    PropertyFieldGroupSortHost.prototype.componentWillUnmount = function () {
        this.async.dispose();
    };
    PropertyFieldGroupSortHost.prototype.setSelectItem = function (index) {
        this.setState({ selectedIndex: index });
    };
    PropertyFieldGroupSortHost.prototype.moveUp = function () {
        if (this.state.selectedIndex != undefined && this.state.selectedIndex > 0) {
            var cloneValue = JSON.parse(JSON.stringify(this.state.currentValue));
            var tmp = cloneValue[this.state.selectedIndex];
            cloneValue[this.state.selectedIndex] = cloneValue[this.state.selectedIndex - 1];
            cloneValue[this.state.selectedIndex - 1] = tmp;
            this.setState({ selectedIndex: this.state.selectedIndex - 1 });
            this.onValueChanged(cloneValue);
        }
    };
    PropertyFieldGroupSortHost.prototype.moveDown = function () {
        if (this.state.selectedIndex != undefined && this.state.selectedIndex < this.state.currentValue.length - 1) {
            var cloneValue = JSON.parse(JSON.stringify(this.state.currentValue));
            var tmp = cloneValue[this.state.selectedIndex];
            cloneValue[this.state.selectedIndex] = cloneValue[this.state.selectedIndex + 1];
            cloneValue[this.state.selectedIndex + 1] = tmp;
            this.setState({ selectedIndex: this.state.selectedIndex + 1 });
            this.onValueChanged(cloneValue);
        }
    };
    PropertyFieldGroupSortHost.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: styles.groupSort },
            React.createElement(Label, null, this.props.label),
            React.createElement("div", null,
                React.createElement(CommandButton, { className: styles.groupButton, onClick: this.moveUp.bind(this) },
                    React.createElement("i", { className: 'fa fa-caret-up' }),
                    React.createElement("span", null, "Move Up")),
                React.createElement(CommandButton, { className: styles.groupButton, onClick: this.moveDown.bind(this) },
                    React.createElement("i", { className: 'fa fa-caret-down' }),
                    React.createElement("span", null, "Move Down")),
                this.state.currentValue.length > 0 &&
                    this.state.currentValue.map(function (item, index) {
                        return (React.createElement("div", { className: styles.groupListItem + (_this.state.selectedIndex == index ? " " + styles.highlight : ""), key: "group-" + index, onClick: _this.setSelectItem.bind(_this, index) },
                            React.createElement("span", null, item)));
                    }),
                this.state.errorMessage != null && this.state.errorMessage != '' && this.state.errorMessage != undefined ?
                    React.createElement("div", null,
                        React.createElement("div", { "aria-live": 'assertive', className: 'ms-u-screenReaderOnly', "data-automation-id": 'error-message' }, this.state.errorMessage),
                        React.createElement("span", null,
                            React.createElement("p", { className: 'ms-TextField-errorMessage ms-u-slideDownIn20' }, this.state.errorMessage)))
                    : '')));
    };
    return PropertyFieldGroupSortHost;
}(React.Component));
export default PropertyFieldGroupSortHost;
//# sourceMappingURL=PropertyFieldGroupSortHost.js.map
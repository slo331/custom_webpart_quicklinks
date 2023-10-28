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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
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
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/fields";
import "@pnp/sp/views";
import { Logger } from "@pnp/logging";
import { hOP } from "@pnp/common";
import { SortDirection, SPFieldType, SPFieldRequiredLevel } from './PropertyFieldCamlQueryFieldMapping';
import { Async, Dropdown, Label, Slider, TextField, Button, ButtonType, CommandButton, Spinner, SpinnerType, Dialog, DialogType } from 'office-ui-fabric-react';
import styles from "../PropertyFields.module.scss";
import * as strings from 'propertyFieldStrings';
import { CamlBuilder } from '../../utilities/caml/camljs';
import { List } from 'linqts';
/**
 * @class
 * Renders the controls for PropertyFieldCamlQuery component
 */
var PropertyFieldCamlQueryFieldMappingHost = /** @class */ (function (_super) {
    __extends(PropertyFieldCamlQueryFieldMappingHost, _super);
    /**
     * @function
     * Constructor
     */
    function PropertyFieldCamlQueryFieldMappingHost(props) {
        var _this = _super.call(this, props) || this;
        _this.LOG_SOURCE = "PropertyFieldCamlQueryFieldMappingHost";
        /**
         * @function
         * Loads the list from SharePoint current web site
         */
        _this._loadLists = function () { return __awaiter(_this, void 0, void 0, function () {
            var lists, stateLists_1, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, sp.web.lists.select("Title", "Id", "BaseTemplate").filter("Hidden eq false").get()];
                    case 1:
                        lists = _a.sent();
                        stateLists_1 = [];
                        lists.map(function (list) {
                            stateLists_1.push({
                                id: list.Id,
                                title: list.Title
                            });
                        });
                        this.stateCopy.lists = stateLists_1;
                        this.stateCopy.loadedList = true;
                        this.setState(this.stateCopy);
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        Logger.write(err_1 + " - " + this.LOG_SOURCE + " (_loadLists)", 3 /* Error */);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        _this._loadFields = function (list) { return __awaiter(_this, void 0, void 0, function () {
            var response, fields_1, err_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        if (!(list && list.id)) return [3 /*break*/, 2];
                        return [4 /*yield*/, sp.web.lists.getById(list.id).fields.select("Title", "InternalName", "TypeAsString").filter("((Hidden eq false) or (Title eq 'PromotedState'))").orderBy("Title").get()];
                    case 1:
                        response = _a.sent();
                        fields_1 = new List();
                        response.map(function (field) {
                            var option = {
                                internalName: field.InternalName,
                                name: field.Title + " - " + field.InternalName,
                                kind: _this._getKindForType(field.TypeAsString)
                            };
                            fields_1.Add(option);
                        });
                        this.stateCopy.fields = fields_1;
                        this.stateCopy.loadedFields = true;
                        this._saveQuery();
                        _a.label = 2;
                    case 2: return [3 /*break*/, 4];
                    case 3:
                        err_2 = _a.sent();
                        Logger.write(err_2 + " - " + this.LOG_SOURCE + " (_loadFields)", 3 /* Error */);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this._getKindForType = function (type) {
            switch (type) {
                case "URL":
                    return SPFieldType.URL;
                case "Boolean":
                    return SPFieldType.Boolean;
                case "PublishingScheduleStartDateFieldType":
                case "PublishingScheduleEndDateFieldType":
                case "Date":
                    return SPFieldType.Date;
                case "DateTime":
                    return SPFieldType.DateTime;
                case "User":
                    return SPFieldType.User;
                case "Lookup":
                    return SPFieldType.Lookup;
                case "Integer":
                    return SPFieldType.Integer;
                case "Number":
                    return SPFieldType.Number;
                case "Counter":
                    return SPFieldType.Counter;
                case "Choice":
                    return SPFieldType.Choice;
                case "TaxonomyFieldType":
                    return SPFieldType.Taxonomy;
                default: return SPFieldType.Text;
            }
        };
        _this._getFieldList = function (fieldType) {
            var retVal = [];
            try {
                var fields = _this.stateCopy.fields.Where(function (f) { return f.kind == fieldType; }).ToArray();
                fields.forEach(function (element) {
                    retVal.push({ key: element.internalName, text: element.name });
                });
            }
            catch (err) {
                Logger.write(err + " - " + _this.LOG_SOURCE + " (_getFieldList)", 3 /* Error */);
            }
            return retVal;
        };
        _this.getFieldByInternalName = function (fieldTypeName) {
            var retVal;
            try {
                var fields = _this.stateCopy.fields.Where(function (f) { return f.internalName == fieldTypeName; }).ToArray();
                if ((fields === null || fields === void 0 ? void 0 : fields.length) > 0)
                    retVal = fields[0];
            }
            catch (err) {
                Logger.write(err + " - " + _this.LOG_SOURCE + " (getFieldByInternalName)", 3 /* Error */);
            }
            return retVal;
        };
        _this._saveQuery = function () {
            try {
                var listViewFields_1 = [];
                if (_this.stateCopy.fieldMappings.length === 0) {
                    _this.stateCopy.fields.ForEach(function (element) {
                        listViewFields_1.push(element.internalName.trim().replace(' ', '_x0020_'));
                    });
                }
                else {
                    _this.stateCopy.fieldMappings.map(function (mappedField) {
                        if (typeof mappedField.mappedTo != 'undefined' && mappedField.enabled)
                            listViewFields_1.push(mappedField.mappedTo.trim().replace(' ', '_x0020_'));
                    });
                }
                if (listViewFields_1.indexOf("Title") == -1 && listViewFields_1.length > 0) {
                    listViewFields_1.push("Title");
                }
                var conditions_1 = [];
                _this.stateCopy.filters.forEach(function (element) {
                    if (element.field == null || element.field == '' || element.operator == null || element.operator == '' || element.value == null)
                        return;
                    var field = _this.getFieldByInternalName(element.field);
                    if (field === null) {
                        _this.stateCopy.filters.splice(_this.stateCopy.filters.indexOf(element), 1);
                        return;
                    }
                    switch (field.kind) {
                        case SPFieldType.Boolean:
                            var val = element.value ? element.value.toLocaleLowerCase().trim() : "false";
                            if (element.operator === "Ne")
                                conditions_1.push(CamlBuilder.Expression().BooleanField(element.field).NotEqualTo(val === "yes" || val === "true" || val === "1"));
                            else
                                conditions_1.push(CamlBuilder.Expression().BooleanField(element.field).EqualTo(val === "yes" || val === "true" || val === "1"));
                            break;
                        case SPFieldType.Integer:
                            var integerValue = parseInt(element.value);
                            switch (element.operator) {
                                case "Ne":
                                    conditions_1.push(CamlBuilder.Expression().IntegerField(element.field).NotEqualTo(integerValue));
                                    break;
                                case "Le":
                                    conditions_1.push(CamlBuilder.Expression().IntegerField(element.field).LessThanOrEqualTo(integerValue));
                                    break;
                                case "Lt":
                                    conditions_1.push(CamlBuilder.Expression().IntegerField(element.field).LessThan(integerValue));
                                    break;
                                case "Ge":
                                    conditions_1.push(CamlBuilder.Expression().IntegerField(element.field).GreaterThanOrEqualTo(integerValue));
                                    break;
                                case "Gt":
                                    conditions_1.push(CamlBuilder.Expression().IntegerField(element.field).GreaterThan(integerValue));
                                    break;
                                default:
                                    conditions_1.push(CamlBuilder.Expression().IntegerField(element.field).EqualTo(integerValue));
                                    break;
                            }
                            break;
                        case SPFieldType.Counter:
                            var counterValue = parseInt(element.value);
                            switch (element.operator) {
                                case "Ne":
                                    conditions_1.push(CamlBuilder.Expression().CounterField(element.field).NotEqualTo(counterValue));
                                    break;
                                case "Le":
                                    conditions_1.push(CamlBuilder.Expression().CounterField(element.field).LessThanOrEqualTo(counterValue));
                                    break;
                                case "Lt":
                                    conditions_1.push(CamlBuilder.Expression().CounterField(element.field).LessThan(counterValue));
                                    break;
                                case "Ge":
                                    conditions_1.push(CamlBuilder.Expression().CounterField(element.field).GreaterThanOrEqualTo(counterValue));
                                    break;
                                case "Gt":
                                    conditions_1.push(CamlBuilder.Expression().CounterField(element.field).GreaterThan(counterValue));
                                    break;
                                default:
                                    conditions_1.push(CamlBuilder.Expression().CounterField(element.field).EqualTo(counterValue));
                                    break;
                            }
                            break;
                        case SPFieldType.Date:
                            switch (element.operator) {
                                case "Ne":
                                    conditions_1.push(CamlBuilder.Expression().DateField(element.field).NotEqualTo(element.value));
                                    break;
                                case "Le":
                                    conditions_1.push(CamlBuilder.Expression().DateField(element.field).LessThanOrEqualTo(element.value));
                                    break;
                                case "Lt":
                                    conditions_1.push(CamlBuilder.Expression().DateField(element.field).LessThan(element.value));
                                    break;
                                case "Ge":
                                    conditions_1.push(CamlBuilder.Expression().DateField(element.field).GreaterThanOrEqualTo(element.value));
                                    break;
                                case "Gt":
                                    conditions_1.push(CamlBuilder.Expression().DateField(element.field).GreaterThan(element.value));
                                    break;
                                default:
                                    conditions_1.push(CamlBuilder.Expression().DateField(element.field).EqualTo(element.value));
                                    break;
                            }
                            break;
                        case SPFieldType.DateTime:
                            switch (element.operator) {
                                case "Ne":
                                    conditions_1.push(CamlBuilder.Expression().DateTimeField(element.field).NotEqualTo(element.value));
                                    break;
                                case "Le":
                                    conditions_1.push(CamlBuilder.Expression().DateTimeField(element.field).LessThanOrEqualTo(element.value));
                                    break;
                                case "Lt":
                                    conditions_1.push(CamlBuilder.Expression().DateTimeField(element.field).LessThan(element.value));
                                    break;
                                case "Ge":
                                    conditions_1.push(CamlBuilder.Expression().DateTimeField(element.field).GreaterThanOrEqualTo(element.value));
                                    break;
                                case "Gt":
                                    conditions_1.push(CamlBuilder.Expression().DateTimeField(element.field).GreaterThan(element.value));
                                    break;
                                default:
                                    conditions_1.push(CamlBuilder.Expression().DateTimeField(element.field).EqualTo(element.value));
                                    break;
                            }
                            break;
                        case SPFieldType.Lookup:
                            if (!isNaN(Number(element.value)))
                                conditions_1.push(CamlBuilder.Expression().LookupField(element.field).Id().EqualTo(Number(element.value)));
                            else {
                                switch (element.operator) {
                                    case "Ne":
                                        conditions_1.push(CamlBuilder.Expression().LookupField(element.field).ValueAsText().NotEqualTo(element.value));
                                        break;
                                    case "startsWith":
                                        conditions_1.push(CamlBuilder.Expression().LookupField(element.field).ValueAsText().BeginsWith(element.value));
                                        break;
                                    case "substringOf":
                                        conditions_1.push(CamlBuilder.Expression().LookupField(element.field).ValueAsText().Contains(element.value));
                                        break;
                                    default:
                                        conditions_1.push(CamlBuilder.Expression().LookupField(element.field).ValueAsText().EqualTo(element.value));
                                        break;
                                }
                            }
                            break;
                        case SPFieldType.Number:
                            var numberValue = parseFloat(element.value);
                            switch (element.operator) {
                                case "Ne":
                                    conditions_1.push(CamlBuilder.Expression().NumberField(element.field).NotEqualTo(numberValue));
                                    break;
                                case "Le":
                                    conditions_1.push(CamlBuilder.Expression().NumberField(element.field).LessThanOrEqualTo(numberValue));
                                    break;
                                case "Lt":
                                    conditions_1.push(CamlBuilder.Expression().NumberField(element.field).LessThan(numberValue));
                                    break;
                                case "Ge":
                                    conditions_1.push(CamlBuilder.Expression().NumberField(element.field).GreaterThanOrEqualTo(numberValue));
                                    break;
                                case "Gt":
                                    conditions_1.push(CamlBuilder.Expression().NumberField(element.field).GreaterThan(numberValue));
                                    break;
                                default:
                                    conditions_1.push(CamlBuilder.Expression().NumberField(element.field).EqualTo(numberValue));
                                    break;
                            }
                            break;
                        case SPFieldType.URL:
                            switch (element.operator) {
                                case "Ne":
                                    conditions_1.push(CamlBuilder.Expression().UrlField(element.field).NotEqualTo(element.value));
                                    break;
                                case "startsWith":
                                    conditions_1.push(CamlBuilder.Expression().UrlField(element.field).BeginsWith(element.value));
                                    break;
                                case "substringOf":
                                    conditions_1.push(CamlBuilder.Expression().UrlField(element.field).Contains(element.value));
                                    break;
                                default:
                                    conditions_1.push(CamlBuilder.Expression().UrlField(element.field).EqualTo(element.value));
                                    break;
                            }
                            break;
                        case SPFieldType.Choice:
                            switch (element.operator) {
                                case "Ne":
                                    conditions_1.push(CamlBuilder.Expression().TextField(element.field).NotEqualTo(element.value));
                                    break;
                                case "startsWith":
                                    conditions_1.push(CamlBuilder.Expression().TextField(element.field).BeginsWith(element.value));
                                    break;
                                case "substringOf":
                                    conditions_1.push(CamlBuilder.Expression().TextField(element.field).Contains(element.value));
                                    break;
                                default:
                                    conditions_1.push(CamlBuilder.Expression().TextField(element.field).EqualTo(element.value));
                                    break;
                            }
                            break;
                        case SPFieldType.User:
                            if (element.value === "Me") {
                                conditions_1.push(CamlBuilder.Expression().UserField(element.field).EqualToCurrentUser());
                            }
                            else {
                                switch (element.operator) {
                                    case "Ne":
                                        conditions_1.push(CamlBuilder.Expression().UserField(element.field).ValueAsText().NotEqualTo(element.value));
                                        break;
                                    case "startsWith":
                                        conditions_1.push(CamlBuilder.Expression().UserField(element.field).ValueAsText().BeginsWith(element.value));
                                        break;
                                    case "substringOf":
                                        conditions_1.push(CamlBuilder.Expression().UserField(element.field).ValueAsText().Contains(element.value));
                                        break;
                                    default:
                                        conditions_1.push(CamlBuilder.Expression().UserField(element.field).ValueAsText().EqualTo(element.value));
                                        break;
                                }
                            }
                            break;
                        default:
                            switch (element.operator) {
                                case "Ne":
                                    conditions_1.push(CamlBuilder.Expression().TextField(element.field).NotEqualTo(element.value));
                                    break;
                                case "startsWith":
                                    conditions_1.push(CamlBuilder.Expression().TextField(element.field).BeginsWith(element.value));
                                    break;
                                case "substringof":
                                    conditions_1.push(CamlBuilder.Expression().TextField(element.field).Contains(element.value));
                                    break;
                                default:
                                    conditions_1.push(CamlBuilder.Expression().TextField(element.field).EqualTo(element.value));
                                    break;
                            }
                            break;
                    }
                });
                var queryXml = '';
                if (_this.stateCopy.filterType === strings.SPListFilterCompareAny) {
                    if (_this.stateCopy.sort && _this.stateCopy.sort.title) {
                        if (_this.stateCopy.sort.direction === SortDirection.Descending) {
                            queryXml = new CamlBuilder() //Any orderby at this
                                .View(listViewFields_1)
                                .RowLimit(_this.stateCopy.max)
                                .Query()
                                .Where()
                                .Any(conditions_1)
                                .OrderByDesc(_this.stateCopy.sort.title)
                                .ToString();
                        }
                        else {
                            queryXml = new CamlBuilder() //Any orderby at this
                                .View(listViewFields_1)
                                .RowLimit(_this.stateCopy.max)
                                .Query()
                                .Where()
                                .Any(conditions_1)
                                .OrderBy(_this.stateCopy.sort.title)
                                .ToString();
                        }
                    }
                    else {
                        queryXml = new CamlBuilder() //Any orderby at this
                            .View(listViewFields_1)
                            .RowLimit(_this.stateCopy.max)
                            .Query()
                            .Where()
                            .Any(conditions_1)
                            .ToString();
                    }
                }
                else {
                    if (_this.stateCopy.sort != undefined && _this.stateCopy.sort.title) {
                        if (_this.stateCopy.sort.direction === SortDirection.Descending) {
                            queryXml = new CamlBuilder() //Any orderby at this
                                .View(listViewFields_1)
                                .RowLimit(_this.stateCopy.max)
                                .Query()
                                .Where()
                                .All(conditions_1)
                                .OrderByDesc(_this.stateCopy.sort.title)
                                .ToString();
                        }
                        else {
                            queryXml = new CamlBuilder() //Any orderby at this
                                .View(listViewFields_1)
                                .RowLimit(_this.stateCopy.max)
                                .Query()
                                .Where()
                                .All(conditions_1)
                                .OrderBy(_this.stateCopy.sort.title)
                                .ToString();
                        }
                    }
                    else {
                        queryXml = new CamlBuilder() //Any orderby at this
                            .View(listViewFields_1)
                            .RowLimit(_this.stateCopy.max)
                            .Query()
                            .Where()
                            .All(conditions_1)
                            .ToString();
                    }
                }
                //Order
                _this.props.properties[_this.props.dataPropertyPath] = JSON.stringify({
                    filters: _this.stateCopy.filters,
                    max: _this.stateCopy.max,
                    selectedList: _this.stateCopy.selectedList,
                    sort: _this.stateCopy.sort,
                    fieldMappings: _this.stateCopy.fieldMappings
                });
                if (_this.delayedValidate !== null && _this.delayedValidate !== undefined) {
                    _this.delayedValidate(queryXml);
                }
                _this.setState(_this.stateCopy);
            }
            catch (err) {
                Logger.write(err + " - " + _this.LOG_SOURCE + " (_saveQuery)", 3 /* Error */);
            }
        };
        /**
         * @function
         * Validates the new custom field value
         */
        _this._validate = function (value) {
            try {
                if (_this.props.onGetErrorMessage === null || _this.props.onGetErrorMessage === undefined) {
                    _this._notifyAfterValidate(_this.props.query, value);
                    return;
                }
                if (_this.latestValidateValue === value)
                    return;
                _this.latestValidateValue = value;
                var result = _this.props.onGetErrorMessage(value || '');
                if (result !== undefined) {
                    if (typeof result === 'string') {
                        if (result === undefined || result === '')
                            _this._notifyAfterValidate(_this.props.query, value);
                        _this.setState({ errorMessage: result });
                    }
                    else {
                        result.then(function (errorMessage) {
                            if (errorMessage === undefined || errorMessage === '')
                                _this._notifyAfterValidate(_this.props.query, value);
                            _this.setState({ errorMessage: errorMessage });
                        });
                    }
                }
                else {
                    _this._notifyAfterValidate(_this.props.query, value);
                }
            }
            catch (err) {
                Logger.write(err + " - " + _this.LOG_SOURCE + " (_validate)", 3 /* Error */);
            }
        };
        /**
         * @function
         * Notifies the parent Web Part of a property value change
         */
        _this._notifyAfterValidate = function (oldValue, newValue) {
            try {
                if (_this.props.onPropertyChange && newValue != null) {
                    _this.props.properties[_this.props.targetProperty] = newValue;
                    _this.props.onPropertyChange(_this.props.targetProperty, oldValue, newValue);
                    if (_this.props.render)
                        _this.props.render();
                }
            }
            catch (err) {
                Logger.write(err + " - " + _this.LOG_SOURCE + " (_notifyAfterValidate)", 3 /* Error */);
            }
        };
        /**
         * @function
         * Raises when a list has been selected
         */
        _this._onChangedList = function (option, index) {
            try {
                var selectedList = {
                    id: option.key,
                    title: option.text,
                };
                _this.stateCopy.selectedList = selectedList;
                _this._loadFields(selectedList);
            }
            catch (err) {
                Logger.write(err + " - " + _this.LOG_SOURCE + " (_onChangedList)", 3 /* Error */);
            }
        };
        _this._onChangedField = function (option, index) {
            try {
                var sort = JSON.parse(JSON.stringify(_this.stateCopy.sort));
                sort.title = option.key;
                _this.stateCopy.sort = sort;
                _this._saveQuery();
            }
            catch (err) {
                Logger.write(err + " - " + _this.LOG_SOURCE + " (_onChangedField)", 3 /* Error */);
            }
        };
        _this._onChangedArranged = function (option, index) {
            try {
                var sort = JSON.parse(JSON.stringify(_this.stateCopy.sort));
                sort.direction = option.key;
                _this.stateCopy.sort = sort;
                _this._saveQuery();
            }
            catch (err) {
                Logger.write(err + " - " + _this.LOG_SOURCE + " (_onChangedArranged)", 3 /* Error */);
            }
        };
        _this._onChangedMax = function (newValue) {
            _this.stateCopy.max = newValue;
            _this._saveQuery();
        };
        _this._onClickAddFilter = function (elm) {
            _this.stateCopy.filters = __spreadArrays(_this.stateCopy.filters, [{}]);
            _this._saveQuery();
        };
        _this._onClickRemoveFilter = function (index) {
            if (index > -1) {
                _this.stateCopy.filters = __spreadArrays(_this.stateCopy.filters.splice(index, 1));
                _this._saveQuery();
            }
        };
        _this._onChangedFilterType = function (option, index) {
            _this.stateCopy.filterType = option.key.toString();
            _this._saveQuery();
        };
        _this._onChangedFilterField = function (option, index, selectedIndex) {
            try {
                var filters = JSON.parse(JSON.stringify(_this.stateCopy.filters));
                filters[selectedIndex].field = option.key;
                _this.stateCopy.filters = filters;
                _this._saveQuery();
            }
            catch (err) {
                Logger.write(err + " - " + _this.LOG_SOURCE + " (_onChangedFilterField)", 3 /* Error */);
            }
        };
        _this._onChangedFilterOperator = function (option, index, selectedIndex) {
            try {
                var filters = JSON.parse(JSON.stringify(_this.stateCopy.filters));
                filters[selectedIndex].operator = option.key;
                _this.stateCopy.filters = filters;
                _this._saveQuery();
            }
            catch (err) {
                Logger.write(err + " - " + _this.LOG_SOURCE + " (_onChangedFilterOperator)", 3 /* Error */);
            }
        };
        _this._onChangedFilterValue = function (value, index) {
            try {
                var filters = JSON.parse(JSON.stringify(_this.stateCopy.filters));
                filters[index].value = value;
                _this.stateCopy.filters = filters;
                _this._saveQuery();
            }
            catch (err) {
                Logger.write(err + " - " + _this.LOG_SOURCE + " (_onChangedFilterValue)", 3 /* Error */);
            }
        };
        _this._onChangedFieldMapping = function (option, index) {
            try {
                var fieldMappings = JSON.parse(JSON.stringify(_this.stateCopy.fieldMappings));
                fieldMappings[index].mappedTo = option.key.toString();
                _this.stateCopy.fieldMappings = fieldMappings;
                _this._saveQuery();
            }
            catch (err) {
                Logger.write(err + " - " + _this.LOG_SOURCE + " (_onChangedFieldMapping)", 3 /* Error */);
            }
        };
        // private _onChangedFieldMappingEnabled(sender: FormEvent<HTMLElement | HTMLInputElement>, checked?: boolean, index?: number) {
        //   try {
        //     let fieldMappings = JSON.parse(JSON.stringify(this.stateCopy.fieldMappings));
        //     fieldMappings[index].enabled = checked;
        //     this.stateCopy.fieldMappings = fieldMappings;
        //     this._saveQuery();
        //   } catch (err) {
        //     Logger.write(`${err} - ${this.LOG_SOURCE} (_onChangedFieldMappingEnabled)`, LogLevel.Error);
        //   }
        // }
        _this._openCreateNewListDialog = function (element) {
            _this.stateCopy.isCreateOpen = true;
            _this.setState(_this.stateCopy);
        };
        _this._changeNewListTitle = function (event, newValue) {
            _this.stateCopy.newListTitle = newValue;
            _this.setState(_this.stateCopy);
        };
        _this._createNewList = function (element) { return __awaiter(_this, void 0, void 0, function () {
            var desc, result, f, fieldResult, fieldViewResult, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 10, , 11]);
                        desc = 'List created by an SPFX webpart';
                        return [4 /*yield*/, sp.web.lists.add(this.stateCopy.newListTitle, desc, 100)];
                    case 1:
                        result = _a.sent();
                        if (!(result.data && hOP(result.data, "Id") && hOP(result.data, "Title"))) return [3 /*break*/, 9];
                        this.stateCopy.selectedList.id = result.data.Id;
                        this.stateCopy.selectedList.title = result.data.Title;
                        this.setState(this.stateCopy);
                        if (!this.props.createTitleRequired) return [3 /*break*/, 3];
                        return [4 /*yield*/, result.list.fields.getByTitle('Title').update({ Required: false })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        f = 0;
                        _a.label = 4;
                    case 4:
                        if (!(f < this.props.createFields.length)) return [3 /*break*/, 8];
                        return [4 /*yield*/, result.list.fields.createFieldAsXml(this.props.createFields[f])];
                    case 5:
                        fieldResult = _a.sent();
                        return [4 /*yield*/, sp.web.lists.getById(this.stateCopy.selectedList.id).defaultView.fields.add(fieldResult.data.InternalName)];
                    case 6:
                        fieldViewResult = _a.sent();
                        _a.label = 7;
                    case 7:
                        f++;
                        return [3 /*break*/, 4];
                    case 8:
                        this._saveAndReloadData();
                        _a.label = 9;
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        err_3 = _a.sent();
                        Logger.write(err_3 + " - " + this.LOG_SOURCE + " (_createNewList)", 3 /* Error */);
                        return [3 /*break*/, 11];
                    case 11: return [2 /*return*/];
                }
            });
        }); };
        _this._saveAndReloadData = function () {
            try {
                _this._saveQuery();
                _this._loadLists();
                //Added boolean to trigger updating the default view.
                _this._loadFields(_this.stateCopy.selectedList);
                _this.stateCopy.newListTitle = "";
                _this.stateCopy.isCreateOpen = false;
                _this.setState(_this.stateCopy);
            }
            catch (err) {
                Logger.write(err + " - " + _this.LOG_SOURCE + " (_saveAndReloadData)", 3 /* Error */);
            }
        };
        _this._cancelListCreate = function (element) {
            try {
                _this.stateCopy.isCreateOpen = false;
                _this.stateCopy.newListTitle = "";
                _this.setState(_this.stateCopy);
            }
            catch (err) {
                Logger.write(err + " - " + _this.LOG_SOURCE + " (_cancelListCreate)", 3 /* Error */);
            }
        };
        _this._openListInNewTab = function () { return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sp.web.lists.getById(this.stateCopy.selectedList.id).defaultView.get()];
                    case 1:
                        data = _a.sent();
                        if (data.ServerRelativeUrl && data.ServerRelativeUrl.length > 0)
                            window.open(data.ServerRelativeUrl);
                        return [2 /*return*/];
                }
            });
        }); };
        try {
            var stateObj = {
                max: 30,
                selectedList: {},
                sort: {},
                fieldMappings: [],
                filterType: "",
                filters: []
            };
            if (_this.props && _this.props.properties[_this.props.dataPropertyPath]) {
                stateObj = JSON.parse(_this.props.properties[_this.props.dataPropertyPath]);
                var currMappings_1 = __spreadArrays(stateObj.fieldMappings);
                stateObj.fieldMappings = [];
                _this.props.fieldMappings.map(function (item, index) {
                    var mapping = '';
                    for (var _i = 0, currMappings_2 = currMappings_1; _i < currMappings_2.length; _i++) {
                        var map = currMappings_2[_i];
                        if (item.name === map.name)
                            mapping = map.mappedTo;
                    }
                    stateObj.fieldMappings.push({
                        name: item.name,
                        type: item.type,
                        requiredLevel: item.requiredLevel,
                        enabled: item.requiredLevel === SPFieldRequiredLevel.Required,
                        mappedTo: mapping
                    });
                });
                for (var _i = 0, _a = _this.props.fieldMappings; _i < _a.length; _i++) {
                    var i = _a[_i];
                    var exists = false;
                    for (var _b = 0, _c = stateObj.fieldMappings; _b < _c.length; _b++) {
                        var j = _c[_b];
                        if (i.name === j.name)
                            exists = true;
                        continue;
                    }
                    if (!exists) {
                        stateObj.fieldMappings.push(i);
                    }
                }
            }
            _this.state = _this.stateCopy = {
                loadedList: false,
                loadedFields: false,
                lists: [],
                fields: new List(),
                arranged: [{ key: SortDirection.Ascending, text: 'Ascending' }, { key: SortDirection.Descending, text: 'Descending' }],
                selectedList: stateObj.selectedList ? stateObj.selectedList : {},
                sort: stateObj.sort ? stateObj.sort : {},
                operators: [
                    { key: 'Eq', text: strings.SPListQueryOperatorEq },
                    { key: 'Ne', text: strings.SPListQueryOperatorNe },
                    { key: 'startsWith', text: strings.SPListQueryOperatorStartsWith },
                    { key: 'substringof', text: strings.SPListQueryOperatorSubstringof },
                    { key: 'Lt', text: strings.SPListQueryOperatorLt },
                    { key: 'Le', text: strings.SPListQueryOperatorLe },
                    { key: 'Gt', text: strings.SPListQueryOperatorGt },
                    { key: 'Ge', text: strings.SPListQueryOperatorGe }
                ],
                filters: stateObj.filters,
                filterType: stateObj.filterType ? stateObj.filterType : strings.SPListFilterCompareAll,
                fieldMappings: stateObj.fieldMappings,
                max: stateObj.max ? stateObj.max : 100,
                errorMessage: '',
                isCreateOpen: false,
                newListTitle: ""
            };
            _this.async = new Async(_this);
            _this.delayedValidate = _this.async.debounce(_this._validate, _this.props.deferredValidationTime);
        }
        catch (err) {
            Logger.write(err + " - " + _this.LOG_SOURCE + " (constructor)", 3 /* Error */);
        }
        return _this;
    }
    Object.defineProperty(PropertyFieldCamlQueryFieldMappingHost.prototype, "stateCopy", {
        get: function () {
            return this._stateCopy;
        },
        set: function (value) {
            this._stateCopy = value;
        },
        enumerable: false,
        configurable: true
    });
    PropertyFieldCamlQueryFieldMappingHost.prototype.componentDidMount = function () {
        this._loadLists();
        this._loadFields(this.state.selectedList);
    };
    /**
     * @function
     * Called when the component will unmount
     */
    PropertyFieldCamlQueryFieldMappingHost.prototype.componentWillUnmount = function () {
        this.async.dispose();
    };
    /**
     * @function
     * Renders the controls
     */
    PropertyFieldCamlQueryFieldMappingHost.prototype.render = function () {
        var _this = this;
        try {
            if (this.stateCopy.loadedList === false) {
                return (React.createElement("div", null,
                    React.createElement(Label, null, this.props.label),
                    React.createElement(Spinner, { type: SpinnerType.normal })));
            }
            //Renders content
            return (React.createElement("div", null,
                this.props.showCreate &&
                    React.createElement("div", null,
                        React.createElement(Dialog, { type: DialogType.close, isOpen: this.state.isCreateOpen, title: strings.SPListCreate, containerClassName: styles.msDialogMainCustom, onDismiss: this._cancelListCreate, isDarkOverlay: true, isBlocking: false },
                            React.createElement(TextField, { value: this.state.newListTitle, placeholder: strings.SPListCreatePlaceholder, onChange: this._changeNewListTitle, required: true }),
                            React.createElement("div", { style: { marginTop: '30px', marginBottom: '30px' } },
                                React.createElement(Button, { buttonType: ButtonType.primary, onClick: this._createNewList }, strings.CreateButton),
                                React.createElement(Button, { buttonType: ButtonType.normal, onClick: this._cancelListCreate }, strings.CancelButton))),
                        React.createElement(Button, { iconProps: { iconName: "Add" }, disabled: this.props.disabled, buttonType: ButtonType.command, onClick: this._openCreateNewListDialog }, strings.SPListCreate)),
                React.createElement(Label, { hidden: !this.props.label }, this.props.label),
                React.createElement(Dropdown, { label: strings.SPListQueryList, onChanged: this._onChangedList, options: this.state.lists.map(function (l) { return { key: l.id, text: l.title }; }), selectedKey: this.state.selectedList.id, disabled: this.props.disabled }),
                React.createElement(CommandButton, { iconProps: { iconName: "Edit" }, disabled: this.props.disabled, buttonType: ButtonType.command, onClick: function () { return _this._openListInNewTab(); } }, strings.SPListQueryOpenList),
                this.state.fieldMappings.map(function (mapping, index) {
                    return (React.createElement(Dropdown, { label: mapping.name, disabled: _this.props.disabled === false && _this.state.selectedList != null && _this.state.selectedList != '' ? false : true, options: _this._getFieldList(mapping.type), selectedKey: mapping.mappedTo, onChanged: function (option, selectIndex) { return _this._onChangedFieldMapping(option, index); } }));
                }),
                this.props.showOrderBy != false ?
                    React.createElement("div", null,
                        React.createElement(Dropdown, { label: strings.SPListQueryOrderBy, options: this.state.fields.Select(function (f) { return { key: f.internalName, text: f.name }; }).ToArray(), selectedKey: this.state.sort.title, onChanged: this._onChangedField, disabled: this.props.disabled === false && this.state.selectedList != null && this.state.selectedList != '' ? false : true }),
                        React.createElement(Dropdown, { label: strings.SPListQueryArranged, options: this.state.arranged, selectedKey: this.state.sort.direction, onChanged: this._onChangedArranged, disabled: this.props.disabled === false && this.state.selectedList != null && this.state.selectedList != '' ? false : true }))
                    : '',
                this.props.showMax != false ?
                    React.createElement(Slider, { label: strings.SPListQueryMax, min: 1, className: styles["slider"], max: this.props.max == null ? 100 : this.props.max, defaultValue: this.state.max, onChange: this._onChangedMax, disabled: this.props.disabled === false && this.state.selectedList != null && this.state.selectedList != '' ? false : true })
                    : '',
                this.state.filters != null && this.state.filters.length > 1 ?
                    React.createElement(Dropdown, { label: strings.SPListFilterCompareType, disabled: this.props.disabled, options: [
                            { key: strings.SPListFilterCompareAll, text: strings.SPListFilterCompareAll, selected: true },
                            { key: strings.SPListFilterCompareAny, text: strings.SPListFilterCompareAny }
                        ], selectedKey: this.state.filterType, onChanged: this._onChangedFilterType.bind(this) })
                    : '',
                this.state.filters != null && this.state.filters.length > 0 ?
                    this.state.filters.map(function (value, index) {
                        return (React.createElement("div", null,
                            React.createElement(Label, null, "Filter"),
                            React.createElement(Dropdown, { label: '', disabled: _this.props.disabled, options: _this.state.fields.Select(function (f) { return { key: f.internalName, text: f.name }; }).ToArray(), selectedKey: value.field, onChanged: function (option, selectIndex) { return _this._onChangedFilterField(option, selectIndex, index); } }),
                            React.createElement(Dropdown, { label: '', disabled: _this.props.disabled, options: _this.state.operators, selectedKey: value.operator, onChanged: function (option, selectIndex) { return _this._onChangedFilterOperator(option, selectIndex, index); } }),
                            React.createElement(TextField, { disabled: _this.props.disabled, defaultValue: value.value, onChange: function (ev, value2) { return _this._onChangedFilterValue(value2, index); } }),
                            React.createElement(Button, { disabled: _this.props.disabled, buttonType: ButtonType.command, onClick: function () { return _this._onClickRemoveFilter(index); }, iconProps: { iconName: "Delete" } }, strings.SPListQueryRemove)));
                    })
                    : '',
                this.props.showFilters != false ?
                    React.createElement(Button, { buttonType: ButtonType.command, onClick: this._onClickAddFilter, disabled: this.props.disabled === false && this.state.selectedList != null && this.state.selectedList != '' ? false : true, iconProps: { iconName: "Add" } }, strings.SPListQueryAdd)
                    : '',
                this.state.errorMessage != null && this.state.errorMessage != '' && this.state.errorMessage != undefined ?
                    React.createElement("div", { style: { paddingBottom: '8px' } },
                        React.createElement("div", { "aria-live": 'assertive', className: 'ms-u-screenReaderOnly', "data-automation-id": 'error-message' }, this.state.errorMessage),
                        React.createElement("span", null,
                            React.createElement("p", { className: 'ms-TextField-errorMessage ms-u-slideDownIn20' }, this.state.errorMessage)))
                    : ''));
        }
        catch (err) {
            Logger.write(err + " - " + this.LOG_SOURCE + " (render)", 3 /* Error */);
        }
    };
    return PropertyFieldCamlQueryFieldMappingHost;
}(React.Component));
export default PropertyFieldCamlQueryFieldMappingHost;
//# sourceMappingURL=PropertyFieldCamlQueryFieldMappingHost.js.map
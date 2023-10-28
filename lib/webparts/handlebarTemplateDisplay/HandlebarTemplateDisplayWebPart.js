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
import "core-js/stable/array/from";
import "core-js/stable/array/fill";
import "core-js/stable/array/iterator";
import "core-js/stable/promise";
import "core-js/stable/reflect";
import "es6-map/implement";
//import "core-js/stable/symbol";
import "whatwg-fetch";
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version, DisplayMode } from '@microsoft/sp-core-library';
import { SPHttpClient } from '@microsoft/sp-http';
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { PropertyPaneTextField, PropertyPaneButton, PropertyPaneButtonType, PropertyPaneLink, PropertyPaneLabel, PropertyPaneToggle, PropertyPaneCheckbox } from "@microsoft/sp-property-pane";
import * as Handlebars from 'handlebars';
import * as strings from 'handlebarTemplateDisplayStrings';
import HandlebarTemplateDisplay from './components/HandlebarTemplateDisplay';
import { PropertyFieldCamlQueryFieldMapping, PropertyFieldCamlQueryOrderBy } from "../../propertyPane/propertyFieldCamlQueryFieldMapping/PropertyFieldCamlQueryFieldMapping";
import QueryStringParser from "../../utilities/urlparser/queryStringParser";
import { sp } from "@pnp/sp";
import "@pnp/sp/search";
import { SearchQueryBuilder } from "@pnp/sp/search";
import { PropertyPaneSearch } from '../../propertyPane/PropertyPaneSearch/PropertyFieldSearch';
import { WebPartLogger } from '../../utilities/webpartlogger/usagelogger';
var HandlebarTemplateDisplayWebPart = /** @class */ (function (_super) {
    __extends(HandlebarTemplateDisplayWebPart, _super);
    function HandlebarTemplateDisplayWebPart() {
        var _this = _super.call(this) || this;
        _this.onPropertyPaneFieldChanged = _this.onPropertyPaneFieldChanged.bind(_this);
        return _this;
    }
    HandlebarTemplateDisplayWebPart.prototype.onInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ie11Mode;
            return __generator(this, function (_a) {
                ie11Mode = (!!window.MSInputMethodContext && !!document["documentMode"]);
                sp.setup({ ie11: ie11Mode, spfxContext: this.context });
                if (this.displayMode !== DisplayMode.Edit)
                    WebPartLogger.logUsage(this.context);
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(HandlebarTemplateDisplayWebPart.prototype, "fields", {
        get: function () {
            return this._fields;
        },
        set: function (v) {
            this._fields = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HandlebarTemplateDisplayWebPart.prototype, "webpart", {
        get: function () {
            return this._webpart;
        },
        set: function (v) {
            this._webpart = v;
        },
        enumerable: false,
        configurable: true
    });
    HandlebarTemplateDisplayWebPart.prototype.render = function () {
        var _this = this;
        var propData = this.properties.listQueryData ? JSON.parse(this.properties.listQueryData) : { fieldMappings: [], selectedList: {} };
        var element = React.createElement(HandlebarTemplateDisplay, {
            isEdit: this.displayMode === DisplayMode.Edit,
            isSearch: this.properties.usesSearchSource,
            title: this.properties.title,
            items: [],
            templateUrl: this.properties.handlebarTemplateUrl,
            template: "",
            isOptimized: this.properties.optimizedTemplate,
            webUrl: this.context.pageContext.web.absoluteUrl,
            instanceId: this.context.instanceId,
            serverRelativeUrl: window.location.pathname,
            cssUrl: this.properties.cssUrl,
            jsUrl: this.properties.jsUrl,
            context: this.context,
            listIsSelected: propData.selectedList.id !== undefined,
            containerClass: this.properties.containerClass,
            setTitle: this.setTitle.bind(this),
            setTemplateUrl: this.setTemplateUrl.bind(this),
            setStyleUrl: this.setCSSUrl.bind(this),
            setScriptUrl: this.setJSUrl.bind(this)
        });
        if (propData.selectedList.id && !this.properties.usesSearchSource) {
            sp.web.lists.getById(propData.selectedList.id).renderListDataAsStream({ ViewXml: QueryStringParser.ReplaceQueryStringParameters(this.properties.listQuery), AllowMultipleValueFilterForTaxonomyFields: true }, {}).then(function (response) {
                response.Row.forEach(function (value) {
                    for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                        var prop = _a[_i];
                        if (Object.keys(value).indexOf(prop + ".desc") > -1) {
                            var propVal = value[prop];
                            delete value[prop];
                            value[prop] = {
                                Url: propVal
                            };
                        }
                        else {
                            var split = prop.split('.');
                            if (split.length === 2 && split[1] === "desc") {
                                var propReplace = prop.substring(0, prop.indexOf('.desc'));
                                value[propReplace].Description = value[prop];
                                delete value[prop];
                            }
                        }
                    }
                    element.props.items.push(value);
                });
                if (_this.properties.optimizedTemplate && _this.displayMode === DisplayMode.Edit) {
                    _this.context.spHttpClient.get(_this.properties.handlebarTemplateUrl, SPHttpClient.configurations.v1, { method: "GET", mode: "no-cors" }).then(function (templateResponse) {
                        templateResponse.text().then(function (s) {
                            var template = Handlebars.precompile(s);
                            _this.properties.precompiledTemplate = template.toString();
                            element.props.template = template;
                            _this.webpart = ReactDom.render(element, _this.domElement);
                        });
                    });
                }
                else if (_this.properties.optimizedTemplate) {
                    element.props.template = _this.properties.precompiledTemplate;
                    _this.webpart = ReactDom.render(element, _this.domElement);
                }
                else {
                    _this.context.spHttpClient.get(_this.properties.handlebarTemplateUrl, SPHttpClient.configurations.v1, { method: "GET", mode: "no-cors" }).then(function (templateResponse) {
                        templateResponse.text().then(function (s) {
                            element.props.template = s;
                            _this.webpart = ReactDom.render(element, _this.domElement);
                        });
                    }).catch(function (error) {
                        _this.webpart = ReactDom.render(element, _this.domElement);
                    });
                }
            }).catch(function (error) {
                _this.webpart = ReactDom.render(element, _this.domElement);
            });
        }
        else if (this.properties.usesSearchSource) {
            var searchData = this.properties.searchSource ? JSON.parse(this.properties.searchSource) :
                {
                    query: '',
                    selectProperties: '',
                    sort: [],
                    rows: 10
                };
            var sqb = SearchQueryBuilder();
            if (searchData.query)
                sqb.template(searchData.query);
            if (searchData.sort && searchData.sort.length > 0)
                sqb.sortList(searchData.sort);
            if (searchData.selectProperties)
                sqb.selectProperties(searchData.selectProperties.split(';'));
            sqb.rowLimit(searchData.rows);
            sqb.rowsPerPage(searchData.rows);
            sqb.clientType("HandlebarTemplateDisplayWebPart");
            sqb.sourceId(this.instanceId);
            sqb.properties({ Name: "TrimSelectProperties", Value: { StrVal: "1", QueryPropertyValueTypeIndex: 1 } }, { Name: "EnableDynamicGroups", Value: { BoolVal: false, QueryPropertyValueTypeIndex: 3 } });
            var request = sqb.toSearchQuery();
            request.SortList = searchData.sort;
            sp.search(sqb).then(function (response) {
                element.props.items = response.PrimarySearchResults;
                if (_this.properties.optimizedTemplate && _this.displayMode === DisplayMode.Edit) {
                    _this.context.spHttpClient.get(_this.properties.handlebarTemplateUrl, SPHttpClient.configurations.v1).then(function (templateResponse) {
                        templateResponse.text().then(function (s) {
                            var template = Handlebars.precompile(s);
                            _this.properties.precompiledTemplate = template.toString();
                            element.props.template = template;
                            _this.webpart = ReactDom.render(element, _this.domElement);
                        });
                    });
                }
                else if (_this.properties.optimizedTemplate) {
                    element.props.template = _this.properties.precompiledTemplate;
                    _this.webpart = ReactDom.render(element, _this.domElement);
                }
                else {
                    _this.context.spHttpClient.get(_this.properties.handlebarTemplateUrl, SPHttpClient.configurations.v1).then(function (templateResponse) {
                        templateResponse.text().then(function (s) {
                            element.props.template = s;
                            _this.webpart = ReactDom.render(element, _this.domElement);
                        });
                    }).catch(function (error) {
                        _this.webpart = ReactDom.render(element, _this.domElement);
                    });
                }
            }).catch(function (error) {
                _this.webpart = ReactDom.render(element, _this.domElement);
            });
        }
        else {
            this.webpart = ReactDom.render(element, this.domElement);
        }
    };
    Object.defineProperty(HandlebarTemplateDisplayWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: false,
        configurable: true
    });
    HandlebarTemplateDisplayWebPart.prototype.getPropertyPaneConfiguration = function () {
        return this.properties.usesSearchSource ? this.getSearchBackedPropertyPaneConfiguration() : this.getListBackedPropertyPaneConfiguration();
    };
    HandlebarTemplateDisplayWebPart.prototype.getListBackedPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneToggle("usesSearchSource", {
                                    offText: strings.ListLabel,
                                    onText: strings.SearchLabel,
                                    label: strings.SearchToggleLabel
                                }),
                                PropertyFieldCamlQueryFieldMapping('listQuery', {
                                    label: strings.QueryFieldLabel,
                                    dataPropertyPath: 'listQueryData',
                                    query: this.properties.listQuery,
                                    fieldMappings: [],
                                    createFields: [],
                                    createTitleRequired: false,
                                    includeHidden: false,
                                    orderBy: PropertyFieldCamlQueryOrderBy.Title,
                                    showOrderBy: true,
                                    showFilters: true,
                                    showMax: true,
                                    showCreate: false,
                                    render: this.render.bind(this),
                                    onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                                    context: this.context,
                                    properties: this.properties,
                                    disabled: false,
                                    onGetErrorMessage: null,
                                    deferredValidationTime: 0,
                                    key: 'spListQueryFieldId'
                                }),
                                PropertyPaneLabel("templateLabel", {
                                    text: strings.TemplateFieldLabel,
                                }),
                                PropertyPaneLink("handlebarTemplateUrl", {
                                    href: this.properties.handlebarTemplateUrl,
                                    text: this.properties.handlebarTemplateUrl,
                                    target: '_blank'
                                }),
                                PropertyPaneButton("templateChange", {
                                    text: strings.TemplateFieldButtonText,
                                    buttonType: PropertyPaneButtonType.Primary,
                                    onClick: this.openTemplateSelector.bind(this)
                                }),
                                PropertyPaneCheckbox('optimizedTemplate', {
                                    text: strings.OptimizedTemplateLabel
                                }),
                                PropertyPaneLabel("optimizedTemplate", {
                                    text: strings.OptimizedTemplateDescription
                                }),
                                PropertyPaneLabel("cssLabel", {
                                    text: strings.StyleFieldLabel,
                                }),
                                PropertyPaneLink("cssUrl", {
                                    href: this.properties.cssUrl,
                                    text: this.properties.cssUrl,
                                    target: '_blank'
                                }),
                                PropertyPaneButton("cssChange", {
                                    text: strings.StyleFieldButtonText,
                                    buttonType: PropertyPaneButtonType.Primary,
                                    onClick: this.openStyleSelector.bind(this)
                                }),
                                PropertyPaneLabel("jsLabel", {
                                    text: strings.ScriptFieldLabel,
                                }),
                                PropertyPaneLink("jsUrl", {
                                    href: this.properties.jsUrl,
                                    text: this.properties.jsUrl,
                                    target: '_blank'
                                }),
                                PropertyPaneButton("jsChange", {
                                    text: strings.ScriptFieldButtonText,
                                    buttonType: PropertyPaneButtonType.Primary,
                                    onClick: this.openScriptSelector.bind(this)
                                }),
                                PropertyPaneTextField("containerClass", {
                                    label: strings.ContainerClassLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    HandlebarTemplateDisplayWebPart.prototype.getSearchBackedPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneToggle("usesSearchSource", {
                                    offText: strings.ListLabel,
                                    onText: strings.SearchLabel,
                                    label: strings.SearchToggleLabel
                                }),
                                PropertyPaneSearch('searchSource', {
                                    properties: this.properties,
                                    render: this.render.bind(this),
                                    key: 'search',
                                    onPropertyChange: this.onPropertyPaneFieldChanged.bind(this)
                                }),
                                PropertyPaneLabel("templateLabel", {
                                    text: strings.TemplateFieldLabel,
                                }),
                                PropertyPaneLink("handlebarTemplateUrl", {
                                    href: this.properties.handlebarTemplateUrl,
                                    text: this.properties.handlebarTemplateUrl,
                                    target: '_blank'
                                }),
                                PropertyPaneButton("templateChange", {
                                    text: strings.TemplateFieldButtonText,
                                    buttonType: PropertyPaneButtonType.Primary,
                                    onClick: this.openTemplateSelector.bind(this)
                                }),
                                PropertyPaneCheckbox('optimizedTemplate', {
                                    text: strings.OptimizedTemplateLabel
                                }),
                                PropertyPaneLabel("optimizedTemplate", {
                                    text: strings.OptimizedTemplateDescription
                                }),
                                PropertyPaneLabel("cssLabel", {
                                    text: strings.StyleFieldLabel,
                                }),
                                PropertyPaneLink("cssUrl", {
                                    href: this.properties.cssUrl,
                                    text: this.properties.cssUrl,
                                    target: '_blank'
                                }),
                                PropertyPaneButton("cssChange", {
                                    text: strings.StyleFieldButtonText,
                                    buttonType: PropertyPaneButtonType.Primary,
                                    onClick: this.openStyleSelector.bind(this)
                                }),
                                PropertyPaneLabel("jsLabel", {
                                    text: strings.ScriptFieldLabel,
                                }),
                                PropertyPaneLink("jsUrl", {
                                    href: this.properties.jsUrl,
                                    text: this.properties.jsUrl,
                                    target: '_blank'
                                }),
                                PropertyPaneButton("jsChange", {
                                    text: strings.ScriptFieldButtonText,
                                    buttonType: PropertyPaneButtonType.Primary,
                                    onClick: this.openScriptSelector.bind(this)
                                }),
                                PropertyPaneTextField("containerClass", {
                                    label: strings.ContainerClassLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    HandlebarTemplateDisplayWebPart.prototype.openTemplateSelector = function (event) {
        this.webpart.openTemplateLinkPicker();
    };
    HandlebarTemplateDisplayWebPart.prototype.openStyleSelector = function (event) {
        this.webpart.openStyleLinkPicker();
    };
    HandlebarTemplateDisplayWebPart.prototype.openScriptSelector = function (event) {
        this.webpart.openScriptLinkPicker();
    };
    HandlebarTemplateDisplayWebPart.prototype.setTitle = function (title) {
        this.properties.title = title;
    };
    HandlebarTemplateDisplayWebPart.prototype.setTemplateUrl = function (url, name) {
        var oldUrl = this.properties.handlebarTemplateUrl;
        this.properties.handlebarTemplateUrl = url;
        this.onPropertyPaneFieldChanged("handlebarTemplateUrl", oldUrl, url);
        this.render();
        this.context.propertyPane.refresh();
    };
    HandlebarTemplateDisplayWebPart.prototype.setCSSUrl = function (url, name) {
        var oldUrl = this.properties.cssUrl;
        this.properties.cssUrl = url;
        this.onPropertyPaneFieldChanged("cssUrl", oldUrl, url);
        this.render();
        this.context.propertyPane.refresh();
    };
    HandlebarTemplateDisplayWebPart.prototype.setJSUrl = function (url, name) {
        var oldUrl = this.properties.jsUrl;
        this.properties.jsUrl = url;
        this.onPropertyPaneFieldChanged("jsUrl", oldUrl, url);
        this.render();
        this.context.propertyPane.refresh();
    };
    return HandlebarTemplateDisplayWebPart;
}(BaseClientSideWebPart));
export default HandlebarTemplateDisplayWebPart;
//# sourceMappingURL=HandlebarTemplateDisplayWebPart.js.map
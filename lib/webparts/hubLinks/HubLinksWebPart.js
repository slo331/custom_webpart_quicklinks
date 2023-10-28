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
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { SPComponentLoader } from '@microsoft/sp-loader';
import { PropertyPaneButton, PropertyPaneButtonType, PropertyPaneCheckbox, PropertyPaneLabel, PropertyPaneLink, PropertyPaneTextField, PropertyPaneToggle, PropertyPaneChoiceGroup } from "@microsoft/sp-property-pane";
import { PropertyFieldSwatchColorPicker, PropertyFieldSwatchColorPickerStyle } from '@pnp/spfx-property-controls/lib/PropertyFieldSwatchColorPicker';
import { Logger, ConsoleListener } from "@pnp/logging";
import * as strings from 'hubLinksStrings';
import HubLinks from './components/HubLinks';
import { HubLinksItem, HubLinksItemHeading, HubLinksGroupItem } from './components/IHubLinksItem';
import { HubLinksLayout } from './components/layouts/HubLinksLayout';
import { PropertyFieldCamlQueryFieldMapping, SPFieldType, SPFieldRequiredLevel, PropertyFieldCamlQueryOrderBy } from '../../propertyPane/propertyFieldCamlQueryFieldMapping/PropertyFieldCamlQueryFieldMapping';
import { PropertyPaneGroupSort } from '../../propertyPane/propertyFieldGroupSort/PropertyFieldGroupSort';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import QueryStringParser from "../../utilities/urlparser/queryStringParser";
import { WebPartLogger } from '../../utilities/webpartlogger/usagelogger';
var titleField = "Title";
var urlField = "URL";
var iconField = "Icon";
var groupingField = "GroupBy";
var descriptionField = "Description";
var openNewTabField = "NewTab";
var HubLinksWebPart = /** @class */ (function (_super) {
    __extends(HubLinksWebPart, _super);
    function HubLinksWebPart() {
        var _this = _super.call(this) || this;
        _this.LOG_SOURCE = "HubLinksWebPart";
        _this._activeIndex = -1;
        _this._itemPropertyPane = false;
        return _this;
    }
    HubLinksWebPart.prototype.onInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ie11Mode, urls_1;
            return __generator(this, function (_a) {
                //Initialize PnPLogger
                Logger.subscribe(new ConsoleListener());
                Logger.activeLogLevel = 1 /* Info */;
                try {
                    ie11Mode = (!!window.MSInputMethodContext && !!document["documentMode"]);
                    sp.setup({ ie11: ie11Mode, spfxContext: this.context });
                    SPComponentLoader.loadCss('https://use.fontawesome.com/releases/v5.14.0/css/all.css');
                    urls_1 = [];
                    if (this.properties.data) {
                        this.properties.hubLinksItems.forEach(function (element) {
                            if (element.URL)
                                urls_1.push(element.URL);
                        });
                    }
                    //Change theme colors of web part to expected values
                    if (!this.properties.tileColorProp)
                        this.properties.tileColorProp = "primaryText";
                    if (!this.properties.tileColor)
                        this.properties.tileColor = window["__themeState__"]["theme"][this.properties.tileColorProp];
                    else if (this.properties.tileColor !== window["__themeState__"]["theme"][this.properties.tileColorProp])
                        this.properties.tileColor = window["__themeState__"]["theme"][this.properties.tileColorProp];
                    if (!this.properties.tileBorderColorProp)
                        this.properties.tileBorderColorProp = "themePrimary";
                    if (!this.properties.tileBorderColor)
                        this.properties.tileBorderColor = window["__themeState__"]["theme"][this.properties.tileBorderColorProp];
                    else if (this.properties.tileBorderColor !== window["__themeState__"]["theme"][this.properties.tileBorderColorProp])
                        this.properties.tileBorderColor = window["__themeState__"]["theme"][this.properties.tileBorderColorProp];
                    if (!this.properties.tileBackgroundColorProp)
                        this.properties.tileBackgroundColorProp = "white";
                    if (!this.properties.tileBackgroundColor)
                        this.properties.tileBackgroundColor = window["__themeState__"]["theme"][this.properties.tileBackgroundColorProp];
                    else if (this.properties.tileBackgroundColor !== window["__themeState__"]["theme"][this.properties.tileBackgroundColorProp])
                        this.properties.tileBackgroundColor = window["__themeState__"]["theme"][this.properties.tileBackgroundColorProp];
                    if (this.displayMode !== DisplayMode.Edit)
                        WebPartLogger.logUsage(this.context, urls_1);
                }
                catch (err) {
                    Logger.write(err + " - " + this.LOG_SOURCE + " (onInit)", 3 /* Error */);
                }
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(HubLinksWebPart.prototype, "webpart", {
        get: function () {
            return this._webpart;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HubLinksWebPart.prototype, "activeIndex", {
        get: function () {
            return this._activeIndex;
        },
        set: function (v) {
            this._activeIndex = v;
        },
        enumerable: false,
        configurable: true
    });
    HubLinksWebPart.prototype._groupItems = function (items, groups) {
        var retArray = [];
        try {
            var groupId_1 = 1;
            if (groups) {
                //Group order defined
                groups.forEach(function (grp) {
                    retArray.push(new HubLinksGroupItem(new HubLinksItemHeading(grp, groupId_1), []));
                    groupId_1++;
                });
            }
            items.forEach(function (link, idx) {
                link.index = idx.toString();
                var newLink = JSON.parse(JSON.stringify(link));
                var newGroup = true;
                newLink[groupingField] = link[groupingField] ? link[groupingField] : "Ungrouped";
                retArray.forEach(function (propLink) {
                    if (propLink.Heading.Title == newLink[groupingField]) {
                        propLink.Links.push(newLink);
                        newGroup = false;
                    }
                });
                if (newGroup) {
                    retArray.push(new HubLinksGroupItem(new HubLinksItemHeading(newLink[groupingField], groupId_1), [newLink]));
                    groupId_1++;
                }
            });
        }
        catch (err) {
            Logger.write(err + " - " + this.LOG_SOURCE + " (groupItems)", 3 /* Error */);
        }
        return retArray;
    };
    HubLinksWebPart.prototype.render = function () {
        var _this = this;
        var self = this;
        try {
            this._checkUpdateProperties();
            var element_1 = React.createElement(HubLinks, {
                defaultExpand: this.properties.defaultExpand,
                links: [],
                title: this.properties.title,
                setTitle: function (title) {
                    self.properties.title = title;
                },
                isEdit: this.displayMode === DisplayMode.Edit,
                textColor: this.properties.tileColorProp,
                borderColor: this.properties.tileBorderColorProp,
                backgroundColor: this.properties.tileBackgroundColorProp,
                hubLinksItems: this.properties.hubLinksItems,
                usesListMode: this.properties.usesListMode,
                setUrl: function (url, name) {
                    if (_this.activeIndex === -1) {
                        _this.properties.hubLinksItems.push(new HubLinksItem(null, name, url, "", "", false, "")); //strings.TitlePlaceholder
                        _this.activeIndex = _this.properties.hubLinksItems.length - 1;
                    }
                    var isDoc = false;
                    var docExtensions = ["pdf", "xls", "xlsx", "doc", "docx", "ppt", "pptx", "pptm", "dot"];
                    for (var _i = 0, docExtensions_1 = docExtensions; _i < docExtensions_1.length; _i++) {
                        var ext = docExtensions_1[_i];
                        if (url.indexOf(ext, url.length - ext.length) !== -1)
                            isDoc = true;
                    }
                    self.properties.hubLinksItems[_this.activeIndex].URL = url + (isDoc ? "?web=1" : "");
                    self.properties.hubLinksItems[_this.activeIndex].Title = name ? name : _this.properties.hubLinksItems[_this.activeIndex].Title;
                    if (!_this.context.propertyPane.isRenderedByWebPart())
                        _this.context.propertyPane.open();
                    self.context.propertyPane.refresh();
                },
                editItem: function (index) {
                    if (index === -1) {
                        _this.properties.hubLinksItems.push(new HubLinksItem(null, "")); //strings.TitlePlaceholder
                        index = _this.properties.hubLinksItems.length - 1;
                    }
                    _this.activeIndex = index;
                    _this.context.propertyPane.open();
                },
                deleteItem: function (index) {
                    _this.properties.hubLinksItems.splice(index, 1);
                    _this.render();
                },
                rearrangeItems: function (newOrder) {
                    var newArr = new Array();
                    var currArr = _this.properties.hubLinksItems;
                    for (var _i = 0, newOrder_1 = newOrder; _i < newOrder_1.length; _i++) {
                        var num = newOrder_1[_i];
                        newArr.push(_this.properties.hubLinksItems[num]);
                    }
                    _this.properties.hubLinksItems.length = 0;
                    for (var _a = 0, newArr_1 = newArr; _a < newArr_1.length; _a++) {
                        var val = newArr_1[_a];
                        _this.properties.hubLinksItems.push(val);
                    }
                },
                setGroup: function (index, group) {
                    for (var i = 0; i < _this.properties.hubLinksItems.length; i++) {
                        if (_this.properties.hubLinksItems[i].index == index)
                            _this.properties.hubLinksItems[i].GroupBy = group;
                    }
                },
                resetActiveIndex: function () {
                    _this.activeIndex = -1;
                },
                advancedCamlData: this.properties.data,
                context: this.context,
                layoutMode: this.properties.layoutMode,
                showDescription: this.properties.showDescription
            });
            if (this.properties.usesListMode) {
                var propData_1 = this.properties.data ? JSON.parse(this.properties.data) : { fieldMappings: [], selectedList: {} };
                if (propData_1.selectedList.id) {
                    sp.web.lists.getById(propData_1.selectedList.id).getItemsByCAMLQuery({ ViewXml: QueryStringParser.ReplaceQueryStringParameters(this.properties.listQuery) }).then(function (response) {
                        response.forEach(function (value) {
                            var item = {};
                            propData_1.fieldMappings.forEach(function (mapping) {
                                switch (mapping.type) {
                                    case SPFieldType.URL:
                                        item[mapping.name] = value[mapping.mappedTo] ? value[mapping.mappedTo]["Url"] : null;
                                        item[mapping.name + "_text"] = value[mapping.mappedTo] ? value[mapping.mappedTo]["Description"] : null;
                                        break;
                                    default:
                                        item[mapping.name] = value[mapping.mappedTo];
                                        break;
                                }
                            });
                            if (item[urlField] !== null) {
                                //If has GroupBy field, then make sure it exists on groups property
                                if (item.GroupBy && _this.properties.groups.indexOf(item.GroupBy) < 0) {
                                    //Group not in list, add
                                    _this.properties.groups.push(item.GroupBy);
                                }
                                element_1.props.links.push(new HubLinksItem(null, item[urlField + "_text"] === item[urlField] ? item.Title : item[urlField + "_text"], item.URL, item.Description, item.Icon, item.NewTab, item.GroupBy));
                            }
                        });
                        if (_this.properties.layoutMode == HubLinksLayout.GroupedListLayout) {
                            //If group layout, then reform the links into a grouped format
                            element_1.props.links = _this._groupItems(element_1.props.links, _this.properties.groups);
                            //Refresh property pane if visible
                            _this.context.propertyPane.refresh();
                        }
                        _this._webpart = ReactDom.render(element_1, _this.domElement);
                    }).catch(function (error) { });
                }
            }
            else {
                //If group layout, then reform the links into a grouped format
                if (this.properties.layoutMode == HubLinksLayout.GroupedListLayout) {
                    element_1.props.hubLinksItems = this._groupItems(this.properties.hubLinksItems, this.properties.groups);
                }
                this._webpart = ReactDom.render(element_1, this.domElement);
            }
        }
        catch (err) {
            Logger.write(err + " - " + this.LOG_SOURCE + " (groupItems)", 3 /* Error */);
            return null;
        }
    };
    HubLinksWebPart.prototype._checkUpdateProperties = function () {
        try {
            if (this.properties.version != this.dataVersion.toString()) {
                var dataObj = this.properties.data ? JSON.parse(this.properties.data) :
                    {
                        filter: [],
                        max: 0,
                        selectedList: {},
                        sort: {},
                        fieldMappings: [],
                        data: {}
                    };
                var groupEnabled = void 0;
                if (dataObj.fieldMappings && dataObj.fieldMappings.length > 0) {
                    groupEnabled = dataObj.fieldMappings.filter(function (item) { return item.name === "Group By"; })[0].enabled;
                }
                dataObj.fieldMappings = [
                    { name: urlField, type: SPFieldType.URL, enabled: true, requiredLevel: SPFieldRequiredLevel.Required, mappedTo: dataObj.fieldMappings.filter(function (item) { return item.name === "URL"; })[0].mappedTo },
                    { name: iconField, type: SPFieldType.Text, enabled: true, requiredLevel: SPFieldRequiredLevel.Required, mappedTo: dataObj.fieldMappings.filter(function (item) { return item.name === "Font Awesome Icon"; })[0].mappedTo },
                    { name: groupingField, type: SPFieldType.Text, enabled: true, requiredLevel: SPFieldRequiredLevel.Required, mappedTo: dataObj.fieldMappings.filter(function (item) { return item.name === "Group By"; })[0].mappedTo },
                    { name: descriptionField, type: SPFieldType.Text, enabled: true, requiredLevel: SPFieldRequiredLevel.Required },
                    { name: titleField, type: SPFieldType.Text, enabled: true, requiredLevel: SPFieldRequiredLevel.Required, mappedTo: "Title" },
                ];
                this.properties.layoutMode = groupEnabled ? HubLinksLayout.GroupedListLayout : HubLinksLayout.ListLayout;
                this.properties.usesListMode = true;
                this.properties.showDescription = false;
                this.properties.groups = [];
                this.properties.hubLinksItems = [];
                this.properties.version = this.dataVersion.toString();
                this.properties.data = JSON.stringify(dataObj);
            }
        }
        catch (err) {
            Logger.write(err + " - " + this.LOG_SOURCE + " (checkUpdateProperties)", 3 /* Error */);
        }
    };
    Object.defineProperty(HubLinksWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: false,
        configurable: true
    });
    HubLinksWebPart.prototype.openLinkSelector = function (event) {
        try {
            var currentUrl = "";
            if (this.activeIndex >= 0 && this.properties.hubLinksItems[this.activeIndex] && this.properties.hubLinksItems[this.activeIndex].URL) {
                currentUrl = this.properties.hubLinksItems[this.activeIndex].URL;
            }
            //open the link picker, sending in the current url for reference
            this.webpart.openLinkPicker(event, currentUrl);
        }
        catch (err) {
            Logger.write(err + " - " + this.LOG_SOURCE + " (openLinkSelector)", 3 /* Error */);
        }
    };
    HubLinksWebPart.prototype.itemValidation = function (length, required, errorText, value) {
        return new Promise(function (resolve) {
            if (value.length > length) {
                resolve(errorText);
            }
            else if (required && value.length < 1) {
                resolve(strings.RequiredValueErrorText);
            }
            else {
                resolve("");
            }
        });
    };
    HubLinksWebPart.prototype._updateGroupsProperty = function () {
        var _a;
        var groups = [];
        try {
            for (var i = 0; i < this.properties.hubLinksItems.length; i++) {
                var groupName = (((_a = this.properties.hubLinksItems[i].GroupBy) === null || _a === void 0 ? void 0 : _a.length) > 0) ? this.properties.hubLinksItems[i].GroupBy : "Ungrouped";
                var found = groups.indexOf(groupName) > -1;
                if (!found)
                    groups.push(groupName);
            }
        }
        catch (err) {
            Logger.write(err + " - " + this.LOG_SOURCE + " (_updateGroupsProperty) -- Error processing property field changes.", 3 /* Error */);
        }
        this.properties.groups = groups;
    };
    HubLinksWebPart.prototype.onPropertyPaneFieldChanged = function (propertyPath, oldValue, newValue) {
        try {
            var pathIdx = propertyPath.indexOf('.');
            if (propertyPath.substring(pathIdx + 1) === "usesListMode" || propertyPath.substring(pathIdx + 1) == "listQuery") {
                //Reset grouping
                this.properties.groups = [];
                _super.prototype.onPropertyPaneFieldChanged.call(this, propertyPath, oldValue, newValue);
            }
            else if (propertyPath.substring(pathIdx + 1) === "GroupBy") {
                if (oldValue != newValue) {
                    _super.prototype.onPropertyPaneFieldChanged.call(this, propertyPath, oldValue, newValue);
                    this._updateGroupsProperty();
                }
            }
            else if (propertyPath === "tileColor") {
                this.properties.tileColorProp = this.getThemeProperty(newValue);
                _super.prototype.onPropertyPaneFieldChanged.call(this, propertyPath, oldValue, newValue);
            }
            else if (propertyPath === "tileBorderColor") {
                this.properties.tileBorderColorProp = this.getThemeProperty(newValue);
                _super.prototype.onPropertyPaneFieldChanged.call(this, propertyPath, oldValue, newValue);
            }
            else if (propertyPath === "tileBackgroundColor") {
                this.properties.tileBackgroundColorProp = this.getThemeProperty(newValue);
                _super.prototype.onPropertyPaneFieldChanged.call(this, propertyPath, oldValue, newValue);
            }
            else {
                //super.onPropertyPaneFieldChanged(propertyPath, oldValue, newValue);
            }
        }
        catch (err) {
            Logger.write(err + " - " + this.LOG_SOURCE + " (onPropertyPaneFieldChanged)", 3 /* Error */);
        }
    };
    HubLinksWebPart.prototype.getThemeProperty = function (color) {
        var themePrimary = "themePrimary";
        var themePrimaryColor = window["__themeState__"]["theme"][themePrimary];
        var themeSecondary = "themeSecondary";
        var themeSecondaryColor = window["__themeState__"]["theme"][themeSecondary];
        var themeTertiary = "themeTertiary";
        var themeTertiaryColor = window["__themeState__"]["theme"][themeTertiary];
        var primaryText = "primaryText";
        var primaryTextColor = window["__themeState__"]["theme"][primaryText];
        var white = "white";
        var whiteColor = window["__themeState__"]["theme"][white];
        var black = "black";
        var blackColor = window["__themeState__"]["theme"][black];
        switch (color) {
            case themePrimaryColor: return themePrimary;
            case themeSecondaryColor: return themeSecondary;
            case themeTertiaryColor: return themeTertiary;
            case primaryTextColor: return primaryText;
            case whiteColor: return white;
            case blackColor: return black;
            default: return black;
        }
    };
    HubLinksWebPart.prototype.getPropertyPaneConfiguration = function () {
        if (this.context.propertyPane.isRenderedByWebPart())
            return this.getEditItemPropertyPane();
        return this.getBasicPropertyPane();
    };
    HubLinksWebPart.prototype.getBasicPropertyPane = function () {
        //Define base configuration
        var config = {
            pages: [
                {
                    header: {
                        description: ''
                    },
                    groups: [
                        {
                            groupName: strings.LayoutLabel,
                            isCollapsed: false,
                            groupFields: [
                                PropertyPaneChoiceGroup("layoutMode", {
                                    label: "",
                                    options: [
                                        {
                                            checked: this.properties.layoutMode === HubLinksLayout.RoundIconItemLayout,
                                            key: HubLinksLayout.RoundIconItemLayout,
                                            iconProps: { officeFabricIconFontName: "BulletedList2" },
                                            text: strings.ItemLayoutLabel
                                        },
                                        {
                                            checked: this.properties.layoutMode === HubLinksLayout.ListLayout,
                                            key: HubLinksLayout.ListLayout,
                                            iconProps: { officeFabricIconFontName: "List" },
                                            text: strings.ListLayoutLabel
                                        },
                                        {
                                            checked: this.properties.layoutMode === HubLinksLayout.GroupedListLayout,
                                            key: HubLinksLayout.GroupedListLayout,
                                            iconProps: { officeFabricIconFontName: "GroupedList" },
                                            text: strings.GroupedListLayoutLabel
                                        },
                                        {
                                            checked: this.properties.layoutMode === HubLinksLayout.GroupedListLayout,
                                            key: HubLinksLayout.TileLayout,
                                            iconProps: { officeFabricIconFontName: "GroupedList" },
                                            text: strings.IconTopLayoutLabel
                                        },
                                        {
                                            checked: this.properties.layoutMode === HubLinksLayout.GroupedListLayout,
                                            key: HubLinksLayout.SquareIconItemLayout,
                                            iconProps: { officeFabricIconFontName: "GroupedList" },
                                            text: strings.IconLeftLayoutLabel
                                        }
                                    ]
                                })
                            ]
                        }
                    ],
                    displayGroupsAsAccordion: true
                }
            ]
        };
        try {
            //Add alternate configurations based on layout
            switch (this.properties.layoutMode) {
                case HubLinksLayout.GroupedListLayout:
                    //Add show description
                    config.pages[0].groups[0]["groupFields"].push(PropertyPaneToggle('showDescription', {
                        label: strings.ShowDescriptionLabel,
                        onText: strings.OnLabel,
                        offText: strings.OffLabel
                    }));
                    //Add groups expanded by default
                    config.pages[0].groups[0]["groupFields"].push(PropertyPaneToggle('defaultExpand', {
                        label: strings.ExpandDefaultLabel,
                        onText: strings.OnLabel,
                        offText: strings.OffLabel
                    }));
                    //Add Group Sort 
                    config.pages[0].groups[0]["groupFields"].push(PropertyPaneGroupSort('groups', {
                        label: strings.GroupSortLabel,
                        initialValue: this.properties.groups,
                        render: this.render.bind(this),
                        onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                        properties: this.properties,
                        disabled: false,
                        onGetErrorMessage: null,
                        deferredValidationTime: 0,
                        key: 'webpartGroupSort'
                    }));
                    break;
                case HubLinksLayout.RoundIconItemLayout:
                    break;
                case HubLinksLayout.SquareIconItemLayout:
                case HubLinksLayout.TileLayout:
                    var colors = [
                        { label: strings.ThemePrimaryColor, color: window["__themeState__"]["theme"]["themePrimary"] },
                        { label: strings.ThemeSecondaryColor, color: window["__themeState__"]["theme"]["themeSecondary"] },
                        { label: strings.ThemePrimaryColor, color: window["__themeState__"]["theme"]["themeTertiary"] },
                        //primaryText no longer consistent
                        //{label: strings.ThemePrimaryText, color: window["__themeState__"]["theme"]["primaryText"]},
                        { label: strings.ThemePrimaryText, color: window["__themeState__"]["theme"]["bodyText"] },
                        { label: strings.WhiteColor, color: window["__themeState__"]["theme"]["white"] },
                        { label: strings.BlackColor, color: window["__themeState__"]["theme"]["black"] },
                    ];
                    config.pages[0].groups[0]["groupFields"].push(PropertyFieldSwatchColorPicker('tileColor', {
                        label: strings.TileFontColorLabel,
                        selectedColor: this.properties.tileColor,
                        colors: colors,
                        style: PropertyFieldSwatchColorPickerStyle.Full,
                        onPropertyChange: this.onPropertyPaneFieldChanged,
                        properties: this.properties,
                        key: 'tileColorFieldId'
                    }));
                    config.pages[0].groups[0]["groupFields"].push(PropertyFieldSwatchColorPicker('tileBackgroundColor', {
                        label: strings.TileBackgroundColorLabel,
                        selectedColor: this.properties.tileBackgroundColor,
                        colors: colors,
                        style: PropertyFieldSwatchColorPickerStyle.Full,
                        onPropertyChange: this.onPropertyPaneFieldChanged,
                        properties: this.properties,
                        key: 'tileBackgroundColorFieldId'
                    }));
                    config.pages[0].groups[0]["groupFields"].push(PropertyFieldSwatchColorPicker('tileBorderColor', {
                        label: strings.TileBorderColorLabel,
                        selectedColor: this.properties.tileBorderColor,
                        colors: colors,
                        style: PropertyFieldSwatchColorPickerStyle.Full,
                        onPropertyChange: this.onPropertyPaneFieldChanged,
                        properties: this.properties,
                        key: 'tileBorderColorFieldId'
                    }));
                    break;
                default:
                    //Add show description
                    config.pages[0].groups[0]["groupFields"].push(PropertyPaneToggle('showDescription', {
                        label: strings.ShowDescriptionLabel,
                        onText: strings.OnLabel,
                        offText: strings.OffLabel
                    }));
                    break;
            }
            //Add usesListMode
            config.pages[0].groups[0]["groupFields"].push(PropertyPaneToggle('usesListMode', {
                label: strings.AdvancedEnableListModeLabel,
                onText: strings.OnLabel,
                offText: strings.OffLabel
            }));
            config.pages[0].groups[0]["groupFields"].push(PropertyPaneLabel('listModeInfo', {
                text: strings.AdvancedEnableListModeInfo
            }));
            //If usesListMode, the add advanced list mode group
            if (this.properties.usesListMode) {
                //Build fieldMapping array.
                var fieldMappings = [
                    { name: urlField, type: SPFieldType.URL, requiredLevel: SPFieldRequiredLevel.Required },
                    { name: iconField, type: SPFieldType.Text, requiredLevel: SPFieldRequiredLevel.Required },
                    { name: groupingField, type: SPFieldType.Text, requiredLevel: SPFieldRequiredLevel.Required },
                    { name: titleField, type: SPFieldType.Text, requiredLevel: SPFieldRequiredLevel.Required },
                    { name: openNewTabField, type: SPFieldType.Boolean, requiredLevel: SPFieldRequiredLevel.Required }
                ];
                //If showDescription then add mapping for description field.
                if (this.properties.layoutMode === HubLinksLayout.RoundIconItemLayout || this.properties.showDescription) {
                    fieldMappings.push({ name: descriptionField, type: SPFieldType.Text, requiredLevel: SPFieldRequiredLevel.Required });
                }
                config.pages[0].groups.push({
                    groupName: strings.AdvancedListModeGroupLabel,
                    isCollapsed: !this.properties.usesListMode,
                    groupFields: [
                        PropertyFieldCamlQueryFieldMapping('listQuery', {
                            label: strings.ListQueryGroupName,
                            dataPropertyPath: "data",
                            query: this.properties.listQuery,
                            fieldMappings: fieldMappings,
                            createFields: [
                                '<Field Type="Text" DisplayName="LinkCategory" Required="FALSE" EnforceUniqueValues="FALSE" Indexed="FALSE" MaxLength="255" Group="Web Part Columns" ID="{0dfb4045-98b8-4bad-ac61-d9c42f67d262}" SourceID="{a5df0f41-264b-4bf8-a651-222fcdf5d32d}" StaticName="LinkCategory" Name="LinkCategory" Version="5" />',
                                '<Field ID="{c29e077d-f466-4d8e-8bbe-72b66c5f205c}" Name="URL" SourceID="http://schemas.microsoft.com/sharepoint/v3" StaticName="URL" Group="Base Columns" Type="URL" DisplayName="URL" Required="TRUE"/>',
                                '<Field Type="Text" DisplayName="FontAwesomeIcon" Required="FALSE" EnforceUniqueValues="FALSE" Indexed="FALSE" MaxLength="255" Group="Web Part Columns" ID="{6df0c002-e0f6-4801-aa83-b7a5bb80f0f4}" SourceID="{a5df0f41-264b-4bf8-a651-222fcdf5d32d}" StaticName="FontAwesomeIcon" Name="FontAwesomeIcon" Version="5" />',
                                '<Field Type="Number" DisplayName="SortOrder" Required="FALSE" EnforceUniqueValues="FALSE" Indexed="FALSE" Group="Web Part Columns" ID="{7a911a9e-dbe1-4a87-bd40-c042db929a80}" SourceID="{a5df0f41-264b-4bf8-a651-222fcdf5d32d}" StaticName="SortOrder" Name="SortOrder" Version="5" />',
                                '<Field Type="Text" DisplayName="Description" Required="FALSE" EnforceUniqueValues="FALSE" Indexed="FALSE" MaxLength="255" Group="Web Part Columns" ID="{7350f220-d480-4dd8-89a5-1fafd4cd7d23}" SourceID="{a5df0f41-264b-4bf8-a651-222fcdf5d32d}" StaticName="Description" Name="Description" Version="5" />',
                                '<Field Type="Boolean" DisplayName="OpenLinkinNewTab" Required="FALSE" EnforceUniqueValues="FALSE" Indexed="FALSE" Group="Web Part Columns" ID="{4bf7c60f-0737-49c9-894c-6a31af134242}" SourceID="{4bf7c60f-0737-49c9-894c-6a31af134242}" StaticName="OpenLinkInNewTab" Name="OpenLinkInNewTab" Version="5" />'
                            ],
                            createTitleRequired: false,
                            includeHidden: false,
                            orderBy: PropertyFieldCamlQueryOrderBy.Title,
                            showOrderBy: true,
                            showFilters: true,
                            showMax: false,
                            showCreate: true,
                            render: this.render.bind(this),
                            onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                            context: this.context,
                            properties: this.properties,
                            disabled: false,
                            onGetErrorMessage: null,
                            deferredValidationTime: 0,
                            key: 'spListQueryFieldId'
                        })
                    ]
                });
            }
        }
        catch (err) {
            Logger.write(err + " - " + this.LOG_SOURCE + " (getBasicPropertyPane)", 3 /* Error */);
        }
        return config;
    };
    HubLinksWebPart.prototype.getEditItemPropertyPane = function () {
        var _a, _b, _c, _d, _e;
        var retVal = {
            pages: [
                {
                    header: {
                        description: ""
                    },
                    displayGroupsAsAccordion: true,
                    groups: []
                }
            ]
        };
        try {
            var group0 = {
                groupName: strings.EditItemGeneralLabel,
                groupFields: []
            };
            var titleLength = (80 - (((_a = this.properties.hubLinksItems[this.activeIndex]) === null || _a === void 0 ? void 0 : _a.Title) ? this.properties.hubLinksItems[this.activeIndex].Title.length : 0));
            group0.groupFields.push(PropertyPaneTextField("hubLinksItems[" + this.activeIndex + "].Title", {
                label: strings.EditItemGeneralTitleLabel,
                description: strings.EditItemGeneralTitlePreCountLabel + " " + titleLength + " " + strings.EditItemGeneralTitlePostCountLabel,
            }));
            var descriptionLength = (130 - (((_b = this.properties.hubLinksItems[this.activeIndex]) === null || _b === void 0 ? void 0 : _b.Description) ? this.properties.hubLinksItems[this.activeIndex].Description.length : 0));
            group0.groupFields.push(PropertyPaneTextField("hubLinksItems[" + this.activeIndex + "].Description", {
                label: strings.EditItemGeneralDescriptionLabel,
                description: strings.EditItemGeneralDescriptionPreCountLabel + " " + descriptionLength + " " + strings.EditItemGeneralDescriptionPostCountLabel,
                onGetErrorMessage: this.itemValidation.bind(this, 130, (this.properties.layoutMode === HubLinksLayout.RoundIconItemLayout || this.properties.showDescription), strings.EditItemGeneralDescriptionErrorText)
            }));
            var groupByLength = (80 - (((_c = this.properties.hubLinksItems[this.activeIndex]) === null || _c === void 0 ? void 0 : _c.GroupBy) ? this.properties.hubLinksItems[this.activeIndex].GroupBy.length : 0));
            group0.groupFields.push(PropertyPaneTextField("hubLinksItems[" + this.activeIndex + "].GroupBy", {
                label: strings.EditItemGeneralGroupByLabel,
                description: strings.EditItemGeneralGroupByPreCountLabel + " " + groupByLength + " " + strings.EditItemGeneralGroupByPostCountLabel,
                onGetErrorMessage: this.itemValidation.bind(this, 80, (this.properties.layoutMode === HubLinksLayout.GroupedListLayout), strings.EditItemGeneralGroupByErrorText)
            }));
            group0.groupFields = group0.groupFields.concat([
                PropertyPaneLabel("itemLinkLabel", {
                    text: strings.EditItemGeneralSelectLinkLabel
                }),
                PropertyPaneLink("hubLinksItems[" + this.activeIndex + "].URL", {
                    target: "_blank",
                    href: (_d = this.properties.hubLinksItems[this.activeIndex]) === null || _d === void 0 ? void 0 : _d.URL,
                    text: (_e = this.properties.hubLinksItems[this.activeIndex]) === null || _e === void 0 ? void 0 : _e.URL
                }),
                PropertyPaneButton("itemChangeLink", {
                    text: strings.EditItemGeneralSelectLinkButtonText,
                    buttonType: PropertyPaneButtonType.Primary,
                    onClick: this.openLinkSelector.bind(this)
                }),
                PropertyPaneCheckbox("hubLinksItems[" + this.activeIndex + "].NewTab", {
                    text: strings.EditItemGeneralOpenTabLabel
                })
            ]);
            retVal.pages[0].groups.push(group0);
            var group1 = {
                groupName: strings.EditItemIconLabel,
                groupFields: [
                    PropertyPaneTextField("hubLinksItems[" + this.activeIndex + "].Icon", {
                        label: strings.EditItemIconEntryLabel,
                        placeholder: strings.EditItemIconEntryPlaceholder,
                        onGetErrorMessage: this.itemValidation.bind(this, 255, (this.properties.layoutMode === HubLinksLayout.RoundIconItemLayout), "")
                    }),
                    PropertyPaneLink('iconShortcut', {
                        text: strings.EditItemIconEntryLinkText,
                        href: "https://fontawesome.com/icons?d=gallery&m=free",
                        target: "_blank"
                    })
                ]
            };
            retVal.pages[0].groups.push(group1);
        }
        catch (err) {
            Logger.write(err + " - " + this.LOG_SOURCE + " (getEditItemPropertyPane)", 3 /* Error */);
        }
        return retVal;
    };
    HubLinksWebPart.prototype.onPropertyPaneConfigurationComplete = function () {
        var _a;
        var hubLinksItems = [];
        try {
            for (var i = 0; i < this.properties.hubLinksItems.length; i++) {
                if (((_a = this.properties.hubLinksItems[i].Title) === null || _a === void 0 ? void 0 : _a.length) > 0)
                    hubLinksItems.push(this.properties.hubLinksItems[i]);
            }
            //Update groups and render
            this._updateGroupsProperty();
            this.properties.hubLinksItems = hubLinksItems;
            this.render();
        }
        catch (err) {
            Logger.write(err + " - " + this.LOG_SOURCE + " (onPropertyPaneConfigurationComplete)", 3 /* Error */);
        }
    };
    return HubLinksWebPart;
}(BaseClientSideWebPart));
export default HubLinksWebPart;
//# sourceMappingURL=HubLinksWebPart.js.map
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
import { PropertyPaneLink, PropertyPaneTextField, PropertyPaneCheckbox, PropertyPaneToggle, PropertyPaneButton, PropertyPaneButtonType, PropertyPaneLabel } from "@microsoft/sp-property-pane";
import { SPComponentLoader } from '@microsoft/sp-loader';
import { Logger, ConsoleListener } from "@pnp/logging";
import * as strings from 'boxButtonWebPartStrings';
import BoxButton from './components/BoxButton';
import { SPFieldType, PropertyFieldCamlQueryOrderBy, SPFieldRequiredLevel, PropertyFieldCamlQueryFieldMapping } from '../../propertyPane/propertyFieldCamlQueryFieldMapping/PropertyFieldCamlQueryFieldMapping';
import { sp } from "@pnp/sp";
import QueryStringParser from "../../utilities/urlparser/queryStringParser";
import { WebPartLogger } from '../../utilities/webpartlogger/usagelogger';
var urlField = "URL";
var iconField = "Font Awesome Icon";
var isBlueField = "Has Blue Background";
var openNewTabField = "Open Link in New Tab";
var BoxButtonWebPartWebPart = /** @class */ (function (_super) {
    __extends(BoxButtonWebPartWebPart, _super);
    function BoxButtonWebPartWebPart() {
        var _this = _super.call(this) || this;
        _this.LOG_SOURCE = "BoxButtonWebPartWebPart";
        _this._activeIndex = -1;
        // onClick of "Change" button in classic editing panel
        _this.openLinkSelector = function (event) {
            _this.webpart.openLinkPicker(event);
        };
        _this.itemValidation = function (length, required, errorText, value) {
            var retVal = "";
            if (value.length > length) {
                retVal = errorText;
            }
            else if (required && value.length < 1) {
                retVal = strings.RequiredValueErrorText;
            }
            return retVal;
        };
        return _this;
    }
    BoxButtonWebPartWebPart.prototype.onInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ie11Mode, urls;
            return __generator(this, function (_a) {
                //Initialize PnPLogger
                Logger.subscribe(new ConsoleListener());
                Logger.activeLogLevel = 1 /* Info */;
                ie11Mode = (!!window.MSInputMethodContext && !!document["documentMode"]);
                sp.setup({ ie11: ie11Mode, spfxContext: this.context });
                SPComponentLoader.loadCss('https://use.fontawesome.com/releases/v5.14.0/css/all.css');
                urls = [];
                if (this.properties.data) {
                    this.properties.data.forEach(function (element) {
                        if (element.url)
                            urls.push(element.url);
                    });
                }
                if (this.displayMode !== DisplayMode.Edit)
                    WebPartLogger.logUsage(this.context, urls);
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(BoxButtonWebPartWebPart.prototype, "webpart", {
        get: function () {
            return this._webpart;
        },
        set: function (v) {
            this._webpart = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoxButtonWebPartWebPart.prototype, "activeIndex", {
        get: function () {
            return this._activeIndex;
        },
        set: function (v) {
            this._activeIndex = v;
        },
        enumerable: false,
        configurable: true
    });
    BoxButtonWebPartWebPart.prototype.render = function () {
        var _this = this;
        try {
            // Copy properties from previous version if needed (??)
            if (!this.properties.data && this.properties.name) {
                this.properties.data = [{
                        name: this.properties.name,
                        isBlue: this.properties.isThemed,
                        icon: this.properties.fontAwesomeIcon,
                        url: this.properties.url,
                        openNew: this.properties.newTab
                    }];
                this.properties.name = undefined;
                this.properties.isThemed = undefined;
                this.properties.fontAwesomeIcon = undefined;
                this.properties.url = undefined;
                this.properties.newTab = undefined;
            }
            var props_1 = this.properties;
            var propPaneRefresh_1 = this.context.propertyPane.refresh;
            // Set up the BoxButtonWebPart component
            var element_1 = React.createElement(BoxButton, {
                name: this.properties.name,
                isThemed: this.properties.isThemed,
                fontAwesomeIcon: this.properties.fontAwesomeIcon,
                url: this.properties.url,
                newTab: this.properties.newTab,
                data: this.properties.data,
                title: this.properties.title,
                usesListMode: this.properties.usesListMode,
                advancedCamlQuery: this.properties.advancedCamlQuery,
                advancedCamlData: this.properties.advancedCamlData,
                links: [],
                isEdit: this.displayMode === DisplayMode.Edit,
                setTitle: function (title) {
                    props_1.title = title;
                },
                // Callback from main component when user selects a new link
                setUrl: function (name, url) {
                    // If there is no active index, add a new link at the top and make it active
                    if (_this.activeIndex === -1) {
                        _this.properties.data.push({
                            name: name,
                            isBlue: false,
                            icon: "",
                            url: "",
                            openNew: false
                        });
                        _this.activeIndex = 0;
                    }
                    // Figure out if it's a document
                    var isDoc = false;
                    var docExtensions = ["pdf", "xls", "xlsx", "doc", "docx", "ppt", "pptx", "pptm", "dot"];
                    for (var _i = 0, docExtensions_1 = docExtensions; _i < docExtensions_1.length; _i++) {
                        var ext = docExtensions_1[_i];
                        if (url.indexOf(ext, url.length - ext.length) !== -1)
                            isDoc = true;
                    }
                    if (name) {
                        props_1.data[_this.activeIndex].name =
                            name.split('.')[0].replace('-', ' ').replace('_', ' ');
                    }
                    // In the "data" (array of links) adjust the URL to use OWA if it's a document
                    props_1.data[_this.activeIndex].url = url + (isDoc ? "?web=1" : "");
                    // If the property pane isn't already open, open it and refresh it
                    if (!_this.context.propertyPane.isRenderedByWebPart())
                        _this.context.propertyPane.open();
                    propPaneRefresh_1();
                },
                // Called when user clicks edit on a link in BoxButtonWebPart
                editItem: function (index) {
                    if (index === -1) {
                        _this.properties.data.push({
                            name: strings.TitlePlaceholder,
                            isBlue: false,
                            icon: "",
                            url: "",
                            openNew: false
                        });
                        index = _this.properties.data.length - 1;
                    }
                    _this.activeIndex = index;
                    _this.context.propertyPane.open();
                },
                // Called when user clicks delete on a link in BoxButtonWebPart
                deleteItem: function (index) {
                    _this.properties.data.splice(index, 1);
                    _this.render();
                },
                // Called when a user rearranges links in BoxButtonWebPart
                rearrangeItems: function (newOrder) {
                    var newArr = [];
                    for (var _i = 0, newOrder_1 = newOrder; _i < newOrder_1.length; _i++) {
                        var num = newOrder_1[_i];
                        newArr.push(_this.properties.data[num]);
                    }
                    _this.properties.data.length = 0;
                    for (var _a = 0, newArr_1 = newArr; _a < newArr_1.length; _a++) {
                        var val = newArr_1[_a];
                        _this.properties.data.push(val);
                    }
                    _this.render();
                },
                context: this.context,
                displayMode: this.displayMode
            });
            // OK we have the BoxButtonWebPart component
            // If we're in List mode, read the list
            if (this.properties.usesListMode) {
                var propData_1 = this.properties.advancedCamlData ? JSON.parse(this.properties.advancedCamlData) : { fieldMappings: [], selectedList: {} };
                if (propData_1.selectedList.id) {
                    sp.web.lists.getById(propData_1.selectedList.id).getItemsByCAMLQuery({ ViewXml: QueryStringParser.ReplaceQueryStringParameters(this.properties.advancedCamlQuery) }).then(function (response) {
                        response.forEach(function (value) {
                            var link = {};
                            propData_1.fieldMappings.forEach(function (mapping) {
                                switch (mapping.type) {
                                    case SPFieldType.URL:
                                        link[mapping.name] = value[mapping.mappedTo] ? value[mapping.mappedTo]["Url"] : null;
                                        link[mapping.name + "_text"] = value[mapping.mappedTo] ? value[mapping.mappedTo]["Description"] : null;
                                        break;
                                    default:
                                        link[mapping.name] = value[mapping.mappedTo];
                                        break;
                                }
                            });
                            if (link[urlField] !== null)
                                element_1.props.links.push(link);
                        });
                        // TODO: Return from ReactDom.render has a race condition
                        // Switch to a function ref
                        _this.webpart = ReactDom.render(element_1, _this.domElement);
                    }).catch(function (error) { });
                }
            }
            else {
                // Not in list mode, just render the BoxButtonWebPart
                // TODO: Return from ReactDom.render has a race condition
                // Switch to a function ref
                this.webpart = ReactDom.render(element_1, this.domElement);
            }
        }
        catch (err) {
            Logger.write(err + " - " + this.LOG_SOURCE + " (onInit)", 3 /* Error */);
            return null;
        }
    };
    BoxButtonWebPartWebPart.prototype.setTitle = function (title) {
        this.properties.title = title;
    };
    Object.defineProperty(BoxButtonWebPartWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: false,
        configurable: true
    });
    BoxButtonWebPartWebPart.prototype.getPropertyPaneConfiguration = function () {
        if (this.context.propertyPane.isRenderedByWebPart())
            return this.getEditItemPropertyPane();
        return this.getBasicPropertyPane();
    };
    // Property pane for List mode
    BoxButtonWebPartWebPart.prototype.getBasicPropertyPane = function () {
        var retVal = { pages: [] };
        try {
            retVal = {
                pages: [
                    {
                        header: {
                            description: '' //strings.PropertyPaneBaseDescription
                        },
                        groups: [
                            {
                                groupName: strings.AdvancedListModeGroupLabel,
                                isCollapsed: !this.properties.usesListMode,
                                groupFields: [
                                    PropertyPaneToggle('usesListMode', {
                                        label: strings.AdvancedEnableListModeLabel,
                                        onText: strings.EditItemColorOnLabel,
                                        offText: strings.EditItemColorOffLabel
                                    }),
                                    PropertyPaneLabel('listModeInfo', {
                                        text: strings.AdvancedEnableListModeInfo
                                    }),
                                    PropertyFieldCamlQueryFieldMapping('advancedCamlQuery', {
                                        label: "",
                                        dataPropertyPath: 'advancedCamlData',
                                        query: this.properties.advancedCamlQuery,
                                        fieldMappings: [
                                            { name: urlField, type: SPFieldType.URL, requiredLevel: SPFieldRequiredLevel.Required },
                                            { name: iconField, type: SPFieldType.Text, requiredLevel: SPFieldRequiredLevel.Required },
                                            { name: isBlueField, type: SPFieldType.Boolean, requiredLevel: SPFieldRequiredLevel.Required },
                                            { name: openNewTabField, type: SPFieldType.Boolean, requiredLevel: SPFieldRequiredLevel.Required }
                                        ],
                                        createFields: [
                                            '<Field ID="{c29e077d-f466-4d8e-8bbe-72b66c5f205c}" Name="URL" SourceID="http://schemas.microsoft.com/sharepoint/v3" StaticName="URL" Group="Base Columns" Type="URL" DisplayName="URL" Required="TRUE"/>',
                                            '<Field Type="Text" DisplayName="FontAwesomeIcon" Required="FALSE" EnforceUniqueValues="FALSE" Indexed="FALSE" MaxLength="255" Group="Web Part Columns" ID="{6df0c002-e0f6-4801-aa83-b7a5bb80f0f4}" SourceID="{a5df0f41-264b-4bf8-a651-222fcdf5d32d}" StaticName="FontAwesomeIcon" Name="FontAwesomeIcon" Version="5" />',
                                            '<Field Type="Number" DisplayName="SortOrder" Required="FALSE" EnforceUniqueValues="FALSE" Indexed="FALSE" Group="Web Part Columns" ID="{7a911a9e-dbe1-4a87-bd40-c042db929a80}" SourceID="{a5df0f41-264b-4bf8-a651-222fcdf5d32d}" StaticName="SortOrder" Name="SortOrder" Version="5" />',
                                            '<Field Type="Boolean" DisplayName="HasBlueBackground" Required="FALSE" EnforceUniqueValues="FALSE" Indexed="FALSE" Group="Web Part Columns" ID="{f9ba1903-e7be-42cd-843e-f898d4c1fcb4}" SourceID="{f9ba1903-e7be-42cd-843e-f898d4c1fcb4}" StaticName="HasBlueBackground" Name="HasBlueBackground" Version="5" />',
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
                                        disabled: !this.properties.usesListMode,
                                        onGetErrorMessage: null,
                                        deferredValidationTime: 0,
                                        key: 'spListQueryFieldId'
                                    })
                                ]
                            }
                        ],
                        displayGroupsAsAccordion: true
                    }
                ]
            };
        }
        catch (err) {
            Logger.write(err + " - " + this.LOG_SOURCE + " (getBasicPropertyPane)", 3 /* Error */);
        }
        return retVal;
    };
    // Property pane for editing an item in non-List mode
    BoxButtonWebPartWebPart.prototype.getEditItemPropertyPane = function () {
        var _this = this;
        var retVal = { pages: [] };
        try {
            retVal = {
                pages: [
                    {
                        header: {
                            description: ""
                        },
                        displayGroupsAsAccordion: true,
                        groups: [
                            {
                                groupName: strings.EditItemGeneralLabel,
                                groupFields: [
                                    PropertyPaneTextField("data[" + this.activeIndex + "].name", {
                                        label: strings.EditItemGeneralTitleLabel,
                                        description: strings.EditItemGeneralTitlePreCountLabel + (40 - this.properties.data[this.activeIndex].name.length) + strings.EditItemGeneralTitlePostCountLabel,
                                        onGetErrorMessage: function (value) { return _this.itemValidation(40, true, strings.EditItemGeneralTitleErrorText, value); }
                                    }),
                                    PropertyPaneLabel("itemLinkLabel", {
                                        text: strings.EditItemGeneralSelectLinkLabel
                                    }),
                                    PropertyPaneLink("data[" + this.activeIndex + "].url", {
                                        target: "_blank",
                                        href: this.properties.data[this.activeIndex].url,
                                        text: this.properties.data[this.activeIndex].url
                                    }),
                                    PropertyPaneButton("itemChangeLink", {
                                        text: strings.EditItemGeneralSelectLinkButtonText,
                                        buttonType: PropertyPaneButtonType.Primary,
                                        onClick: this.openLinkSelector
                                    }),
                                    PropertyPaneCheckbox("data[" + this.activeIndex + "].openNew", {
                                        text: strings.EditItemGeneralOpenTabLabel
                                    })
                                ]
                            },
                            {
                                groupName: strings.EditItemIconLabel,
                                groupFields: [
                                    PropertyPaneTextField("data[" + this.activeIndex + "].icon", {
                                        label: strings.EditItemIconEntryLabel,
                                        placeholder: strings.EditItemIconEntryPlaceholder
                                    }),
                                    PropertyPaneLink('iconShortcut', {
                                        text: strings.EditItemIconEntryLinkText,
                                        href: "https://fontawesome.com/icons?d=gallery&m=free",
                                        target: "blank"
                                    })
                                ]
                            },
                            {
                                groupName: strings.EditItemColorLabel,
                                groupFields: [
                                    PropertyPaneToggle("data[" + this.activeIndex + "].isBlue", {
                                        label: strings.EditItemColorFieldLabel,
                                        onText: strings.EditItemColorOnLabel,
                                        offText: strings.EditItemColorOffLabel
                                    })
                                ]
                            }
                        ]
                    }
                ]
            };
        }
        catch (err) {
            Logger.write(err + " - " + this.LOG_SOURCE + " (getEditItemPropertyPane)", 3 /* Error */);
        }
        return retVal;
    };
    return BoxButtonWebPartWebPart;
}(BaseClientSideWebPart));
export default BoxButtonWebPartWebPart;
//# sourceMappingURL=BoxButtonWebPart.js.map
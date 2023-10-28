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
import { PropertyPaneButton, PropertyPaneButtonType, PropertyPaneCheckbox, PropertyPaneChoiceGroup, PropertyPaneLabel, PropertyPaneLink, PropertyPaneTextField, PropertyPaneToggle } from "@microsoft/sp-property-pane";
import * as strings from 'featuredContentWebPartStrings';
import FeaturedContent from './components/FeaturedContent';
import { PropertyFieldCamlQueryFieldMapping, SPFieldType, SPFieldRequiredLevel, PropertyFieldCamlQueryOrderBy } from '../../propertyPane/propertyFieldCamlQueryFieldMapping/PropertyFieldCamlQueryFieldMapping';
import { sp } from "@pnp/sp";
import { PropertyPaneRichText } from '../../propertyPane/propertyFieldRichText/PropertyFieldRichText';
import { PropertyPaneImageSelector, ImageDisplayType } from "../../propertyPane/propertyFieldImageSelector/PropertyFieldImageSelector";
import QueryStringParser from "../../utilities/urlparser/queryStringParser";
import { WebPartLogger } from '../../utilities/webpartlogger/usagelogger';
import { FeaturedContentLayout } from "./components/layouts/FeaturedContentFactory";
var titleOnlyImage = require('./assets/title-only.svg');
var titleDescImage = require('./assets/title-desc.svg');
var stackedImage = require('./assets/stacked.svg');
var altStackImage = require('./assets/alt-stack.svg');
var urlField = "URL";
var imageField = "Image";
var descriptionField = "Description";
var openNewTabField = "NewTab";
var contentField = "Content";
var FeaturedContentWebPart = /** @class */ (function (_super) {
    __extends(FeaturedContentWebPart, _super);
    function FeaturedContentWebPart() {
        var _this = _super.call(this) || this;
        _this._activeIndex = -1;
        _this.onPropertyPaneFieldChanged = _this.onPropertyPaneFieldChanged.bind(_this);
        return _this;
    }
    FeaturedContentWebPart.prototype.onInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ie11Mode, urls;
            return __generator(this, function (_a) {
                ie11Mode = (!!window.MSInputMethodContext && !!document["documentMode"]);
                sp.setup({ ie11: ie11Mode, spfxContext: this.context });
                urls = [];
                if (this.properties.featuredContentItems) {
                    this.properties.featuredContentItems.forEach(function (element) {
                        if (element.CustomImageUrl)
                            urls.push(element.CustomImageUrl);
                        if (element.PreviewImageUrl)
                            urls.push(element.PreviewImageUrl);
                        if (element.URL)
                            urls.push(element.URL);
                        if (element.Image)
                            urls.push(element.Image);
                    });
                }
                if (this.displayMode !== DisplayMode.Edit)
                    WebPartLogger.logUsage(this.context, urls);
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(FeaturedContentWebPart.prototype, "webpart", {
        get: function () {
            return this._webpart;
        },
        set: function (v) {
            this._webpart = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FeaturedContentWebPart.prototype, "activeIndex", {
        get: function () {
            return this._activeIndex;
        },
        set: function (v) {
            this._activeIndex = v;
        },
        enumerable: false,
        configurable: true
    });
    FeaturedContentWebPart.prototype.render = function () {
        var _this = this;
        this.properties.featuredContentItems.forEach(function (el) {
            if (el.Content === undefined) {
                el.Content = "";
            }
            if (el.ImageMode === undefined) {
                el.ImageMode = ImageDisplayType.Auto;
            }
        });
        var element = React.createElement(FeaturedContent, {
            featuredContentItems: this.properties.featuredContentItems,
            title: this.properties.title,
            isEdit: this.displayMode === DisplayMode.Edit,
            layoutMode: this.properties.layoutMode,
            usesListMode: this.properties.usesListMode,
            advancedCamlData: this.properties.advancedCamlData,
            advancedCamlQuery: this.properties.advancedCamlQuery,
            links: [],
            context: this.context,
            setTitle: this.setTitle.bind(this),
            setUrl: this.setUrl.bind(this),
            editItem: this.editBasicItem.bind(this),
            deleteItem: this.deleteBasicItem.bind(this),
            rearrangeItems: this.rearrangeBasicItems.bind(this),
            resetActiveIndex: this.resetIndex.bind(this),
            displayMode: this.displayMode
        });
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
                            element.props.links.push(link);
                    });
                    element.props.links.forEach(function (v, i, a) {
                        if (v[imageField].substr(0, _this.context.pageContext.web.absoluteUrl.length) === _this.context.pageContext.web.absoluteUrl && v[imageField].indexOf("getpreview.ashx") === -1) {
                            v[imageField] = _this.context.pageContext.web.serverRelativeUrl + "/_layouts/15/getpreview.ashx?resolution=0&clientMode=modernWebPart&path=" + encodeURIComponent(v[imageField]);
                        }
                    });
                    _this.webpart = ReactDom.render(element, _this.domElement);
                }).catch(function (error) { });
            }
        }
        else {
            this.webpart = ReactDom.render(element, this.domElement);
        }
    };
    Object.defineProperty(FeaturedContentWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: false,
        configurable: true
    });
    FeaturedContentWebPart.prototype.openLinkSelector = function (event) {
        this.webpart.openLinkPicker(event);
    };
    FeaturedContentWebPart.prototype.itemValidation = function (length, required, errorText, value) {
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
    FeaturedContentWebPart.prototype.getPropertyPaneConfiguration = function () {
        if (this.context.propertyPane.isRenderedByWebPart())
            return this.getEditItemPropertyPane();
        return this.getWebPartPropertyPane();
    };
    FeaturedContentWebPart.prototype.getWebPartPropertyPane = function () {
        return {
            pages: [
                {
                    header: {
                        description: ''
                    },
                    groups: [
                        {
                            groupName: strings.LayoutLabel,
                            groupFields: [
                                PropertyPaneChoiceGroup("layoutMode", {
                                    label: strings.LayoutSelectorLabel,
                                    options: [
                                        {
                                            checked: this.properties.layoutMode === FeaturedContentLayout.HorizontalTitleOnly,
                                            key: FeaturedContentLayout.HorizontalTitleOnly,
                                            imageSrc: titleOnlyImage.toString(),
                                            selectedImageSrc: titleOnlyImage.toString(),
                                            imageSize: { height: 32, width: 32 },
                                            text: strings.TitleOnlyLabel
                                        },
                                        {
                                            checked: this.properties.layoutMode === FeaturedContentLayout.HorizontalTitleAndDescription,
                                            key: FeaturedContentLayout.HorizontalTitleAndDescription,
                                            imageSrc: titleDescImage.toString(),
                                            imageSize: { height: 32, width: 32 },
                                            selectedImageSrc: titleDescImage.toString(),
                                            text: strings.TitleDescriptionLabel
                                        },
                                        {
                                            checked: this.properties.layoutMode === FeaturedContentLayout.Vertical,
                                            key: FeaturedContentLayout.Vertical,
                                            imageSrc: stackedImage.toString(),
                                            imageSize: { height: 32, width: 32 },
                                            selectedImageSrc: stackedImage.toString(),
                                            text: strings.StackedLabel
                                        },
                                        {
                                            checked: this.properties.layoutMode === FeaturedContentLayout.VerticalAlternating,
                                            key: FeaturedContentLayout.VerticalAlternating,
                                            imageSrc: altStackImage.toString(),
                                            imageSize: { height: 32, width: 32 },
                                            selectedImageSrc: altStackImage.toString(),
                                            text: strings.AltStackedLabel
                                        }
                                    ]
                                })
                            ]
                        },
                        {
                            groupName: strings.AdvancedListModeGroupLabel,
                            isCollapsed: !this.properties.usesListMode,
                            groupFields: [
                                PropertyPaneToggle('usesListMode', {
                                    label: strings.AdvancedEnableListModeLabel,
                                    onText: strings.OnLabel,
                                    offText: strings.OffLabel
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
                                        { name: imageField, type: SPFieldType.URL, requiredLevel: SPFieldRequiredLevel.Required },
                                        { name: descriptionField, type: SPFieldType.Text, requiredLevel: SPFieldRequiredLevel.Required },
                                        { name: contentField, type: SPFieldType.Text, requiredLevel: SPFieldRequiredLevel.Required },
                                        { name: openNewTabField, type: SPFieldType.Boolean, requiredLevel: SPFieldRequiredLevel.Required }
                                    ],
                                    createFields: [
                                        '<Field ID="{c29e077d-f466-4d8e-8bbe-72b66c5f205c}" Name="URL" SourceID="http://schemas.microsoft.com/sharepoint/v3" StaticName="URL" Group="Base Columns" Type="URL" DisplayName="URL" Required="TRUE"/>',
                                        '<Field Type="Text" DisplayName="Description" Required="FALSE" EnforceUniqueValues="FALSE" Indexed="FALSE" MaxLength="255" Group="Web Part Columns" ID="{6df0c033-e0f6-4801-aa83-b7a5bb80f0f4}" SourceID="{a5df0f33-264b-4bf8-a651-222fcdf5d32d}" StaticName="Description" Name="Description" Version="5" />',
                                        '<Field Type="Note" DisplayName="Content" Required="FALSE" EnforceUniqueValues="FALSE" Indexed="FALSE" NumLines="6" RichText="TRUE" RichTextMode="FullHtml" IsolateStyles="TRUE" Sortable="FALSE" ID="{24f71f35-b1ad-43dc-8ad7-56faddad0870}" SourceID="{11fc90a7-6fab-44ff-87ca-f7ac20b3bc50}" StaticName="Content" Name="Content" ColName="ntext2" RowOrdinal="0" Version="1" />',
                                        '<Field Type="Number" DisplayName="SortOrder" Required="FALSE" EnforceUniqueValues="FALSE" Indexed="FALSE" Group="Web Part Columns" ID="{7a911a9e-dbe1-4a87-bd40-c042db929a80}" SourceID="{a5df0f41-264b-4bf8-a651-222fcdf5d32d}" StaticName="SortOrder" Name="SortOrder" Version="5" />',
                                        '<Field Type="URL" DisplayName="Image" Required="FALSE" EnforceUniqueValues="FALSE" Indexed="FALSE" Group="Web Part Columns" ID="{f9ba1903-e722-42cd-843e-f898d4c1fcb4}" SourceID="{f9ba1903-e722-42cd-843e-f898d4c1fcb4}" StaticName="Image" Name="Image" Version="5" />',
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
    };
    FeaturedContentWebPart.prototype.getEditItemPropertyPane = function () {
        var _this = this;
        return {
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
                                PropertyPaneTextField("featuredContentItems[" + this.activeIndex + "].Title", {
                                    label: strings.EditItemGeneralTitleLabel,
                                    description: strings.EditItemGeneralTitlePreCountLabel + (80 - this.properties.featuredContentItems[this.activeIndex].Title.length) + strings.EditItemGeneralTitlePostCountLabel,
                                    onGetErrorMessage: this.itemValidation.bind(this, 80, true, strings.EditItemGeneralTitleErrorText)
                                }),
                                PropertyPaneTextField("featuredContentItems[" + this.activeIndex + "].Description", {
                                    label: strings.EditItemGeneralDescriptionLabel,
                                    description: strings.EditItemGeneralDescriptionPreCountLabel + (130 - (this.properties.featuredContentItems[this.activeIndex].Description ? this.properties.featuredContentItems[this.activeIndex].Description.length : 0)) + strings.EditItemGeneralDescriptionPostCountLabel,
                                    onGetErrorMessage: this.itemValidation.bind(this, 130, false, strings.EditItemGeneralDescriptionErrorText)
                                }),
                                PropertyPaneRichText("featuredContentItems[" + this.activeIndex + "].Content", {
                                    label: strings.EditItemGeneralContentLabel,
                                    properties: this.properties,
                                    onChange: this.onContentChange.bind(this)
                                }),
                                PropertyPaneLabel("itemLinkLabel", {
                                    text: strings.EditItemGeneralSelectLinkLabel
                                }),
                                PropertyPaneLink("featuredContentItems[" + this.activeIndex + "].URL", {
                                    target: "_blank",
                                    href: this.properties.featuredContentItems[this.activeIndex].URL,
                                    text: this.properties.featuredContentItems[this.activeIndex].URL
                                }),
                                PropertyPaneButton("itemChangeLink", {
                                    text: strings.EditItemGeneralSelectLinkButtonText,
                                    buttonType: PropertyPaneButtonType.Primary,
                                    onClick: this.openLinkSelector.bind(this)
                                }),
                                PropertyPaneCheckbox("featuredContentItems[" + this.activeIndex + "].NewTab", {
                                    text: strings.EditItemGeneralOpenTabLabel
                                })
                            ]
                        },
                        {
                            groupName: strings.EditItemImageLabel,
                            groupFields: [
                                PropertyPaneImageSelector("featuredContentItems[" + this.activeIndex + "].Image", {
                                    label: strings.EditItemImageEntryLabel,
                                    properties: this.properties,
                                    context: this.context,
                                    changeImage: function (url, name) {
                                        var oldMode = _this.properties.featuredContentItems[_this.activeIndex].ImageMode;
                                        var oldUrl = _this.properties.featuredContentItems[_this.activeIndex].CustomImageUrl;
                                        var oldImage = _this.properties.featuredContentItems[_this.activeIndex].Image;
                                        var newUrl = url.indexOf(_this.context.pageContext.web.absoluteUrl) > -1 ? _this.context.pageContext.web.absoluteUrl + "/_layouts/15/getpreview.ashx?resolution=0&clientMode=modernWebPart&path=" + url : url;
                                        _this.properties.featuredContentItems[_this.activeIndex].CustomImageUrl = newUrl;
                                        _this.properties.featuredContentItems[_this.activeIndex].Image = newUrl;
                                        _this.properties.featuredContentItems[_this.activeIndex].ImageMode = ImageDisplayType.Custom;
                                        if (name) {
                                            var oldAlt = _this.properties.featuredContentItems[_this.activeIndex].ImageAlternate;
                                            _this.properties.featuredContentItems[_this.activeIndex].ImageAlternate = name;
                                            _this.onPropertyPaneFieldChanged("featuredContentItems[" + _this.activeIndex + "].ImageAlternate", oldAlt, name);
                                        }
                                        _this.onPropertyPaneFieldChanged("featuredContentItems[" + _this.activeIndex + "].ImageMode", oldMode, ImageDisplayType.Custom);
                                        _this.onPropertyPaneFieldChanged("featuredContentItems[" + _this.activeIndex + "].Image", oldImage, newUrl);
                                        _this.onPropertyPaneFieldChanged("featuredContentItems[" + _this.activeIndex + "].CustomImageUrl", oldUrl, newUrl);
                                        _this.render();
                                        _this.context.propertyPane.refresh();
                                    },
                                    changeImageMode: function (mode) {
                                        var oldMode = _this.properties.featuredContentItems[_this.activeIndex].ImageMode;
                                        var oldImage = _this.properties.featuredContentItems[_this.activeIndex].Image;
                                        _this.properties.featuredContentItems[_this.activeIndex].ImageMode = mode;
                                        _this.properties.featuredContentItems[_this.activeIndex].Image = mode == ImageDisplayType.Auto ?
                                            _this.properties.featuredContentItems[_this.activeIndex].PreviewImageUrl :
                                            _this.properties.featuredContentItems[_this.activeIndex].CustomImageUrl;
                                        _this.onPropertyPaneFieldChanged("featuredContentItems[" + _this.activeIndex + "].ImageMode", oldMode, mode);
                                        _this.onPropertyPaneFieldChanged("featuredContentItems[" + _this.activeIndex + "].Image", oldImage, _this.properties.featuredContentItems[_this.activeIndex].Image);
                                        _this.render();
                                        _this.context.propertyPane.refresh();
                                    },
                                    imageMode: this.properties.featuredContentItems[this.activeIndex].ImageMode,
                                    key: "imageSelector"
                                }),
                                PropertyPaneTextField("featuredContentItems[" + this.activeIndex + "].ImageAlternate", {
                                    label: strings.EditItemGeneralAlternateLabel,
                                    description: strings.EditItemGeneralDescriptionPreCountLabel + (130 - (this.properties.featuredContentItems[this.activeIndex].ImageAlternate ? this.properties.featuredContentItems[this.activeIndex].ImageAlternate.length : 0)) + strings.EditItemGeneralDescriptionPostCountLabel,
                                    onGetErrorMessage: this.itemValidation.bind(this, 130, false, strings.EditItemGeneralDescriptionErrorText)
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    FeaturedContentWebPart.prototype.rearrangeBasicItems = function (newOrder) {
        var newArr = new Array();
        for (var _i = 0, newOrder_1 = newOrder; _i < newOrder_1.length; _i++) {
            var num = newOrder_1[_i];
            newArr.push(this.properties.featuredContentItems[num]);
        }
        this.properties.featuredContentItems.length = 0;
        for (var _a = 0, newArr_1 = newArr; _a < newArr_1.length; _a++) {
            var val = newArr_1[_a];
            this.properties.featuredContentItems.push(val);
        }
        this.render();
    };
    FeaturedContentWebPart.prototype.editBasicItem = function (index) {
        if (index === -1) {
            this.properties.featuredContentItems.push({
                Title: strings.TitlePlaceholder,
                URL: "",
                NewTab: false,
                Image: "",
                Description: "",
                Content: "",
                ImageAlternate: "",
                CustomImageUrl: "",
                ImageMode: ImageDisplayType.Auto,
                PreviewImageUrl: ""
            });
            index = this.properties.featuredContentItems.length - 1;
        }
        this.activeIndex = index;
        this.context.propertyPane.open();
    };
    FeaturedContentWebPart.prototype.deleteBasicItem = function (index) {
        this.properties.featuredContentItems.splice(index, 1);
        this.render();
    };
    //Function to validate previewUrl before setting Image property of item.
    FeaturedContentWebPart.prototype.checkImage = function (imageSrc, success, failure) {
        var img = new Image();
        img.onload = success;
        img.onerror = failure;
        img.src = imageSrc;
    };
    FeaturedContentWebPart.prototype.setUrl = function (urlString, name) {
        var _this = this;
        if (this.activeIndex === -1) {
            this.properties.featuredContentItems.push({
                Title: strings.TitlePlaceholder,
                Description: "",
                Content: "",
                URL: "",
                NewTab: false,
                Image: "",
                ImageAlternate: "",
                CustomImageUrl: "",
                ImageMode: ImageDisplayType.Auto,
                PreviewImageUrl: ""
            });
            this.activeIndex = this.properties.featuredContentItems.length - 1;
        }
        var isDoc = false;
        var docExtensions = ["pdf", "xls", "xlsx", "doc", "docx", "ppt", "pptx", "pptm", "dot"];
        for (var _i = 0, docExtensions_1 = docExtensions; _i < docExtensions_1.length; _i++) {
            var ext = docExtensions_1[_i];
            if (urlString.indexOf(ext, urlString.length - ext.length) !== -1)
                isDoc = true;
        }
        this.properties.featuredContentItems[this.activeIndex].URL = urlString + (isDoc ? "?web=1" : "");
        this.properties.featuredContentItems[this.activeIndex].Title = name ? name : this.properties.featuredContentItems[this.activeIndex].Title;
        //If image is on host server
        var url = new URL(urlString);
        if (url.host === window.location.host) {
            //Generate preview urlString
            var tmpPreviewUrl_1 = urlString.indexOf("getpreview.ashx") > -1 ? urlString : this.context.pageContext.web.serverRelativeUrl + "/_layouts/15/getpreview.ashx?resolution=0&clientMode=modernWebPart&path=" + encodeURIComponent(urlString);
            //Validate its an image
            this.checkImage(tmpPreviewUrl_1, function () {
                //Success function, set Image to preview urlString unless user has already set a custom image.
                _this.properties.featuredContentItems[_this.activeIndex].PreviewImageUrl = tmpPreviewUrl_1;
                _this.properties.featuredContentItems[_this.activeIndex].CustomImageUrl = tmpPreviewUrl_1;
                if (_this.properties.featuredContentItems[_this.activeIndex].ImageMode == ImageDisplayType.Auto) {
                    _this.properties.featuredContentItems[_this.activeIndex].Image = tmpPreviewUrl_1;
                }
                else {
                    //if image isn't already set, reset to preview urlString
                    if (!_this.properties.featuredContentItems[_this.activeIndex].Image)
                        _this.properties.featuredContentItems[_this.activeIndex].Image = tmpPreviewUrl_1;
                }
                _this.context.propertyPane.refresh();
                //Force UI to display new image.
                _this.render();
            }, function () {
                _this.properties.featuredContentItems[_this.activeIndex].PreviewImageUrl = "";
                _this.properties.featuredContentItems[_this.activeIndex].CustomImageUrl = "";
                _this.properties.featuredContentItems[_this.activeIndex].Image = "";
                _this.context.propertyPane.refresh();
            }); //Failure function -- reset images to blank in case of link change
        }
        else {
            //Image is external URL
            this.checkImage(urlString, function () {
                _this.properties.featuredContentItems[_this.activeIndex].PreviewImageUrl = encodeURI(urlString);
                _this.properties.featuredContentItems[_this.activeIndex].CustomImageUrl = encodeURI(urlString);
                _this.properties.featuredContentItems[_this.activeIndex].Image = encodeURI(urlString);
                _this.context.propertyPane.refresh();
            }, function () {
                _this.properties.featuredContentItems[_this.activeIndex].PreviewImageUrl = "";
                _this.properties.featuredContentItems[_this.activeIndex].CustomImageUrl = "";
                _this.properties.featuredContentItems[_this.activeIndex].Image = "";
                _this.context.propertyPane.refresh();
            });
        }
        if (!this.context.propertyPane.isRenderedByWebPart())
            this.context.propertyPane.open();
        this.context.propertyPane.refresh();
    };
    FeaturedContentWebPart.prototype.setTitle = function (title) {
        this.properties.title = title;
    };
    FeaturedContentWebPart.prototype.resetIndex = function () {
        this.activeIndex = -1;
    };
    FeaturedContentWebPart.prototype.onContentChange = function (content) {
        var initVal = this.properties.featuredContentItems[this.activeIndex].Content;
        this.properties.featuredContentItems[this.activeIndex].Content = content;
        this.onPropertyPaneFieldChanged("featuredContentItems[" + this.activeIndex + "].Content", initVal, content);
        this.render();
    };
    return FeaturedContentWebPart;
}(BaseClientSideWebPart));
export default FeaturedContentWebPart;
//# sourceMappingURL=FeaturedContentWebPart.js.map
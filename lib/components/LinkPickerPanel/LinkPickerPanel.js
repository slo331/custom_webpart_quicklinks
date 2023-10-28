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
import { Panel, PanelType, Nav, DefaultButton, PrimaryButton } from 'office-ui-fabric-react';
import { LinkType } from './ILinkPickerPanelProps';
import { NavState, ApprovedImage } from './ILinkPickerPanelState';
import styles from './LinkPickerPanel.module.scss';
import { strings } from '../loc/en-us';
import { SPHttpClient } from '@microsoft/sp-http';
var imageJsonConfigLocation = "/SiteAssets/ApprovedImageLibs.config";
var LinkPickerPanel = /** @class */ (function (_super) {
    __extends(LinkPickerPanel, _super);
    function LinkPickerPanel(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isOpen: false,
            navState: NavState.site,
            isUrlValid: false,
            url: "",
            showImageTab: false,
            images: [],
            imageLibs: []
        };
        _this.props.webPartContext.spHttpClient.get(imageJsonConfigLocation, SPHttpClient.configurations.v1).then(function (response) {
            _this.setState({ showImageTab: response.status === 200 });
        }).catch(function () {
            _this.setState({ showImageTab: false });
        });
        return _this;
    }
    LinkPickerPanel.prototype.render = function () {
        var _this = this;
        // Figure out which UI to show based on the navigation state
        var showDocPickerIFrame = this.state.navState == NavState.site;
        var showLinkEntryForm = this.state.navState == NavState.link;
        var showImageEntryForm = this.state.navState == NavState.image;
        return (React.createElement(Panel, { isOpen: this.state.isOpen, onDismissed: this.removeMessageListener.bind(this), className: styles["link-picker"], hasCloseButton: false, type: PanelType.extraLarge, isLightDismiss: true, onDismiss: this.onCancelButtonClick.bind(this) },
            this.state.showImageTab &&
                React.createElement(Nav, { selectedKey: this.state.navState.toString(), isOnTop: true, initialSelectedKey: NavState.site.toString(), groups: [{
                            links: [
                                {
                                    name: strings.LinkPickerSiteNav,
                                    icon: "Globe", key: NavState.site.toString(), url: "#",
                                    onClick: this.onSiteNavClick.bind(this),
                                    isExpanded: showDocPickerIFrame
                                },
                                {
                                    name: strings.LinkPickerLinkNav,
                                    icon: "Link", key: NavState.link.toString(), url: "#",
                                    onClick: this.onLinkNavClick.bind(this),
                                    isExpanded: showLinkEntryForm
                                },
                                {
                                    name: strings.LinkPickerImageNav,
                                    icon: "Photo2", key: NavState.image.toString(), url: "#",
                                    onClick: this.onImageNavClick.bind(this),
                                    isExpanded: showImageEntryForm
                                }
                            ]
                        }] }),
            !this.state.showImageTab &&
                React.createElement(Nav, { selectedKey: this.state.navState.toString(), isOnTop: true, initialSelectedKey: NavState.site.toString(), groups: [{
                            links: [
                                {
                                    name: strings.LinkPickerSiteNav,
                                    icon: "Globe", key: NavState.site.toString(), url: "#",
                                    onClick: this.onSiteNavClick.bind(this),
                                    isExpanded: showDocPickerIFrame
                                },
                                {
                                    name: strings.LinkPickerLinkNav,
                                    icon: "Link", key: NavState.link.toString(), url: "#",
                                    onClick: this.onLinkNavClick.bind(this),
                                    isExpanded: showLinkEntryForm
                                }
                            ]
                        }] }),
            React.createElement("div", { className: styles["tabs"] },
                React.createElement("div", { hidden: !showDocPickerIFrame },
                    React.createElement("iframe", { src: this.getDocPickerUrl(), role: "application", title: strings.LinkPickerSelectFromSiteTitle })),
                React.createElement("div", { hidden: !showLinkEntryForm, className: styles["link-insert"] },
                    React.createElement("h2", null, strings.LinkPickerSelectFromLinkLabel),
                    React.createElement("label", { htmlFor: "linkUrl" }, strings.LinkPickerSelectFromLinkDescription),
                    React.createElement("br", null),
                    React.createElement("textarea", { id: "linkUrl", "aria-label": strings.LinkPickerSelectFromLinkDescription, onChange: this.onLinkTextChange.bind(this), defaultValue: this.state.url }),
                    React.createElement("div", { className: styles["buttons"] },
                        React.createElement(PrimaryButton, { disabled: !this.state.isUrlValid, onClick: this.onOkButtonClick.bind(this) }, strings.LinkPickerSelectButtonText),
                        React.createElement(DefaultButton, { onClick: this.onCancelButtonClick.bind(this) }, strings.LinkPickerCancelButtonText))),
                React.createElement("div", { hidden: !showImageEntryForm },
                    React.createElement("div", { className: styles['imageCont'] }, this.state.images &&
                        this.state.images.map(function (item) {
                            return (React.createElement("div", { className: styles['imageItem'], key: "item-" + _this.state.images.indexOf(item), onClick: _this.onImageSelect.bind(_this), "data-index": _this.state.images.indexOf(item) },
                                React.createElement("img", { src: item.Thumbnail }),
                                React.createElement("p", null, item.Name)));
                        })),
                    React.createElement("div", { className: styles["buttons"] },
                        React.createElement(PrimaryButton, { disabled: !this.state.isUrlValid, onClick: this.onOkButtonClick.bind(this) }, strings.LinkPickerSelectButtonText),
                        React.createElement(DefaultButton, { onClick: this.onCancelButtonClick.bind(this) }, strings.LinkPickerCancelButtonText))))));
    };
    // Public method to pick a link
    LinkPickerPanel.prototype.pickLink = function (currentUrl) {
        var _this = this;
        if (currentUrl === void 0) { currentUrl = ""; }
        //set the current url as the optional input url
        this.setState({
            url: currentUrl,
            isUrlValid: this.isValidLink(currentUrl)
        }, function () {
            _this.openLinkPanel();
        });
        return new Promise(function (resolve, reject) {
            _this.resolvePickLink = resolve;
            _this.rejectPickLink = reject;
        });
    };
    LinkPickerPanel.prototype.openLinkPanel = function () {
        //and message listener for document selection iFrame  
        this.addMessageListener();
        //set state to open link picker and set proper pane
        this.setState({
            isOpen: true,
            navState: this.state.url ? NavState.link : NavState.site,
        });
    };
    LinkPickerPanel.prototype.closeLinkPanel = function () {
        this.removeMessageListener();
        this.setState({
            isOpen: false,
        });
    };
    // ** Functions to manage the document selection iFrame **
    LinkPickerPanel.prototype.addMessageListener = function () {
        addEventListener('message', this.onMessageReceived.bind(this), false);
    };
    LinkPickerPanel.prototype.removeMessageListener = function () {
        removeEventListener('message', this.onMessageReceived.bind(this), false);
    };
    LinkPickerPanel.prototype.onMessageReceived = function (event) {
        if (event.data.indexOf('[OneDrive-FromPicker]', 0) === 0) {
            var json = JSON.parse(event.data.replace('[OneDrive-FromPicker]', ''));
            var eventType = json.type;
            switch (eventType) {
                case 'success':
                    var name_1 = json.items[0].name;
                    var url = json.items[0].sharePoint.url;
                    this.resolvePickLink({ name: name_1, url: url });
                    this.closeLinkPanel();
                    break;
                case 'cancel':
                    this.rejectPickLink();
                    this.closeLinkPanel();
                    break;
            }
        }
    };
    LinkPickerPanel.prototype.getDocPickerUrl = function () {
        var anchor = document.createElement('a');
        anchor.href = this.props.webAbsUrl;
        var typeFilter = '&view=2&p=2';
        if (this.props.linkType != LinkType.all) {
            typeFilter += '&typeFilters=';
            if (this.props.linkType & LinkType.folder)
                typeFilter += 'folder,';
            if (this.props.linkType & LinkType.doc)
                typeFilter += '.doc,.docx,.docm,.xls,.xlsx,.xlsm,.pot,.potx,.ppt,.pptx,.pptm,.vsdx,.vsdm,.vsd,.pdf,';
            if (this.props.linkType & LinkType.image)
                typeFilter += '.gif,.jpg,.jpeg,.bmp,.dib,.tif,.tiff,.ico,.png,.jxr,';
            if (this.props.linkType & LinkType.page)
                typeFilter += '.aspx,';
            if (this.props.linkType & LinkType.developer)
                typeFilter += '.html,.css,.handlebars,.js,.json,.ts,.tsx,.jsx,.less,.scss,.sass';
            typeFilter = typeFilter.slice(0, -1); // Trim trailing comma
        }
        typeFilter += '&picker={"sn":false,"v":"files","id":"1","o":"';
        return anchor.href +
            "/_layouts/15/onedrive.aspx?id=" +
            (anchor.pathname.substring(0, 1) === '/' ? "" : "/") +
            anchor.pathname +
            typeFilter +
            anchor.hostname +
            '","s":"single"}';
    };
    //Function to get the libraries where image previews will be loaded from.
    LinkPickerPanel.prototype.getImageLibraries = function () {
        var _this = this;
        this.props.webPartContext.spHttpClient.get(imageJsonConfigLocation, SPHttpClient.configurations.v1).then(function (response) {
            response.json().then(function (results) {
                _this.setState({ imageLibs: results });
                _this.getApprovedImages();
            });
        });
    };
    //Function to return url's of approved images
    //TODO: allow >1 location of featured images and make configurable
    LinkPickerPanel.prototype.getApprovedImages = function () {
        var _this = this;
        var images = [];
        if (this.state.imageLibs.length > 0) {
            this.state.imageLibs.forEach(function (library) {
                var libSourceString = library.libUrl.substr(0, library.libUrl.indexOf("/_api/"));
                _this.props.webPartContext.spHttpClient.get(library.libUrl, SPHttpClient.configurations.v1)
                    .then(function (response) {
                    response.json().then(function (results) {
                        results.value.forEach(function (value) {
                            var item = new ApprovedImage();
                            item.RelativeURL = value.FieldValuesAsText.FileRef;
                            item.Name = value.FieldValuesAsText.FileLeafRef;
                            //RESERVE for a time when the CDN can handle scaling.
                            //item.Thumbnail =  library.cdnUrl + value.FieldValuesAsText.FileLeafRef;
                            //this.props.webAbsUrl
                            var tmp = _this.props.webAbsUrl;
                            item.Thumbnail = libSourceString +
                                "/_layouts/15/getpreview.ashx?resolution=0&clientMode=modernWebPart&path=" +
                                window.location.origin +
                                value.FieldValuesAsText.FileRef;
                            images.push(item);
                        });
                        _this.setState({ images: images });
                    });
                });
            });
        }
    };
    // ** UI Event Handlers **
    // <Nav> event handlers
    LinkPickerPanel.prototype.onSiteNavClick = function (event) {
        this.onNavClick(NavState.site, event);
    };
    LinkPickerPanel.prototype.onLinkNavClick = function (event) {
        this.onNavClick(NavState.link, event);
    };
    LinkPickerPanel.prototype.onImageNavClick = function (event) {
        this.onNavClick(NavState.image, event);
        this.getImageLibraries();
    };
    LinkPickerPanel.prototype.onNavClick = function (navState, event) {
        event.stopPropagation();
        event.preventDefault();
        this.setState({
            navState: navState
        });
        return false;
    };
    // Link entry form
    LinkPickerPanel.prototype.onLinkTextChange = function (event) {
        this.setState({
            url: event.currentTarget.value,
            isUrlValid: this.isValidLink(event.currentTarget.value)
        });
    };
    LinkPickerPanel.prototype.onOkButtonClick = function (event) {
        this.resolvePickLink({ name: "", url: this.state.url });
        this.closeLinkPanel();
    };
    LinkPickerPanel.prototype.onCancelButtonClick = function () {
        this.rejectPickLink();
        this.closeLinkPanel();
    };
    // Image entry form
    LinkPickerPanel.prototype.onImageSelect = function (event) {
        var elements = document.querySelectorAll("." + styles["imageCont"] + " ." + styles["imageItem"]);
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].getAttribute("is-selected"))
                elements[i].removeAttribute("is-selected");
        }
        event.currentTarget.setAttribute("is-selected", "true");
        var linkTarget = this.state.images[event.currentTarget.attributes['data-index'].value].Thumbnail;
        if (linkTarget != undefined) {
            this.setState({
                url: linkTarget,
                isUrlValid: this.isValidLink(linkTarget)
            });
        }
    };
    // ** Validation  **
    LinkPickerPanel.prototype.isValidLink = function (url) {
        var httpUrlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        var dataUrlRegex = /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*)\s*$/i;
        return httpUrlRegex.test(url) ||
            ((this.props.linkType | LinkType.image) && dataUrlRegex.test(url));
    };
    return LinkPickerPanel;
}(React.Component));
export default LinkPickerPanel;
//# sourceMappingURL=LinkPickerPanel.js.map
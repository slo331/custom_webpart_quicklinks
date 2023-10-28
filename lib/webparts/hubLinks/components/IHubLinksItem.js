var HubLinksItem = /** @class */ (function () {
    function HubLinksItem(index, Title, URL, Description, Icon, NewTab, GroupBy) {
        if (index === void 0) { index = null; }
        if (Title === void 0) { Title = null; }
        if (URL === void 0) { URL = null; }
        if (Description === void 0) { Description = null; }
        if (Icon === void 0) { Icon = null; }
        if (NewTab === void 0) { NewTab = false; }
        if (GroupBy === void 0) { GroupBy = null; }
        this.index = index;
        this.Title = Title;
        this.URL = URL;
        this.Description = Description;
        this.Icon = Icon;
        this.NewTab = NewTab;
        this.GroupBy = GroupBy;
    }
    return HubLinksItem;
}());
export { HubLinksItem };
var HubLinksItemHeading = /** @class */ (function () {
    function HubLinksItemHeading(Title, Id) {
        if (Title === void 0) { Title = null; }
        if (Id === void 0) { Id = null; }
        this.Title = Title;
        this.Id = Id;
    }
    return HubLinksItemHeading;
}());
export { HubLinksItemHeading };
var HubLinksGroupItem = /** @class */ (function () {
    function HubLinksGroupItem(Heading, Links) {
        if (Heading === void 0) { Heading = new HubLinksItemHeading(); }
        if (Links === void 0) { Links = []; }
        this.Heading = Heading;
        this.Links = Links;
    }
    return HubLinksGroupItem;
}());
export { HubLinksGroupItem };
//# sourceMappingURL=IHubLinksItem.js.map
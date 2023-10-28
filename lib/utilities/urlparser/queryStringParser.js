var QueryStringParser = /** @class */ (function () {
    function QueryStringParser() {
    }
    QueryStringParser.getQueryStringValue = function (name, url) {
        if (!url)
            url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        name = name.toLowerCase();
        url = url.toLowerCase();
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
        var results = regex.exec(url);
        if (!results)
            return null;
        if (!results[2])
            return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    };
    QueryStringParser.ReplaceQueryStringParameters = function (value) {
        var qsRegex = new RegExp(/\[QueryString\.(.*?)\]/g);
        var qsParams = qsRegex.exec(value);
        if (qsParams && qsParams.length > 0) {
            qsParams.forEach(function (element) {
                if (element.indexOf('[QueryString.') > -1) {
                    var origVal = element;
                    var paramElement = element.replace("[QueryString.", "").replace("]", "");
                    value = value.replace(origVal, QueryStringParser.getQueryStringValue(paramElement));
                }
            });
        }
        return value;
    };
    return QueryStringParser;
}());
export default QueryStringParser;
//# sourceMappingURL=queryStringParser.js.map
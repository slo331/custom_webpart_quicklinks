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
import { HttpClient } from '@microsoft/sp-http';
import { sp } from "@pnp/sp";
import { Logger } from "@pnp/logging";
var Usage = /** @class */ (function () {
    function Usage(webPartName, absoluteUrl, version, customData1, customData2, customData3, customData4, customData5) {
        this.WebPartName = webPartName;
        this.AbsoluteUrl = absoluteUrl;
        this.Version = version;
        this.CustomData1 = customData1;
        this.CustomData2 = customData2;
        this.CustomData3 = customData3;
        this.CustomData4 = customData4;
        this.CustomData5 = customData5;
    }
    return Usage;
}());
export { Usage };
var storageEntity = "LinksHandlebarsConfig";
var environmentName = "PROD";
var WebPartLogger = /** @class */ (function () {
    function WebPartLogger() {
    }
    WebPartLogger.logUsage = function (context, urlsToCheck) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data_1, hasBrandImagePreviewUrl, usage, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, sp.web.getStorageEntity(storageEntity)];
                    case 1:
                        response = _a.sent();
                        if (response) {
                            data_1 = JSON.parse(response.Value);
                            hasBrandImagePreviewUrl = "0";
                            if (urlsToCheck) {
                                urlsToCheck.forEach(function (element) {
                                    if (element && element.indexOf(data_1.brandImagePreviewUrl) > -1)
                                        hasBrandImagePreviewUrl = "1";
                                });
                            }
                            usage = new Usage(context.webPartTag, context.domElement.baseURI, context.manifest.version, environmentName, hasBrandImagePreviewUrl, null, null, null);
                            context.httpClient.post(data_1.loggingUrl, HttpClient.configurations.v1, {
                                method: 'POST',
                                mode: 'cors',
                                headers: new Headers({
                                    'Content-Type': 'application/json',
                                    'Cache-Control': 'no-cache',
                                    'x-functions-key': data_1.loggingKey
                                }),
                                body: JSON.stringify(usage),
                                credentials: 'omit'
                            });
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        Logger.write(err_1 + " - WebPartLogger (logUsage)", 3 /* Error */);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return WebPartLogger;
}());
export { WebPartLogger };
//# sourceMappingURL=usagelogger.js.map
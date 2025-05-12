"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.performGet = void 0;
var https_1 = __importDefault(require("https"));
var stream_1 = require("stream");
exports.performGet = function (url) {
    return new Promise(function (resolve, reject) {
        https_1["default"].get(url, {
            headers: {
                'user-agent': 'vs-code'
            },
            timeout: 10000
        }, function (res) {
            var inputStream = new stream_1.Transform();
            res.on('data', function (d) {
                inputStream.push(d);
            });
            res.on('end', function () {
                resolve(inputStream);
            });
        }).on('error', function (e) {
            reject(e);
        }).end();
    });
};
//# sourceMappingURL=RESTClient.js.map
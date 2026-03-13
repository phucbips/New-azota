"use strict";
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handler;
var PayOS = require('@payos/node').PayOS;
function handler(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, amount, description, orderCode, returnUrl, cancelUrl, clientId, apiKey, checksumKey, payOS, body, paymentLinkResponse, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    // CORS configuration
                    res.setHeader('Access-Control-Allow-Credentials', 'true');
                    res.setHeader('Access-Control-Allow-Origin', '*');
                    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
                    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
                    if (req.method === 'OPTIONS') {
                        res.status(200).end();
                        return [2 /*return*/];
                    }
                    if (req.method !== 'POST') {
                        return [2 /*return*/, res.status(405).json({ error: 'Method Not Allowed' })];
                    }
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    _a = req.body, amount = _a.amount, description = _a.description, orderCode = _a.orderCode, returnUrl = _a.returnUrl, cancelUrl = _a.cancelUrl;
                    if (!amount || !description || !orderCode || !returnUrl || !cancelUrl) {
                        return [2 /*return*/, res.status(400).json({ error: 'Missing required parameters' })];
                    }
                    clientId = process.env.PAYOS_CLIENT_ID || '';
                    apiKey = process.env.PAYOS_API_KEY || '';
                    checksumKey = process.env.PAYOS_CHECKSUM_KEY || '';
                    if (!clientId || !apiKey || !checksumKey) {
                        return [2 /*return*/, res.status(500).json({
                                error: 'Missing PayOS Configuration',
                                message: 'Client ID, API Key, or Checksum Key is not configured. Please check Admin Settings or Environment Variables.'
                            })];
                    }
                    payOS = new PayOS({
                        clientId: clientId,
                        apiKey: apiKey,
                        checksumKey: checksumKey
                    });
                    body = {
                        orderCode: Number(orderCode),
                        amount: Number(amount),
                        description: String(description).substring(0, 25), // PayOS limit is 25 chars
                        returnUrl: returnUrl,
                        cancelUrl: cancelUrl,
                    };
                    return [4 /*yield*/, payOS.paymentRequests.create(body)];
                case 2:
                    paymentLinkResponse = _b.sent();
                    return [2 /*return*/, res.status(200).json({
                            checkoutUrl: paymentLinkResponse.checkoutUrl,
                            paymentLinkId: paymentLinkResponse.paymentLinkId,
                        })];
                case 3:
                    error_1 = _b.sent();
                    console.error('PayOS Error:', error_1);
                    return [2 /*return*/, res.status(500).json({
                            error: 'Failed to create payment link',
                            message: error_1.message || String(error_1)
                        })];
                case 4: return [2 /*return*/];
            }
        });
    });
}

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPolygonMumbaiSdk = exports.getMainnetSdk = exports.getContract = void 0;
const ethers_1 = require("ethers");
const DAI_json_1 = __importDefault(require("../../abis/mainnet/DAI.json"));
const UNI_json_1 = __importDefault(require("../../abis/mainnet/UNI.json"));
const LensHub_json_1 = __importDefault(require("../../abis/polygonMumbai/LensHub.json"));
function getContract(address, abi, defaultSigner) {
    return new ethers_1.Contract(address, abi, defaultSigner);
}
exports.getContract = getContract;
function getMainnetSdk(defaultSigner) {
    return {
        "DAI": getContract('0x6b175474e89094c44da98b954eedeac495271d0f', DAI_json_1.default, defaultSigner),
        "UNI": getContract('0x1f9840a85d5af5bf1d1762f925bdaddc4201f984', UNI_json_1.default, defaultSigner),
    };
}
exports.getMainnetSdk = getMainnetSdk;
function getPolygonMumbaiSdk(defaultSigner) {
    return {
        "LensHub": getContract('0x4BF0c7AD32Fd2d32089790a54485e23f5C7736C0', LensHub_json_1.default, defaultSigner),
    };
}
exports.getPolygonMumbaiSdk = getPolygonMumbaiSdk;

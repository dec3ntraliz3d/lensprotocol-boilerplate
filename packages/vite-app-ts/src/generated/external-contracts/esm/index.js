import { Contract } from 'ethers';
import mainnetDAIAbi from '../../abis/mainnet/DAI.json';
import mainnetUNIAbi from '../../abis/mainnet/UNI.json';
import polygonMumbaiLensHubAbi from '../../abis/polygonMumbai/LensHub.json';
export function getContract(address, abi, defaultSigner) {
    return new Contract(address, abi, defaultSigner);
}
export function getMainnetSdk(defaultSigner) {
    return {
        "DAI": getContract('0x6b175474e89094c44da98b954eedeac495271d0f', mainnetDAIAbi, defaultSigner),
        "UNI": getContract('0x1f9840a85d5af5bf1d1762f925bdaddc4201f984', mainnetUNIAbi, defaultSigner),
    };
}
export function getPolygonMumbaiSdk(defaultSigner) {
    return {
        "LensHub": getContract('0x4BF0c7AD32Fd2d32089790a54485e23f5C7736C0', polygonMumbaiLensHubAbi, defaultSigner),
    };
}

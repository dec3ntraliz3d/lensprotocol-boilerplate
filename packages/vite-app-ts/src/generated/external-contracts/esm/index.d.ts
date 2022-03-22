import { Signer } from 'ethers';
import * as types from './types';
export declare function getContract(address: string, abi: object, defaultSigner: Signer): any;
export declare type MainnetSdk = ReturnType<typeof getMainnetSdk>;
export declare function getMainnetSdk(defaultSigner: Signer): {
    DAI: types.DAI;
    UNI: types.UNI;
};
export declare type PolygonMumbaiSdk = ReturnType<typeof getPolygonMumbaiSdk>;
export declare function getPolygonMumbaiSdk(defaultSigner: Signer): {
    LensHub: types.LensHub;
};

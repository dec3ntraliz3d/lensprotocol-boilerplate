/**
 * This file was automatically generated from eth-sdk.config.ts.bak
 */
 
import { defineConfig } from '@dethcrypto/eth-sdk';
import { contractsByNetworkName } from '../functions/contractsByNetworkName';

console.log(contractsByNetworkName);

export default defineConfig({
  contracts: contractsByNetworkName,
  outputPath: './src/generated/external-contracts/',
 rpc: {
    polygonMumbai: 'https://polygon-mumbai.g.alchemy.com/v2/EW3eUNc5Cm3ehNBWn5a1saftSYphXaAd'
  },

});

import { NetworkID } from '@dethcrypto/eth-sdk/dist/abi-management/networks';
import { TExternalContractsAddressMap } from 'eth-hooks/models';

/**
 * ⛳️⛳️⛳️⛳️⛳️⛳️⛳️⛳️⛳️⛳️⛳️⛳️⛳️⛳️
 * #### Instructions
 * - Add your contracts to the list here
 * - The format is described by {@link TExternalContractsAddressMap}
 *
 * ### Summary
 * The list of external contracts use by the app.
 * it is used to generate the type definitions for the external contracts by `yarn contracts:build`
 * provide the name and address of the external contract and the definition will be generated
 */
export const externalContractsAddressMap: TExternalContractsAddressMap = {
  [NetworkID.MAINNET]: {
    DAI: '0x6b175474e89094c44da98b954eedeac495271d0f',
    UNI: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
  },
  [NetworkID.POLYGON_MUMBAI]: {
    LensHub: '0xd7B3481De00995046C7850bCe9a5196B7605c367'
  }
};

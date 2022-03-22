/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ModuleGlobals, ModuleGlobalsInterface } from "../ModuleGlobals";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "governance",
        type: "address",
      },
      {
        internalType: "address",
        name: "treasury",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "treasuryFee",
        type: "uint16",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InitParamsInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "NotGovernance",
    type: "error",
  },
  {
    inputs: [],
    name: "getGovernance",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTreasury",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTreasuryData",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTreasuryFee",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "currency",
        type: "address",
      },
    ],
    name: "isCurrencyWhitelisted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newGovernance",
        type: "address",
      },
    ],
    name: "setGovernance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newTreasury",
        type: "address",
      },
    ],
    name: "setTreasury",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "newTreasuryFee",
        type: "uint16",
      },
    ],
    name: "setTreasuryFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "currency",
        type: "address",
      },
      {
        internalType: "bool",
        name: "toWhitelist",
        type: "bool",
      },
    ],
    name: "whitelistCurrency",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161083838038061083883398101604081905261002f91610203565b61003883610052565b610041826100dc565b61004a8161015a565b505050610280565b6001600160a01b038116610079576040516348be0eb360e01b815260040160405180910390fd5b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907fbf538a2c0db3d440906b8179dd0394f68a65b0b1481da70ffee24e19dccee84c906100d09042815260200190565b60405180910390a35050565b6001600160a01b038116610103576040516348be0eb360e01b815260040160405180910390fd5b600280546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f3dfc53d6b49bfbc932b215ba515f0d0ab0e17aac17726fba48075f0c16c7ffe3906100d09042815260200190565b6101676002612710610251565b61ffff168161ffff161061018e576040516348be0eb360e01b815260040160405180910390fd5b6002805461ffff838116600160a01b81810261ffff60a01b1985161790945560405193909204169182907fec936862e6bb897cd711a5f31825057583128c2a482f0a4c9a4e6c3fd7c023f4906100d09042815260200190565b80516001600160a01b03811681146101fe57600080fd5b919050565b60008060006060848603121561021857600080fd5b610221846101e7565b925061022f602085016101e7565b9150604084015161ffff8116811461024657600080fd5b809150509250925092565b600061ffff8084168061027457634e487b7160e01b600052601260045260246000fd5b92169190910492915050565b6105a98061028f6000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80638c3bfb1c116100665780638c3bfb1c1461013057806398f965d114610145578063a652db491461016f578063ab033ea914610182578063f0f442601461019557600080fd5b8063289b3c0d1461009857806329070c6d146100c25780633b19e84a146100e357806343b938c5146100f4575b600080fd5b6001546001600160a01b03165b6040516001600160a01b0390911681526020015b60405180910390f35b600254600160a01b900461ffff1660405161ffff90911681526020016100b9565b6002546001600160a01b03166100a5565b6101206101023660046104c2565b6001600160a01b031660009081526020819052604090205460ff1690565b60405190151581526020016100b9565b61014361013e3660046104e4565b6101a8565b005b600254604080516001600160a01b0383168152600160a01b90920461ffff166020830152016100b9565b61014361017d366004610520565b6101e1565b6101436101903660046104c2565b610218565b6101436101a33660046104c2565b61024c565b6001546001600160a01b031633146101d357604051632d5be4cb60e21b815260040160405180910390fd5b6101dd8282610280565b5050565b6001546001600160a01b0316331461020c57604051632d5be4cb60e21b815260040160405180910390fd5b61021581610311565b50565b6001546001600160a01b0316331461024357604051632d5be4cb60e21b815260040160405180910390fd5b610215816103aa565b6001546001600160a01b0316331461027757604051632d5be4cb60e21b815260040160405180910390fd5b61021581610428565b6001600160a01b0382166102a7576040516348be0eb360e01b815260040160405180910390fd5b6001600160a01b03821660008181526020818152604091829020805485151560ff1982168117909255925142815260ff909316939092841515927f79c3cefc851fd6040f06af202c542818d9fb39bcddcb7a7e3f563b15300a2743910160405180910390a4505050565b61031e6002612710610544565b61ffff168161ffff1610610345576040516348be0eb360e01b815260040160405180910390fd5b6002805461ffff838116600160a01b81810261ffff60a01b1985161790945560405193909204169182907fec936862e6bb897cd711a5f31825057583128c2a482f0a4c9a4e6c3fd7c023f49061039e9042815260200190565b60405180910390a35050565b6001600160a01b0381166103d1576040516348be0eb360e01b815260040160405180910390fd5b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907fbf538a2c0db3d440906b8179dd0394f68a65b0b1481da70ffee24e19dccee84c9061039e9042815260200190565b6001600160a01b03811661044f576040516348be0eb360e01b815260040160405180910390fd5b600280546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f3dfc53d6b49bfbc932b215ba515f0d0ab0e17aac17726fba48075f0c16c7ffe39061039e9042815260200190565b80356001600160a01b03811681146104bd57600080fd5b919050565b6000602082840312156104d457600080fd5b6104dd826104a6565b9392505050565b600080604083850312156104f757600080fd5b610500836104a6565b91506020830135801515811461051557600080fd5b809150509250929050565b60006020828403121561053257600080fd5b813561ffff811681146104dd57600080fd5b600061ffff8084168061056757634e487b7160e01b600052601260045260246000fd5b9216919091049291505056fea264697066735822122076d02e0a9fc4f17a4a1350de6c819c7d8334403273b2c84c624a7f6b6fde53fa64736f6c634300080a0033";

type ModuleGlobalsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ModuleGlobalsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ModuleGlobals__factory extends ContractFactory {
  constructor(...args: ModuleGlobalsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ModuleGlobals";
  }

  deploy(
    governance: string,
    treasury: string,
    treasuryFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ModuleGlobals> {
    return super.deploy(
      governance,
      treasury,
      treasuryFee,
      overrides || {}
    ) as Promise<ModuleGlobals>;
  }
  getDeployTransaction(
    governance: string,
    treasury: string,
    treasuryFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      governance,
      treasury,
      treasuryFee,
      overrides || {}
    );
  }
  attach(address: string): ModuleGlobals {
    return super.attach(address) as ModuleGlobals;
  }
  connect(signer: Signer): ModuleGlobals__factory {
    return super.connect(signer) as ModuleGlobals__factory;
  }
  static readonly contractName: "ModuleGlobals";
  public readonly contractName: "ModuleGlobals";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ModuleGlobalsInterface {
    return new utils.Interface(_abi) as ModuleGlobalsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ModuleGlobals {
    return new Contract(address, _abi, signerOrProvider) as ModuleGlobals;
  }
}

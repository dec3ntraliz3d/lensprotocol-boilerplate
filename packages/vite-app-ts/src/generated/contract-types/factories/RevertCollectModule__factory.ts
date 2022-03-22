/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  RevertCollectModule,
  RevertCollectModuleInterface,
} from "../RevertCollectModule";

const _abi = [
  {
    inputs: [],
    name: "CollectNotAllowed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pubId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "initializePublicationCollectModule",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "referrerProfileId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "collector",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pubId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "processCollect",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061024a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063c233f9511461003b578063e49c3dda14610076575b600080fd5b6100606100493660046100ed565b505060408051600081526020810190915292915050565b60405161006d9190610140565b60405180910390f35b610089610084366004610195565b61008b565b005b60405163ad4cf0a360e01b815260040160405180910390fd5b60008083601f8401126100b657600080fd5b50813567ffffffffffffffff8111156100ce57600080fd5b6020830191508360208285010111156100e657600080fd5b9250929050565b6000806000806060858703121561010357600080fd5b8435935060208501359250604085013567ffffffffffffffff81111561012857600080fd5b610134878288016100a4565b95989497509550505050565b600060208083528351808285015260005b8181101561016d57858101830151858201604001528201610151565b8181111561017f576000604083870101525b50601f01601f1916929092016040019392505050565b60008060008060008060a087890312156101ae57600080fd5b8635955060208701356001600160a01b03811681146101cc57600080fd5b94506040870135935060608701359250608087013567ffffffffffffffff8111156101f657600080fd5b61020289828a016100a4565b979a969950949750929593949250505056fea2646970667358221220850787cbbf386eff4e8ca82cade4fd48ec64acdc41a9f996d4a9d66826b350c964736f6c634300080a0033";

type RevertCollectModuleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RevertCollectModuleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RevertCollectModule__factory extends ContractFactory {
  constructor(...args: RevertCollectModuleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "RevertCollectModule";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RevertCollectModule> {
    return super.deploy(overrides || {}) as Promise<RevertCollectModule>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): RevertCollectModule {
    return super.attach(address) as RevertCollectModule;
  }
  connect(signer: Signer): RevertCollectModule__factory {
    return super.connect(signer) as RevertCollectModule__factory;
  }
  static readonly contractName: "RevertCollectModule";
  public readonly contractName: "RevertCollectModule";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RevertCollectModuleInterface {
    return new utils.Interface(_abi) as RevertCollectModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RevertCollectModule {
    return new Contract(address, _abi, signerOrProvider) as RevertCollectModule;
  }
}

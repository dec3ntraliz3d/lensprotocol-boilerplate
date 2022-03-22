/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export declare namespace DataTypes {
  export type CreateProfileDataStruct = {
    to: string;
    handle: string;
    imageURI: string;
    followModule: string;
    followModuleData: BytesLike;
    followNFTURI: string;
  };

  export type CreateProfileDataStructOutput = [
    string,
    string,
    string,
    string,
    string,
    string
  ] & {
    to: string;
    handle: string;
    imageURI: string;
    followModule: string;
    followModuleData: string;
    followNFTURI: string;
  };
}

export interface MockProfileCreationProxyInterface extends utils.Interface {
  contractName: "MockProfileCreationProxy";
  functions: {
    "proxyCreateProfile((address,string,string,address,bytes,string))": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "proxyCreateProfile",
    values: [DataTypes.CreateProfileDataStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "proxyCreateProfile",
    data: BytesLike
  ): Result;

  events: {};
}

export interface MockProfileCreationProxy extends BaseContract {
  contractName: "MockProfileCreationProxy";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MockProfileCreationProxyInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    proxyCreateProfile(
      vars: DataTypes.CreateProfileDataStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  proxyCreateProfile(
    vars: DataTypes.CreateProfileDataStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    proxyCreateProfile(
      vars: DataTypes.CreateProfileDataStruct,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    proxyCreateProfile(
      vars: DataTypes.CreateProfileDataStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    proxyCreateProfile(
      vars: DataTypes.CreateProfileDataStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

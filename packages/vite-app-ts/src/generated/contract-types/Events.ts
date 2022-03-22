/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { BaseContract, BigNumber, BigNumberish, Signer, utils } from "ethers";
import { EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface EventsInterface extends utils.Interface {
  contractName: "Events";
  functions: {};

  events: {
    "BaseInitialized(string,string,uint256)": EventFragment;
    "CollectModuleWhitelisted(address,bool,uint256)": EventFragment;
    "CollectNFTDeployed(uint256,uint256,address,uint256)": EventFragment;
    "CollectNFTInitialized(uint256,uint256,uint256)": EventFragment;
    "CollectNFTTransferred(uint256,uint256,uint256,address,address,uint256)": EventFragment;
    "Collected(address,uint256,uint256,uint256,uint256,uint256)": EventFragment;
    "CommentCreated(uint256,uint256,string,uint256,uint256,address,bytes,address,bytes,uint256)": EventFragment;
    "DefaultProfileSet(address,uint256,uint256)": EventFragment;
    "DispatcherSet(uint256,address,uint256)": EventFragment;
    "EmergencyAdminSet(address,address,address,uint256)": EventFragment;
    "FeeModuleBaseConstructed(address,uint256)": EventFragment;
    "FollowModuleSet(uint256,address,bytes,uint256)": EventFragment;
    "FollowModuleWhitelisted(address,bool,uint256)": EventFragment;
    "FollowNFTDelegatedPowerChanged(address,uint256,uint256)": EventFragment;
    "FollowNFTDeployed(uint256,address,uint256)": EventFragment;
    "FollowNFTInitialized(uint256,uint256)": EventFragment;
    "FollowNFTTransferred(uint256,uint256,address,address,uint256)": EventFragment;
    "FollowNFTURISet(uint256,string,uint256)": EventFragment;
    "FollowsApproved(address,uint256,address[],bool[],uint256)": EventFragment;
    "GovernanceSet(address,address,address,uint256)": EventFragment;
    "MirrorCreated(uint256,uint256,uint256,uint256,address,bytes,uint256)": EventFragment;
    "ModuleBaseConstructed(address,uint256)": EventFragment;
    "ModuleGlobalsCurrencyWhitelisted(address,bool,bool,uint256)": EventFragment;
    "ModuleGlobalsGovernanceSet(address,address,uint256)": EventFragment;
    "ModuleGlobalsTreasuryFeeSet(uint16,uint16,uint256)": EventFragment;
    "ModuleGlobalsTreasurySet(address,address,uint256)": EventFragment;
    "PostCreated(uint256,uint256,string,address,bytes,address,bytes,uint256)": EventFragment;
    "ProfileCreated(uint256,address,address,string,string,address,bytes,string,uint256)": EventFragment;
    "ProfileCreatorWhitelisted(address,bool,uint256)": EventFragment;
    "ProfileImageURISet(uint256,string,uint256)": EventFragment;
    "ReferenceModuleWhitelisted(address,bool,uint256)": EventFragment;
    "StateSet(address,uint8,uint8,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BaseInitialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CollectModuleWhitelisted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CollectNFTDeployed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CollectNFTInitialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CollectNFTTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Collected"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CommentCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DefaultProfileSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DispatcherSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EmergencyAdminSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FeeModuleBaseConstructed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FollowModuleSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FollowModuleWhitelisted"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "FollowNFTDelegatedPowerChanged"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FollowNFTDeployed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FollowNFTInitialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FollowNFTTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FollowNFTURISet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FollowsApproved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GovernanceSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MirrorCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ModuleBaseConstructed"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "ModuleGlobalsCurrencyWhitelisted"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ModuleGlobalsGovernanceSet"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "ModuleGlobalsTreasuryFeeSet"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ModuleGlobalsTreasurySet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PostCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProfileCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProfileCreatorWhitelisted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProfileImageURISet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReferenceModuleWhitelisted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StateSet"): EventFragment;
}

export type BaseInitializedEvent = TypedEvent<
  [string, string, BigNumber],
  { name: string; symbol: string; timestamp: BigNumber }
>;

export type BaseInitializedEventFilter = TypedEventFilter<BaseInitializedEvent>;

export type CollectModuleWhitelistedEvent = TypedEvent<
  [string, boolean, BigNumber],
  { collectModule: string; whitelisted: boolean; timestamp: BigNumber }
>;

export type CollectModuleWhitelistedEventFilter =
  TypedEventFilter<CollectModuleWhitelistedEvent>;

export type CollectNFTDeployedEvent = TypedEvent<
  [BigNumber, BigNumber, string, BigNumber],
  {
    profileId: BigNumber;
    pubId: BigNumber;
    collectNFT: string;
    timestamp: BigNumber;
  }
>;

export type CollectNFTDeployedEventFilter =
  TypedEventFilter<CollectNFTDeployedEvent>;

export type CollectNFTInitializedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  { profileId: BigNumber; pubId: BigNumber; timestamp: BigNumber }
>;

export type CollectNFTInitializedEventFilter =
  TypedEventFilter<CollectNFTInitializedEvent>;

export type CollectNFTTransferredEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, string, string, BigNumber],
  {
    profileId: BigNumber;
    pubId: BigNumber;
    collectNFTId: BigNumber;
    from: string;
    to: string;
    timestamp: BigNumber;
  }
>;

export type CollectNFTTransferredEventFilter =
  TypedEventFilter<CollectNFTTransferredEvent>;

export type CollectedEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber],
  {
    collector: string;
    profileId: BigNumber;
    pubId: BigNumber;
    rootProfileId: BigNumber;
    rootPubId: BigNumber;
    timestamp: BigNumber;
  }
>;

export type CollectedEventFilter = TypedEventFilter<CollectedEvent>;

export type CommentCreatedEvent = TypedEvent<
  [
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    string,
    string,
    string,
    string,
    BigNumber
  ],
  {
    profileId: BigNumber;
    pubId: BigNumber;
    contentURI: string;
    profileIdPointed: BigNumber;
    pubIdPointed: BigNumber;
    collectModule: string;
    collectModuleReturnData: string;
    referenceModule: string;
    referenceModuleReturnData: string;
    timestamp: BigNumber;
  }
>;

export type CommentCreatedEventFilter = TypedEventFilter<CommentCreatedEvent>;

export type DefaultProfileSetEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { wallet: string; profileId: BigNumber; timestamp: BigNumber }
>;

export type DefaultProfileSetEventFilter =
  TypedEventFilter<DefaultProfileSetEvent>;

export type DispatcherSetEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  { profileId: BigNumber; dispatcher: string; timestamp: BigNumber }
>;

export type DispatcherSetEventFilter = TypedEventFilter<DispatcherSetEvent>;

export type EmergencyAdminSetEvent = TypedEvent<
  [string, string, string, BigNumber],
  {
    caller: string;
    oldEmergencyAdmin: string;
    newEmergencyAdmin: string;
    timestamp: BigNumber;
  }
>;

export type EmergencyAdminSetEventFilter =
  TypedEventFilter<EmergencyAdminSetEvent>;

export type FeeModuleBaseConstructedEvent = TypedEvent<
  [string, BigNumber],
  { moduleGlobals: string; timestamp: BigNumber }
>;

export type FeeModuleBaseConstructedEventFilter =
  TypedEventFilter<FeeModuleBaseConstructedEvent>;

export type FollowModuleSetEvent = TypedEvent<
  [BigNumber, string, string, BigNumber],
  {
    profileId: BigNumber;
    followModule: string;
    followModuleReturnData: string;
    timestamp: BigNumber;
  }
>;

export type FollowModuleSetEventFilter = TypedEventFilter<FollowModuleSetEvent>;

export type FollowModuleWhitelistedEvent = TypedEvent<
  [string, boolean, BigNumber],
  { followModule: string; whitelisted: boolean; timestamp: BigNumber }
>;

export type FollowModuleWhitelistedEventFilter =
  TypedEventFilter<FollowModuleWhitelistedEvent>;

export type FollowNFTDelegatedPowerChangedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { delegate: string; newPower: BigNumber; timestamp: BigNumber }
>;

export type FollowNFTDelegatedPowerChangedEventFilter =
  TypedEventFilter<FollowNFTDelegatedPowerChangedEvent>;

export type FollowNFTDeployedEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  { profileId: BigNumber; followNFT: string; timestamp: BigNumber }
>;

export type FollowNFTDeployedEventFilter =
  TypedEventFilter<FollowNFTDeployedEvent>;

export type FollowNFTInitializedEvent = TypedEvent<
  [BigNumber, BigNumber],
  { profileId: BigNumber; timestamp: BigNumber }
>;

export type FollowNFTInitializedEventFilter =
  TypedEventFilter<FollowNFTInitializedEvent>;

export type FollowNFTTransferredEvent = TypedEvent<
  [BigNumber, BigNumber, string, string, BigNumber],
  {
    profileId: BigNumber;
    followNFTId: BigNumber;
    from: string;
    to: string;
    timestamp: BigNumber;
  }
>;

export type FollowNFTTransferredEventFilter =
  TypedEventFilter<FollowNFTTransferredEvent>;

export type FollowNFTURISetEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  { profileId: BigNumber; followNFTURI: string; timestamp: BigNumber }
>;

export type FollowNFTURISetEventFilter = TypedEventFilter<FollowNFTURISetEvent>;

export type FollowsApprovedEvent = TypedEvent<
  [string, BigNumber, string[], boolean[], BigNumber],
  {
    owner: string;
    profileId: BigNumber;
    addresses: string[];
    approved: boolean[];
    timestamp: BigNumber;
  }
>;

export type FollowsApprovedEventFilter = TypedEventFilter<FollowsApprovedEvent>;

export type GovernanceSetEvent = TypedEvent<
  [string, string, string, BigNumber],
  {
    caller: string;
    prevGovernance: string;
    newGovernance: string;
    timestamp: BigNumber;
  }
>;

export type GovernanceSetEventFilter = TypedEventFilter<GovernanceSetEvent>;

export type MirrorCreatedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, BigNumber, string, string, BigNumber],
  {
    profileId: BigNumber;
    pubId: BigNumber;
    profileIdPointed: BigNumber;
    pubIdPointed: BigNumber;
    referenceModule: string;
    referenceModuleReturnData: string;
    timestamp: BigNumber;
  }
>;

export type MirrorCreatedEventFilter = TypedEventFilter<MirrorCreatedEvent>;

export type ModuleBaseConstructedEvent = TypedEvent<
  [string, BigNumber],
  { hub: string; timestamp: BigNumber }
>;

export type ModuleBaseConstructedEventFilter =
  TypedEventFilter<ModuleBaseConstructedEvent>;

export type ModuleGlobalsCurrencyWhitelistedEvent = TypedEvent<
  [string, boolean, boolean, BigNumber],
  {
    currency: string;
    prevWhitelisted: boolean;
    whitelisted: boolean;
    timestamp: BigNumber;
  }
>;

export type ModuleGlobalsCurrencyWhitelistedEventFilter =
  TypedEventFilter<ModuleGlobalsCurrencyWhitelistedEvent>;

export type ModuleGlobalsGovernanceSetEvent = TypedEvent<
  [string, string, BigNumber],
  { prevGovernance: string; newGovernance: string; timestamp: BigNumber }
>;

export type ModuleGlobalsGovernanceSetEventFilter =
  TypedEventFilter<ModuleGlobalsGovernanceSetEvent>;

export type ModuleGlobalsTreasuryFeeSetEvent = TypedEvent<
  [number, number, BigNumber],
  { prevTreasuryFee: number; newTreasuryFee: number; timestamp: BigNumber }
>;

export type ModuleGlobalsTreasuryFeeSetEventFilter =
  TypedEventFilter<ModuleGlobalsTreasuryFeeSetEvent>;

export type ModuleGlobalsTreasurySetEvent = TypedEvent<
  [string, string, BigNumber],
  { prevTreasury: string; newTreasury: string; timestamp: BigNumber }
>;

export type ModuleGlobalsTreasurySetEventFilter =
  TypedEventFilter<ModuleGlobalsTreasurySetEvent>;

export type PostCreatedEvent = TypedEvent<
  [BigNumber, BigNumber, string, string, string, string, string, BigNumber],
  {
    profileId: BigNumber;
    pubId: BigNumber;
    contentURI: string;
    collectModule: string;
    collectModuleReturnData: string;
    referenceModule: string;
    referenceModuleReturnData: string;
    timestamp: BigNumber;
  }
>;

export type PostCreatedEventFilter = TypedEventFilter<PostCreatedEvent>;

export type ProfileCreatedEvent = TypedEvent<
  [
    BigNumber,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    BigNumber
  ],
  {
    profileId: BigNumber;
    creator: string;
    to: string;
    handle: string;
    imageURI: string;
    followModule: string;
    followModuleReturnData: string;
    followNFTURI: string;
    timestamp: BigNumber;
  }
>;

export type ProfileCreatedEventFilter = TypedEventFilter<ProfileCreatedEvent>;

export type ProfileCreatorWhitelistedEvent = TypedEvent<
  [string, boolean, BigNumber],
  { profileCreator: string; whitelisted: boolean; timestamp: BigNumber }
>;

export type ProfileCreatorWhitelistedEventFilter =
  TypedEventFilter<ProfileCreatorWhitelistedEvent>;

export type ProfileImageURISetEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  { profileId: BigNumber; imageURI: string; timestamp: BigNumber }
>;

export type ProfileImageURISetEventFilter =
  TypedEventFilter<ProfileImageURISetEvent>;

export type ReferenceModuleWhitelistedEvent = TypedEvent<
  [string, boolean, BigNumber],
  { referenceModule: string; whitelisted: boolean; timestamp: BigNumber }
>;

export type ReferenceModuleWhitelistedEventFilter =
  TypedEventFilter<ReferenceModuleWhitelistedEvent>;

export type StateSetEvent = TypedEvent<
  [string, number, number, BigNumber],
  { caller: string; prevState: number; newState: number; timestamp: BigNumber }
>;

export type StateSetEventFilter = TypedEventFilter<StateSetEvent>;

export interface Events extends BaseContract {
  contractName: "Events";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: EventsInterface;

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

  functions: {};

  callStatic: {};

  filters: {
    "BaseInitialized(string,string,uint256)"(
      name?: null,
      symbol?: null,
      timestamp?: null
    ): BaseInitializedEventFilter;
    BaseInitialized(
      name?: null,
      symbol?: null,
      timestamp?: null
    ): BaseInitializedEventFilter;

    "CollectModuleWhitelisted(address,bool,uint256)"(
      collectModule?: string | null,
      whitelisted?: boolean | null,
      timestamp?: null
    ): CollectModuleWhitelistedEventFilter;
    CollectModuleWhitelisted(
      collectModule?: string | null,
      whitelisted?: boolean | null,
      timestamp?: null
    ): CollectModuleWhitelistedEventFilter;

    "CollectNFTDeployed(uint256,uint256,address,uint256)"(
      profileId?: BigNumberish | null,
      pubId?: BigNumberish | null,
      collectNFT?: string | null,
      timestamp?: null
    ): CollectNFTDeployedEventFilter;
    CollectNFTDeployed(
      profileId?: BigNumberish | null,
      pubId?: BigNumberish | null,
      collectNFT?: string | null,
      timestamp?: null
    ): CollectNFTDeployedEventFilter;

    "CollectNFTInitialized(uint256,uint256,uint256)"(
      profileId?: BigNumberish | null,
      pubId?: BigNumberish | null,
      timestamp?: null
    ): CollectNFTInitializedEventFilter;
    CollectNFTInitialized(
      profileId?: BigNumberish | null,
      pubId?: BigNumberish | null,
      timestamp?: null
    ): CollectNFTInitializedEventFilter;

    "CollectNFTTransferred(uint256,uint256,uint256,address,address,uint256)"(
      profileId?: BigNumberish | null,
      pubId?: BigNumberish | null,
      collectNFTId?: BigNumberish | null,
      from?: null,
      to?: null,
      timestamp?: null
    ): CollectNFTTransferredEventFilter;
    CollectNFTTransferred(
      profileId?: BigNumberish | null,
      pubId?: BigNumberish | null,
      collectNFTId?: BigNumberish | null,
      from?: null,
      to?: null,
      timestamp?: null
    ): CollectNFTTransferredEventFilter;

    "Collected(address,uint256,uint256,uint256,uint256,uint256)"(
      collector?: string | null,
      profileId?: BigNumberish | null,
      pubId?: BigNumberish | null,
      rootProfileId?: null,
      rootPubId?: null,
      timestamp?: null
    ): CollectedEventFilter;
    Collected(
      collector?: string | null,
      profileId?: BigNumberish | null,
      pubId?: BigNumberish | null,
      rootProfileId?: null,
      rootPubId?: null,
      timestamp?: null
    ): CollectedEventFilter;

    "CommentCreated(uint256,uint256,string,uint256,uint256,address,bytes,address,bytes,uint256)"(
      profileId?: BigNumberish | null,
      pubId?: BigNumberish | null,
      contentURI?: null,
      profileIdPointed?: null,
      pubIdPointed?: null,
      collectModule?: null,
      collectModuleReturnData?: null,
      referenceModule?: null,
      referenceModuleReturnData?: null,
      timestamp?: null
    ): CommentCreatedEventFilter;
    CommentCreated(
      profileId?: BigNumberish | null,
      pubId?: BigNumberish | null,
      contentURI?: null,
      profileIdPointed?: null,
      pubIdPointed?: null,
      collectModule?: null,
      collectModuleReturnData?: null,
      referenceModule?: null,
      referenceModuleReturnData?: null,
      timestamp?: null
    ): CommentCreatedEventFilter;

    "DefaultProfileSet(address,uint256,uint256)"(
      wallet?: string | null,
      profileId?: BigNumberish | null,
      timestamp?: null
    ): DefaultProfileSetEventFilter;
    DefaultProfileSet(
      wallet?: string | null,
      profileId?: BigNumberish | null,
      timestamp?: null
    ): DefaultProfileSetEventFilter;

    "DispatcherSet(uint256,address,uint256)"(
      profileId?: BigNumberish | null,
      dispatcher?: string | null,
      timestamp?: null
    ): DispatcherSetEventFilter;
    DispatcherSet(
      profileId?: BigNumberish | null,
      dispatcher?: string | null,
      timestamp?: null
    ): DispatcherSetEventFilter;

    "EmergencyAdminSet(address,address,address,uint256)"(
      caller?: string | null,
      oldEmergencyAdmin?: string | null,
      newEmergencyAdmin?: string | null,
      timestamp?: null
    ): EmergencyAdminSetEventFilter;
    EmergencyAdminSet(
      caller?: string | null,
      oldEmergencyAdmin?: string | null,
      newEmergencyAdmin?: string | null,
      timestamp?: null
    ): EmergencyAdminSetEventFilter;

    "FeeModuleBaseConstructed(address,uint256)"(
      moduleGlobals?: string | null,
      timestamp?: null
    ): FeeModuleBaseConstructedEventFilter;
    FeeModuleBaseConstructed(
      moduleGlobals?: string | null,
      timestamp?: null
    ): FeeModuleBaseConstructedEventFilter;

    "FollowModuleSet(uint256,address,bytes,uint256)"(
      profileId?: BigNumberish | null,
      followModule?: null,
      followModuleReturnData?: null,
      timestamp?: null
    ): FollowModuleSetEventFilter;
    FollowModuleSet(
      profileId?: BigNumberish | null,
      followModule?: null,
      followModuleReturnData?: null,
      timestamp?: null
    ): FollowModuleSetEventFilter;

    "FollowModuleWhitelisted(address,bool,uint256)"(
      followModule?: string | null,
      whitelisted?: boolean | null,
      timestamp?: null
    ): FollowModuleWhitelistedEventFilter;
    FollowModuleWhitelisted(
      followModule?: string | null,
      whitelisted?: boolean | null,
      timestamp?: null
    ): FollowModuleWhitelistedEventFilter;

    "FollowNFTDelegatedPowerChanged(address,uint256,uint256)"(
      delegate?: string | null,
      newPower?: BigNumberish | null,
      timestamp?: null
    ): FollowNFTDelegatedPowerChangedEventFilter;
    FollowNFTDelegatedPowerChanged(
      delegate?: string | null,
      newPower?: BigNumberish | null,
      timestamp?: null
    ): FollowNFTDelegatedPowerChangedEventFilter;

    "FollowNFTDeployed(uint256,address,uint256)"(
      profileId?: BigNumberish | null,
      followNFT?: string | null,
      timestamp?: null
    ): FollowNFTDeployedEventFilter;
    FollowNFTDeployed(
      profileId?: BigNumberish | null,
      followNFT?: string | null,
      timestamp?: null
    ): FollowNFTDeployedEventFilter;

    "FollowNFTInitialized(uint256,uint256)"(
      profileId?: BigNumberish | null,
      timestamp?: null
    ): FollowNFTInitializedEventFilter;
    FollowNFTInitialized(
      profileId?: BigNumberish | null,
      timestamp?: null
    ): FollowNFTInitializedEventFilter;

    "FollowNFTTransferred(uint256,uint256,address,address,uint256)"(
      profileId?: BigNumberish | null,
      followNFTId?: BigNumberish | null,
      from?: null,
      to?: null,
      timestamp?: null
    ): FollowNFTTransferredEventFilter;
    FollowNFTTransferred(
      profileId?: BigNumberish | null,
      followNFTId?: BigNumberish | null,
      from?: null,
      to?: null,
      timestamp?: null
    ): FollowNFTTransferredEventFilter;

    "FollowNFTURISet(uint256,string,uint256)"(
      profileId?: BigNumberish | null,
      followNFTURI?: null,
      timestamp?: null
    ): FollowNFTURISetEventFilter;
    FollowNFTURISet(
      profileId?: BigNumberish | null,
      followNFTURI?: null,
      timestamp?: null
    ): FollowNFTURISetEventFilter;

    "FollowsApproved(address,uint256,address[],bool[],uint256)"(
      owner?: string | null,
      profileId?: BigNumberish | null,
      addresses?: null,
      approved?: null,
      timestamp?: null
    ): FollowsApprovedEventFilter;
    FollowsApproved(
      owner?: string | null,
      profileId?: BigNumberish | null,
      addresses?: null,
      approved?: null,
      timestamp?: null
    ): FollowsApprovedEventFilter;

    "GovernanceSet(address,address,address,uint256)"(
      caller?: string | null,
      prevGovernance?: string | null,
      newGovernance?: string | null,
      timestamp?: null
    ): GovernanceSetEventFilter;
    GovernanceSet(
      caller?: string | null,
      prevGovernance?: string | null,
      newGovernance?: string | null,
      timestamp?: null
    ): GovernanceSetEventFilter;

    "MirrorCreated(uint256,uint256,uint256,uint256,address,bytes,uint256)"(
      profileId?: BigNumberish | null,
      pubId?: BigNumberish | null,
      profileIdPointed?: null,
      pubIdPointed?: null,
      referenceModule?: null,
      referenceModuleReturnData?: null,
      timestamp?: null
    ): MirrorCreatedEventFilter;
    MirrorCreated(
      profileId?: BigNumberish | null,
      pubId?: BigNumberish | null,
      profileIdPointed?: null,
      pubIdPointed?: null,
      referenceModule?: null,
      referenceModuleReturnData?: null,
      timestamp?: null
    ): MirrorCreatedEventFilter;

    "ModuleBaseConstructed(address,uint256)"(
      hub?: string | null,
      timestamp?: null
    ): ModuleBaseConstructedEventFilter;
    ModuleBaseConstructed(
      hub?: string | null,
      timestamp?: null
    ): ModuleBaseConstructedEventFilter;

    "ModuleGlobalsCurrencyWhitelisted(address,bool,bool,uint256)"(
      currency?: string | null,
      prevWhitelisted?: boolean | null,
      whitelisted?: boolean | null,
      timestamp?: null
    ): ModuleGlobalsCurrencyWhitelistedEventFilter;
    ModuleGlobalsCurrencyWhitelisted(
      currency?: string | null,
      prevWhitelisted?: boolean | null,
      whitelisted?: boolean | null,
      timestamp?: null
    ): ModuleGlobalsCurrencyWhitelistedEventFilter;

    "ModuleGlobalsGovernanceSet(address,address,uint256)"(
      prevGovernance?: string | null,
      newGovernance?: string | null,
      timestamp?: null
    ): ModuleGlobalsGovernanceSetEventFilter;
    ModuleGlobalsGovernanceSet(
      prevGovernance?: string | null,
      newGovernance?: string | null,
      timestamp?: null
    ): ModuleGlobalsGovernanceSetEventFilter;

    "ModuleGlobalsTreasuryFeeSet(uint16,uint16,uint256)"(
      prevTreasuryFee?: BigNumberish | null,
      newTreasuryFee?: BigNumberish | null,
      timestamp?: null
    ): ModuleGlobalsTreasuryFeeSetEventFilter;
    ModuleGlobalsTreasuryFeeSet(
      prevTreasuryFee?: BigNumberish | null,
      newTreasuryFee?: BigNumberish | null,
      timestamp?: null
    ): ModuleGlobalsTreasuryFeeSetEventFilter;

    "ModuleGlobalsTreasurySet(address,address,uint256)"(
      prevTreasury?: string | null,
      newTreasury?: string | null,
      timestamp?: null
    ): ModuleGlobalsTreasurySetEventFilter;
    ModuleGlobalsTreasurySet(
      prevTreasury?: string | null,
      newTreasury?: string | null,
      timestamp?: null
    ): ModuleGlobalsTreasurySetEventFilter;

    "PostCreated(uint256,uint256,string,address,bytes,address,bytes,uint256)"(
      profileId?: BigNumberish | null,
      pubId?: BigNumberish | null,
      contentURI?: null,
      collectModule?: null,
      collectModuleReturnData?: null,
      referenceModule?: null,
      referenceModuleReturnData?: null,
      timestamp?: null
    ): PostCreatedEventFilter;
    PostCreated(
      profileId?: BigNumberish | null,
      pubId?: BigNumberish | null,
      contentURI?: null,
      collectModule?: null,
      collectModuleReturnData?: null,
      referenceModule?: null,
      referenceModuleReturnData?: null,
      timestamp?: null
    ): PostCreatedEventFilter;

    "ProfileCreated(uint256,address,address,string,string,address,bytes,string,uint256)"(
      profileId?: BigNumberish | null,
      creator?: string | null,
      to?: string | null,
      handle?: null,
      imageURI?: null,
      followModule?: null,
      followModuleReturnData?: null,
      followNFTURI?: null,
      timestamp?: null
    ): ProfileCreatedEventFilter;
    ProfileCreated(
      profileId?: BigNumberish | null,
      creator?: string | null,
      to?: string | null,
      handle?: null,
      imageURI?: null,
      followModule?: null,
      followModuleReturnData?: null,
      followNFTURI?: null,
      timestamp?: null
    ): ProfileCreatedEventFilter;

    "ProfileCreatorWhitelisted(address,bool,uint256)"(
      profileCreator?: string | null,
      whitelisted?: boolean | null,
      timestamp?: null
    ): ProfileCreatorWhitelistedEventFilter;
    ProfileCreatorWhitelisted(
      profileCreator?: string | null,
      whitelisted?: boolean | null,
      timestamp?: null
    ): ProfileCreatorWhitelistedEventFilter;

    "ProfileImageURISet(uint256,string,uint256)"(
      profileId?: BigNumberish | null,
      imageURI?: null,
      timestamp?: null
    ): ProfileImageURISetEventFilter;
    ProfileImageURISet(
      profileId?: BigNumberish | null,
      imageURI?: null,
      timestamp?: null
    ): ProfileImageURISetEventFilter;

    "ReferenceModuleWhitelisted(address,bool,uint256)"(
      referenceModule?: string | null,
      whitelisted?: boolean | null,
      timestamp?: null
    ): ReferenceModuleWhitelistedEventFilter;
    ReferenceModuleWhitelisted(
      referenceModule?: string | null,
      whitelisted?: boolean | null,
      timestamp?: null
    ): ReferenceModuleWhitelistedEventFilter;

    "StateSet(address,uint8,uint8,uint256)"(
      caller?: string | null,
      prevState?: BigNumberish | null,
      newState?: BigNumberish | null,
      timestamp?: null
    ): StateSetEventFilter;
    StateSet(
      caller?: string | null,
      prevState?: BigNumberish | null,
      newState?: BigNumberish | null,
      timestamp?: null
    ): StateSetEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}

/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: any; output: any };
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any };
};

export type ApiKey = {
  __typename?: "ApiKey";
  _id: Scalars["String"]["output"];
  createdAt: Scalars["DateTimeISO"]["output"];
  expiresAt?: Maybe<Scalars["DateTimeISO"]["output"]>;
  key: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  permissions: Array<Scalars["String"]["output"]>;
  teamId: Scalars["String"]["output"];
  updatedAt: Scalars["DateTimeISO"]["output"];
};

export type ApiKeyFilter = {
  _id_eq?: InputMaybe<Scalars["String"]["input"]>;
  _id_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  _id_ne?: InputMaybe<Scalars["String"]["input"]>;
  _id_nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  createdAt_eq?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_gt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_gte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_lt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_lte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_ne?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  teamId_eq?: InputMaybe<Scalars["String"]["input"]>;
  teamId_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  teamId_ne?: InputMaybe<Scalars["String"]["input"]>;
  teamId_nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  updatedAt_eq?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  updatedAt_gt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  updatedAt_gte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  updatedAt_lt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  updatedAt_lte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  updatedAt_ne?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
};

export type ApiKeyPage = {
  __typename?: "ApiKeyPage";
  items: Array<ApiKey>;
  metadata: Metadata;
};

export type ApiKeyPageResult = ApiKeyPage | HandledError;

export type ApiKeyResult = ApiKey | HandledError;

export enum BirdeyeHistoricalDataTimeTypes {
  All = "ALL",
  LastDay = "LAST_DAY",
  LastHour = "LAST_HOUR",
  LastMonth = "LAST_MONTH",
  LastThreeHours = "LAST_THREE_HOURS",
  LastWeek = "LAST_WEEK",
  LastYear = "LAST_YEAR",
}

export type BirdeyeHistoricalPriceItemResponse = {
  __typename?: "BirdeyeHistoricalPriceItemResponse";
  unixTime: Scalars["Int"]["output"];
  value: Scalars["Float"]["output"];
};

export type BirdeyeHistoricalPriceResponse = {
  __typename?: "BirdeyeHistoricalPriceResponse";
  items: Array<BirdeyeHistoricalPriceItemResponse>;
};

export type BirdeyeHistoricalPriceResult =
  | BirdeyeHistoricalPriceResponse
  | HandledError;

export type BirdeyeTokenOverviewResponse = {
  __typename?: "BirdeyeTokenOverviewResponse";
  address: Scalars["String"]["output"];
  decimals: Scalars["Int"]["output"];
  description: Scalars["String"]["output"];
  fullyDilutedValue: Scalars["Float"]["output"];
  marketCap: Scalars["Float"]["output"];
  price: Scalars["Float"]["output"];
  totalSupply: Scalars["Float"]["output"];
};

export type BirdeyeTokenOverviewResult =
  | BirdeyeTokenOverviewResponse
  | HandledError;

export type Credit = {
  __typename?: "Credit";
  _id: Scalars["String"]["output"];
  available: Scalars["Float"]["output"];
  confirmed: Scalars["Float"]["output"];
  createdAt: Scalars["DateTimeISO"]["output"];
  pending: Scalars["Float"]["output"];
  updatedAt: Scalars["DateTimeISO"]["output"];
};

export type CreditResult = Credit | HandledError;

export enum CreditsPackageKeys {
  ExtraLarge = "EXTRA_LARGE",
  Large = "LARGE",
  Medium = "MEDIUM",
  Small = "SMALL",
}

export type CreditsPurchase = {
  __typename?: "CreditsPurchase";
  _id: Scalars["String"]["output"];
  address?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["DateTimeISO"]["output"];
  credits: Scalars["Float"]["output"];
  metadata: Scalars["JSON"]["output"];
  price?: Maybe<Scalars["Float"]["output"]>;
  teamId: Scalars["String"]["output"];
  type: CreditsPurchaseType;
};

export type CreditsPurchaseFilter = {
  _id_eq?: InputMaybe<Scalars["String"]["input"]>;
  _id_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  _id_ne?: InputMaybe<Scalars["String"]["input"]>;
  _id_nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  createdAt_eq?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_gt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_gte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_lt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_lte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_ne?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  teamId_eq?: InputMaybe<Scalars["String"]["input"]>;
  teamId_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  teamId_ne?: InputMaybe<Scalars["String"]["input"]>;
  teamId_nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type CreditsPurchasePage = {
  __typename?: "CreditsPurchasePage";
  items: Array<CreditsPurchase>;
  metadata: Metadata;
};

export type CreditsPurchasePageResult = CreditsPurchasePage | HandledError;

/** Which type of CreditPurchase was used */
export enum CreditsPurchaseType {
  Crypto = "CRYPTO",
  OnDemand = "ON_DEMAND",
  Staking = "STAKING",
  Subscription = "SUBSCRIPTION",
  Voucher = "VOUCHER",
}

export type ExpirationInput = {
  units: Scalars["String"]["input"];
  value: Scalars["Float"]["input"];
};

export type GenerateCustomerPortalSessionOutput = {
  __typename?: "GenerateCustomerPortalSessionOutput";
  customerPortalLink: Scalars["String"]["output"];
  planKey: StripeSubscriptionPlanKeys;
};

export type GeneratePresignedPostResult = HandledError | PresignedPost;

export type GeneratePresignedUrl = {
  __typename?: "GeneratePresignedUrl";
  expiresIn: Scalars["Float"]["output"];
  key: Scalars["String"]["output"];
  presignedUrl: Scalars["String"]["output"];
  url: Scalars["String"]["output"];
};

export type GeneratePresignedUrlInput = {
  contentType: SupportedUploadContentTypesEnum;
};

export type GeneratePresignedUrlResult = GeneratePresignedUrl | HandledError;

export type GenerateSubscriptionPaymentLinkResult =
  | HandledError
  | SuscriptionPaymentLinkOutput;

export type GetStakingGlobalData = {
  __typename?: "GetStakingGlobalData";
  apr: Scalars["Float"]["output"];
  circulatingSupply: Scalars["String"]["output"];
  rewardEntries: Array<RewardEntry>;
  rewardPools: Array<RewardPool>;
  stakeEntries: Array<StakeEntry>;
  tokenMint: TokenMint;
  totalAmount: Scalars["String"]["output"];
  totalEffectiveAmount: Scalars["String"]["output"];
  totalRewardsPerDay: Scalars["String"]["output"];
  totalStakedByUsers: Scalars["String"]["output"];
};

export type GetStakingGlobalDataResult = GetStakingGlobalData | HandledError;

export type HandledError = {
  __typename?: "HandledError";
  code: Scalars["String"]["output"];
  message: Scalars["String"]["output"];
};

export type Media = {
  __typename?: "Media";
  _id: Scalars["String"]["output"];
  alt?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["DateTimeISO"]["output"];
  keyS3?: Maybe<Scalars["String"]["output"]>;
  messageId?: Maybe<Scalars["String"]["output"]>;
  sessionId?: Maybe<Scalars["String"]["output"]>;
  size?: Maybe<Scalars["Int"]["output"]>;
  teamId?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  updatedAt: Scalars["DateTimeISO"]["output"];
  url?: Maybe<Scalars["String"]["output"]>;
};

export type Message = {
  __typename?: "Message";
  _id: Scalars["String"]["output"];
  content?: Maybe<MessageContent>;
  createdAt: Scalars["DateTimeISO"]["output"];
  role: MessageRole;
  sessionId: Scalars["String"]["output"];
  teamId: Scalars["String"]["output"];
  toolRequest?: Maybe<ToolRequest>;
  updatedAt: Scalars["DateTimeISO"]["output"];
};

export type MessageContent = {
  __typename?: "MessageContent";
  medias?: Maybe<Array<Media>>;
  models?: Maybe<Array<Model>>;
  nfts?: Maybe<Array<Nft>>;
  text?: Maybe<Scalars["String"]["output"]>;
};

export type MessageFilter = {
  _id_eq?: InputMaybe<Scalars["String"]["input"]>;
  _id_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  _id_ne?: InputMaybe<Scalars["String"]["input"]>;
  _id_nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  createdAt_eq?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_gt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_gte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_lt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_lte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_ne?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  sessionId_eq?: InputMaybe<Scalars["String"]["input"]>;
  sessionId_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sessionId_ne?: InputMaybe<Scalars["String"]["input"]>;
  sessionId_nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  teamId_eq?: InputMaybe<Scalars["String"]["input"]>;
  teamId_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  teamId_ne?: InputMaybe<Scalars["String"]["input"]>;
  teamId_nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  updatedAt_eq?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  updatedAt_gt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  updatedAt_gte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  updatedAt_lt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  updatedAt_lte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  updatedAt_ne?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
};

/** The role of the message sender */
export enum MessageRole {
  Assistant = "assistant",
  Tool = "tool",
  User = "user",
}

export type Messages = {
  __typename?: "Messages";
  messages: Array<Message>;
};

export type MessagesPage = {
  __typename?: "MessagesPage";
  items: Array<Message>;
  metadata: Metadata;
};

export type MessagesPageResult = HandledError | MessagesPage;

export type MessagesResult = HandledError | Messages;

export type Metadata = {
  __typename?: "Metadata";
  limit?: Maybe<Scalars["Int"]["output"]>;
  numElements?: Maybe<Scalars["Int"]["output"]>;
  offset?: Maybe<Scalars["Int"]["output"]>;
  orderBy?: Maybe<Scalars["String"]["output"]>;
  orderDirection?: Maybe<OrderDirection>;
  page?: Maybe<Scalars["Int"]["output"]>;
  pages?: Maybe<Scalars["Int"]["output"]>;
  total?: Maybe<Scalars["Int"]["output"]>;
};

export type Model = {
  __typename?: "Model";
  _id: Scalars["String"]["output"];
  createdAt: Scalars["DateTimeISO"]["output"];
  image: Media;
  mesh?: Maybe<Media>;
  messageId?: Maybe<Scalars["String"]["output"]>;
  multiview?: Maybe<Media>;
  nftId?: Maybe<Scalars["String"]["output"]>;
  optimizedMesh?: Maybe<Media>;
  prompt?: Maybe<Scalars["String"]["output"]>;
  sessionId?: Maybe<Scalars["String"]["output"]>;
  style?: Maybe<Style>;
  teamId: Scalars["String"]["output"];
  texture?: Maybe<Media>;
  texturedMesh?: Maybe<Media>;
  toolRequest: ToolRequest;
  updatedAt: Scalars["DateTimeISO"]["output"];
  views: Array<Media>;
};

export type ModelFilter = {
  _id_eq?: InputMaybe<Scalars["String"]["input"]>;
  _id_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  _id_ne?: InputMaybe<Scalars["String"]["input"]>;
  _id_nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  createdAt_eq?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_gt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_gte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_lt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_lte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_ne?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  teamId_eq?: InputMaybe<Scalars["String"]["input"]>;
  teamId_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  teamId_ne?: InputMaybe<Scalars["String"]["input"]>;
  teamId_nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  updatedAt_eq?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  updatedAt_gt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  updatedAt_gte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  updatedAt_lt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  updatedAt_lte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  updatedAt_ne?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
};

export type ModelPage = {
  __typename?: "ModelPage";
  items: Array<Model>;
  metadata: Metadata;
};

export type ModelPageResult = HandledError | ModelPage;

export type ModelResult = HandledError | Model;

export type Mutation = {
  __typename?: "Mutation";
  addTeamMember: TeamResult;
  cancelToolRequest: ToolRequestResult;
  confirmToolRequest: ToolRequestResult;
  createApiKey: ApiKeyResult;
  createShareableBoard: ShareableBoardResult;
  createTeam: TeamResult;
  deleteApiKey: ApiKeyResult;
  deleteShareableBoard: ShareableBoardResult;
  disableTeam: TeamResult;
  editModel: ToolRequestConfirmationResult;
  enableTeam: TeamResult;
  generateModelFromImage: ToolRequestConfirmationResult;
  generateModelFromPrompt: ToolRequestConfirmationResult;
  generateModelFromReferences: ToolRequestConfirmationResult;
  generateNft: ToolRequestConfirmationResult;
  generatePresignedPost: GeneratePresignedPostResult;
  generatePresignedUrl: GeneratePresignedUrlResult;
  linkReferralAccount: ReferralAccountResult;
  redeemVoucher: CreditResult;
  removeTeamMember: TeamResult;
  rotateApiKey: ApiKeyResult;
  sendMessage: MessagesResult;
  updateShareableBoardVisibility: ShareableBoardResult;
  updateTeamData: TeamResult;
  updateTeamMemberRole: TeamResult;
};

export type MutationAddTeamMemberArgs = {
  member: Scalars["String"]["input"];
};

export type MutationCancelToolRequestArgs = {
  requestId: Scalars["String"]["input"];
};

export type MutationConfirmToolRequestArgs = {
  requestId: Scalars["String"]["input"];
};

export type MutationCreateApiKeyArgs = {
  expiresIn?: InputMaybe<ExpirationInput>;
  name: Scalars["String"]["input"];
};

export type MutationCreateShareableBoardArgs = {
  sessionId: Scalars["String"]["input"];
};

export type MutationCreateTeamArgs = {
  name: Scalars["String"]["input"];
};

export type MutationDeleteApiKeyArgs = {
  id: Scalars["String"]["input"];
};

export type MutationDeleteShareableBoardArgs = {
  shareableBoardId: Scalars["String"]["input"];
};

export type MutationEditModelArgs = {
  edit: Scalars["String"]["input"];
  modelId: Scalars["String"]["input"];
  options?: InputMaybe<Options>;
  sessionId?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationGenerateModelFromImageArgs = {
  imageUrl: Scalars["String"]["input"];
  options?: InputMaybe<Options>;
  sessionId?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationGenerateModelFromPromptArgs = {
  options?: InputMaybe<Options>;
  prompt: Scalars["String"]["input"];
  sessionId?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationGenerateModelFromReferencesArgs = {
  imageUrls: Array<Scalars["String"]["input"]>;
  instructions?: InputMaybe<Scalars["String"]["input"]>;
  options?: InputMaybe<Options>;
  sessionId?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationGenerateNftArgs = {
  attributes?: InputMaybe<Array<NftAttributeInput>>;
  description: Scalars["String"]["input"];
  modelId: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  sessionId?: InputMaybe<Scalars["String"]["input"]>;
  symbol?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationGeneratePresignedPostArgs = {
  fileName: Scalars["String"]["input"];
};

export type MutationGeneratePresignedUrlArgs = {
  input: GeneratePresignedUrlInput;
};

export type MutationLinkReferralAccountArgs = {
  code: Scalars["String"]["input"];
};

export type MutationRedeemVoucherArgs = {
  code: Scalars["String"]["input"];
};

export type MutationRemoveTeamMemberArgs = {
  member: Scalars["String"]["input"];
};

export type MutationRotateApiKeyArgs = {
  id: Scalars["String"]["input"];
};

export type MutationSendMessageArgs = {
  content: Scalars["String"]["input"];
  imageUrls?: InputMaybe<Array<Scalars["String"]["input"]>>;
  options?: InputMaybe<Options>;
  sessionId: Scalars["String"]["input"];
};

export type MutationUpdateShareableBoardVisibilityArgs = {
  isPublic: Scalars["Boolean"]["input"];
  shareableBoardId: Scalars["String"]["input"];
};

export type MutationUpdateTeamDataArgs = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  wallet?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationUpdateTeamMemberRoleArgs = {
  member: Scalars["String"]["input"];
  newRole: TeamRole;
};

export type Nft = {
  __typename?: "Nft";
  _id: Scalars["String"]["output"];
  chain: Scalars["String"]["output"];
  collectionAddress?: Maybe<Scalars["String"]["output"]>;
  collectionRoyalties?: Maybe<Scalars["Float"]["output"]>;
  createdAt: Scalars["DateTimeISO"]["output"];
  creator?: Maybe<Scalars["String"]["output"]>;
  genRequestId: Scalars["String"]["output"];
  messageId: Scalars["String"]["output"];
  metadata: NftMetadata;
  mintAddress?: Maybe<Scalars["String"]["output"]>;
  modelId: Scalars["String"]["output"];
  status: ToolRequestStatus;
  teamId: Scalars["String"]["output"];
  tokenAddress?: Maybe<Scalars["String"]["output"]>;
  tokenStandard?: Maybe<TokenStandard>;
  updatedAt: Scalars["DateTimeISO"]["output"];
};

export type NftAttribute = {
  __typename?: "NftAttribute";
  trait_type: Scalars["String"]["output"];
  value: Scalars["String"]["output"];
};

export type NftAttributeInput = {
  trait_type: Scalars["String"]["input"];
  value: Scalars["String"]["input"];
};

export type NftFile = {
  __typename?: "NftFile";
  cdn?: Maybe<Scalars["Boolean"]["output"]>;
  type: Scalars["String"]["output"];
  uri: Scalars["String"]["output"];
};

export type NftFilter = {
  _id_eq?: InputMaybe<Scalars["String"]["input"]>;
  _id_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  _id_ne?: InputMaybe<Scalars["String"]["input"]>;
  _id_nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  chain_eq?: InputMaybe<Scalars["String"]["input"]>;
  chain_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  chain_ne?: InputMaybe<Scalars["String"]["input"]>;
  chain_nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  collectionAddress_eq?: InputMaybe<Scalars["String"]["input"]>;
  collectionAddress_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  collectionAddress_ne?: InputMaybe<Scalars["String"]["input"]>;
  collectionAddress_nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  collectionRoyalties_eq?: InputMaybe<Scalars["Float"]["input"]>;
  collectionRoyalties_gt?: InputMaybe<Scalars["Float"]["input"]>;
  collectionRoyalties_gte?: InputMaybe<Scalars["Float"]["input"]>;
  collectionRoyalties_lt?: InputMaybe<Scalars["Float"]["input"]>;
  collectionRoyalties_lte?: InputMaybe<Scalars["Float"]["input"]>;
  collectionRoyalties_ne?: InputMaybe<Scalars["Float"]["input"]>;
  createdAt_eq?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_gt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_gte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_lt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_lte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_ne?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  creator_eq?: InputMaybe<Scalars["String"]["input"]>;
  creator_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  creator_ne?: InputMaybe<Scalars["String"]["input"]>;
  creator_nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  genRequestId_eq?: InputMaybe<Scalars["String"]["input"]>;
  genRequestId_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  genRequestId_ne?: InputMaybe<Scalars["String"]["input"]>;
  genRequestId_nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  mintAddress_eq?: InputMaybe<Scalars["String"]["input"]>;
  mintAddress_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  mintAddress_ne?: InputMaybe<Scalars["String"]["input"]>;
  mintAddress_nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  status_eq?: InputMaybe<ToolRequestStatus>;
  status_in?: InputMaybe<Array<ToolRequestStatus>>;
  status_ne?: InputMaybe<ToolRequestStatus>;
  status_nin?: InputMaybe<Array<ToolRequestStatus>>;
  teamId_eq?: InputMaybe<Scalars["String"]["input"]>;
  teamId_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  teamId_ne?: InputMaybe<Scalars["String"]["input"]>;
  teamId_nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tokenAddress_eq?: InputMaybe<Scalars["String"]["input"]>;
  tokenAddress_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tokenAddress_ne?: InputMaybe<Scalars["String"]["input"]>;
  tokenAddress_nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tokenStandard_eq?: InputMaybe<TokenStandard>;
  tokenStandard_in?: InputMaybe<Array<TokenStandard>>;
  tokenStandard_ne?: InputMaybe<TokenStandard>;
  tokenStandard_nin?: InputMaybe<Array<TokenStandard>>;
  updatedAt_eq?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  updatedAt_gt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  updatedAt_gte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  updatedAt_lt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  updatedAt_lte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  updatedAt_ne?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
};

export type NftMetadata = {
  __typename?: "NftMetadata";
  animation_url?: Maybe<Scalars["String"]["output"]>;
  attributes?: Maybe<Array<NftAttribute>>;
  description?: Maybe<Scalars["String"]["output"]>;
  external_url?: Maybe<Scalars["String"]["output"]>;
  image?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
  properties?: Maybe<NftProperties>;
  symbol?: Maybe<Scalars["String"]["output"]>;
};

export type NftPage = {
  __typename?: "NftPage";
  items: Array<Nft>;
  metadata: Metadata;
};

export type NftPageResult = HandledError | NftPage;

export type NftProperties = {
  __typename?: "NftProperties";
  category: Scalars["String"]["output"];
  files: Array<NftFile>;
};

export type NftResult = HandledError | Nft;

/** The number of faces to apply to the model */
export enum NumberOfFaces {
  FiftyKey = "fiftyKey",
  OneHundredKey = "oneHundredKey",
  TenKey = "tenKey",
  TwentyKey = "twentyKey",
}

export type Options = {
  numberOfFaces?: InputMaybe<NumberOfFaces>;
  numberOfModels?: InputMaybe<Scalars["Int"]["input"]>;
  style?: InputMaybe<Style>;
  texture?: InputMaybe<TextureType>;
};

/** Order direction */
export enum OrderDirection {
  Asc = "asc",
  Desc = "desc",
}

export type Pagination = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  orderDirection?: InputMaybe<OrderDirection>;
};

export type PresignedPost = {
  __typename?: "PresignedPost";
  fields: Scalars["JSON"]["output"];
  url: Scalars["String"]["output"];
};

export type Prices = {
  __typename?: "Prices";
  buu: Scalars["Float"]["output"];
  sol: Scalars["Float"]["output"];
};

export type PricesResult = HandledError | Prices;

export type Query = {
  __typename?: "Query";
  generateCreditsPackagePaymentLink: UrlResult;
  generateCustomerPortalSession: GenerateCustomerPortalSessionOutput;
  generateSubscriptionPaymentLink: GenerateSubscriptionPaymentLinkResult;
  getCreditsPurchases: CreditsPurchasePageResult;
  getMessages: MessagesPageResult;
  getModel: ModelResult;
  getModels: ModelPageResult;
  getMyCredits: CreditResult;
  getNft: NftResult;
  getNfts: NftPageResult;
  getPrices: PricesResult;
  getReferralAccount: ReferralAccountResult;
  getReferralRewards: ReferralRewardPageResult;
  getSessions: SessionsPageResult;
  getShareableBoard: ShareableBoardResult;
  getStakingGlobalData: GetStakingGlobalDataResult;
  getTeam: TeamResult;
  getTokenHistoricalPriceResult: BirdeyeHistoricalPriceResult;
  getTokenOverview: BirdeyeTokenOverviewResult;
  getUserShareableBoard: ShareableBoardPageResult;
  getUserTeams: TeamPageResult;
  searchPaginatedApiKeys: ApiKeyPageResult;
};

export type QueryGenerateCreditsPackagePaymentLinkArgs = {
  pkg: CreditsPackageKeys;
};

export type QueryGenerateSubscriptionPaymentLinkArgs = {
  planKey: StripeSubscriptionPlanKeys;
};

export type QueryGetCreditsPurchasesArgs = {
  filters?: InputMaybe<CreditsPurchaseFilter>;
  pagination?: InputMaybe<Pagination>;
};

export type QueryGetMessagesArgs = {
  filters?: InputMaybe<MessageFilter>;
  pagination?: InputMaybe<Pagination>;
  sessionId: Scalars["String"]["input"];
};

export type QueryGetModelArgs = {
  modelId: Scalars["String"]["input"];
};

export type QueryGetModelsArgs = {
  filters?: InputMaybe<ModelFilter>;
  pagination?: InputMaybe<Pagination>;
};

export type QueryGetNftArgs = {
  nftId: Scalars["String"]["input"];
};

export type QueryGetNftsArgs = {
  filters?: InputMaybe<NftFilter>;
  pagination?: InputMaybe<Pagination>;
};

export type QueryGetReferralRewardsArgs = {
  filters?: InputMaybe<ReferralRewardFilter>;
  pagination?: InputMaybe<Pagination>;
};

export type QueryGetSessionsArgs = {
  filters?: InputMaybe<SessionFilter>;
  pagination?: InputMaybe<Pagination>;
};

export type QueryGetShareableBoardArgs = {
  id: Scalars["String"]["input"];
};

export type QueryGetTokenHistoricalPriceResultArgs = {
  time: BirdeyeHistoricalDataTimeTypes;
};

export type QueryGetUserShareableBoardArgs = {
  filters?: InputMaybe<ShareableBoardFilter>;
  pagination?: InputMaybe<Pagination>;
};

export type QueryGetUserTeamsArgs = {
  filters?: InputMaybe<TeamFilter>;
  pagination?: InputMaybe<Pagination>;
};

export type QuerySearchPaginatedApiKeysArgs = {
  filters?: InputMaybe<ApiKeyFilter>;
  pagination?: InputMaybe<Pagination>;
};

export type ReferralAccount = {
  __typename?: "ReferralAccount";
  _id: Scalars["String"]["output"];
  createdAt: Scalars["DateTimeISO"]["output"];
  linkedAt?: Maybe<Scalars["DateTimeISO"]["output"]>;
  referee?: Maybe<ReferralAccount>;
  refereeCode?: Maybe<Scalars["String"]["output"]>;
  referralCode: Scalars["String"]["output"];
};

export type ReferralAccountResult = HandledError | ReferralAccount;

export type ReferralReward = {
  __typename?: "ReferralReward";
  _id: Scalars["String"]["output"];
  createdAt: Scalars["DateTimeISO"]["output"];
  creditsPurchaseId?: Maybe<Scalars["String"]["output"]>;
  decimals?: Maybe<Scalars["Int"]["output"]>;
  referee: Scalars["String"]["output"];
  referral: Scalars["String"]["output"];
  referralName: Scalars["String"]["output"];
  tokens?: Maybe<Scalars["String"]["output"]>;
  transactionHash?: Maybe<Scalars["String"]["output"]>;
};

export type ReferralRewardFilter = {
  _id_eq?: InputMaybe<Scalars["String"]["input"]>;
  _id_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  _id_ne?: InputMaybe<Scalars["String"]["input"]>;
  _id_nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  createdAt_eq?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_gt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_gte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_lt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_lte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_ne?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  referee_eq?: InputMaybe<Scalars["String"]["input"]>;
  referee_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  referee_ne?: InputMaybe<Scalars["String"]["input"]>;
  referee_nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  referral_eq?: InputMaybe<Scalars["String"]["input"]>;
  referral_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  referral_ne?: InputMaybe<Scalars["String"]["input"]>;
  referral_nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type ReferralRewardPage = {
  __typename?: "ReferralRewardPage";
  items: Array<ReferralReward>;
  metadata: Metadata;
};

export type ReferralRewardPageResult = HandledError | ReferralRewardPage;

export type RewardEntry = {
  __typename?: "RewardEntry";
  account: RewardEntryAccount;
  publicKey: Scalars["String"]["output"];
};

export type RewardEntryAccount = {
  __typename?: "RewardEntryAccount";
  /** Sum of accounted amounts, used to correctly issue rewards in case of precision loss */
  accountedAmount: Scalars["String"]["output"];
  /** Buffer for additional fields */
  buffer: Array<Scalars["Int"]["output"]>;
  /** Sum of already claimed rewards */
  claimedAmount: Scalars["String"]["output"];
  /** Timestamp when reward entry has been created */
  createdTs: Scalars["String"]["output"];
  /** Timestamp when rewards have been claimed last time */
  lastAccountedTs: Scalars["String"]["output"];
  /** Reward amount used on last claim or entry creation */
  lastRewardAmount: Scalars["String"]["output"];
  /** Reward Period used on last claim or entry creation */
  lastRewardPeriod: Scalars["String"]["output"];
  /** Reward Pool */
  rewardPool: Scalars["String"]["output"];
  /** Stake Entry for which reward entry was initialized */
  stakeEntry: Scalars["String"]["output"];
};

export type RewardPool = {
  __typename?: "RewardPool";
  account: RewardPoolAccount;
  publicKey: Scalars["String"]["output"];
};

export type RewardPoolAccount = {
  __typename?: "RewardPoolAccount";
  authority: Scalars["String"]["output"];
  buffer: Array<Scalars["Int"]["output"]>;
  bump: Scalars["Int"]["output"];
  claimedAmount: Scalars["String"]["output"];
  createdTs: Scalars["String"]["output"];
  creator: Scalars["String"]["output"];
  fundedAmount: Scalars["String"]["output"];
  lastAmountUpdateTs: Scalars["String"]["output"];
  lastClaimPeriod: Scalars["String"]["output"];
  lastPeriodUpdateTs: Scalars["String"]["output"];
  lastRewardAmount: Scalars["String"]["output"];
  lastRewardPeriod: Scalars["String"]["output"];
  mint: Scalars["String"]["output"];
  nonce: Scalars["Int"]["output"];
  permissionless: Scalars["Boolean"]["output"];
  rewardAmount: Scalars["String"]["output"];
  rewardPeriod: Scalars["String"]["output"];
  stakePool: Scalars["String"]["output"];
  vault: Scalars["String"]["output"];
};

export type Session = {
  __typename?: "Session";
  _id: Scalars["String"]["output"];
  createdAt: Scalars["DateTimeISO"]["output"];
  teamId: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
  updatedAt: Scalars["DateTimeISO"]["output"];
};

export type SessionFilter = {
  _id_eq?: InputMaybe<Scalars["String"]["input"]>;
  _id_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  _id_ne?: InputMaybe<Scalars["String"]["input"]>;
  _id_nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  createdAt_eq?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_gt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_gte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_lt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_lte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_ne?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  teamId_eq?: InputMaybe<Scalars["String"]["input"]>;
  teamId_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  teamId_ne?: InputMaybe<Scalars["String"]["input"]>;
  teamId_nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  updatedAt_eq?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  updatedAt_gt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  updatedAt_gte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  updatedAt_lt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  updatedAt_lte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  updatedAt_ne?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
};

export type SessionsPage = {
  __typename?: "SessionsPage";
  items: Array<Session>;
  metadata: Metadata;
};

export type SessionsPageResult = HandledError | SessionsPage;

export type ShareableBoard = {
  __typename?: "ShareableBoard";
  _id: Scalars["String"]["output"];
  createdAt: Scalars["DateTimeISO"]["output"];
  isPublic: Scalars["Boolean"]["output"];
  models: Array<Model>;
  sessionId: Scalars["String"]["output"];
  teamId: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
};

export type ShareableBoardFilter = {
  _id_eq?: InputMaybe<Scalars["String"]["input"]>;
  _id_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  _id_ne?: InputMaybe<Scalars["String"]["input"]>;
  _id_nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  createdAt_eq?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_gt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_gte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_lt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_lte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_ne?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  isPublic_eq?: InputMaybe<Scalars["Boolean"]["input"]>;
  sessionId_eq?: InputMaybe<Scalars["String"]["input"]>;
  sessionId_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sessionId_ne?: InputMaybe<Scalars["String"]["input"]>;
  sessionId_nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  teamId_eq?: InputMaybe<Scalars["String"]["input"]>;
  teamId_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  teamId_ne?: InputMaybe<Scalars["String"]["input"]>;
  teamId_nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type ShareableBoardPage = {
  __typename?: "ShareableBoardPage";
  items: Array<ShareableBoard>;
  metadata: Metadata;
};

export type ShareableBoardPageResult = HandledError | ShareableBoardPage;

export type ShareableBoardResult = HandledError | ShareableBoard;

export type StakeEntry = {
  __typename?: "StakeEntry";
  account: StakeEntryAccount;
  publicKey: Scalars["String"]["output"];
};

export type StakeEntryAccount = {
  __typename?: "StakeEntryAccount";
  amount: Scalars["String"]["output"];
  authority: Scalars["String"]["output"];
  buffer: Array<Scalars["Int"]["output"]>;
  closedTs: Scalars["String"]["output"];
  createdTs: Scalars["String"]["output"];
  duration: Scalars["String"]["output"];
  effectiveAmount: Scalars["String"]["output"];
  nonce: Scalars["Int"]["output"];
  payer: Scalars["String"]["output"];
  priorTotalEffectiveStake: Scalars["String"]["output"];
  stakePool: Scalars["String"]["output"];
  unstakeTs: Scalars["String"]["output"];
};

export enum StripeSubscriptionPlanKeys {
  Basic = "BASIC",
  Enterprise = "ENTERPRISE",
  Free = "FREE",
  Pro = "PRO",
  Unlimited = "UNLIMITED",
}

/** The style of the model to generate */
export enum Style {
  Clay = "clay",
  Cute = "cute",
  Environment = "environment",
  Fantasy = "fantasy",
  Isometric = "isometric",
  LowPoly = "lowPoly",
  Metallic = "metallic",
  Realistic = "realistic",
  SciFi = "sciFi",
  Stylized = "stylized",
  Toon = "toon",
  Voxel = "voxel",
  Weapons = "weapons",
  Wireframe = "wireframe",
}

/** The supported content types for upload */
export enum SupportedUploadContentTypesEnum {
  ImageJpeg = "ImageJpeg",
  ImagePng = "ImagePng",
}

export type SuscriptionPaymentLinkOutput = {
  __typename?: "SuscriptionPaymentLinkOutput";
  url: Scalars["String"]["output"];
};

export type Team = {
  __typename?: "Team";
  _id: Scalars["String"]["output"];
  available: Scalars["Float"]["output"];
  confirmed: Scalars["Float"]["output"];
  createdAt: Scalars["DateTimeISO"]["output"];
  creator: Scalars["String"]["output"];
  email?: Maybe<Scalars["String"]["output"]>;
  members: Array<TeamMember>;
  name: Scalars["String"]["output"];
  pending: Scalars["Float"]["output"];
  referralCode: Scalars["String"]["output"];
  stripeActiveSubscriptionProduct: Scalars["JSON"]["output"];
  stripeCustomerId?: Maybe<Scalars["String"]["output"]>;
  type: TeamType;
  updatedAt: Scalars["DateTimeISO"]["output"];
  wallet?: Maybe<Scalars["String"]["output"]>;
};

export type TeamFilter = {
  _id_eq?: InputMaybe<Scalars["String"]["input"]>;
  _id_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  _id_ne?: InputMaybe<Scalars["String"]["input"]>;
  _id_nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  createdAt_eq?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_gt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_gte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_lt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_lte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_ne?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  creator_eq?: InputMaybe<Scalars["String"]["input"]>;
  creator_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  creator_ne?: InputMaybe<Scalars["String"]["input"]>;
  creator_nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  type_eq?: InputMaybe<Scalars["String"]["input"]>;
};

export type TeamMember = {
  __typename?: "TeamMember";
  address: Scalars["String"]["output"];
  role: TeamRole;
  status: TeamMemberStatus;
};

/** Team member status */
export enum TeamMemberStatus {
  Active = "ACTIVE",
  Pending = "PENDING",
}

export type TeamPage = {
  __typename?: "TeamPage";
  items: Array<Team>;
  metadata: Metadata;
};

export type TeamPageResult = HandledError | TeamPage;

export type TeamResult = HandledError | Team;

/** Team member role */
export enum TeamRole {
  Admin = "ADMIN",
  Member = "MEMBER",
}

/** Team type */
export enum TeamType {
  Personal = "PERSONAL",
  Studio = "STUDIO",
}

/** The type of texture to apply to the model */
export enum TextureType {
  Fast = "fast",
  Hd = "hd",
  None = "none",
  TwoKey = "twoKey",
}

export type TokenMint = {
  __typename?: "TokenMint";
  address: Scalars["String"]["output"];
  decimals: Scalars["Int"]["output"];
  freezeAuthority?: Maybe<Scalars["String"]["output"]>;
  isInitialized: Scalars["Boolean"]["output"];
  mintAuthority?: Maybe<Scalars["String"]["output"]>;
  supply: Scalars["String"]["output"];
};

export enum TokenStandard {
  Fungible = "Fungible",
  FungibleAsset = "FungibleAsset",
  NonFungible = "NonFungible",
  NonFungibleEdition = "NonFungibleEdition",
  ProgrammableNonFungible = "ProgrammableNonFungible",
  ProgrammableNonFungibleEdition = "ProgrammableNonFungibleEdition",
}

export type ToolRequest = {
  __typename?: "ToolRequest";
  _id: Scalars["String"]["output"];
  createdAt: Scalars["DateTimeISO"]["output"];
  credits: Scalars["Float"]["output"];
  message: Scalars["String"]["output"];
  messageId?: Maybe<Scalars["String"]["output"]>;
  payload: Scalars["String"]["output"];
  percentage: Scalars["Int"]["output"];
  priority: ToolRequestPriority;
  sessionId?: Maybe<Scalars["String"]["output"]>;
  status: ToolRequestStatus;
  teamId: Scalars["String"]["output"];
  type: ToolRequestType;
  updatedAt: Scalars["DateTimeISO"]["output"];
};

export type ToolRequestConfirmation = {
  __typename?: "ToolRequestConfirmation";
  messages: Array<Message>;
  toolRequest: ToolRequest;
};

export type ToolRequestConfirmationResult =
  | HandledError
  | ToolRequestConfirmation;

/** The priority of the tool request */
export enum ToolRequestPriority {
  High = "HIGH",
  Low = "LOW",
  Medium = "MEDIUM",
  Urgent = "URGENT",
}

export type ToolRequestResult = HandledError | ToolRequest;

/** The status of the tool request */
export enum ToolRequestStatus {
  Cancelled = "CANCELLED",
  Completed = "COMPLETED",
  Failed = "FAILED",
  InProgress = "IN_PROGRESS",
  InQueue = "IN_QUEUE",
  Pending = "PENDING",
}

/** The type of the tool request */
export enum ToolRequestType {
  EditImage = "EDIT_IMAGE",
  GenerateImages = "GENERATE_IMAGES",
  GenerateImagesFromReferences = "GENERATE_IMAGES_FROM_REFERENCES",
  GenerateModelsFromEdit = "GENERATE_MODELS_FROM_EDIT",
  GenerateModelsFromImage = "GENERATE_MODELS_FROM_IMAGE",
  GenerateModelsFromPrompt = "GENERATE_MODELS_FROM_PROMPT",
  GenerateModelsFromReferences = "GENERATE_MODELS_FROM_REFERENCES",
  GenerateModelFromImage = "GENERATE_MODEL_FROM_IMAGE",
  GenerateNft = "GENERATE_NFT",
}

export type Url = {
  __typename?: "Url";
  url: Scalars["String"]["output"];
};

export type UrlResult = HandledError | Url;

export type CreateApiKeyMutationVariables = Exact<{
  name: Scalars["String"]["input"];
  expiresIn?: InputMaybe<ExpirationInput>;
}>;

export type CreateApiKeyMutation = {
  __typename?: "Mutation";
  createApiKey:
    | {
        __typename?: "ApiKey";
        _id: string;
        teamId: string;
        name: string;
        key: string;
        permissions: Array<string>;
        createdAt: any;
        updatedAt: any;
        expiresAt?: any | null;
      }
    | { __typename?: "HandledError"; code: string; message: string };
};

export type SearchPaginatedApiKeysQueryVariables = Exact<{
  pagination?: InputMaybe<Pagination>;
  filters?: InputMaybe<ApiKeyFilter>;
}>;

export type SearchPaginatedApiKeysQuery = {
  __typename?: "Query";
  searchPaginatedApiKeys:
    | {
        __typename?: "ApiKeyPage";
        items: Array<{
          __typename?: "ApiKey";
          _id: string;
          teamId: string;
          name: string;
          key: string;
          permissions: Array<string>;
          createdAt: any;
          updatedAt: any;
          expiresAt?: any | null;
        }>;
        metadata: {
          __typename?: "Metadata";
          limit?: number | null;
          offset?: number | null;
          orderBy?: string | null;
          orderDirection?: OrderDirection | null;
          numElements?: number | null;
          total?: number | null;
          page?: number | null;
          pages?: number | null;
        };
      }
    | { __typename?: "HandledError"; code: string; message: string };
};

export type DeleteApiKeyMutationVariables = Exact<{
  deleteApiKeyId: Scalars["String"]["input"];
}>;

export type DeleteApiKeyMutation = {
  __typename?: "Mutation";
  deleteApiKey:
    | {
        __typename?: "ApiKey";
        _id: string;
        teamId: string;
        name: string;
        key: string;
        permissions: Array<string>;
        createdAt: any;
        updatedAt: any;
        expiresAt?: any | null;
      }
    | { __typename?: "HandledError"; code: string; message: string };
};

export type RotateApiKeyMutationVariables = Exact<{
  rotateApiKeyId: Scalars["String"]["input"];
}>;

export type RotateApiKeyMutation = {
  __typename?: "Mutation";
  rotateApiKey:
    | {
        __typename?: "ApiKey";
        _id: string;
        teamId: string;
        name: string;
        key: string;
        permissions: Array<string>;
        createdAt: any;
        updatedAt: any;
        expiresAt?: any | null;
      }
    | { __typename?: "HandledError"; code: string; message: string };
};

export type GetUserShareableBoardQueryVariables = Exact<{
  filters?: InputMaybe<ShareableBoardFilter>;
  pagination?: InputMaybe<Pagination>;
}>;

export type GetUserShareableBoardQuery = {
  __typename?: "Query";
  getUserShareableBoard:
    | { __typename?: "HandledError"; code: string; message: string }
    | {
        __typename?: "ShareableBoardPage";
        items: Array<{
          __typename?: "ShareableBoard";
          _id: string;
          sessionId: string;
          title: string;
          teamId: string;
          isPublic: boolean;
          createdAt: any;
          models: Array<{
            __typename?: "Model";
            _id: string;
            teamId: string;
            sessionId?: string | null;
            messageId?: string | null;
            createdAt: any;
            updatedAt: any;
            prompt?: string | null;
            style?: Style | null;
            nftId?: string | null;
            image: {
              __typename?: "Media";
              alt?: string | null;
              keyS3?: string | null;
              size?: number | null;
              type?: string | null;
              url?: string | null;
              _id: string;
              teamId?: string | null;
              sessionId?: string | null;
              messageId?: string | null;
              createdAt: any;
              updatedAt: any;
            };
            mesh?: {
              __typename?: "Media";
              alt?: string | null;
              keyS3?: string | null;
              size?: number | null;
              type?: string | null;
              url?: string | null;
              _id: string;
              teamId?: string | null;
              sessionId?: string | null;
              messageId?: string | null;
              createdAt: any;
              updatedAt: any;
            } | null;
            optimizedMesh?: {
              __typename?: "Media";
              alt?: string | null;
              keyS3?: string | null;
              size?: number | null;
              type?: string | null;
              url?: string | null;
              _id: string;
              teamId?: string | null;
              sessionId?: string | null;
              messageId?: string | null;
              createdAt: any;
              updatedAt: any;
            } | null;
            multiview?: {
              __typename?: "Media";
              alt?: string | null;
              keyS3?: string | null;
              size?: number | null;
              type?: string | null;
              url?: string | null;
              _id: string;
              teamId?: string | null;
              sessionId?: string | null;
              messageId?: string | null;
              createdAt: any;
              updatedAt: any;
            } | null;
            views: Array<{
              __typename?: "Media";
              alt?: string | null;
              keyS3?: string | null;
              size?: number | null;
              type?: string | null;
              url?: string | null;
              _id: string;
              teamId?: string | null;
              sessionId?: string | null;
              messageId?: string | null;
              createdAt: any;
              updatedAt: any;
            }>;
            texturedMesh?: {
              __typename?: "Media";
              alt?: string | null;
              keyS3?: string | null;
              size?: number | null;
              type?: string | null;
              url?: string | null;
              _id: string;
              teamId?: string | null;
              sessionId?: string | null;
              messageId?: string | null;
              createdAt: any;
              updatedAt: any;
            } | null;
            texture?: {
              __typename?: "Media";
              alt?: string | null;
              keyS3?: string | null;
              size?: number | null;
              type?: string | null;
              url?: string | null;
              _id: string;
              teamId?: string | null;
              sessionId?: string | null;
              messageId?: string | null;
              createdAt: any;
              updatedAt: any;
            } | null;
            toolRequest: {
              __typename?: "ToolRequest";
              _id: string;
              teamId: string;
              sessionId?: string | null;
              messageId?: string | null;
              type: ToolRequestType;
              priority: ToolRequestPriority;
              payload: string;
              credits: number;
              status: ToolRequestStatus;
              createdAt: any;
              updatedAt: any;
              message: string;
              percentage: number;
            };
          }>;
        }>;
        metadata: {
          __typename?: "Metadata";
          limit?: number | null;
          offset?: number | null;
          orderBy?: string | null;
          orderDirection?: OrderDirection | null;
          numElements?: number | null;
          total?: number | null;
          page?: number | null;
          pages?: number | null;
        };
      };
};

export type CreateShareableBoardMutationVariables = Exact<{
  sessionId: Scalars["String"]["input"];
}>;

export type CreateShareableBoardMutation = {
  __typename?: "Mutation";
  createShareableBoard:
    | { __typename?: "HandledError"; code: string; message: string }
    | {
        __typename?: "ShareableBoard";
        _id: string;
        sessionId: string;
        title: string;
        teamId: string;
        isPublic: boolean;
        createdAt: any;
        models: Array<{
          __typename?: "Model";
          _id: string;
          teamId: string;
          sessionId?: string | null;
          messageId?: string | null;
          createdAt: any;
          updatedAt: any;
          prompt?: string | null;
          style?: Style | null;
          nftId?: string | null;
          image: {
            __typename?: "Media";
            alt?: string | null;
            keyS3?: string | null;
            size?: number | null;
            type?: string | null;
            url?: string | null;
            _id: string;
            teamId?: string | null;
            sessionId?: string | null;
            messageId?: string | null;
            createdAt: any;
            updatedAt: any;
          };
          mesh?: {
            __typename?: "Media";
            alt?: string | null;
            keyS3?: string | null;
            size?: number | null;
            type?: string | null;
            url?: string | null;
            _id: string;
            teamId?: string | null;
            sessionId?: string | null;
            messageId?: string | null;
            createdAt: any;
            updatedAt: any;
          } | null;
          optimizedMesh?: {
            __typename?: "Media";
            alt?: string | null;
            keyS3?: string | null;
            size?: number | null;
            type?: string | null;
            url?: string | null;
            _id: string;
            teamId?: string | null;
            sessionId?: string | null;
            messageId?: string | null;
            createdAt: any;
            updatedAt: any;
          } | null;
          multiview?: {
            __typename?: "Media";
            alt?: string | null;
            keyS3?: string | null;
            size?: number | null;
            type?: string | null;
            url?: string | null;
            _id: string;
            teamId?: string | null;
            sessionId?: string | null;
            messageId?: string | null;
            createdAt: any;
            updatedAt: any;
          } | null;
          views: Array<{
            __typename?: "Media";
            alt?: string | null;
            keyS3?: string | null;
            size?: number | null;
            type?: string | null;
            url?: string | null;
            _id: string;
            teamId?: string | null;
            sessionId?: string | null;
            messageId?: string | null;
            createdAt: any;
            updatedAt: any;
          }>;
          texturedMesh?: {
            __typename?: "Media";
            alt?: string | null;
            keyS3?: string | null;
            size?: number | null;
            type?: string | null;
            url?: string | null;
            _id: string;
            teamId?: string | null;
            sessionId?: string | null;
            messageId?: string | null;
            createdAt: any;
            updatedAt: any;
          } | null;
          texture?: {
            __typename?: "Media";
            alt?: string | null;
            keyS3?: string | null;
            size?: number | null;
            type?: string | null;
            url?: string | null;
            _id: string;
            teamId?: string | null;
            sessionId?: string | null;
            messageId?: string | null;
            createdAt: any;
            updatedAt: any;
          } | null;
          toolRequest: {
            __typename?: "ToolRequest";
            _id: string;
            teamId: string;
            sessionId?: string | null;
            messageId?: string | null;
            type: ToolRequestType;
            priority: ToolRequestPriority;
            payload: string;
            credits: number;
            status: ToolRequestStatus;
            createdAt: any;
            updatedAt: any;
            message: string;
            percentage: number;
          };
        }>;
      };
};

export type UpdateShareableBoardVisibilityMutationVariables = Exact<{
  isPublic: Scalars["Boolean"]["input"];
  shareableBoardId: Scalars["String"]["input"];
}>;

export type UpdateShareableBoardVisibilityMutation = {
  __typename?: "Mutation";
  updateShareableBoardVisibility:
    | { __typename?: "HandledError"; code: string; message: string }
    | {
        __typename?: "ShareableBoard";
        _id: string;
        sessionId: string;
        title: string;
        teamId: string;
        isPublic: boolean;
        createdAt: any;
        models: Array<{
          __typename?: "Model";
          _id: string;
          teamId: string;
          sessionId?: string | null;
          messageId?: string | null;
          createdAt: any;
          updatedAt: any;
          prompt?: string | null;
          style?: Style | null;
          nftId?: string | null;
          image: {
            __typename?: "Media";
            alt?: string | null;
            keyS3?: string | null;
            size?: number | null;
            type?: string | null;
            url?: string | null;
            _id: string;
            teamId?: string | null;
            sessionId?: string | null;
            messageId?: string | null;
            createdAt: any;
            updatedAt: any;
          };
          mesh?: {
            __typename?: "Media";
            alt?: string | null;
            keyS3?: string | null;
            size?: number | null;
            type?: string | null;
            url?: string | null;
            _id: string;
            teamId?: string | null;
            sessionId?: string | null;
            messageId?: string | null;
            createdAt: any;
            updatedAt: any;
          } | null;
          optimizedMesh?: {
            __typename?: "Media";
            alt?: string | null;
            keyS3?: string | null;
            size?: number | null;
            type?: string | null;
            url?: string | null;
            _id: string;
            teamId?: string | null;
            sessionId?: string | null;
            messageId?: string | null;
            createdAt: any;
            updatedAt: any;
          } | null;
          multiview?: {
            __typename?: "Media";
            alt?: string | null;
            keyS3?: string | null;
            size?: number | null;
            type?: string | null;
            url?: string | null;
            _id: string;
            teamId?: string | null;
            sessionId?: string | null;
            messageId?: string | null;
            createdAt: any;
            updatedAt: any;
          } | null;
          views: Array<{
            __typename?: "Media";
            alt?: string | null;
            keyS3?: string | null;
            size?: number | null;
            type?: string | null;
            url?: string | null;
            _id: string;
            teamId?: string | null;
            sessionId?: string | null;
            messageId?: string | null;
            createdAt: any;
            updatedAt: any;
          }>;
          texturedMesh?: {
            __typename?: "Media";
            alt?: string | null;
            keyS3?: string | null;
            size?: number | null;
            type?: string | null;
            url?: string | null;
            _id: string;
            teamId?: string | null;
            sessionId?: string | null;
            messageId?: string | null;
            createdAt: any;
            updatedAt: any;
          } | null;
          texture?: {
            __typename?: "Media";
            alt?: string | null;
            keyS3?: string | null;
            size?: number | null;
            type?: string | null;
            url?: string | null;
            _id: string;
            teamId?: string | null;
            sessionId?: string | null;
            messageId?: string | null;
            createdAt: any;
            updatedAt: any;
          } | null;
          toolRequest: {
            __typename?: "ToolRequest";
            _id: string;
            teamId: string;
            sessionId?: string | null;
            messageId?: string | null;
            type: ToolRequestType;
            priority: ToolRequestPriority;
            payload: string;
            credits: number;
            status: ToolRequestStatus;
            createdAt: any;
            updatedAt: any;
            message: string;
            percentage: number;
          };
        }>;
      };
};

export type DeleteShareableBoardMutationVariables = Exact<{
  shareableBoardId: Scalars["String"]["input"];
}>;

export type DeleteShareableBoardMutation = {
  __typename?: "Mutation";
  deleteShareableBoard:
    | { __typename?: "HandledError"; code: string; message: string }
    | {
        __typename?: "ShareableBoard";
        _id: string;
        sessionId: string;
        title: string;
        teamId: string;
        isPublic: boolean;
        createdAt: any;
        models: Array<{
          __typename?: "Model";
          _id: string;
          teamId: string;
          sessionId?: string | null;
          messageId?: string | null;
          createdAt: any;
          updatedAt: any;
          prompt?: string | null;
          style?: Style | null;
          nftId?: string | null;
          image: {
            __typename?: "Media";
            alt?: string | null;
            keyS3?: string | null;
            size?: number | null;
            type?: string | null;
            url?: string | null;
            _id: string;
            teamId?: string | null;
            sessionId?: string | null;
            messageId?: string | null;
            createdAt: any;
            updatedAt: any;
          };
          mesh?: {
            __typename?: "Media";
            alt?: string | null;
            keyS3?: string | null;
            size?: number | null;
            type?: string | null;
            url?: string | null;
            _id: string;
            teamId?: string | null;
            sessionId?: string | null;
            messageId?: string | null;
            createdAt: any;
            updatedAt: any;
          } | null;
          optimizedMesh?: {
            __typename?: "Media";
            alt?: string | null;
            keyS3?: string | null;
            size?: number | null;
            type?: string | null;
            url?: string | null;
            _id: string;
            teamId?: string | null;
            sessionId?: string | null;
            messageId?: string | null;
            createdAt: any;
            updatedAt: any;
          } | null;
          multiview?: {
            __typename?: "Media";
            alt?: string | null;
            keyS3?: string | null;
            size?: number | null;
            type?: string | null;
            url?: string | null;
            _id: string;
            teamId?: string | null;
            sessionId?: string | null;
            messageId?: string | null;
            createdAt: any;
            updatedAt: any;
          } | null;
          views: Array<{
            __typename?: "Media";
            alt?: string | null;
            keyS3?: string | null;
            size?: number | null;
            type?: string | null;
            url?: string | null;
            _id: string;
            teamId?: string | null;
            sessionId?: string | null;
            messageId?: string | null;
            createdAt: any;
            updatedAt: any;
          }>;
          texturedMesh?: {
            __typename?: "Media";
            alt?: string | null;
            keyS3?: string | null;
            size?: number | null;
            type?: string | null;
            url?: string | null;
            _id: string;
            teamId?: string | null;
            sessionId?: string | null;
            messageId?: string | null;
            createdAt: any;
            updatedAt: any;
          } | null;
          texture?: {
            __typename?: "Media";
            alt?: string | null;
            keyS3?: string | null;
            size?: number | null;
            type?: string | null;
            url?: string | null;
            _id: string;
            teamId?: string | null;
            sessionId?: string | null;
            messageId?: string | null;
            createdAt: any;
            updatedAt: any;
          } | null;
          toolRequest: {
            __typename?: "ToolRequest";
            _id: string;
            teamId: string;
            sessionId?: string | null;
            messageId?: string | null;
            type: ToolRequestType;
            priority: ToolRequestPriority;
            payload: string;
            credits: number;
            status: ToolRequestStatus;
            createdAt: any;
            updatedAt: any;
            message: string;
            percentage: number;
          };
        }>;
      };
};

export type GetShareableBoardQueryVariables = Exact<{
  getShareableBoardId: Scalars["String"]["input"];
}>;

export type GetShareableBoardQuery = {
  __typename?: "Query";
  getShareableBoard:
    | { __typename?: "HandledError"; code: string; message: string }
    | {
        __typename?: "ShareableBoard";
        _id: string;
        sessionId: string;
        title: string;
        teamId: string;
        isPublic: boolean;
        createdAt: any;
        models: Array<{
          __typename?: "Model";
          _id: string;
          teamId: string;
          sessionId?: string | null;
          messageId?: string | null;
          createdAt: any;
          updatedAt: any;
          prompt?: string | null;
          style?: Style | null;
          nftId?: string | null;
          image: {
            __typename?: "Media";
            alt?: string | null;
            keyS3?: string | null;
            size?: number | null;
            type?: string | null;
            url?: string | null;
            _id: string;
            teamId?: string | null;
            sessionId?: string | null;
            messageId?: string | null;
            createdAt: any;
            updatedAt: any;
          };
          mesh?: {
            __typename?: "Media";
            alt?: string | null;
            keyS3?: string | null;
            size?: number | null;
            type?: string | null;
            url?: string | null;
            _id: string;
            teamId?: string | null;
            sessionId?: string | null;
            messageId?: string | null;
            createdAt: any;
            updatedAt: any;
          } | null;
          optimizedMesh?: {
            __typename?: "Media";
            alt?: string | null;
            keyS3?: string | null;
            size?: number | null;
            type?: string | null;
            url?: string | null;
            _id: string;
            teamId?: string | null;
            sessionId?: string | null;
            messageId?: string | null;
            createdAt: any;
            updatedAt: any;
          } | null;
          multiview?: {
            __typename?: "Media";
            alt?: string | null;
            keyS3?: string | null;
            size?: number | null;
            type?: string | null;
            url?: string | null;
            _id: string;
            teamId?: string | null;
            sessionId?: string | null;
            messageId?: string | null;
            createdAt: any;
            updatedAt: any;
          } | null;
          views: Array<{
            __typename?: "Media";
            alt?: string | null;
            keyS3?: string | null;
            size?: number | null;
            type?: string | null;
            url?: string | null;
            _id: string;
            teamId?: string | null;
            sessionId?: string | null;
            messageId?: string | null;
            createdAt: any;
            updatedAt: any;
          }>;
          texturedMesh?: {
            __typename?: "Media";
            alt?: string | null;
            keyS3?: string | null;
            size?: number | null;
            type?: string | null;
            url?: string | null;
            _id: string;
            teamId?: string | null;
            sessionId?: string | null;
            messageId?: string | null;
            createdAt: any;
            updatedAt: any;
          } | null;
          texture?: {
            __typename?: "Media";
            alt?: string | null;
            keyS3?: string | null;
            size?: number | null;
            type?: string | null;
            url?: string | null;
            _id: string;
            teamId?: string | null;
            sessionId?: string | null;
            messageId?: string | null;
            createdAt: any;
            updatedAt: any;
          } | null;
          toolRequest: {
            __typename?: "ToolRequest";
            _id: string;
            teamId: string;
            sessionId?: string | null;
            messageId?: string | null;
            type: ToolRequestType;
            priority: ToolRequestPriority;
            payload: string;
            credits: number;
            status: ToolRequestStatus;
            createdAt: any;
            updatedAt: any;
            message: string;
            percentage: number;
          };
        }>;
      };
};

export type GetMessagesQueryVariables = Exact<{
  sessionId: Scalars["String"]["input"];
  filters?: InputMaybe<MessageFilter>;
  pagination?: InputMaybe<Pagination>;
}>;

export type GetMessagesQuery = {
  __typename?: "Query";
  getMessages:
    | { __typename?: "HandledError"; code: string; message: string }
    | {
        __typename?: "MessagesPage";
        items: Array<{
          __typename?: "Message";
          _id: string;
          createdAt: any;
          updatedAt: any;
          teamId: string;
          sessionId: string;
          role: MessageRole;
          content?: {
            __typename?: "MessageContent";
            text?: string | null;
            models?: Array<{
              __typename?: "Model";
              _id: string;
              teamId: string;
              sessionId?: string | null;
              messageId?: string | null;
              createdAt: any;
              updatedAt: any;
              prompt?: string | null;
              style?: Style | null;
              nftId?: string | null;
              image: {
                __typename?: "Media";
                alt?: string | null;
                keyS3?: string | null;
                size?: number | null;
                type?: string | null;
                url?: string | null;
                _id: string;
                teamId?: string | null;
                sessionId?: string | null;
                messageId?: string | null;
                createdAt: any;
                updatedAt: any;
              };
              toolRequest: {
                __typename?: "ToolRequest";
                _id: string;
                teamId: string;
                sessionId?: string | null;
                messageId?: string | null;
                type: ToolRequestType;
                priority: ToolRequestPriority;
                payload: string;
                credits: number;
                status: ToolRequestStatus;
                createdAt: any;
                updatedAt: any;
                message: string;
                percentage: number;
              };
              mesh?: {
                __typename?: "Media";
                alt?: string | null;
                keyS3?: string | null;
                size?: number | null;
                type?: string | null;
                url?: string | null;
                _id: string;
                teamId?: string | null;
                sessionId?: string | null;
                messageId?: string | null;
                createdAt: any;
                updatedAt: any;
              } | null;
              optimizedMesh?: {
                __typename?: "Media";
                alt?: string | null;
                keyS3?: string | null;
                size?: number | null;
                type?: string | null;
                url?: string | null;
                _id: string;
                teamId?: string | null;
                sessionId?: string | null;
                messageId?: string | null;
                createdAt: any;
                updatedAt: any;
              } | null;
              multiview?: {
                __typename?: "Media";
                alt?: string | null;
                keyS3?: string | null;
                size?: number | null;
                type?: string | null;
                url?: string | null;
                _id: string;
                teamId?: string | null;
                sessionId?: string | null;
                messageId?: string | null;
                createdAt: any;
                updatedAt: any;
              } | null;
              views: Array<{
                __typename?: "Media";
                alt?: string | null;
                keyS3?: string | null;
                size?: number | null;
                type?: string | null;
                url?: string | null;
                _id: string;
                teamId?: string | null;
                sessionId?: string | null;
                messageId?: string | null;
                createdAt: any;
                updatedAt: any;
              }>;
              texturedMesh?: {
                __typename?: "Media";
                alt?: string | null;
                keyS3?: string | null;
                size?: number | null;
                type?: string | null;
                url?: string | null;
                _id: string;
                teamId?: string | null;
                sessionId?: string | null;
                messageId?: string | null;
                createdAt: any;
                updatedAt: any;
              } | null;
              texture?: {
                __typename?: "Media";
                alt?: string | null;
                keyS3?: string | null;
                size?: number | null;
                type?: string | null;
                url?: string | null;
                _id: string;
                teamId?: string | null;
                sessionId?: string | null;
                messageId?: string | null;
                createdAt: any;
                updatedAt: any;
              } | null;
            }> | null;
            medias?: Array<{
              __typename?: "Media";
              alt?: string | null;
              keyS3?: string | null;
              size?: number | null;
              type?: string | null;
              url?: string | null;
              _id: string;
              teamId?: string | null;
              sessionId?: string | null;
              messageId?: string | null;
              createdAt: any;
              updatedAt: any;
            }> | null;
            nfts?: Array<{
              __typename?: "Nft";
              _id: string;
              teamId: string;
              genRequestId: string;
              messageId: string;
              modelId: string;
              status: ToolRequestStatus;
              mintAddress?: string | null;
              collectionAddress?: string | null;
              creator?: string | null;
              tokenAddress?: string | null;
              tokenStandard?: TokenStandard | null;
              collectionRoyalties?: number | null;
              chain: string;
              updatedAt: any;
              createdAt: any;
              metadata: {
                __typename?: "NftMetadata";
                name: string;
                symbol?: string | null;
                description?: string | null;
                image?: string | null;
                external_url?: string | null;
                animation_url?: string | null;
                attributes?: Array<{
                  __typename?: "NftAttribute";
                  trait_type: string;
                  value: string;
                }> | null;
                properties?: {
                  __typename?: "NftProperties";
                  category: string;
                  files: Array<{
                    __typename?: "NftFile";
                    uri: string;
                    type: string;
                    cdn?: boolean | null;
                  }>;
                } | null;
              };
            }> | null;
          } | null;
          toolRequest?: {
            __typename?: "ToolRequest";
            _id: string;
            teamId: string;
            sessionId?: string | null;
            messageId?: string | null;
            type: ToolRequestType;
            priority: ToolRequestPriority;
            payload: string;
            credits: number;
            status: ToolRequestStatus;
            createdAt: any;
            updatedAt: any;
            message: string;
            percentage: number;
          } | null;
        }>;
        metadata: {
          __typename?: "Metadata";
          limit?: number | null;
          offset?: number | null;
          orderBy?: string | null;
          orderDirection?: OrderDirection | null;
          numElements?: number | null;
          total?: number | null;
          page?: number | null;
          pages?: number | null;
        };
      };
};

export type CancelToolRequestMutationVariables = Exact<{
  requestId: Scalars["String"]["input"];
}>;

export type CancelToolRequestMutation = {
  __typename?: "Mutation";
  cancelToolRequest:
    | { __typename?: "HandledError"; code: string; message: string }
    | {
        __typename?: "ToolRequest";
        _id: string;
        teamId: string;
        sessionId?: string | null;
        messageId?: string | null;
        type: ToolRequestType;
        priority: ToolRequestPriority;
        payload: string;
        credits: number;
        status: ToolRequestStatus;
        createdAt: any;
        updatedAt: any;
      };
};

export type GenerateModelFromImageMutationVariables = Exact<{
  imageUrl: Scalars["String"]["input"];
  options?: InputMaybe<Options>;
  sessionId?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type GenerateModelFromImageMutation = {
  __typename?: "Mutation";
  generateModelFromImage:
    | { __typename?: "HandledError"; code: string; message: string }
    | {
        __typename?: "ToolRequestConfirmation";
        messages: Array<{
          __typename?: "Message";
          _id: string;
          createdAt: any;
          updatedAt: any;
          teamId: string;
          sessionId: string;
          role: MessageRole;
          content?: {
            __typename?: "MessageContent";
            text?: string | null;
            models?: Array<{
              __typename?: "Model";
              _id: string;
              teamId: string;
              sessionId?: string | null;
              messageId?: string | null;
              createdAt: any;
              updatedAt: any;
              prompt?: string | null;
              style?: Style | null;
              nftId?: string | null;
              image: {
                __typename?: "Media";
                alt?: string | null;
                keyS3?: string | null;
                size?: number | null;
                type?: string | null;
                url?: string | null;
                _id: string;
                teamId?: string | null;
                sessionId?: string | null;
                messageId?: string | null;
                createdAt: any;
                updatedAt: any;
              };
              mesh?: {
                __typename?: "Media";
                alt?: string | null;
                keyS3?: string | null;
                size?: number | null;
                type?: string | null;
                url?: string | null;
                _id: string;
                teamId?: string | null;
                sessionId?: string | null;
                messageId?: string | null;
                createdAt: any;
                updatedAt: any;
              } | null;
              optimizedMesh?: {
                __typename?: "Media";
                alt?: string | null;
                keyS3?: string | null;
                size?: number | null;
                type?: string | null;
                url?: string | null;
                _id: string;
                teamId?: string | null;
                sessionId?: string | null;
                messageId?: string | null;
                createdAt: any;
                updatedAt: any;
              } | null;
              multiview?: {
                __typename?: "Media";
                alt?: string | null;
                keyS3?: string | null;
                size?: number | null;
                type?: string | null;
                url?: string | null;
                _id: string;
                teamId?: string | null;
                sessionId?: string | null;
                messageId?: string | null;
                createdAt: any;
                updatedAt: any;
              } | null;
              views: Array<{
                __typename?: "Media";
                alt?: string | null;
                keyS3?: string | null;
                size?: number | null;
                type?: string | null;
                url?: string | null;
                _id: string;
                teamId?: string | null;
                sessionId?: string | null;
                messageId?: string | null;
                createdAt: any;
                updatedAt: any;
              }>;
              texturedMesh?: {
                __typename?: "Media";
                alt?: string | null;
                keyS3?: string | null;
                size?: number | null;
                type?: string | null;
                url?: string | null;
                _id: string;
                teamId?: string | null;
                sessionId?: string | null;
                messageId?: string | null;
                createdAt: any;
                updatedAt: any;
              } | null;
              texture?: {
                __typename?: "Media";
                alt?: string | null;
                keyS3?: string | null;
                size?: number | null;
                type?: string | null;
                url?: string | null;
                _id: string;
                teamId?: string | null;
                sessionId?: string | null;
                messageId?: string | null;
                createdAt: any;
                updatedAt: any;
              } | null;
            }> | null;
            medias?: Array<{
              __typename?: "Media";
              alt?: string | null;
              keyS3?: string | null;
              size?: number | null;
              type?: string | null;
              url?: string | null;
              _id: string;
              teamId?: string | null;
              sessionId?: string | null;
              messageId?: string | null;
              createdAt: any;
              updatedAt: any;
            }> | null;
            nfts?: Array<{
              __typename?: "Nft";
              _id: string;
              teamId: string;
              genRequestId: string;
              messageId: string;
              modelId: string;
              status: ToolRequestStatus;
              mintAddress?: string | null;
              collectionAddress?: string | null;
              creator?: string | null;
              tokenAddress?: string | null;
              tokenStandard?: TokenStandard | null;
              collectionRoyalties?: number | null;
              chain: string;
              updatedAt: any;
              createdAt: any;
              metadata: {
                __typename?: "NftMetadata";
                name: string;
                symbol?: string | null;
                description?: string | null;
                image?: string | null;
                external_url?: string | null;
                animation_url?: string | null;
                attributes?: Array<{
                  __typename?: "NftAttribute";
                  trait_type: string;
                  value: string;
                }> | null;
                properties?: {
                  __typename?: "NftProperties";
                  category: string;
                  files: Array<{
                    __typename?: "NftFile";
                    uri: string;
                    type: string;
                    cdn?: boolean | null;
                  }>;
                } | null;
              };
            }> | null;
          } | null;
          toolRequest?: {
            __typename?: "ToolRequest";
            _id: string;
            teamId: string;
            sessionId?: string | null;
            messageId?: string | null;
            type: ToolRequestType;
            priority: ToolRequestPriority;
            payload: string;
            credits: number;
            status: ToolRequestStatus;
            createdAt: any;
            updatedAt: any;
            message: string;
            percentage: number;
          } | null;
        }>;
        toolRequest: {
          __typename?: "ToolRequest";
          _id: string;
          teamId: string;
          sessionId?: string | null;
          messageId?: string | null;
          type: ToolRequestType;
          priority: ToolRequestPriority;
          payload: string;
          credits: number;
          status: ToolRequestStatus;
          createdAt: any;
          updatedAt: any;
          message: string;
          percentage: number;
        };
      };
};

export type EditModelMutationVariables = Exact<{
  modelId: Scalars["String"]["input"];
  edit: Scalars["String"]["input"];
  options?: InputMaybe<Options>;
  sessionId?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type EditModelMutation = {
  __typename?: "Mutation";
  editModel:
    | { __typename?: "HandledError"; code: string; message: string }
    | {
        __typename?: "ToolRequestConfirmation";
        messages: Array<{
          __typename?: "Message";
          _id: string;
          createdAt: any;
          updatedAt: any;
          teamId: string;
          sessionId: string;
          role: MessageRole;
          content?: {
            __typename?: "MessageContent";
            text?: string | null;
            models?: Array<{
              __typename?: "Model";
              _id: string;
              teamId: string;
              sessionId?: string | null;
              messageId?: string | null;
              createdAt: any;
              updatedAt: any;
              prompt?: string | null;
              style?: Style | null;
              nftId?: string | null;
              image: {
                __typename?: "Media";
                alt?: string | null;
                keyS3?: string | null;
                size?: number | null;
                type?: string | null;
                url?: string | null;
                _id: string;
                teamId?: string | null;
                sessionId?: string | null;
                messageId?: string | null;
                createdAt: any;
                updatedAt: any;
              };
              mesh?: {
                __typename?: "Media";
                alt?: string | null;
                keyS3?: string | null;
                size?: number | null;
                type?: string | null;
                url?: string | null;
                _id: string;
                teamId?: string | null;
                sessionId?: string | null;
                messageId?: string | null;
                createdAt: any;
                updatedAt: any;
              } | null;
              optimizedMesh?: {
                __typename?: "Media";
                alt?: string | null;
                keyS3?: string | null;
                size?: number | null;
                type?: string | null;
                url?: string | null;
                _id: string;
                teamId?: string | null;
                sessionId?: string | null;
                messageId?: string | null;
                createdAt: any;
                updatedAt: any;
              } | null;
              multiview?: {
                __typename?: "Media";
                alt?: string | null;
                keyS3?: string | null;
                size?: number | null;
                type?: string | null;
                url?: string | null;
                _id: string;
                teamId?: string | null;
                sessionId?: string | null;
                messageId?: string | null;
                createdAt: any;
                updatedAt: any;
              } | null;
              views: Array<{
                __typename?: "Media";
                alt?: string | null;
                keyS3?: string | null;
                size?: number | null;
                type?: string | null;
                url?: string | null;
                _id: string;
                teamId?: string | null;
                sessionId?: string | null;
                messageId?: string | null;
                createdAt: any;
                updatedAt: any;
              }>;
              texturedMesh?: {
                __typename?: "Media";
                alt?: string | null;
                keyS3?: string | null;
                size?: number | null;
                type?: string | null;
                url?: string | null;
                _id: string;
                teamId?: string | null;
                sessionId?: string | null;
                messageId?: string | null;
                createdAt: any;
                updatedAt: any;
              } | null;
              texture?: {
                __typename?: "Media";
                alt?: string | null;
                keyS3?: string | null;
                size?: number | null;
                type?: string | null;
                url?: string | null;
                _id: string;
                teamId?: string | null;
                sessionId?: string | null;
                messageId?: string | null;
                createdAt: any;
                updatedAt: any;
              } | null;
            }> | null;
            medias?: Array<{
              __typename?: "Media";
              alt?: string | null;
              keyS3?: string | null;
              size?: number | null;
              type?: string | null;
              url?: string | null;
              _id: string;
              teamId?: string | null;
              sessionId?: string | null;
              messageId?: string | null;
              createdAt: any;
              updatedAt: any;
            }> | null;
            nfts?: Array<{
              __typename?: "Nft";
              _id: string;
              teamId: string;
              genRequestId: string;
              messageId: string;
              modelId: string;
              status: ToolRequestStatus;
              mintAddress?: string | null;
              collectionAddress?: string | null;
              creator?: string | null;
              tokenAddress?: string | null;
              tokenStandard?: TokenStandard | null;
              collectionRoyalties?: number | null;
              chain: string;
              updatedAt: any;
              createdAt: any;
              metadata: {
                __typename?: "NftMetadata";
                name: string;
                symbol?: string | null;
                description?: string | null;
                image?: string | null;
                external_url?: string | null;
                animation_url?: string | null;
                attributes?: Array<{
                  __typename?: "NftAttribute";
                  trait_type: string;
                  value: string;
                }> | null;
                properties?: {
                  __typename?: "NftProperties";
                  category: string;
                  files: Array<{
                    __typename?: "NftFile";
                    uri: string;
                    type: string;
                    cdn?: boolean | null;
                  }>;
                } | null;
              };
            }> | null;
          } | null;
          toolRequest?: {
            __typename?: "ToolRequest";
            _id: string;
            teamId: string;
            sessionId?: string | null;
            messageId?: string | null;
            type: ToolRequestType;
            priority: ToolRequestPriority;
            payload: string;
            credits: number;
            status: ToolRequestStatus;
            createdAt: any;
            updatedAt: any;
            message: string;
            percentage: number;
          } | null;
        }>;
        toolRequest: {
          __typename?: "ToolRequest";
          _id: string;
          teamId: string;
          sessionId?: string | null;
          messageId?: string | null;
          type: ToolRequestType;
          priority: ToolRequestPriority;
          payload: string;
          credits: number;
          status: ToolRequestStatus;
          createdAt: any;
          updatedAt: any;
          message: string;
          percentage: number;
        };
      };
};

export type SendMessageMutationVariables = Exact<{
  sessionId: Scalars["String"]["input"];
  content: Scalars["String"]["input"];
  options?: InputMaybe<Options>;
  imageUrls?: InputMaybe<
    Array<Scalars["String"]["input"]> | Scalars["String"]["input"]
  >;
}>;

export type SendMessageMutation = {
  __typename?: "Mutation";
  sendMessage:
    | { __typename?: "HandledError"; code: string; message: string }
    | {
        __typename?: "Messages";
        messages: Array<{
          __typename?: "Message";
          _id: string;
          createdAt: any;
          updatedAt: any;
          teamId: string;
          sessionId: string;
          role: MessageRole;
          content?: {
            __typename?: "MessageContent";
            text?: string | null;
            models?: Array<{
              __typename?: "Model";
              _id: string;
              teamId: string;
              sessionId?: string | null;
              messageId?: string | null;
              createdAt: any;
              updatedAt: any;
              prompt?: string | null;
              style?: Style | null;
              nftId?: string | null;
              image: {
                __typename?: "Media";
                alt?: string | null;
                keyS3?: string | null;
                size?: number | null;
                type?: string | null;
                url?: string | null;
                _id: string;
                teamId?: string | null;
                sessionId?: string | null;
                messageId?: string | null;
                createdAt: any;
                updatedAt: any;
              };
              mesh?: {
                __typename?: "Media";
                alt?: string | null;
                keyS3?: string | null;
                size?: number | null;
                type?: string | null;
                url?: string | null;
                _id: string;
                teamId?: string | null;
                sessionId?: string | null;
                messageId?: string | null;
                createdAt: any;
                updatedAt: any;
              } | null;
              optimizedMesh?: {
                __typename?: "Media";
                alt?: string | null;
                keyS3?: string | null;
                size?: number | null;
                type?: string | null;
                url?: string | null;
                _id: string;
                teamId?: string | null;
                sessionId?: string | null;
                messageId?: string | null;
                createdAt: any;
                updatedAt: any;
              } | null;
              multiview?: {
                __typename?: "Media";
                alt?: string | null;
                keyS3?: string | null;
                size?: number | null;
                type?: string | null;
                url?: string | null;
                _id: string;
                teamId?: string | null;
                sessionId?: string | null;
                messageId?: string | null;
                createdAt: any;
                updatedAt: any;
              } | null;
              views: Array<{
                __typename?: "Media";
                alt?: string | null;
                keyS3?: string | null;
                size?: number | null;
                type?: string | null;
                url?: string | null;
                _id: string;
                teamId?: string | null;
                sessionId?: string | null;
                messageId?: string | null;
                createdAt: any;
                updatedAt: any;
              }>;
              texturedMesh?: {
                __typename?: "Media";
                alt?: string | null;
                keyS3?: string | null;
                size?: number | null;
                type?: string | null;
                url?: string | null;
                _id: string;
                teamId?: string | null;
                sessionId?: string | null;
                messageId?: string | null;
                createdAt: any;
                updatedAt: any;
              } | null;
              texture?: {
                __typename?: "Media";
                alt?: string | null;
                keyS3?: string | null;
                size?: number | null;
                type?: string | null;
                url?: string | null;
                _id: string;
                teamId?: string | null;
                sessionId?: string | null;
                messageId?: string | null;
                createdAt: any;
                updatedAt: any;
              } | null;
            }> | null;
            medias?: Array<{
              __typename?: "Media";
              alt?: string | null;
              keyS3?: string | null;
              size?: number | null;
              type?: string | null;
              url?: string | null;
              _id: string;
              teamId?: string | null;
              sessionId?: string | null;
              messageId?: string | null;
              createdAt: any;
              updatedAt: any;
            }> | null;
            nfts?: Array<{
              __typename?: "Nft";
              _id: string;
              teamId: string;
              genRequestId: string;
              messageId: string;
              modelId: string;
              status: ToolRequestStatus;
              mintAddress?: string | null;
              collectionAddress?: string | null;
              creator?: string | null;
              tokenAddress?: string | null;
              tokenStandard?: TokenStandard | null;
              collectionRoyalties?: number | null;
              chain: string;
              updatedAt: any;
              createdAt: any;
              metadata: {
                __typename?: "NftMetadata";
                name: string;
                symbol?: string | null;
                description?: string | null;
                image?: string | null;
                external_url?: string | null;
                animation_url?: string | null;
                attributes?: Array<{
                  __typename?: "NftAttribute";
                  trait_type: string;
                  value: string;
                }> | null;
                properties?: {
                  __typename?: "NftProperties";
                  category: string;
                  files: Array<{
                    __typename?: "NftFile";
                    uri: string;
                    type: string;
                    cdn?: boolean | null;
                  }>;
                } | null;
              };
            }> | null;
          } | null;
          toolRequest?: {
            __typename?: "ToolRequest";
            _id: string;
            teamId: string;
            sessionId?: string | null;
            messageId?: string | null;
            type: ToolRequestType;
            priority: ToolRequestPriority;
            payload: string;
            credits: number;
            status: ToolRequestStatus;
            createdAt: any;
            updatedAt: any;
            message: string;
            percentage: number;
          } | null;
        }>;
      };
};

export type GetSessionsQueryVariables = Exact<{
  pagination?: InputMaybe<Pagination>;
  filters?: InputMaybe<SessionFilter>;
}>;

export type GetSessionsQuery = {
  __typename?: "Query";
  getSessions:
    | { __typename?: "HandledError"; code: string; message: string }
    | {
        __typename?: "SessionsPage";
        items: Array<{
          __typename?: "Session";
          _id: string;
          createdAt: any;
          updatedAt: any;
          teamId: string;
          title: string;
        }>;
        metadata: {
          __typename?: "Metadata";
          limit?: number | null;
          offset?: number | null;
          orderBy?: string | null;
          orderDirection?: OrderDirection | null;
          numElements?: number | null;
          total?: number | null;
          page?: number | null;
          pages?: number | null;
        };
      };
};

export type ConfirmToolRequestMutationVariables = Exact<{
  requestId: Scalars["String"]["input"];
}>;

export type ConfirmToolRequestMutation = {
  __typename?: "Mutation";
  confirmToolRequest:
    | { __typename?: "HandledError"; code: string; message: string }
    | {
        __typename?: "ToolRequest";
        _id: string;
        teamId: string;
        sessionId?: string | null;
        messageId?: string | null;
        type: ToolRequestType;
        priority: ToolRequestPriority;
        payload: string;
        credits: number;
        status: ToolRequestStatus;
        createdAt: any;
        updatedAt: any;
        message: string;
        percentage: number;
      };
};

export type GenerateNftMutationVariables = Exact<{
  description: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  modelId: Scalars["String"]["input"];
  attributes?: InputMaybe<Array<NftAttributeInput> | NftAttributeInput>;
  sessionId?: InputMaybe<Scalars["String"]["input"]>;
  symbol?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type GenerateNftMutation = {
  __typename?: "Mutation";
  generateNft:
    | { __typename?: "HandledError"; code: string; message: string }
    | {
        __typename?: "ToolRequestConfirmation";
        messages: Array<{
          __typename?: "Message";
          _id: string;
          createdAt: any;
          updatedAt: any;
          teamId: string;
          sessionId: string;
          role: MessageRole;
          content?: {
            __typename?: "MessageContent";
            text?: string | null;
            models?: Array<{
              __typename?: "Model";
              _id: string;
              teamId: string;
              sessionId?: string | null;
              messageId?: string | null;
              createdAt: any;
              updatedAt: any;
              prompt?: string | null;
              style?: Style | null;
              nftId?: string | null;
              image: {
                __typename?: "Media";
                alt?: string | null;
                keyS3?: string | null;
                size?: number | null;
                type?: string | null;
                url?: string | null;
                _id: string;
                teamId?: string | null;
                sessionId?: string | null;
                messageId?: string | null;
                createdAt: any;
                updatedAt: any;
              };
              mesh?: {
                __typename?: "Media";
                alt?: string | null;
                keyS3?: string | null;
                size?: number | null;
                type?: string | null;
                url?: string | null;
                _id: string;
                teamId?: string | null;
                sessionId?: string | null;
                messageId?: string | null;
                createdAt: any;
                updatedAt: any;
              } | null;
              optimizedMesh?: {
                __typename?: "Media";
                alt?: string | null;
                keyS3?: string | null;
                size?: number | null;
                type?: string | null;
                url?: string | null;
                _id: string;
                teamId?: string | null;
                sessionId?: string | null;
                messageId?: string | null;
                createdAt: any;
                updatedAt: any;
              } | null;
              multiview?: {
                __typename?: "Media";
                alt?: string | null;
                keyS3?: string | null;
                size?: number | null;
                type?: string | null;
                url?: string | null;
                _id: string;
                teamId?: string | null;
                sessionId?: string | null;
                messageId?: string | null;
                createdAt: any;
                updatedAt: any;
              } | null;
              views: Array<{
                __typename?: "Media";
                alt?: string | null;
                keyS3?: string | null;
                size?: number | null;
                type?: string | null;
                url?: string | null;
                _id: string;
                teamId?: string | null;
                sessionId?: string | null;
                messageId?: string | null;
                createdAt: any;
                updatedAt: any;
              }>;
              texturedMesh?: {
                __typename?: "Media";
                alt?: string | null;
                keyS3?: string | null;
                size?: number | null;
                type?: string | null;
                url?: string | null;
                _id: string;
                teamId?: string | null;
                sessionId?: string | null;
                messageId?: string | null;
                createdAt: any;
                updatedAt: any;
              } | null;
              texture?: {
                __typename?: "Media";
                alt?: string | null;
                keyS3?: string | null;
                size?: number | null;
                type?: string | null;
                url?: string | null;
                _id: string;
                teamId?: string | null;
                sessionId?: string | null;
                messageId?: string | null;
                createdAt: any;
                updatedAt: any;
              } | null;
            }> | null;
            medias?: Array<{
              __typename?: "Media";
              alt?: string | null;
              keyS3?: string | null;
              size?: number | null;
              type?: string | null;
              url?: string | null;
              _id: string;
              teamId?: string | null;
              sessionId?: string | null;
              messageId?: string | null;
              createdAt: any;
              updatedAt: any;
            }> | null;
            nfts?: Array<{
              __typename?: "Nft";
              _id: string;
              teamId: string;
              genRequestId: string;
              messageId: string;
              modelId: string;
              status: ToolRequestStatus;
              mintAddress?: string | null;
              collectionAddress?: string | null;
              creator?: string | null;
              tokenAddress?: string | null;
              tokenStandard?: TokenStandard | null;
              collectionRoyalties?: number | null;
              chain: string;
              updatedAt: any;
              createdAt: any;
              metadata: {
                __typename?: "NftMetadata";
                name: string;
                symbol?: string | null;
                description?: string | null;
                image?: string | null;
                external_url?: string | null;
                animation_url?: string | null;
                attributes?: Array<{
                  __typename?: "NftAttribute";
                  trait_type: string;
                  value: string;
                }> | null;
                properties?: {
                  __typename?: "NftProperties";
                  category: string;
                  files: Array<{
                    __typename?: "NftFile";
                    uri: string;
                    type: string;
                    cdn?: boolean | null;
                  }>;
                } | null;
              };
            }> | null;
          } | null;
          toolRequest?: {
            __typename?: "ToolRequest";
            _id: string;
            teamId: string;
            sessionId?: string | null;
            messageId?: string | null;
            type: ToolRequestType;
            priority: ToolRequestPriority;
            payload: string;
            credits: number;
            status: ToolRequestStatus;
            createdAt: any;
            updatedAt: any;
            message: string;
            percentage: number;
          } | null;
        }>;
        toolRequest: {
          __typename?: "ToolRequest";
          _id: string;
          teamId: string;
          sessionId?: string | null;
          messageId?: string | null;
          type: ToolRequestType;
          priority: ToolRequestPriority;
          payload: string;
          credits: number;
          status: ToolRequestStatus;
          createdAt: any;
          updatedAt: any;
          message: string;
          percentage: number;
        };
      };
};

export type GetNftsQueryVariables = Exact<{
  pagination?: InputMaybe<Pagination>;
  filters?: InputMaybe<NftFilter>;
}>;

export type GetNftsQuery = {
  __typename?: "Query";
  getNfts:
    | { __typename?: "HandledError"; code: string; message: string }
    | {
        __typename?: "NftPage";
        items: Array<{
          __typename?: "Nft";
          _id: string;
          teamId: string;
          genRequestId: string;
          messageId: string;
          modelId: string;
          status: ToolRequestStatus;
          mintAddress?: string | null;
          collectionAddress?: string | null;
          creator?: string | null;
          tokenAddress?: string | null;
          tokenStandard?: TokenStandard | null;
          collectionRoyalties?: number | null;
          chain: string;
          updatedAt: any;
          createdAt: any;
          metadata: {
            __typename?: "NftMetadata";
            name: string;
            symbol?: string | null;
            description?: string | null;
            image?: string | null;
            external_url?: string | null;
            animation_url?: string | null;
            attributes?: Array<{
              __typename?: "NftAttribute";
              trait_type: string;
              value: string;
            }> | null;
            properties?: {
              __typename?: "NftProperties";
              category: string;
              files: Array<{
                __typename?: "NftFile";
                uri: string;
                type: string;
                cdn?: boolean | null;
              }>;
            } | null;
          };
        }>;
        metadata: {
          __typename?: "Metadata";
          limit?: number | null;
          offset?: number | null;
          orderBy?: string | null;
          orderDirection?: OrderDirection | null;
          numElements?: number | null;
          total?: number | null;
          page?: number | null;
          pages?: number | null;
        };
      };
};

export type GetNftQueryVariables = Exact<{
  nftId: Scalars["String"]["input"];
}>;

export type GetNftQuery = {
  __typename?: "Query";
  getNft:
    | { __typename?: "HandledError"; code: string; message: string }
    | {
        __typename?: "Nft";
        _id: string;
        teamId: string;
        genRequestId: string;
        messageId: string;
        modelId: string;
        status: ToolRequestStatus;
        mintAddress?: string | null;
        collectionAddress?: string | null;
        creator?: string | null;
        tokenAddress?: string | null;
        tokenStandard?: TokenStandard | null;
        collectionRoyalties?: number | null;
        chain: string;
        updatedAt: any;
        createdAt: any;
        metadata: {
          __typename?: "NftMetadata";
          name: string;
          symbol?: string | null;
          description?: string | null;
          image?: string | null;
          external_url?: string | null;
          animation_url?: string | null;
          attributes?: Array<{
            __typename?: "NftAttribute";
            trait_type: string;
            value: string;
          }> | null;
          properties?: {
            __typename?: "NftProperties";
            category: string;
            files: Array<{
              __typename?: "NftFile";
              uri: string;
              type: string;
              cdn?: boolean | null;
            }>;
          } | null;
        };
      };
};

export type GetTokenOverviewQueryVariables = Exact<{ [key: string]: never }>;

export type GetTokenOverviewQuery = {
  __typename?: "Query";
  getTokenOverview:
    | {
        __typename?: "BirdeyeTokenOverviewResponse";
        address: string;
        description: string;
        price: number;
        totalSupply: number;
        marketCap: number;
        fullyDilutedValue: number;
      }
    | { __typename?: "HandledError"; code: string; message: string };
};

export type GetTokenHistoricalPriceResultQueryVariables = Exact<{
  time: BirdeyeHistoricalDataTimeTypes;
}>;

export type GetTokenHistoricalPriceResultQuery = {
  __typename?: "Query";
  getTokenHistoricalPriceResult:
    | {
        __typename?: "BirdeyeHistoricalPriceResponse";
        items: Array<{
          __typename?: "BirdeyeHistoricalPriceItemResponse";
          unixTime: number;
          value: number;
        }>;
      }
    | { __typename?: "HandledError"; code: string; message: string };
};

export type GetStakingGlobalDataQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetStakingGlobalDataQuery = {
  __typename?: "Query";
  getStakingGlobalData:
    | {
        __typename?: "GetStakingGlobalData";
        apr: number;
        totalEffectiveAmount: string;
        totalRewardsPerDay: string;
        totalAmount: string;
        circulatingSupply: string;
        totalStakedByUsers: string;
        tokenMint: {
          __typename?: "TokenMint";
          address: string;
          decimals: number;
          supply: string;
          isInitialized: boolean;
          freezeAuthority?: string | null;
          mintAuthority?: string | null;
        };
        stakeEntries: Array<{
          __typename?: "StakeEntry";
          publicKey: string;
          account: {
            __typename?: "StakeEntryAccount";
            authority: string;
            amount: string;
            duration: string;
            effectiveAmount: string;
            stakePool: string;
            nonce: number;
            payer: string;
            createdTs: string;
            closedTs: string;
            unstakeTs: string;
            priorTotalEffectiveStake: string;
            buffer: Array<number>;
          };
        }>;
        rewardPools: Array<{
          __typename?: "RewardPool";
          publicKey: string;
          account: {
            __typename?: "RewardPoolAccount";
            authority: string;
            bump: number;
            buffer: Array<number>;
            creator: string;
            claimedAmount: string;
            fundedAmount: string;
            lastClaimPeriod: string;
            lastRewardAmount: string;
            lastRewardPeriod: string;
            lastAmountUpdateTs: string;
            lastPeriodUpdateTs: string;
            permissionless: boolean;
            rewardAmount: string;
            rewardPeriod: string;
            stakePool: string;
            createdTs: string;
            mint: string;
            nonce: number;
            vault: string;
          };
        }>;
        rewardEntries: Array<{
          __typename?: "RewardEntry";
          publicKey: string;
          account: {
            __typename?: "RewardEntryAccount";
            rewardPool: string;
            stakeEntry: string;
            createdTs: string;
            accountedAmount: string;
            claimedAmount: string;
            lastAccountedTs: string;
            lastRewardAmount: string;
            lastRewardPeriod: string;
            buffer: Array<number>;
          };
        }>;
      }
    | { __typename?: "HandledError"; code: string; message: string };
};

export type GetPricesQueryVariables = Exact<{ [key: string]: never }>;

export type GetPricesQuery = {
  __typename?: "Query";
  getPrices:
    | { __typename?: "HandledError"; code: string; message: string }
    | { __typename?: "Prices"; buu: number; sol: number };
};

export type GetReferralRewardsQueryVariables = Exact<{
  pagination?: InputMaybe<Pagination>;
  filters?: InputMaybe<ReferralRewardFilter>;
}>;

export type GetReferralRewardsQuery = {
  __typename?: "Query";
  getReferralRewards:
    | { __typename?: "HandledError"; code: string; message: string }
    | {
        __typename?: "ReferralRewardPage";
        items: Array<{
          __typename?: "ReferralReward";
          _id: string;
          referral: string;
          referralName: string;
          referee: string;
          creditsPurchaseId?: string | null;
          tokens?: string | null;
          decimals?: number | null;
          transactionHash?: string | null;
          createdAt: any;
        }>;
        metadata: {
          __typename?: "Metadata";
          limit?: number | null;
          offset?: number | null;
          orderBy?: string | null;
          orderDirection?: OrderDirection | null;
          numElements?: number | null;
          total?: number | null;
          page?: number | null;
          pages?: number | null;
        };
      };
};

export type GetReferralAccountQueryVariables = Exact<{ [key: string]: never }>;

export type GetReferralAccountQuery = {
  __typename?: "Query";
  getReferralAccount:
    | { __typename?: "HandledError"; code: string; message: string }
    | {
        __typename?: "ReferralAccount";
        _id: string;
        referralCode: string;
        refereeCode?: string | null;
        linkedAt?: any | null;
        createdAt: any;
        referee?: {
          __typename?: "ReferralAccount";
          _id: string;
          referralCode: string;
          refereeCode?: string | null;
          linkedAt?: any | null;
          createdAt: any;
        } | null;
      };
};

export type LinkReferralAccountMutationVariables = Exact<{
  code: Scalars["String"]["input"];
}>;

export type LinkReferralAccountMutation = {
  __typename?: "Mutation";
  linkReferralAccount:
    | { __typename?: "HandledError"; code: string; message: string }
    | {
        __typename?: "ReferralAccount";
        _id: string;
        referralCode: string;
        refereeCode?: string | null;
        linkedAt?: any | null;
        createdAt: any;
        referee?: {
          __typename?: "ReferralAccount";
          _id: string;
          referralCode: string;
          refereeCode?: string | null;
          linkedAt?: any | null;
          createdAt: any;
        } | null;
      };
};

export type GenerateCustomerPortalSessionQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GenerateCustomerPortalSessionQuery = {
  __typename?: "Query";
  generateCustomerPortalSession: {
    __typename?: "GenerateCustomerPortalSessionOutput";
    customerPortalLink: string;
    planKey: StripeSubscriptionPlanKeys;
  };
};

export type GenerateSubscriptionPaymentLinkQueryVariables = Exact<{
  planKey: StripeSubscriptionPlanKeys;
}>;

export type GenerateSubscriptionPaymentLinkQuery = {
  __typename?: "Query";
  generateSubscriptionPaymentLink:
    | { __typename?: "HandledError"; code: string; message: string }
    | { __typename?: "SuscriptionPaymentLinkOutput"; url: string };
};

export type GenerateCreditsPackagePaymentLinkQueryVariables = Exact<{
  pkg: CreditsPackageKeys;
}>;

export type GenerateCreditsPackagePaymentLinkQuery = {
  __typename?: "Query";
  generateCreditsPackagePaymentLink:
    | { __typename?: "HandledError"; code: string; message: string }
    | { __typename?: "Url"; url: string };
};

export type GeneratePresignedUrlMutationVariables = Exact<{
  input: GeneratePresignedUrlInput;
}>;

export type GeneratePresignedUrlMutation = {
  __typename?: "Mutation";
  generatePresignedUrl:
    | {
        __typename?: "GeneratePresignedUrl";
        presignedUrl: string;
        url: string;
        key: string;
        expiresIn: number;
      }
    | { __typename?: "HandledError"; code: string; message: string };
};

export type GetMyCreditsQueryVariables = Exact<{ [key: string]: never }>;

export type GetMyCreditsQuery = {
  __typename?: "Query";
  getMyCredits:
    | {
        __typename?: "Credit";
        _id: string;
        available: number;
        pending: number;
        confirmed: number;
        updatedAt: any;
        createdAt: any;
      }
    | { __typename?: "HandledError"; code: string; message: string };
};

export type RedeemVoucherMutationVariables = Exact<{
  code: Scalars["String"]["input"];
}>;

export type RedeemVoucherMutation = {
  __typename?: "Mutation";
  redeemVoucher:
    | {
        __typename?: "Credit";
        _id: string;
        available: number;
        pending: number;
        confirmed: number;
        updatedAt: any;
        createdAt: any;
      }
    | { __typename?: "HandledError"; code: string; message: string };
};

export const CreateApiKeyDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreateApiKey" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "name" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "expiresIn" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "ExpirationInput" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createApiKey" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "name" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "name" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "expiresIn" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "expiresIn" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ApiKey" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "_id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "teamId" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "key" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "permissions" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "expiresAt" },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "HandledError" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateApiKeyMutation,
  CreateApiKeyMutationVariables
>;
export const SearchPaginatedApiKeysDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "SearchPaginatedApiKeys" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "pagination" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "Pagination" },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filters" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "ApiKeyFilter" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "searchPaginatedApiKeys" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "pagination" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "filters" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "filters" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ApiKeyPage" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "items" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "_id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "teamId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "key" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "permissions" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "expiresAt" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "metadata" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "limit" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "offset" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "orderBy" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "orderDirection" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "numElements" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "total" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "page" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "pages" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "HandledError" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  SearchPaginatedApiKeysQuery,
  SearchPaginatedApiKeysQueryVariables
>;
export const DeleteApiKeyDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "DeleteApiKey" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "deleteApiKeyId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteApiKey" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "deleteApiKeyId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ApiKey" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "_id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "teamId" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "key" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "permissions" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "expiresAt" },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "HandledError" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteApiKeyMutation,
  DeleteApiKeyMutationVariables
>;
export const RotateApiKeyDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "RotateApiKey" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "rotateApiKeyId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "rotateApiKey" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "rotateApiKeyId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ApiKey" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "_id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "teamId" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "key" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "permissions" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "expiresAt" },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "HandledError" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  RotateApiKeyMutation,
  RotateApiKeyMutationVariables
>;
export const GetUserShareableBoardDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetUserShareableBoard" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filters" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "ShareableBoardFilter" },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "pagination" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "Pagination" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getUserShareableBoard" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filters" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "filters" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "pagination" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ShareableBoardPage" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "items" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "_id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "sessionId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "title" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "teamId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "models" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "_id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "teamId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sessionId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "messageId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "image" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "alt" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "keyS3",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "size" },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "type" },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "url" },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "_id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "teamId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "sessionId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "messageId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "createdAt",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "updatedAt",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "mesh" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "alt" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "keyS3",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "size" },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "type" },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "url" },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "_id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "teamId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "sessionId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "messageId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "createdAt",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "updatedAt",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "optimizedMesh",
                                    },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "alt" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "keyS3",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "size" },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "type" },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "url" },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "_id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "teamId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "sessionId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "messageId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "createdAt",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "updatedAt",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "multiview" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "alt" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "keyS3",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "size" },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "type" },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "url" },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "_id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "teamId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "sessionId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "messageId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "createdAt",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "updatedAt",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "views" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "alt" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "keyS3",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "size" },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "type" },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "url" },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "_id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "teamId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "sessionId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "messageId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "createdAt",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "updatedAt",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "texturedMesh",
                                    },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "alt" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "keyS3",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "size" },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "type" },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "url" },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "_id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "teamId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "sessionId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "messageId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "createdAt",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "updatedAt",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "texture" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "alt" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "keyS3",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "size" },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "type" },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "url" },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "_id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "teamId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "sessionId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "messageId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "createdAt",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "updatedAt",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "updatedAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "prompt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "style" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "nftId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "toolRequest",
                                    },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "_id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "teamId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "sessionId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "messageId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "type" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "priority",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "payload",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "credits",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "status",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "createdAt",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "updatedAt",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "message",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "percentage",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isPublic" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "metadata" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "limit" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "offset" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "orderBy" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "orderDirection" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "numElements" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "total" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "page" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "pages" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "HandledError" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetUserShareableBoardQuery,
  GetUserShareableBoardQueryVariables
>;
export const CreateShareableBoardDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreateShareableBoard" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "sessionId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createShareableBoard" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "sessionId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "sessionId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ShareableBoard" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "_id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "sessionId" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "teamId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "models" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "_id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "teamId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "sessionId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "messageId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "image" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "alt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "keyS3" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "size" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "type" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "_id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "teamId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sessionId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "messageId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "updatedAt" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "mesh" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "alt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "keyS3" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "size" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "type" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "_id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "teamId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sessionId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "messageId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "updatedAt" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "optimizedMesh" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "alt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "keyS3" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "size" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "type" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "_id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "teamId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sessionId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "messageId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "updatedAt" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "multiview" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "alt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "keyS3" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "size" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "type" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "_id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "teamId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sessionId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "messageId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "updatedAt" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "views" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "alt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "keyS3" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "size" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "type" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "_id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "teamId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sessionId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "messageId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "updatedAt" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "texturedMesh" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "alt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "keyS3" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "size" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "type" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "_id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "teamId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sessionId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "messageId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "updatedAt" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "texture" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "alt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "keyS3" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "size" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "type" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "_id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "teamId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sessionId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "messageId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "updatedAt" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "prompt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "style" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nftId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "toolRequest" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "_id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "teamId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sessionId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "messageId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "type" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "priority" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "payload" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "credits" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "status" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "updatedAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "message" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "percentage" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "isPublic" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "HandledError" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateShareableBoardMutation,
  CreateShareableBoardMutationVariables
>;
export const UpdateShareableBoardVisibilityDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateShareableBoardVisibility" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "isPublic" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "Boolean" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "shareableBoardId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateShareableBoardVisibility" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "isPublic" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "isPublic" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "shareableBoardId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "shareableBoardId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ShareableBoard" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "_id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "sessionId" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "teamId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "models" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "_id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "teamId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "sessionId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "messageId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "image" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "alt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "keyS3" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "size" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "type" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "_id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "teamId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sessionId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "messageId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "updatedAt" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "mesh" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "alt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "keyS3" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "size" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "type" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "_id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "teamId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sessionId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "messageId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "updatedAt" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "optimizedMesh" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "alt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "keyS3" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "size" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "type" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "_id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "teamId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sessionId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "messageId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "updatedAt" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "multiview" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "alt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "keyS3" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "size" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "type" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "_id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "teamId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sessionId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "messageId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "updatedAt" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "views" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "alt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "keyS3" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "size" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "type" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "_id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "teamId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sessionId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "messageId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "updatedAt" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "texturedMesh" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "alt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "keyS3" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "size" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "type" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "_id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "teamId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sessionId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "messageId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "updatedAt" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "texture" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "alt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "keyS3" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "size" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "type" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "_id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "teamId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sessionId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "messageId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "updatedAt" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "prompt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "style" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nftId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "toolRequest" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "_id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "teamId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sessionId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "messageId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "type" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "priority" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "payload" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "credits" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "status" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "updatedAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "message" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "percentage" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "isPublic" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "HandledError" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateShareableBoardVisibilityMutation,
  UpdateShareableBoardVisibilityMutationVariables
>;
export const DeleteShareableBoardDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "DeleteShareableBoard" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "shareableBoardId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteShareableBoard" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "shareableBoardId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "shareableBoardId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ShareableBoard" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "_id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "sessionId" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "teamId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "models" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "_id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "teamId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "sessionId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "messageId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "image" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "alt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "keyS3" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "size" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "type" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "_id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "teamId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sessionId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "messageId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "updatedAt" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "mesh" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "alt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "keyS3" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "size" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "type" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "_id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "teamId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sessionId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "messageId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "updatedAt" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "optimizedMesh" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "alt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "keyS3" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "size" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "type" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "_id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "teamId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sessionId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "messageId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "updatedAt" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "multiview" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "alt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "keyS3" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "size" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "type" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "_id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "teamId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sessionId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "messageId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "updatedAt" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "views" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "alt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "keyS3" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "size" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "type" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "_id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "teamId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sessionId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "messageId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "updatedAt" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "texturedMesh" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "alt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "keyS3" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "size" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "type" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "_id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "teamId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sessionId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "messageId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "updatedAt" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "texture" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "alt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "keyS3" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "size" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "type" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "_id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "teamId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sessionId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "messageId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "updatedAt" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "prompt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "style" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nftId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "toolRequest" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "_id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "teamId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sessionId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "messageId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "type" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "priority" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "payload" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "credits" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "status" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "updatedAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "message" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "percentage" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "isPublic" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "HandledError" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteShareableBoardMutation,
  DeleteShareableBoardMutationVariables
>;
export const GetShareableBoardDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetShareableBoard" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "getShareableBoardId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getShareableBoard" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "getShareableBoardId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ShareableBoard" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "_id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "sessionId" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "teamId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "models" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "_id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "teamId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "sessionId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "messageId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "image" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "alt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "keyS3" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "size" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "type" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "_id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "teamId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sessionId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "messageId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "updatedAt" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "mesh" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "alt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "keyS3" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "size" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "type" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "_id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "teamId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sessionId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "messageId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "updatedAt" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "optimizedMesh" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "alt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "keyS3" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "size" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "type" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "_id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "teamId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sessionId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "messageId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "updatedAt" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "multiview" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "alt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "keyS3" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "size" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "type" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "_id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "teamId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sessionId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "messageId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "updatedAt" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "views" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "alt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "keyS3" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "size" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "type" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "_id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "teamId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sessionId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "messageId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "updatedAt" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "texturedMesh" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "alt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "keyS3" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "size" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "type" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "_id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "teamId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sessionId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "messageId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "updatedAt" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "texture" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "alt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "keyS3" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "size" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "type" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "_id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "teamId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sessionId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "messageId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "updatedAt" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "prompt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "style" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nftId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "toolRequest" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "_id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "teamId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sessionId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "messageId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "type" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "priority" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "payload" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "credits" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "status" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "updatedAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "message" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "percentage" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "isPublic" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "HandledError" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetShareableBoardQuery,
  GetShareableBoardQueryVariables
>;
export const GetMessagesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetMessages" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "sessionId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filters" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "MessageFilter" },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "pagination" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "Pagination" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getMessages" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "sessionId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "sessionId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "filters" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "filters" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "pagination" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "MessagesPage" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "items" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "_id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "teamId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "sessionId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "role" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "content" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "text" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "models" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "_id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "teamId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "sessionId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "messageId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "image",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "alt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "keyS3",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "size",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "type",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "_id",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "teamId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "sessionId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "messageId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "createdAt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "updatedAt",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "toolRequest",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "_id",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "teamId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "sessionId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "messageId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "type",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "priority",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "payload",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "credits",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "status",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "createdAt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "updatedAt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "message",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "percentage",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "mesh" },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "alt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "keyS3",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "size",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "type",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "_id",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "teamId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "sessionId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "messageId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "createdAt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "updatedAt",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "optimizedMesh",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "alt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "keyS3",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "size",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "type",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "_id",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "teamId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "sessionId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "messageId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "createdAt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "updatedAt",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "multiview",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "alt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "keyS3",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "size",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "type",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "_id",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "teamId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "sessionId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "messageId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "createdAt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "updatedAt",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "views",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "alt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "keyS3",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "size",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "type",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "_id",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "teamId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "sessionId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "messageId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "createdAt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "updatedAt",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "texturedMesh",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "alt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "keyS3",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "size",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "type",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "_id",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "teamId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "sessionId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "messageId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "createdAt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "updatedAt",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "texture",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "alt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "keyS3",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "size",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "type",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "_id",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "teamId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "sessionId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "messageId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "createdAt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "updatedAt",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "createdAt",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "updatedAt",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "prompt",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "style",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "nftId",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "medias" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "alt" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "keyS3",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "size" },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "type" },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "url" },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "_id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "teamId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "sessionId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "messageId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "createdAt",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "updatedAt",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "nfts" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "_id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "teamId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "genRequestId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "messageId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "modelId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "status",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "metadata",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "name",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "symbol",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "description",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "image",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "external_url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "animation_url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "attributes",
                                                },
                                                selectionSet: {
                                                  kind: "SelectionSet",
                                                  selections: [
                                                    {
                                                      kind: "Field",
                                                      name: {
                                                        kind: "Name",
                                                        value: "trait_type",
                                                      },
                                                    },
                                                    {
                                                      kind: "Field",
                                                      name: {
                                                        kind: "Name",
                                                        value: "value",
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "properties",
                                                },
                                                selectionSet: {
                                                  kind: "SelectionSet",
                                                  selections: [
                                                    {
                                                      kind: "Field",
                                                      name: {
                                                        kind: "Name",
                                                        value: "files",
                                                      },
                                                      selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                          {
                                                            kind: "Field",
                                                            name: {
                                                              kind: "Name",
                                                              value: "uri",
                                                            },
                                                          },
                                                          {
                                                            kind: "Field",
                                                            name: {
                                                              kind: "Name",
                                                              value: "type",
                                                            },
                                                          },
                                                          {
                                                            kind: "Field",
                                                            name: {
                                                              kind: "Name",
                                                              value: "cdn",
                                                            },
                                                          },
                                                        ],
                                                      },
                                                    },
                                                    {
                                                      kind: "Field",
                                                      name: {
                                                        kind: "Name",
                                                        value: "category",
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "mintAddress",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "collectionAddress",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "creator",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "tokenAddress",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "tokenStandard",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "collectionRoyalties",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "chain",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "updatedAt",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "createdAt",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "toolRequest" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "_id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "teamId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sessionId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "messageId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "type" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "priority" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "payload" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "credits" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "status" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "updatedAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "message" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "percentage" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "metadata" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "limit" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "offset" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "orderBy" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "orderDirection" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "numElements" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "total" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "page" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "pages" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "HandledError" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetMessagesQuery, GetMessagesQueryVariables>;
export const CancelToolRequestDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CancelToolRequest" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "requestId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "cancelToolRequest" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "requestId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "requestId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ToolRequest" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "_id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "teamId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "sessionId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "messageId" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "type" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "priority" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "payload" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "credits" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "HandledError" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CancelToolRequestMutation,
  CancelToolRequestMutationVariables
>;
export const GenerateModelFromImageDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "GenerateModelFromImage" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "imageUrl" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "options" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Options" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "sessionId" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "generateModelFromImage" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "imageUrl" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "imageUrl" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "options" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "options" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "sessionId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "sessionId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ToolRequestConfirmation" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "messages" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "_id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "teamId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "sessionId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "role" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "content" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "text" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "models" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "_id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "teamId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "sessionId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "messageId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "image",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "alt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "keyS3",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "size",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "type",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "_id",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "teamId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "sessionId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "messageId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "createdAt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "updatedAt",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "mesh" },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "alt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "keyS3",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "size",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "type",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "_id",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "teamId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "sessionId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "messageId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "createdAt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "updatedAt",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "optimizedMesh",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "alt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "keyS3",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "size",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "type",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "_id",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "teamId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "sessionId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "messageId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "createdAt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "updatedAt",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "multiview",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "alt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "keyS3",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "size",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "type",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "_id",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "teamId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "sessionId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "messageId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "createdAt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "updatedAt",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "views",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "alt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "keyS3",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "size",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "type",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "_id",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "teamId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "sessionId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "messageId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "createdAt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "updatedAt",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "texturedMesh",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "alt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "keyS3",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "size",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "type",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "_id",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "teamId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "sessionId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "messageId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "createdAt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "updatedAt",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "texture",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "alt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "keyS3",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "size",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "type",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "_id",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "teamId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "sessionId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "messageId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "createdAt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "updatedAt",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "createdAt",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "updatedAt",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "prompt",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "style",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "nftId",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "medias" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "alt" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "keyS3",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "size" },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "type" },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "url" },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "_id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "teamId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "sessionId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "messageId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "createdAt",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "updatedAt",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "nfts" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "_id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "teamId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "genRequestId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "messageId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "modelId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "status",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "metadata",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "name",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "symbol",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "description",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "image",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "external_url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "animation_url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "attributes",
                                                },
                                                selectionSet: {
                                                  kind: "SelectionSet",
                                                  selections: [
                                                    {
                                                      kind: "Field",
                                                      name: {
                                                        kind: "Name",
                                                        value: "trait_type",
                                                      },
                                                    },
                                                    {
                                                      kind: "Field",
                                                      name: {
                                                        kind: "Name",
                                                        value: "value",
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "properties",
                                                },
                                                selectionSet: {
                                                  kind: "SelectionSet",
                                                  selections: [
                                                    {
                                                      kind: "Field",
                                                      name: {
                                                        kind: "Name",
                                                        value: "files",
                                                      },
                                                      selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                          {
                                                            kind: "Field",
                                                            name: {
                                                              kind: "Name",
                                                              value: "uri",
                                                            },
                                                          },
                                                          {
                                                            kind: "Field",
                                                            name: {
                                                              kind: "Name",
                                                              value: "type",
                                                            },
                                                          },
                                                          {
                                                            kind: "Field",
                                                            name: {
                                                              kind: "Name",
                                                              value: "cdn",
                                                            },
                                                          },
                                                        ],
                                                      },
                                                    },
                                                    {
                                                      kind: "Field",
                                                      name: {
                                                        kind: "Name",
                                                        value: "category",
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "mintAddress",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "collectionAddress",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "creator",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "tokenAddress",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "tokenStandard",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "collectionRoyalties",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "chain",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "updatedAt",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "createdAt",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "toolRequest" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "_id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "teamId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sessionId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "messageId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "type" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "priority" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "payload" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "credits" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "status" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "updatedAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "message" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "percentage" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "toolRequest" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "_id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "teamId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "sessionId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "messageId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "type" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "priority" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "payload" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "credits" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "message" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "percentage" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "HandledError" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GenerateModelFromImageMutation,
  GenerateModelFromImageMutationVariables
>;
export const EditModelDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "EditModel" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "modelId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "edit" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "options" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Options" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "sessionId" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "editModel" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "modelId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "modelId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "edit" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "edit" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "options" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "options" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "sessionId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "sessionId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ToolRequestConfirmation" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "messages" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "_id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "teamId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "sessionId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "role" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "content" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "text" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "models" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "_id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "teamId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "sessionId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "messageId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "image",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "alt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "keyS3",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "size",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "type",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "_id",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "teamId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "sessionId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "messageId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "createdAt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "updatedAt",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "mesh" },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "alt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "keyS3",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "size",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "type",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "_id",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "teamId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "sessionId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "messageId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "createdAt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "updatedAt",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "optimizedMesh",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "alt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "keyS3",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "size",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "type",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "_id",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "teamId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "sessionId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "messageId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "createdAt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "updatedAt",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "multiview",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "alt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "keyS3",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "size",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "type",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "_id",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "teamId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "sessionId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "messageId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "createdAt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "updatedAt",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "views",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "alt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "keyS3",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "size",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "type",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "_id",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "teamId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "sessionId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "messageId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "createdAt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "updatedAt",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "texturedMesh",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "alt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "keyS3",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "size",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "type",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "_id",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "teamId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "sessionId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "messageId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "createdAt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "updatedAt",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "texture",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "alt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "keyS3",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "size",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "type",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "_id",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "teamId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "sessionId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "messageId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "createdAt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "updatedAt",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "createdAt",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "updatedAt",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "prompt",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "style",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "nftId",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "medias" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "alt" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "keyS3",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "size" },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "type" },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "url" },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "_id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "teamId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "sessionId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "messageId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "createdAt",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "updatedAt",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "nfts" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "_id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "teamId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "genRequestId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "messageId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "modelId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "status",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "metadata",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "name",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "symbol",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "description",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "image",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "external_url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "animation_url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "attributes",
                                                },
                                                selectionSet: {
                                                  kind: "SelectionSet",
                                                  selections: [
                                                    {
                                                      kind: "Field",
                                                      name: {
                                                        kind: "Name",
                                                        value: "trait_type",
                                                      },
                                                    },
                                                    {
                                                      kind: "Field",
                                                      name: {
                                                        kind: "Name",
                                                        value: "value",
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "properties",
                                                },
                                                selectionSet: {
                                                  kind: "SelectionSet",
                                                  selections: [
                                                    {
                                                      kind: "Field",
                                                      name: {
                                                        kind: "Name",
                                                        value: "files",
                                                      },
                                                      selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                          {
                                                            kind: "Field",
                                                            name: {
                                                              kind: "Name",
                                                              value: "uri",
                                                            },
                                                          },
                                                          {
                                                            kind: "Field",
                                                            name: {
                                                              kind: "Name",
                                                              value: "type",
                                                            },
                                                          },
                                                          {
                                                            kind: "Field",
                                                            name: {
                                                              kind: "Name",
                                                              value: "cdn",
                                                            },
                                                          },
                                                        ],
                                                      },
                                                    },
                                                    {
                                                      kind: "Field",
                                                      name: {
                                                        kind: "Name",
                                                        value: "category",
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "mintAddress",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "collectionAddress",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "creator",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "tokenAddress",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "tokenStandard",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "collectionRoyalties",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "chain",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "updatedAt",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "createdAt",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "toolRequest" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "_id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "teamId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sessionId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "messageId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "type" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "priority" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "payload" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "credits" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "status" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "updatedAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "message" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "percentage" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "toolRequest" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "_id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "teamId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "sessionId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "messageId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "type" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "priority" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "payload" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "credits" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "message" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "percentage" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "HandledError" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EditModelMutation, EditModelMutationVariables>;
export const SendMessageDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "SendMessage" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "sessionId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "content" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "options" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Options" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "imageUrls" },
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "String" },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "sendMessage" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "sessionId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "sessionId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "content" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "content" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "options" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "options" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "imageUrls" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "imageUrls" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "Messages" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "messages" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "_id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "teamId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "sessionId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "role" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "content" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "text" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "models" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "_id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "teamId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "sessionId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "messageId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "image",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "alt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "keyS3",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "size",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "type",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "_id",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "teamId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "sessionId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "messageId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "createdAt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "updatedAt",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "mesh" },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "alt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "keyS3",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "size",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "type",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "_id",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "teamId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "sessionId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "messageId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "createdAt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "updatedAt",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "optimizedMesh",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "alt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "keyS3",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "size",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "type",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "_id",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "teamId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "sessionId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "messageId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "createdAt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "updatedAt",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "multiview",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "alt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "keyS3",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "size",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "type",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "_id",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "teamId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "sessionId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "messageId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "createdAt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "updatedAt",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "views",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "alt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "keyS3",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "size",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "type",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "_id",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "teamId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "sessionId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "messageId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "createdAt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "updatedAt",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "texturedMesh",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "alt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "keyS3",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "size",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "type",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "_id",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "teamId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "sessionId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "messageId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "createdAt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "updatedAt",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "texture",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "alt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "keyS3",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "size",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "type",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "_id",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "teamId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "sessionId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "messageId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "createdAt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "updatedAt",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "createdAt",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "updatedAt",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "prompt",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "style",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "nftId",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "medias" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "alt" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "keyS3",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "size" },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "type" },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "url" },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "_id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "teamId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "sessionId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "messageId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "createdAt",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "updatedAt",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "nfts" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "_id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "teamId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "genRequestId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "messageId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "modelId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "status",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "metadata",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "name",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "symbol",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "description",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "image",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "external_url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "animation_url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "attributes",
                                                },
                                                selectionSet: {
                                                  kind: "SelectionSet",
                                                  selections: [
                                                    {
                                                      kind: "Field",
                                                      name: {
                                                        kind: "Name",
                                                        value: "trait_type",
                                                      },
                                                    },
                                                    {
                                                      kind: "Field",
                                                      name: {
                                                        kind: "Name",
                                                        value: "value",
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "properties",
                                                },
                                                selectionSet: {
                                                  kind: "SelectionSet",
                                                  selections: [
                                                    {
                                                      kind: "Field",
                                                      name: {
                                                        kind: "Name",
                                                        value: "files",
                                                      },
                                                      selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                          {
                                                            kind: "Field",
                                                            name: {
                                                              kind: "Name",
                                                              value: "uri",
                                                            },
                                                          },
                                                          {
                                                            kind: "Field",
                                                            name: {
                                                              kind: "Name",
                                                              value: "type",
                                                            },
                                                          },
                                                          {
                                                            kind: "Field",
                                                            name: {
                                                              kind: "Name",
                                                              value: "cdn",
                                                            },
                                                          },
                                                        ],
                                                      },
                                                    },
                                                    {
                                                      kind: "Field",
                                                      name: {
                                                        kind: "Name",
                                                        value: "category",
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "mintAddress",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "collectionAddress",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "creator",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "tokenAddress",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "tokenStandard",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "collectionRoyalties",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "chain",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "updatedAt",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "createdAt",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "toolRequest" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "_id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "teamId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sessionId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "messageId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "type" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "priority" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "payload" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "credits" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "status" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "updatedAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "message" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "percentage" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "HandledError" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SendMessageMutation, SendMessageMutationVariables>;
export const GetSessionsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetSessions" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "pagination" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "Pagination" },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filters" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "SessionFilter" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getSessions" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "pagination" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "filters" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "filters" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "SessionsPage" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "items" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "_id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "teamId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "title" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "metadata" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "limit" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "offset" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "orderBy" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "orderDirection" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "numElements" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "total" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "page" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "pages" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "HandledError" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetSessionsQuery, GetSessionsQueryVariables>;
export const ConfirmToolRequestDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "ConfirmToolRequest" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "requestId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "confirmToolRequest" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "requestId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "requestId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ToolRequest" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "_id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "teamId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "sessionId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "messageId" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "type" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "priority" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "payload" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "credits" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "percentage" },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "HandledError" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ConfirmToolRequestMutation,
  ConfirmToolRequestMutationVariables
>;
export const GenerateNftDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "GenerateNft" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "description" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "name" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "modelId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "attributes" },
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "NftAttributeInput" },
              },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "sessionId" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "symbol" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "generateNft" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "description" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "description" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "name" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "name" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "modelId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "modelId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "attributes" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "attributes" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "sessionId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "sessionId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "symbol" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "symbol" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ToolRequestConfirmation" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "messages" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "_id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "teamId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "sessionId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "role" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "content" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "text" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "models" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "_id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "teamId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "sessionId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "messageId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "image",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "alt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "keyS3",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "size",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "type",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "_id",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "teamId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "sessionId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "messageId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "createdAt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "updatedAt",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "mesh" },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "alt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "keyS3",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "size",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "type",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "_id",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "teamId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "sessionId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "messageId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "createdAt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "updatedAt",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "optimizedMesh",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "alt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "keyS3",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "size",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "type",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "_id",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "teamId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "sessionId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "messageId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "createdAt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "updatedAt",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "multiview",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "alt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "keyS3",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "size",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "type",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "_id",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "teamId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "sessionId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "messageId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "createdAt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "updatedAt",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "views",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "alt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "keyS3",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "size",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "type",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "_id",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "teamId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "sessionId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "messageId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "createdAt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "updatedAt",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "texturedMesh",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "alt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "keyS3",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "size",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "type",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "_id",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "teamId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "sessionId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "messageId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "createdAt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "updatedAt",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "texture",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "alt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "keyS3",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "size",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "type",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "_id",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "teamId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "sessionId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "messageId",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "createdAt",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "updatedAt",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "createdAt",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "updatedAt",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "prompt",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "style",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "nftId",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "medias" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "alt" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "keyS3",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "size" },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "type" },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "url" },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "_id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "teamId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "sessionId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "messageId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "createdAt",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "updatedAt",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "nfts" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "_id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "teamId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "genRequestId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "messageId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "modelId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "status",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "metadata",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "name",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "symbol",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "description",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "image",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "external_url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "animation_url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "attributes",
                                                },
                                                selectionSet: {
                                                  kind: "SelectionSet",
                                                  selections: [
                                                    {
                                                      kind: "Field",
                                                      name: {
                                                        kind: "Name",
                                                        value: "trait_type",
                                                      },
                                                    },
                                                    {
                                                      kind: "Field",
                                                      name: {
                                                        kind: "Name",
                                                        value: "value",
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "properties",
                                                },
                                                selectionSet: {
                                                  kind: "SelectionSet",
                                                  selections: [
                                                    {
                                                      kind: "Field",
                                                      name: {
                                                        kind: "Name",
                                                        value: "files",
                                                      },
                                                      selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                          {
                                                            kind: "Field",
                                                            name: {
                                                              kind: "Name",
                                                              value: "uri",
                                                            },
                                                          },
                                                          {
                                                            kind: "Field",
                                                            name: {
                                                              kind: "Name",
                                                              value: "type",
                                                            },
                                                          },
                                                          {
                                                            kind: "Field",
                                                            name: {
                                                              kind: "Name",
                                                              value: "cdn",
                                                            },
                                                          },
                                                        ],
                                                      },
                                                    },
                                                    {
                                                      kind: "Field",
                                                      name: {
                                                        kind: "Name",
                                                        value: "category",
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "mintAddress",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "collectionAddress",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "creator",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "tokenAddress",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "tokenStandard",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "collectionRoyalties",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "chain",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "updatedAt",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "createdAt",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "toolRequest" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "_id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "teamId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sessionId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "messageId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "type" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "priority" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "payload" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "credits" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "status" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "updatedAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "message" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "percentage" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "toolRequest" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "_id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "teamId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "sessionId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "messageId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "type" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "priority" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "payload" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "credits" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "message" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "percentage" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "HandledError" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GenerateNftMutation, GenerateNftMutationVariables>;
export const GetNftsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetNfts" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "pagination" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "Pagination" },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filters" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "NftFilter" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getNfts" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "pagination" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "filters" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "filters" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "NftPage" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "items" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "_id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "teamId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "genRequestId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "messageId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "modelId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "metadata" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "name" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "symbol" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "description",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "image" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "external_url",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "animation_url",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attributes" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "trait_type",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "value",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "properties" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "files",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "uri",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "type",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "cdn",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "category",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "mintAddress" },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "collectionAddress",
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "creator" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenAddress" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenStandard" },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "collectionRoyalties",
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "chain" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "metadata" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "limit" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "offset" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "orderBy" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "orderDirection" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "numElements" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "total" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "page" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "pages" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "HandledError" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetNftsQuery, GetNftsQueryVariables>;
export const GetNftDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetNft" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "nftId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getNft" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "nftId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "nftId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "Nft" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "_id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "teamId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "genRequestId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "messageId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "modelId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mintAddress" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "collectionAddress" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "creator" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenAddress" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenStandard" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "collectionRoyalties" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "chain" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "metadata" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "symbol" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "description" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "image" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "external_url" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "animation_url" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attributes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "trait_type" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "value" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "properties" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "files" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "uri" },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "type" },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "cdn" },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "category" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "HandledError" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetNftQuery, GetNftQueryVariables>;
export const GetTokenOverviewDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetTokenOverview" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getTokenOverview" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: {
                      kind: "Name",
                      value: "BirdeyeTokenOverviewResponse",
                    },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "address" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "description" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "price" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "totalSupply" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "marketCap" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "fullyDilutedValue" },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "HandledError" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetTokenOverviewQuery,
  GetTokenOverviewQueryVariables
>;
export const GetTokenHistoricalPriceResultDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetTokenHistoricalPriceResult" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "time" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "BirdeyeHistoricalDataTimeTypes" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getTokenHistoricalPriceResult" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "time" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "time" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: {
                      kind: "Name",
                      value: "BirdeyeHistoricalPriceResponse",
                    },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "items" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "unixTime" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "value" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "HandledError" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetTokenHistoricalPriceResultQuery,
  GetTokenHistoricalPriceResultQueryVariables
>;
export const GetStakingGlobalDataDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetStakingGlobalData" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getStakingGlobalData" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "GetStakingGlobalData" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "apr" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "totalEffectiveAmount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "totalRewardsPerDay" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "totalAmount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenMint" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "address" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "decimals" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "supply" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isInitialized" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "freezeAuthority" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "mintAuthority" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "stakeEntries" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "publicKey" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "account" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "authority" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "amount" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "duration" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "effectiveAmount",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "stakePool" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "nonce" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "payer" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdTs" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "closedTs" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "unstakeTs" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "priorTotalEffectiveStake",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "buffer" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "rewardPools" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "publicKey" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "account" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "authority" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "bump" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "buffer" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "creator" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "claimedAmount",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "fundedAmount",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "lastClaimPeriod",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "lastRewardAmount",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "lastRewardPeriod",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "lastAmountUpdateTs",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "lastPeriodUpdateTs",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "permissionless",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "rewardAmount",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "rewardPeriod",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "stakePool" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdTs" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "mint" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "nonce" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "vault" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "circulatingSupply" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "totalStakedByUsers" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "rewardEntries" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "publicKey" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "account" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "rewardPool" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "stakeEntry" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdTs" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "accountedAmount",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "claimedAmount",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "lastAccountedTs",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "lastRewardAmount",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "lastRewardPeriod",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "buffer" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "HandledError" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetStakingGlobalDataQuery,
  GetStakingGlobalDataQueryVariables
>;
export const GetPricesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetPrices" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getPrices" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "Prices" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "buu" } },
                      { kind: "Field", name: { kind: "Name", value: "sol" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "HandledError" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetPricesQuery, GetPricesQueryVariables>;
export const GetReferralRewardsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetReferralRewards" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "pagination" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "Pagination" },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filters" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "ReferralRewardFilter" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getReferralRewards" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "pagination" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "filters" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "filters" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ReferralRewardPage" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "items" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "_id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "referral" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "referralName" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "referee" },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "creditsPurchaseId",
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokens" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "decimals" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "transactionHash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "metadata" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "limit" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "offset" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "orderBy" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "orderDirection" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "numElements" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "total" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "page" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "pages" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "HandledError" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetReferralRewardsQuery,
  GetReferralRewardsQueryVariables
>;
export const GetReferralAccountDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetReferralAccount" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getReferralAccount" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ReferralAccount" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "_id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "referralCode" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "refereeCode" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "referee" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "_id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "referralCode" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "refereeCode" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "linkedAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "linkedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "HandledError" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetReferralAccountQuery,
  GetReferralAccountQueryVariables
>;
export const LinkReferralAccountDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "LinkReferralAccount" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "code" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "linkReferralAccount" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "code" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "code" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ReferralAccount" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "_id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "referralCode" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "refereeCode" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "referee" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "_id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "referralCode" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "refereeCode" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "linkedAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "linkedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "HandledError" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  LinkReferralAccountMutation,
  LinkReferralAccountMutationVariables
>;
export const GenerateCustomerPortalSessionDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GenerateCustomerPortalSession" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "generateCustomerPortalSession" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "customerPortalLink" },
                },
                { kind: "Field", name: { kind: "Name", value: "planKey" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GenerateCustomerPortalSessionQuery,
  GenerateCustomerPortalSessionQueryVariables
>;
export const GenerateSubscriptionPaymentLinkDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GenerateSubscriptionPaymentLink" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "planKey" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "StripeSubscriptionPlanKeys" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "generateSubscriptionPaymentLink" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "planKey" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "planKey" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: {
                      kind: "Name",
                      value: "SuscriptionPaymentLinkOutput",
                    },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "HandledError" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GenerateSubscriptionPaymentLinkQuery,
  GenerateSubscriptionPaymentLinkQueryVariables
>;
export const GenerateCreditsPackagePaymentLinkDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GenerateCreditsPackagePaymentLink" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "pkg" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "CreditsPackageKeys" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "generateCreditsPackagePaymentLink" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pkg" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "pkg" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "Url" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "HandledError" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GenerateCreditsPackagePaymentLinkQuery,
  GenerateCreditsPackagePaymentLinkQueryVariables
>;
export const GeneratePresignedUrlDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "GeneratePresignedUrl" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "GeneratePresignedUrlInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "generatePresignedUrl" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "GeneratePresignedUrl" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "presignedUrl" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                      { kind: "Field", name: { kind: "Name", value: "key" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "expiresIn" },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "HandledError" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GeneratePresignedUrlMutation,
  GeneratePresignedUrlMutationVariables
>;
export const GetMyCreditsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetMyCredits" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getMyCredits" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "Credit" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "_id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "available" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "pending" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "confirmed" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "HandledError" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetMyCreditsQuery, GetMyCreditsQueryVariables>;
export const RedeemVoucherDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "RedeemVoucher" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "code" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "redeemVoucher" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "code" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "code" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "Credit" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "_id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "available" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "pending" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "confirmed" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "HandledError" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  RedeemVoucherMutation,
  RedeemVoucherMutationVariables
>;

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

export type Account = {
  __typename?: "Account";
  address: Scalars["String"]["output"];
  createdAt: Scalars["DateTimeISO"]["output"];
  telegramAvatar?: Maybe<Scalars["String"]["output"]>;
  telegramId?: Maybe<Scalars["Float"]["output"]>;
  telegramName?: Maybe<Scalars["String"]["output"]>;
  telegramUsername?: Maybe<Scalars["String"]["output"]>;
  twitterAvatar?: Maybe<Scalars["String"]["output"]>;
  twitterEmail?: Maybe<Scalars["String"]["output"]>;
  twitterId?: Maybe<Scalars["String"]["output"]>;
  twitterName?: Maybe<Scalars["String"]["output"]>;
  twitterUsername?: Maybe<Scalars["String"]["output"]>;
  updatedAt: Scalars["DateTimeISO"]["output"];
};

export type AccountResult = Account | HandledError;

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

export type GenRequest = {
  __typename?: "GenRequest";
  _id: Scalars["String"]["output"];
  address?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["DateTimeISO"]["output"];
  credits: Scalars["Float"]["output"];
  images?: Maybe<Array<Media>>;
  metadata: Scalars["JSON"]["output"];
  model_mesh?: Maybe<Media>;
  status: GenRequestStatusEnum;
  subthreadId: Scalars["String"]["output"];
  teamId: Scalars["String"]["output"];
  timings?: Maybe<Timings>;
  tokenized?: Maybe<Scalars["Boolean"]["output"]>;
  type: Scalars["String"]["output"];
  updatedAt: Scalars["DateTimeISO"]["output"];
};

export type GenRequestResult = GenRequest | HandledError;

/** The status of a request */
export enum GenRequestStatusEnum {
  Error = "Error",
  InProgress = "InProgress",
  Success = "Success",
}

export type GenRequestsPage = {
  __typename?: "GenRequestsPage";
  items: Array<GenRequest>;
  metadata: Metadata;
};

export type GenRequestsPageResult = GenRequestsPage | HandledError;

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
  alt?: Maybe<Scalars["String"]["output"]>;
  keyS3?: Maybe<Scalars["String"]["output"]>;
  size?: Maybe<Scalars["Int"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
};

export type Message = {
  __typename?: "Message";
  _id: Scalars["String"]["output"];
  content?: Maybe<MessageContent>;
  createdAt: Scalars["DateTimeISO"]["output"];
  credits?: Maybe<Scalars["Float"]["output"]>;
  nftId?: Maybe<Scalars["String"]["output"]>;
  role: MessageRole;
  sessionId: Scalars["String"]["output"];
  status: ToolRequestStatus;
  teamId: Scalars["String"]["output"];
  toolRequest?: Maybe<ToolRequest>;
  updatedAt: Scalars["DateTimeISO"]["output"];
};

export type MessageContent = {
  __typename?: "MessageContent";
  images?: Maybe<Array<Media>>;
  model?: Maybe<Model>;
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

export type MessageResult = HandledError | Message;

/** The role of the message sender */
export enum MessageRole {
  Assistant = "assistant",
  Tool = "tool",
  User = "user",
}

export type Messages = {
  __typename?: "Messages";
  items: Array<Message>;
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
  alt?: Maybe<Scalars["String"]["output"]>;
  image: Media;
  keyS3?: Maybe<Scalars["String"]["output"]>;
  size?: Maybe<Scalars["Int"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  addTeamMember: TeamResult;
  cancelToolMessage: MessageResult;
  confirmToolMessage: MessageResult;
  createApiKey: ApiKeyResult;
  createShareableBoard: ShareableBoardResult;
  createTeam: TeamResult;
  deleteApiKey: ApiKeyResult;
  deleteShareableBoard: ShareableBoardResult;
  disableTeam: TeamResult;
  disconnectTelegram: AccountResult;
  disconnectTwitter: AccountResult;
  editImage: MessagesResult;
  enableTeam: TeamResult;
  generateImage: GenRequestResult;
  generateModel: GenRequestResult;
  generateModelFromImage: MessagesResult;
  generateNft: NftResult;
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

export type MutationCancelToolMessageArgs = {
  messageId: Scalars["String"]["input"];
};

export type MutationConfirmToolMessageArgs = {
  messageId: Scalars["String"]["input"];
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

export type MutationEditImageArgs = {
  edit: Scalars["String"]["input"];
  imageUrl: Scalars["String"]["input"];
  numberOfImages?: InputMaybe<Scalars["Float"]["input"]>;
  sessionId: Scalars["String"]["input"];
};

export type MutationGenerateImageArgs = {
  subthreadId: Scalars["String"]["input"];
};

export type MutationGenerateModelArgs = {
  imageRequestId?: InputMaybe<Scalars["String"]["input"]>;
  imageUrl: Scalars["String"]["input"];
  subthreadId: Scalars["String"]["input"];
};

export type MutationGenerateModelFromImageArgs = {
  imageUrl: Scalars["String"]["input"];
  sessionId: Scalars["String"]["input"];
};

export type MutationGenerateNftArgs = {
  description: Scalars["String"]["input"];
  messageId: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
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
  sessionId?: InputMaybe<Scalars["String"]["input"]>;
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
  getMyCredits: CreditResult;
  getNft: NftResult;
  getNfts: NftPageResult;
  getPrices: PricesResult;
  getReferralAccount: ReferralAccountResult;
  getReferralRewards: ReferralRewardPageResult;
  getSessions: SessionsPageResult;
  getShareableBoard: ShareableBoardResult;
  getStakingGlobalData: GetStakingGlobalDataResult;
  getSubthread: SubthreadResult;
  getSubthreadGenRequests: GenRequestsPageResult;
  getSubthreads: SubthreadPageResult;
  getTeam: TeamResult;
  getThreads: ThreadPageResult;
  getTokenHistoricalPriceResult: BirdeyeHistoricalPriceResult;
  getTokenOverview: BirdeyeTokenOverviewResult;
  getUserShareableBoard: ShareableBoardPageResult;
  getUserTeams: TeamPageResult;
  me: AccountResult;
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

export type QueryGetSubthreadArgs = {
  subthreadId: Scalars["String"]["input"];
};

export type QueryGetSubthreadGenRequestsArgs = {
  subthreadId: Scalars["String"]["input"];
};

export type QueryGetSubthreadsArgs = {
  filters?: InputMaybe<SubthreadFilter>;
  pagination?: InputMaybe<Pagination>;
};

export type QueryGetThreadsArgs = {
  filters?: InputMaybe<ThreadFilter>;
  pagination?: InputMaybe<Pagination>;
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

export type Subthread = {
  __typename?: "Subthread";
  _id: Scalars["String"]["output"];
  address?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["DateTimeISO"]["output"];
  imageUrl?: Maybe<Scalars["String"]["output"]>;
  prompt?: Maybe<Scalars["String"]["output"]>;
  strength?: Maybe<Scalars["Float"]["output"]>;
  style?: Maybe<SubthreadStyle>;
  teamId: Scalars["String"]["output"];
  threadId: Scalars["String"]["output"];
  updatedAt: Scalars["DateTimeISO"]["output"];
};

export type SubthreadFilter = {
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
  threadId_eq?: InputMaybe<Scalars["String"]["input"]>;
  threadId_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  threadId_ne?: InputMaybe<Scalars["String"]["input"]>;
  threadId_nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  updatedAt_eq?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  updatedAt_gt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  updatedAt_gte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  updatedAt_lt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  updatedAt_lte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  updatedAt_ne?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
};

export type SubthreadPageResult = HandledError | SubthreadsPage;

export type SubthreadResult = HandledError | Subthread;

/** The style of the subthread */
export enum SubthreadStyle {
  Clay = "Clay",
  Cute = "Cute",
  Environment = "Environment",
  Fantasy = "Fantasy",
  Isometric = "Isometric",
  LowPoly = "LowPoly",
  Metallic = "Metallic",
  Realistic = "Realistic",
  SciFi = "SciFi",
  Stylized = "Stylized",
  Toon = "Toon",
  Voxel = "Voxel",
  Weapons = "Weapons",
  Wireframe = "Wireframe",
}

export type SubthreadsPage = {
  __typename?: "SubthreadsPage";
  items: Array<Subthread>;
  metadata: Metadata;
};

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

export type Thread = {
  __typename?: "Thread";
  _id: Scalars["String"]["output"];
  address?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["DateTimeISO"]["output"];
  style?: Maybe<SubthreadStyle>;
  teamId: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
  updatedAt: Scalars["DateTimeISO"]["output"];
};

export type ThreadFilter = {
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

export type ThreadPageResult = HandledError | ThreadsPage;

export type ThreadsPage = {
  __typename?: "ThreadsPage";
  items: Array<Thread>;
  metadata: Metadata;
};

export type Timings = {
  __typename?: "Timings";
  inference?: Maybe<Scalars["Float"]["output"]>;
};

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
  id: Scalars["String"]["output"];
  payload: Scalars["String"]["output"];
  priority: ToolRequestPriority;
  type: ToolRequestType;
};

/** The priority of the tool request */
export enum ToolRequestPriority {
  High = "HIGH",
  Low = "LOW",
  Medium = "MEDIUM",
  Urgent = "URGENT",
}

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
  GenerateModelFromImage = "GENERATE_MODEL_FROM_IMAGE",
  GenerateNft = "GENERATE_NFT",
}

export type Url = {
  __typename?: "Url";
  url: Scalars["String"]["output"];
};

export type UrlResult = HandledError | Url;

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = {
  __typename?: "Query";
  me:
    | {
        __typename?: "Account";
        address: string;
        twitterId?: string | null;
        twitterName?: string | null;
        twitterUsername?: string | null;
        twitterAvatar?: string | null;
        telegramId?: number | null;
        telegramName?: string | null;
        telegramUsername?: string | null;
        telegramAvatar?: string | null;
        createdAt: any;
        updatedAt: any;
      }
    | { __typename?: "HandledError"; code: string; message: string };
};

export type DisconnectTwitterMutationVariables = Exact<{
  [key: string]: never;
}>;

export type DisconnectTwitterMutation = {
  __typename?: "Mutation";
  disconnectTwitter:
    | {
        __typename?: "Account";
        address: string;
        twitterId?: string | null;
        twitterName?: string | null;
        twitterUsername?: string | null;
        twitterAvatar?: string | null;
        telegramId?: number | null;
        telegramName?: string | null;
        telegramUsername?: string | null;
        telegramAvatar?: string | null;
        createdAt: any;
        updatedAt: any;
      }
    | { __typename?: "HandledError"; code: string; message: string };
};

export type DisconnectTelegramMutationVariables = Exact<{
  [key: string]: never;
}>;

export type DisconnectTelegramMutation = {
  __typename?: "Mutation";
  disconnectTelegram:
    | {
        __typename?: "Account";
        address: string;
        twitterId?: string | null;
        twitterName?: string | null;
        twitterUsername?: string | null;
        twitterAvatar?: string | null;
        telegramId?: number | null;
        telegramName?: string | null;
        telegramUsername?: string | null;
        telegramAvatar?: string | null;
        createdAt: any;
        updatedAt: any;
      }
    | { __typename?: "HandledError"; code: string; message: string };
};

export type GenerateImageMutationVariables = Exact<{
  subthreadId: Scalars["String"]["input"];
}>;

export type GenerateImageMutation = {
  __typename?: "Mutation";
  generateImage:
    | {
        __typename?: "GenRequest";
        _id: string;
        subthreadId: string;
        teamId: string;
        address?: string | null;
        status: GenRequestStatusEnum;
        metadata: any;
        type: string;
        credits: number;
        createdAt: any;
        updatedAt: any;
        images?: Array<{
          __typename?: "Media";
          alt?: string | null;
          keyS3?: string | null;
          size?: number | null;
          type?: string | null;
          url?: string | null;
        }> | null;
        model_mesh?: {
          __typename?: "Media";
          alt?: string | null;
          keyS3?: string | null;
          size?: number | null;
          type?: string | null;
          url?: string | null;
        } | null;
        timings?: { __typename?: "Timings"; inference?: number | null } | null;
      }
    | { __typename?: "HandledError"; code: string; message: string };
};

export type GenerateModelMutationVariables = Exact<{
  subthreadId: Scalars["String"]["input"];
  imageRequestId?: InputMaybe<Scalars["String"]["input"]>;
  imageUrl: Scalars["String"]["input"];
}>;

export type GenerateModelMutation = {
  __typename?: "Mutation";
  generateModel:
    | {
        __typename?: "GenRequest";
        _id: string;
        subthreadId: string;
        teamId: string;
        address?: string | null;
        status: GenRequestStatusEnum;
        metadata: any;
        type: string;
        credits: number;
        createdAt: any;
        updatedAt: any;
        images?: Array<{
          __typename?: "Media";
          alt?: string | null;
          keyS3?: string | null;
          size?: number | null;
          type?: string | null;
          url?: string | null;
        }> | null;
        model_mesh?: {
          __typename?: "Media";
          alt?: string | null;
          keyS3?: string | null;
          size?: number | null;
          type?: string | null;
          url?: string | null;
        } | null;
        timings?: { __typename?: "Timings"; inference?: number | null } | null;
      }
    | { __typename?: "HandledError"; code: string; message: string };
};

export type GetThreadsQueryVariables = Exact<{
  pagination?: InputMaybe<Pagination>;
  filters?: InputMaybe<ThreadFilter>;
}>;

export type GetThreadsQuery = {
  __typename?: "Query";
  getThreads:
    | { __typename?: "HandledError"; code: string; message: string }
    | {
        __typename?: "ThreadsPage";
        items: Array<{
          __typename?: "Thread";
          _id: string;
          createdAt: any;
          updatedAt: any;
          teamId: string;
          address?: string | null;
          title: string;
          style?: SubthreadStyle | null;
        }>;
        metadata: {
          __typename?: "Metadata";
          limit?: number | null;
          offset?: number | null;
          orderBy?: string | null;
          orderDirection?: OrderDirection | null;
          numElements?: number | null;
          page?: number | null;
          pages?: number | null;
        };
      };
};

export type GetSubthreadsQueryVariables = Exact<{
  pagination?: InputMaybe<Pagination>;
  filters?: InputMaybe<SubthreadFilter>;
}>;

export type GetSubthreadsQuery = {
  __typename?: "Query";
  getSubthreads:
    | { __typename?: "HandledError"; code: string; message: string }
    | {
        __typename?: "SubthreadsPage";
        items: Array<{
          __typename?: "Subthread";
          _id: string;
          address?: string | null;
          teamId: string;
          createdAt: any;
          updatedAt: any;
          threadId: string;
          prompt?: string | null;
          style?: SubthreadStyle | null;
          imageUrl?: string | null;
          strength?: number | null;
        }>;
        metadata: {
          __typename?: "Metadata";
          limit?: number | null;
          offset?: number | null;
          orderBy?: string | null;
          orderDirection?: OrderDirection | null;
          numElements?: number | null;
          page?: number | null;
          pages?: number | null;
        };
      };
};

export type GetSubthreadQueryVariables = Exact<{
  subthreadId: Scalars["String"]["input"];
}>;

export type GetSubthreadQuery = {
  __typename?: "Query";
  getSubthread:
    | { __typename?: "HandledError"; code: string; message: string }
    | {
        __typename?: "Subthread";
        _id: string;
        address?: string | null;
        teamId: string;
        createdAt: any;
        updatedAt: any;
        threadId: string;
        prompt?: string | null;
        style?: SubthreadStyle | null;
        imageUrl?: string | null;
        strength?: number | null;
      };
};

export type GetSubthreadGenRequestsQueryVariables = Exact<{
  subthreadId: Scalars["String"]["input"];
}>;

export type GetSubthreadGenRequestsQuery = {
  __typename?: "Query";
  getSubthreadGenRequests:
    | {
        __typename?: "GenRequestsPage";
        items: Array<{
          __typename?: "GenRequest";
          _id: string;
          subthreadId: string;
          address?: string | null;
          teamId: string;
          status: GenRequestStatusEnum;
          metadata: any;
          type: string;
          credits: number;
          createdAt: any;
          updatedAt: any;
          tokenized?: boolean | null;
          images?: Array<{
            __typename?: "Media";
            alt?: string | null;
            keyS3?: string | null;
            size?: number | null;
            type?: string | null;
            url?: string | null;
          }> | null;
          model_mesh?: {
            __typename?: "Media";
            alt?: string | null;
            keyS3?: string | null;
            size?: number | null;
            type?: string | null;
            url?: string | null;
          } | null;
          timings?: {
            __typename?: "Timings";
            inference?: number | null;
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
        referee?: { __typename?: "ReferralAccount"; _id: string } | null;
      };
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
        referee?: { __typename?: "ReferralAccount"; _id: string } | null;
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
          alt?: string | null;
          keyS3?: string | null;
          size?: number | null;
          type?: string | null;
          url?: string | null;
          image: {
            __typename?: "Media";
            alt?: string | null;
            keyS3?: string | null;
            size?: number | null;
            type?: string | null;
            url?: string | null;
          };
        }>;
      };
};

export type GetUserShareableBoardQueryVariables = Exact<{
  pagination?: InputMaybe<Pagination>;
  filters?: InputMaybe<ShareableBoardFilter>;
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
            alt?: string | null;
            keyS3?: string | null;
            size?: number | null;
            type?: string | null;
            url?: string | null;
            image: {
              __typename?: "Media";
              alt?: string | null;
              keyS3?: string | null;
              size?: number | null;
              type?: string | null;
              url?: string | null;
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
          alt?: string | null;
          keyS3?: string | null;
          size?: number | null;
          type?: string | null;
          url?: string | null;
          image: {
            __typename?: "Media";
            alt?: string | null;
            keyS3?: string | null;
            size?: number | null;
            type?: string | null;
            url?: string | null;
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
          alt?: string | null;
          keyS3?: string | null;
          size?: number | null;
          type?: string | null;
          url?: string | null;
          image: {
            __typename?: "Media";
            alt?: string | null;
            keyS3?: string | null;
            size?: number | null;
            type?: string | null;
            url?: string | null;
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
          alt?: string | null;
          keyS3?: string | null;
          size?: number | null;
          type?: string | null;
          url?: string | null;
          image: {
            __typename?: "Media";
            alt?: string | null;
            keyS3?: string | null;
            size?: number | null;
            type?: string | null;
            url?: string | null;
          };
        }>;
      };
};

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

export type GenerateNftMutationVariables = Exact<{
  description: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  messageId: Scalars["String"]["input"];
}>;

export type GenerateNftMutation = {
  __typename?: "Mutation";
  generateNft:
    | { __typename?: "HandledError"; code: string; message: string }
    | {
        __typename?: "Nft";
        _id: string;
        teamId: string;
        genRequestId: string;
        messageId: string;
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

export type GetPricesQueryVariables = Exact<{ [key: string]: never }>;

export type GetPricesQuery = {
  __typename?: "Query";
  getPrices:
    | { __typename?: "HandledError"; code: string; message: string }
    | { __typename?: "Prices"; buu: number; sol: number };
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
          status: ToolRequestStatus;
          nftId?: string | null;
          credits?: number | null;
          content?: {
            __typename?: "MessageContent";
            text?: string | null;
            model?: {
              __typename?: "Model";
              alt?: string | null;
              keyS3?: string | null;
              size?: number | null;
              type?: string | null;
              url?: string | null;
              image: {
                __typename?: "Media";
                alt?: string | null;
                keyS3?: string | null;
                size?: number | null;
                type?: string | null;
                url?: string | null;
              };
            } | null;
            images?: Array<{
              __typename?: "Media";
              alt?: string | null;
              keyS3?: string | null;
              size?: number | null;
              type?: string | null;
              url?: string | null;
            }> | null;
          } | null;
          toolRequest?: {
            __typename?: "ToolRequest";
            id: string;
            type: ToolRequestType;
            priority: ToolRequestPriority;
            payload: string;
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

export type SendMessageMutationVariables = Exact<{
  content: Scalars["String"]["input"];
  imageUrls?: InputMaybe<
    Array<Scalars["String"]["input"]> | Scalars["String"]["input"]
  >;
  sessionId?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type SendMessageMutation = {
  __typename?: "Mutation";
  sendMessage:
    | { __typename?: "HandledError"; code: string; message: string }
    | {
        __typename?: "Messages";
        items: Array<{
          __typename?: "Message";
          _id: string;
          createdAt: any;
          updatedAt: any;
          teamId: string;
          sessionId: string;
          role: MessageRole;
          status: ToolRequestStatus;
          nftId?: string | null;
          credits?: number | null;
          content?: {
            __typename?: "MessageContent";
            text?: string | null;
            model?: {
              __typename?: "Model";
              alt?: string | null;
              keyS3?: string | null;
              size?: number | null;
              type?: string | null;
              url?: string | null;
              image: {
                __typename?: "Media";
                alt?: string | null;
                keyS3?: string | null;
                size?: number | null;
                type?: string | null;
                url?: string | null;
              };
            } | null;
            images?: Array<{
              __typename?: "Media";
              alt?: string | null;
              keyS3?: string | null;
              size?: number | null;
              type?: string | null;
              url?: string | null;
            }> | null;
          } | null;
          toolRequest?: {
            __typename?: "ToolRequest";
            id: string;
            type: ToolRequestType;
            priority: ToolRequestPriority;
            payload: string;
          } | null;
        }>;
      };
};

export type ConfirmToolMessageMutationVariables = Exact<{
  messageId: Scalars["String"]["input"];
}>;

export type ConfirmToolMessageMutation = {
  __typename?: "Mutation";
  confirmToolMessage:
    | { __typename?: "HandledError"; code: string; message: string }
    | {
        __typename?: "Message";
        _id: string;
        createdAt: any;
        updatedAt: any;
        teamId: string;
        sessionId: string;
        role: MessageRole;
        status: ToolRequestStatus;
        credits?: number | null;
        content?: {
          __typename?: "MessageContent";
          text?: string | null;
          model?: {
            __typename?: "Model";
            alt?: string | null;
            keyS3?: string | null;
            size?: number | null;
            type?: string | null;
            url?: string | null;
            image: {
              __typename?: "Media";
              alt?: string | null;
              keyS3?: string | null;
              size?: number | null;
              type?: string | null;
              url?: string | null;
            };
          } | null;
          images?: Array<{
            __typename?: "Media";
            alt?: string | null;
            keyS3?: string | null;
            size?: number | null;
            type?: string | null;
            url?: string | null;
          }> | null;
        } | null;
        toolRequest?: {
          __typename?: "ToolRequest";
          id: string;
          type: ToolRequestType;
          priority: ToolRequestPriority;
          payload: string;
        } | null;
      };
};

export type CancelToolMessageMutationVariables = Exact<{
  messageId: Scalars["String"]["input"];
}>;

export type CancelToolMessageMutation = {
  __typename?: "Mutation";
  cancelToolMessage:
    | { __typename?: "HandledError"; code: string; message: string }
    | {
        __typename?: "Message";
        _id: string;
        createdAt: any;
        updatedAt: any;
        teamId: string;
        sessionId: string;
        role: MessageRole;
        status: ToolRequestStatus;
        nftId?: string | null;
        credits?: number | null;
        content?: {
          __typename?: "MessageContent";
          text?: string | null;
          model?: {
            __typename?: "Model";
            alt?: string | null;
            keyS3?: string | null;
            size?: number | null;
            type?: string | null;
            url?: string | null;
            image: {
              __typename?: "Media";
              alt?: string | null;
              keyS3?: string | null;
              size?: number | null;
              type?: string | null;
              url?: string | null;
            };
          } | null;
          images?: Array<{
            __typename?: "Media";
            alt?: string | null;
            keyS3?: string | null;
            size?: number | null;
            type?: string | null;
            url?: string | null;
          }> | null;
        } | null;
        toolRequest?: {
          __typename?: "ToolRequest";
          id: string;
          type: ToolRequestType;
          priority: ToolRequestPriority;
          payload: string;
        } | null;
      };
};

export const MeDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Me" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "me" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "Account" },
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
                        name: { kind: "Name", value: "twitterId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "twitterName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "twitterUsername" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "twitterAvatar" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "telegramId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "telegramName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "telegramUsername" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "telegramAvatar" },
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
} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const DisconnectTwitterDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "DisconnectTwitter" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "disconnectTwitter" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "Account" },
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
                        name: { kind: "Name", value: "twitterId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "twitterName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "twitterUsername" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "twitterAvatar" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "telegramId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "telegramName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "telegramUsername" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "telegramAvatar" },
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
  DisconnectTwitterMutation,
  DisconnectTwitterMutationVariables
>;
export const DisconnectTelegramDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "DisconnectTelegram" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "disconnectTelegram" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "Account" },
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
                        name: { kind: "Name", value: "twitterId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "twitterName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "twitterUsername" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "twitterAvatar" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "telegramId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "telegramName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "telegramUsername" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "telegramAvatar" },
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
  DisconnectTelegramMutation,
  DisconnectTelegramMutationVariables
>;
export const GenerateImageDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "GenerateImage" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "subthreadId" },
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
            name: { kind: "Name", value: "generateImage" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "subthreadId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "subthreadId" },
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
                    name: { kind: "Name", value: "GenRequest" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "_id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "subthreadId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "teamId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "address" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "metadata" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "type" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "images" },
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
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "model_mesh" },
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
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "timings" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "inference" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "credits" },
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
  GenerateImageMutation,
  GenerateImageMutationVariables
>;
export const GenerateModelDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "GenerateModel" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "subthreadId" },
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
            name: { kind: "Name", value: "imageRequestId" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
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
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "generateModel" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "subthreadId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "subthreadId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "imageRequestId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "imageRequestId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "imageUrl" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "imageUrl" },
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
                    name: { kind: "Name", value: "GenRequest" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "_id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "subthreadId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "teamId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "address" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "metadata" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "type" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "images" },
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
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "model_mesh" },
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
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "timings" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "inference" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "credits" },
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
  GenerateModelMutation,
  GenerateModelMutationVariables
>;
export const GetThreadsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetThreads" },
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
            name: { kind: "Name", value: "ThreadFilter" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getThreads" },
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
                    name: { kind: "Name", value: "ThreadsPage" },
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
                              name: { kind: "Name", value: "address" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "title" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "style" },
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
} as unknown as DocumentNode<GetThreadsQuery, GetThreadsQueryVariables>;
export const GetSubthreadsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetSubthreads" },
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
            name: { kind: "Name", value: "SubthreadFilter" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getSubthreads" },
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
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "SubthreadsPage" },
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
                              name: { kind: "Name", value: "address" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "teamId" },
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
                              name: { kind: "Name", value: "address" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "threadId" },
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
                              name: { kind: "Name", value: "imageUrl" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "strength" },
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
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetSubthreadsQuery, GetSubthreadsQueryVariables>;
export const GetSubthreadDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetSubthread" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "subthreadId" },
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
            name: { kind: "Name", value: "getSubthread" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "subthreadId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "subthreadId" },
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
                    name: { kind: "Name", value: "Subthread" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "_id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "address" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "teamId" },
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
                        name: { kind: "Name", value: "threadId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "prompt" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "style" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "imageUrl" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "strength" },
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
} as unknown as DocumentNode<GetSubthreadQuery, GetSubthreadQueryVariables>;
export const GetSubthreadGenRequestsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetSubthreadGenRequests" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "subthreadId" },
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
            name: { kind: "Name", value: "getSubthreadGenRequests" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "subthreadId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "subthreadId" },
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
                    name: { kind: "Name", value: "GenRequestsPage" },
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
                              name: { kind: "Name", value: "subthreadId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "address" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "teamId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "metadata" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "type" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "images" },
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
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "model_mesh" },
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
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "timings" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "inference" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "credits" },
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
                              name: { kind: "Name", value: "tokenized" },
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
  GetSubthreadGenRequestsQuery,
  GetSubthreadGenRequestsQueryVariables
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
            name: { kind: "Name", value: "ShareableBoardFilter" },
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
            name: { kind: "Name", value: "messageId" },
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
                name: { kind: "Name", value: "messageId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "messageId" },
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
                              name: { kind: "Name", value: "status" },
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
                                    name: { kind: "Name", value: "model" },
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
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "images" },
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
                                    name: { kind: "Name", value: "id" },
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
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nftId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "credits" },
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
            name: { kind: "Name", value: "sendMessage" },
            arguments: [
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
                name: { kind: "Name", value: "imageUrls" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "imageUrls" },
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
                    name: { kind: "Name", value: "Messages" },
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
                              name: { kind: "Name", value: "status" },
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
                                    name: { kind: "Name", value: "model" },
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
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "images" },
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
                                    name: { kind: "Name", value: "id" },
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
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nftId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "credits" },
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
export const ConfirmToolMessageDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "ConfirmToolMessage" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "messageId" },
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
            name: { kind: "Name", value: "confirmToolMessage" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "messageId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "messageId" },
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
                    name: { kind: "Name", value: "Message" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "_id" } },
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
                      { kind: "Field", name: { kind: "Name", value: "role" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
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
                              name: { kind: "Name", value: "model" },
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
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "images" },
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
                              name: { kind: "Name", value: "id" },
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
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "credits" },
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
  ConfirmToolMessageMutation,
  ConfirmToolMessageMutationVariables
>;
export const CancelToolMessageDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CancelToolMessage" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "messageId" },
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
            name: { kind: "Name", value: "cancelToolMessage" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "messageId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "messageId" },
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
                    name: { kind: "Name", value: "Message" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "_id" } },
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
                      { kind: "Field", name: { kind: "Name", value: "role" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
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
                              name: { kind: "Name", value: "model" },
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
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "images" },
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
                              name: { kind: "Name", value: "id" },
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
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "nftId" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "credits" },
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
  CancelToolMessageMutation,
  CancelToolMessageMutationVariables
>;

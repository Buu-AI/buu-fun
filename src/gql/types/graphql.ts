/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type Account = {
  __typename?: 'Account';
  address: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  telegramAvatar?: Maybe<Scalars['String']['output']>;
  telegramId?: Maybe<Scalars['Float']['output']>;
  telegramName?: Maybe<Scalars['String']['output']>;
  telegramUsername?: Maybe<Scalars['String']['output']>;
  twitterAvatar?: Maybe<Scalars['String']['output']>;
  twitterEmail?: Maybe<Scalars['String']['output']>;
  twitterId?: Maybe<Scalars['String']['output']>;
  twitterName?: Maybe<Scalars['String']['output']>;
  twitterUsername?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type AccountResult = Account | HandledError;

export type ApiKey = {
  __typename?: 'ApiKey';
  _id: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  expiresAt?: Maybe<Scalars['DateTimeISO']['output']>;
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
  permissions: Array<Scalars['String']['output']>;
  teamId: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type ApiKeyFilter = {
  _id_eq?: InputMaybe<Scalars['String']['input']>;
  _id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  _id_ne?: InputMaybe<Scalars['String']['input']>;
  _id_nin?: InputMaybe<Array<Scalars['String']['input']>>;
  createdAt_eq?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAt_lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAt_ne?: InputMaybe<Scalars['DateTimeISO']['input']>;
  teamId_eq?: InputMaybe<Scalars['String']['input']>;
  teamId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  teamId_ne?: InputMaybe<Scalars['String']['input']>;
  teamId_nin?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAt_eq?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAt_lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAt_ne?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type ApiKeyPage = {
  __typename?: 'ApiKeyPage';
  items: Array<ApiKey>;
  metadata: Metadata;
};

export type ApiKeyPageResult = ApiKeyPage | HandledError;

export type ApiKeyResult = ApiKey | HandledError;

export enum BirdeyeHistoricalDataTimeTypes {
  All = 'ALL',
  LastDay = 'LAST_DAY',
  LastHour = 'LAST_HOUR',
  LastMonth = 'LAST_MONTH',
  LastThreeHours = 'LAST_THREE_HOURS',
  LastWeek = 'LAST_WEEK',
  LastYear = 'LAST_YEAR'
}

export type BirdeyeHistoricalPriceItemResponse = {
  __typename?: 'BirdeyeHistoricalPriceItemResponse';
  unixTime: Scalars['Int']['output'];
  value: Scalars['Float']['output'];
};

export type BirdeyeHistoricalPriceResponse = {
  __typename?: 'BirdeyeHistoricalPriceResponse';
  items: Array<BirdeyeHistoricalPriceItemResponse>;
};

export type BirdeyeHistoricalPriceResult = BirdeyeHistoricalPriceResponse | HandledError;

export type BirdeyeTokenOverviewResponse = {
  __typename?: 'BirdeyeTokenOverviewResponse';
  address: Scalars['String']['output'];
  description: Scalars['String']['output'];
  fullyDilutedValue: Scalars['Float']['output'];
  marketCap: Scalars['Float']['output'];
  price: Scalars['Float']['output'];
  totalSupply: Scalars['Float']['output'];
};

export type BirdeyeTokenOverviewResult = BirdeyeTokenOverviewResponse | HandledError;

export type Credit = {
  __typename?: 'Credit';
  _id: Scalars['String']['output'];
  available: Scalars['Float']['output'];
  confirmed: Scalars['Float']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  pending: Scalars['Float']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type CreditResult = Credit | HandledError;

export enum CreditsPackageKeys {
  ExtraLarge = 'EXTRA_LARGE',
  Large = 'LARGE',
  Medium = 'MEDIUM',
  Small = 'SMALL'
}

export type CreditsPurchase = {
  __typename?: 'CreditsPurchase';
  _id: Scalars['String']['output'];
  address?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  credits: Scalars['Float']['output'];
  metadata: Scalars['JSON']['output'];
  price?: Maybe<Scalars['Float']['output']>;
  teamId: Scalars['String']['output'];
  type: CreditsPurchaseType;
};

export type CreditsPurchaseFilter = {
  _id_eq?: InputMaybe<Scalars['String']['input']>;
  _id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  _id_ne?: InputMaybe<Scalars['String']['input']>;
  _id_nin?: InputMaybe<Array<Scalars['String']['input']>>;
  createdAt_eq?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAt_lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAt_ne?: InputMaybe<Scalars['DateTimeISO']['input']>;
  teamId_eq?: InputMaybe<Scalars['String']['input']>;
  teamId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  teamId_ne?: InputMaybe<Scalars['String']['input']>;
  teamId_nin?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CreditsPurchasePage = {
  __typename?: 'CreditsPurchasePage';
  items: Array<CreditsPurchase>;
  metadata: Metadata;
};

export type CreditsPurchasePageResult = CreditsPurchasePage | HandledError;

/** Which type of CreditPurchase was used */
export enum CreditsPurchaseType {
  Crypto = 'CRYPTO',
  OnDemand = 'ON_DEMAND',
  Staking = 'STAKING',
  Subscription = 'SUBSCRIPTION',
  Voucher = 'VOUCHER'
}

export type ExpirationInput = {
  units: Scalars['String']['input'];
  value: Scalars['Float']['input'];
};

export type GenRequest = {
  __typename?: 'GenRequest';
  _id: Scalars['String']['output'];
  address?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  credits: Scalars['Float']['output'];
  images?: Maybe<Array<Media>>;
  metadata: Scalars['JSON']['output'];
  model_mesh?: Maybe<Media>;
  status: GenRequestStatusEnum;
  subthreadId: Scalars['String']['output'];
  teamId: Scalars['String']['output'];
  timings?: Maybe<Timings>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

/** The application that generated the request */
export enum GenRequestApp {
  FluxDevImageToImage = 'FluxDevImageToImage',
  FluxLora = 'FluxLora',
  FluxLoraCanny = 'FluxLoraCanny',
  Trellis = 'Trellis'
}

export type GenRequestResult = GenRequest | HandledError;

export type GenRequestSnapshot = {
  __typename?: 'GenRequestSnapshot';
  createdAt: Scalars['DateTimeISO']['output'];
  genRequestId: Scalars['String']['output'];
  images?: Maybe<Array<Media>>;
  metadata: Scalars['JSON']['output'];
  model_mesh?: Maybe<Media>;
  type: GenRequestApp;
};

/** The status of a request */
export enum GenRequestStatusEnum {
  Error = 'Error',
  InProgress = 'InProgress',
  Success = 'Success'
}

export type GenRequestsPage = {
  __typename?: 'GenRequestsPage';
  items: Array<GenRequest>;
  metadata: Metadata;
};

export type GenRequestsPageResult = GenRequestsPage | HandledError;

export type GenerateCustomerPortalSessionOutput = {
  __typename?: 'GenerateCustomerPortalSessionOutput';
  customerPortalLink: Scalars['String']['output'];
  planKey: StripeSubscriptionPlanKeys;
};

export type GeneratePresignedPostResult = HandledError | PresignedPost;

export type GeneratePresignedUrl = {
  __typename?: 'GeneratePresignedUrl';
  expiresIn: Scalars['Float']['output'];
  key: Scalars['String']['output'];
  presignedUrl: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type GeneratePresignedUrlInput = {
  contentType: SupportedUploadContentTypesEnum;
};

export type GeneratePresignedUrlResult = GeneratePresignedUrl | HandledError;

export type GenerateSubscriptionPaymentLinkResult = HandledError | SuscriptionPaymentLinkOutput;

export type GetStakingGlobalData = {
  __typename?: 'GetStakingGlobalData';
  circulatingSupply: Scalars['String']['output'];
  rewardPools: Array<RewardPool>;
  stakeEntries: Array<StakeEntry>;
  tokenMint: TokenMint;
  totalAmount: Scalars['String']['output'];
  totalEffectiveAmount: Scalars['String']['output'];
  totalRewardsPerDay: Scalars['String']['output'];
  totalStakedByUsers: Scalars['String']['output'];
};

export type GetStakingGlobalDataResult = GetStakingGlobalData | HandledError;

export type HandledError = {
  __typename?: 'HandledError';
  code: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type Idea = {
  __typename?: 'Idea';
  createdAt: Scalars['DateTimeISO']['output'];
  genRequests: Array<GenRequestSnapshot>;
  prompt?: Maybe<Scalars['String']['output']>;
  style?: Maybe<SubthreadStyle>;
  subthreadId: Scalars['String']['output'];
};

export type Media = {
  __typename?: 'Media';
  alt: Scalars['String']['output'];
  keyS3?: Maybe<Scalars['String']['output']>;
  size: Scalars['Float']['output'];
  type: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type Metadata = {
  __typename?: 'Metadata';
  limit?: Maybe<Scalars['Int']['output']>;
  numElements?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  orderBy?: Maybe<Scalars['String']['output']>;
  orderDirection?: Maybe<OrderDirection>;
  page?: Maybe<Scalars['Int']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addTeamMember: TeamResult;
  createApiKey: ApiKeyResult;
  createShareableBoard: ShareableBoardResult;
  createTeam: TeamResult;
  deleteApiKey: ApiKeyResult;
  deleteShareableBoard: ShareableBoardResult;
  disconnectTelegram: AccountResult;
  disconnectTwitter: AccountResult;
  generateImage: GenRequestResult;
  generateModel: GenRequestResult;
  generatePresignedPost: GeneratePresignedPostResult;
  generatePresignedUrl: GeneratePresignedUrlResult;
  generateSubthread: SubthreadResult;
  linkReferralAccount: ReferralAccountResult;
  redeemVoucher: CreditResult;
  removeTeamMember: TeamResult;
  rotateApiKey: ApiKeyResult;
  updateShareableBoardVisibility: ShareableBoardResult;
  updateTeamData: TeamResult;
  updateTeamMemberRole: TeamResult;
};


export type MutationAddTeamMemberArgs = {
  member: Scalars['String']['input'];
};


export type MutationCreateApiKeyArgs = {
  expiresIn?: InputMaybe<ExpirationInput>;
  name: Scalars['String']['input'];
};


export type MutationCreateShareableBoardArgs = {
  threadId: Scalars['String']['input'];
};


export type MutationCreateTeamArgs = {
  name: Scalars['String']['input'];
};


export type MutationDeleteApiKeyArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteShareableBoardArgs = {
  shareableBoardId: Scalars['String']['input'];
};


export type MutationGenerateImageArgs = {
  subthreadId: Scalars['String']['input'];
};


export type MutationGenerateModelArgs = {
  imageRequestId?: InputMaybe<Scalars['String']['input']>;
  imageUrl: Scalars['String']['input'];
  subthreadId: Scalars['String']['input'];
};


export type MutationGeneratePresignedPostArgs = {
  fileName: Scalars['String']['input'];
};


export type MutationGeneratePresignedUrlArgs = {
  input: GeneratePresignedUrlInput;
};


export type MutationGenerateSubthreadArgs = {
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  numImages?: InputMaybe<Scalars['Float']['input']>;
  prompt?: InputMaybe<Scalars['String']['input']>;
  strength?: InputMaybe<Scalars['Float']['input']>;
  style?: InputMaybe<SubthreadStyle>;
  threadId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationLinkReferralAccountArgs = {
  code: Scalars['String']['input'];
};


export type MutationRedeemVoucherArgs = {
  code: Scalars['String']['input'];
};


export type MutationRemoveTeamMemberArgs = {
  member: Scalars['String']['input'];
};


export type MutationRotateApiKeyArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateShareableBoardVisibilityArgs = {
  isPublic: Scalars['Boolean']['input'];
  shareableBoardId: Scalars['String']['input'];
};


export type MutationUpdateTeamDataArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  wallet?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateTeamMemberRoleArgs = {
  member: Scalars['String']['input'];
  newRole: TeamRole;
};

/** Order direction */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Pagination = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<OrderDirection>;
};

export type PresignedPost = {
  __typename?: 'PresignedPost';
  fields: Scalars['JSON']['output'];
  url: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  generateCreditsPackagePaymentLink: UrlResult;
  generateCustomerPortalSession: GenerateCustomerPortalSessionOutput;
  generateSubscriptionPaymentLink: GenerateSubscriptionPaymentLinkResult;
  getCreditsPurchases: CreditsPurchasePageResult;
  getMyCredits: CreditResult;
  getReferralAccount: ReferralAccountResult;
  getReferralRewards: ReferralRewardPageResult;
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


export type QueryGetReferralRewardsArgs = {
  filters?: InputMaybe<ReferralRewardFilter>;
  pagination?: InputMaybe<Pagination>;
};


export type QueryGetShareableBoardArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetSubthreadArgs = {
  subthreadId: Scalars['String']['input'];
};


export type QueryGetSubthreadGenRequestsArgs = {
  subthreadId: Scalars['String']['input'];
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
  __typename?: 'ReferralAccount';
  _id: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  linkedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  referee?: Maybe<ReferralAccount>;
  refereeCode?: Maybe<Scalars['String']['output']>;
  referralCode: Scalars['String']['output'];
};

export type ReferralAccountResult = HandledError | ReferralAccount;

export type ReferralReward = {
  __typename?: 'ReferralReward';
  _id: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  creditsPurchaseId?: Maybe<Scalars['String']['output']>;
  decimals?: Maybe<Scalars['Int']['output']>;
  referee: Scalars['String']['output'];
  referral: Scalars['String']['output'];
  tokens?: Maybe<Scalars['String']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
};

export type ReferralRewardFilter = {
  _id_eq?: InputMaybe<Scalars['String']['input']>;
  _id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  _id_ne?: InputMaybe<Scalars['String']['input']>;
  _id_nin?: InputMaybe<Array<Scalars['String']['input']>>;
  createdAt_eq?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAt_lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAt_ne?: InputMaybe<Scalars['DateTimeISO']['input']>;
  referee_eq?: InputMaybe<Scalars['String']['input']>;
  referee_in?: InputMaybe<Array<Scalars['String']['input']>>;
  referee_ne?: InputMaybe<Scalars['String']['input']>;
  referee_nin?: InputMaybe<Array<Scalars['String']['input']>>;
  referral_eq?: InputMaybe<Scalars['String']['input']>;
  referral_in?: InputMaybe<Array<Scalars['String']['input']>>;
  referral_ne?: InputMaybe<Scalars['String']['input']>;
  referral_nin?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ReferralRewardPage = {
  __typename?: 'ReferralRewardPage';
  items: Array<ReferralReward>;
  metadata: Metadata;
};

export type ReferralRewardPageResult = HandledError | ReferralRewardPage;

export type RewardPool = {
  __typename?: 'RewardPool';
  account: RewardPoolAccount;
  publicKey: Scalars['String']['output'];
};

export type RewardPoolAccount = {
  __typename?: 'RewardPoolAccount';
  authority: Scalars['String']['output'];
  buffer: Array<Scalars['Int']['output']>;
  bump: Scalars['Int']['output'];
  claimedAmount: Scalars['String']['output'];
  createdTs: Scalars['String']['output'];
  creator: Scalars['String']['output'];
  fundedAmount: Scalars['String']['output'];
  lastAmountUpdateTs: Scalars['String']['output'];
  lastClaimPeriod: Scalars['String']['output'];
  lastPeriodUpdateTs: Scalars['String']['output'];
  lastRewardAmount: Scalars['String']['output'];
  lastRewardPeriod: Scalars['String']['output'];
  mint: Scalars['String']['output'];
  nonce: Scalars['Int']['output'];
  permissionless: Scalars['Boolean']['output'];
  rewardAmount: Scalars['String']['output'];
  rewardPeriod: Scalars['String']['output'];
  stakePool: Scalars['String']['output'];
  vault: Scalars['String']['output'];
};

export type ShareableBoard = {
  __typename?: 'ShareableBoard';
  _id: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  creator?: Maybe<Scalars['String']['output']>;
  ideas: Array<Idea>;
  isPublic: Scalars['Boolean']['output'];
  teamId: Scalars['String']['output'];
  threadId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type ShareableBoardFilter = {
  _id_eq?: InputMaybe<Scalars['String']['input']>;
  _id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  _id_ne?: InputMaybe<Scalars['String']['input']>;
  _id_nin?: InputMaybe<Array<Scalars['String']['input']>>;
  createdAt_eq?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAt_lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAt_ne?: InputMaybe<Scalars['DateTimeISO']['input']>;
  isPublic_eq?: InputMaybe<Scalars['Boolean']['input']>;
  teamId_eq?: InputMaybe<Scalars['String']['input']>;
  teamId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  teamId_ne?: InputMaybe<Scalars['String']['input']>;
  teamId_nin?: InputMaybe<Array<Scalars['String']['input']>>;
  threadId_eq?: InputMaybe<Scalars['String']['input']>;
  threadId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  threadId_ne?: InputMaybe<Scalars['String']['input']>;
  threadId_nin?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ShareableBoardPage = {
  __typename?: 'ShareableBoardPage';
  items: Array<ShareableBoard>;
  metadata: Metadata;
};

export type ShareableBoardPageResult = HandledError | ShareableBoardPage;

export type ShareableBoardResult = HandledError | ShareableBoard;

export type StakeEntry = {
  __typename?: 'StakeEntry';
  account: StakeEntryAccount;
  publicKey: Scalars['String']['output'];
};

export type StakeEntryAccount = {
  __typename?: 'StakeEntryAccount';
  amount: Scalars['String']['output'];
  authority: Scalars['String']['output'];
  buffer: Array<Scalars['Int']['output']>;
  closedTs: Scalars['String']['output'];
  createdTs: Scalars['String']['output'];
  duration: Scalars['String']['output'];
  effectiveAmount: Scalars['String']['output'];
  nonce: Scalars['Int']['output'];
  payer: Scalars['String']['output'];
  priorTotalEffectiveStake: Scalars['String']['output'];
  stakePool: Scalars['String']['output'];
  unstakeTs: Scalars['String']['output'];
};

export enum StripeSubscriptionPlanKeys {
  Basic = 'BASIC',
  Enterprise = 'ENTERPRISE',
  Free = 'FREE',
  Pro = 'PRO',
  Unlimited = 'UNLIMITED'
}

export type Subthread = {
  __typename?: 'Subthread';
  _id: Scalars['String']['output'];
  address?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  prompt?: Maybe<Scalars['String']['output']>;
  strength?: Maybe<Scalars['Float']['output']>;
  style?: Maybe<SubthreadStyle>;
  teamId: Scalars['String']['output'];
  threadId: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type SubthreadFilter = {
  _id_eq?: InputMaybe<Scalars['String']['input']>;
  _id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  _id_ne?: InputMaybe<Scalars['String']['input']>;
  _id_nin?: InputMaybe<Array<Scalars['String']['input']>>;
  createdAt_eq?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAt_lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAt_ne?: InputMaybe<Scalars['DateTimeISO']['input']>;
  teamId_eq?: InputMaybe<Scalars['String']['input']>;
  teamId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  teamId_ne?: InputMaybe<Scalars['String']['input']>;
  teamId_nin?: InputMaybe<Array<Scalars['String']['input']>>;
  threadId_eq?: InputMaybe<Scalars['String']['input']>;
  threadId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  threadId_ne?: InputMaybe<Scalars['String']['input']>;
  threadId_nin?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAt_eq?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAt_lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAt_ne?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type SubthreadPageResult = HandledError | SubthreadsPage;

export type SubthreadResult = HandledError | Subthread;

/** The style of the subthread */
export enum SubthreadStyle {
  Clay = 'Clay',
  Cute = 'Cute',
  Environment = 'Environment',
  Fantasy = 'Fantasy',
  Isometric = 'Isometric',
  LowPoly = 'LowPoly',
  Metallic = 'Metallic',
  Realistic = 'Realistic',
  SciFi = 'SciFi',
  Stylized = 'Stylized',
  Toon = 'Toon',
  Voxel = 'Voxel',
  Weapons = 'Weapons',
  Wireframe = 'Wireframe'
}

export type SubthreadsPage = {
  __typename?: 'SubthreadsPage';
  items: Array<Subthread>;
  metadata: Metadata;
};

/** The supported content types for upload */
export enum SupportedUploadContentTypesEnum {
  ImageJpeg = 'ImageJpeg',
  ImagePng = 'ImagePng'
}

export type SuscriptionPaymentLinkOutput = {
  __typename?: 'SuscriptionPaymentLinkOutput';
  url: Scalars['String']['output'];
};

export type Team = {
  __typename?: 'Team';
  _id: Scalars['String']['output'];
  available: Scalars['Float']['output'];
  confirmed: Scalars['Float']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  creator: Scalars['String']['output'];
  members: Array<TeamMember>;
  name: Scalars['String']['output'];
  pending: Scalars['Float']['output'];
  type: TeamType;
  updatedAt: Scalars['DateTimeISO']['output'];
  wallet?: Maybe<Scalars['String']['output']>;
};

export type TeamFilter = {
  _id_eq?: InputMaybe<Scalars['String']['input']>;
  _id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  _id_ne?: InputMaybe<Scalars['String']['input']>;
  _id_nin?: InputMaybe<Array<Scalars['String']['input']>>;
  createdAt_eq?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAt_lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAt_ne?: InputMaybe<Scalars['DateTimeISO']['input']>;
  creator_eq?: InputMaybe<Scalars['String']['input']>;
  creator_in?: InputMaybe<Array<Scalars['String']['input']>>;
  creator_ne?: InputMaybe<Scalars['String']['input']>;
  creator_nin?: InputMaybe<Array<Scalars['String']['input']>>;
  type_eq?: InputMaybe<Scalars['String']['input']>;
};

export type TeamMember = {
  __typename?: 'TeamMember';
  address: Scalars['String']['output'];
  role: TeamRole;
  status: TeamMemberStatus;
};

/** Team member status */
export enum TeamMemberStatus {
  Active = 'ACTIVE',
  Pending = 'PENDING'
}

export type TeamPage = {
  __typename?: 'TeamPage';
  items: Array<Team>;
  metadata: Metadata;
};

export type TeamPageResult = HandledError | TeamPage;

export type TeamResult = HandledError | Team;

/** Team member role */
export enum TeamRole {
  Admin = 'ADMIN',
  Member = 'MEMBER'
}

/** Team type */
export enum TeamType {
  Personal = 'PERSONAL',
  Studio = 'STUDIO'
}

export type Thread = {
  __typename?: 'Thread';
  _id: Scalars['String']['output'];
  address?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  style?: Maybe<SubthreadStyle>;
  teamId: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type ThreadFilter = {
  _id_eq?: InputMaybe<Scalars['String']['input']>;
  _id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  _id_ne?: InputMaybe<Scalars['String']['input']>;
  _id_nin?: InputMaybe<Array<Scalars['String']['input']>>;
  createdAt_eq?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAt_lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAt_ne?: InputMaybe<Scalars['DateTimeISO']['input']>;
  teamId_eq?: InputMaybe<Scalars['String']['input']>;
  teamId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  teamId_ne?: InputMaybe<Scalars['String']['input']>;
  teamId_nin?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAt_eq?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAt_lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAt_ne?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type ThreadPageResult = HandledError | ThreadsPage;

export type ThreadsPage = {
  __typename?: 'ThreadsPage';
  items: Array<Thread>;
  metadata: Metadata;
};

export type Timings = {
  __typename?: 'Timings';
  inference?: Maybe<Scalars['Float']['output']>;
};

export type TokenMint = {
  __typename?: 'TokenMint';
  address: Scalars['String']['output'];
  decimals: Scalars['Int']['output'];
  freezeAuthority?: Maybe<Scalars['String']['output']>;
  isInitialized: Scalars['Boolean']['output'];
  mintAuthority?: Maybe<Scalars['String']['output']>;
  supply: Scalars['String']['output'];
};

export type Url = {
  __typename?: 'Url';
  url: Scalars['String']['output'];
};

export type UrlResult = HandledError | Url;

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'Account', address: string, twitterId?: string | null, twitterName?: string | null, twitterUsername?: string | null, twitterAvatar?: string | null, telegramId?: number | null, telegramName?: string | null, telegramUsername?: string | null, telegramAvatar?: string | null, createdAt: any, updatedAt: any } | { __typename?: 'HandledError', code: string, message: string } };

export type DisconnectTwitterMutationVariables = Exact<{ [key: string]: never; }>;


export type DisconnectTwitterMutation = { __typename?: 'Mutation', disconnectTwitter: { __typename?: 'Account', address: string, twitterId?: string | null, twitterName?: string | null, twitterUsername?: string | null, twitterAvatar?: string | null, telegramId?: number | null, telegramName?: string | null, telegramUsername?: string | null, telegramAvatar?: string | null, createdAt: any, updatedAt: any } | { __typename?: 'HandledError', code: string, message: string } };

export type DisconnectTelegramMutationVariables = Exact<{ [key: string]: never; }>;


export type DisconnectTelegramMutation = { __typename?: 'Mutation', disconnectTelegram: { __typename?: 'Account', address: string, twitterId?: string | null, twitterName?: string | null, twitterUsername?: string | null, twitterAvatar?: string | null, telegramId?: number | null, telegramName?: string | null, telegramUsername?: string | null, telegramAvatar?: string | null, createdAt: any, updatedAt: any } | { __typename?: 'HandledError', code: string, message: string } };


export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Account"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"twitterId"}},{"kind":"Field","name":{"kind":"Name","value":"twitterName"}},{"kind":"Field","name":{"kind":"Name","value":"twitterUsername"}},{"kind":"Field","name":{"kind":"Name","value":"twitterAvatar"}},{"kind":"Field","name":{"kind":"Name","value":"telegramId"}},{"kind":"Field","name":{"kind":"Name","value":"telegramName"}},{"kind":"Field","name":{"kind":"Name","value":"telegramUsername"}},{"kind":"Field","name":{"kind":"Name","value":"telegramAvatar"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HandledError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const DisconnectTwitterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DisconnectTwitter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"disconnectTwitter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Account"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"twitterId"}},{"kind":"Field","name":{"kind":"Name","value":"twitterName"}},{"kind":"Field","name":{"kind":"Name","value":"twitterUsername"}},{"kind":"Field","name":{"kind":"Name","value":"twitterAvatar"}},{"kind":"Field","name":{"kind":"Name","value":"telegramId"}},{"kind":"Field","name":{"kind":"Name","value":"telegramName"}},{"kind":"Field","name":{"kind":"Name","value":"telegramUsername"}},{"kind":"Field","name":{"kind":"Name","value":"telegramAvatar"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HandledError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<DisconnectTwitterMutation, DisconnectTwitterMutationVariables>;
export const DisconnectTelegramDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DisconnectTelegram"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"disconnectTelegram"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Account"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"twitterId"}},{"kind":"Field","name":{"kind":"Name","value":"twitterName"}},{"kind":"Field","name":{"kind":"Name","value":"twitterUsername"}},{"kind":"Field","name":{"kind":"Name","value":"twitterAvatar"}},{"kind":"Field","name":{"kind":"Name","value":"telegramId"}},{"kind":"Field","name":{"kind":"Name","value":"telegramName"}},{"kind":"Field","name":{"kind":"Name","value":"telegramUsername"}},{"kind":"Field","name":{"kind":"Name","value":"telegramAvatar"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HandledError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<DisconnectTelegramMutation, DisconnectTelegramMutationVariables>;
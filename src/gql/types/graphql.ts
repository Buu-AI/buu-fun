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
  address: Scalars["String"]["output"];
  createdAt: Scalars["DateTimeISO"]["output"];
  credits: Scalars["Float"]["output"];
  metadata: Scalars["JSON"]["output"];
  price?: Maybe<Scalars["Float"]["output"]>;
  type: CreditsPurchaseType;
};

export type CreditsPurchaseFilter = {
  _id_eq?: InputMaybe<Scalars["String"]["input"]>;
  _id_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  _id_ne?: InputMaybe<Scalars["String"]["input"]>;
  _id_nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  address_eq?: InputMaybe<Scalars["String"]["input"]>;
  address_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  address_ne?: InputMaybe<Scalars["String"]["input"]>;
  address_nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  createdAt_eq?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_gt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_gte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_lt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_lte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_ne?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
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
  address: Scalars["String"]["output"];
  createdAt: Scalars["DateTimeISO"]["output"];
  credits: Scalars["Float"]["output"];
  images?: Maybe<Array<Media>>;
  metadata: Scalars["JSON"]["output"];
  model_mesh?: Maybe<Media>;
  status: GenRequestStatusEnum;
  subthreadId: Scalars["String"]["output"];
  timings?: Maybe<Timings>;
  type: Scalars["String"]["output"];
  updatedAt: Scalars["DateTimeISO"]["output"];
};

/** The application that generated the request */
export enum GenRequestApp {
  FluxDevImageToImage = "FluxDevImageToImage",
  FluxLora = "FluxLora",
  FluxLoraCanny = "FluxLoraCanny",
  Trellis = "Trellis",
}

export type GenRequestResult = GenRequest | HandledError;

export type GenRequestSnapshot = {
  __typename?: "GenRequestSnapshot";
  createdAt: Scalars["DateTimeISO"]["output"];
  genRequestId: Scalars["String"]["output"];
  images?: Maybe<Array<Media>>;
  metadata: Scalars["JSON"]["output"];
  model_mesh?: Maybe<Media>;
  type: GenRequestApp;
};

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

export type HandledError = {
  __typename?: "HandledError";
  code: Scalars["String"]["output"];
  message: Scalars["String"]["output"];
};

export type Idea = {
  __typename?: "Idea";
  createdAt: Scalars["DateTimeISO"]["output"];
  genRequests: Array<GenRequestSnapshot>;
  prompt?: Maybe<Scalars["String"]["output"]>;
  style?: Maybe<SubthreadStyle>;
  subthreadId: Scalars["String"]["output"];
};

export type Media = {
  __typename?: "Media";
  alt: Scalars["String"]["output"];
  keyS3?: Maybe<Scalars["String"]["output"]>;
  size: Scalars["Float"]["output"];
  type: Scalars["String"]["output"];
  url: Scalars["String"]["output"];
};

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

export type Mutation = {
  __typename?: "Mutation";
  createApiKey: ApiKeyResult;
  createShareableBoard: ShareableBoardResult;
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
  rotateApiKey: ApiKeyResult;
  updateShareableBoardVisibility: ShareableBoardResult;
};

export type MutationCreateApiKeyArgs = {
  expiresIn?: InputMaybe<ExpirationInput>;
  name: Scalars["String"]["input"];
};

export type MutationCreateShareableBoardArgs = {
  threadId: Scalars["String"]["input"];
};

export type MutationDeleteApiKeyArgs = {
  id: Scalars["String"]["input"];
};

export type MutationDeleteShareableBoardArgs = {
  shareableBoardId: Scalars["String"]["input"];
};

export type MutationGenerateImageArgs = {
  subthreadId: Scalars["String"]["input"];
};

export type MutationGenerateModelArgs = {
  imageRequestId?: InputMaybe<Scalars["String"]["input"]>;
  imageUrl: Scalars["String"]["input"];
  subthreadId: Scalars["String"]["input"];
};

export type MutationGeneratePresignedPostArgs = {
  fileName: Scalars["String"]["input"];
};

export type MutationGeneratePresignedUrlArgs = {
  input: GeneratePresignedUrlInput;
};

export type MutationGenerateSubthreadArgs = {
  imageUrl?: InputMaybe<Scalars["String"]["input"]>;
  numImages?: InputMaybe<Scalars["Float"]["input"]>;
  prompt?: InputMaybe<Scalars["String"]["input"]>;
  strength?: InputMaybe<Scalars["Float"]["input"]>;
  style?: InputMaybe<SubthreadStyle>;
  threadId?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationLinkReferralAccountArgs = {
  code: Scalars["String"]["input"];
};

export type MutationRedeemVoucherArgs = {
  code: Scalars["String"]["input"];
};

export type MutationRotateApiKeyArgs = {
  id: Scalars["String"]["input"];
};

export type MutationUpdateShareableBoardVisibilityArgs = {
  isPublic: Scalars["Boolean"]["input"];
  shareableBoardId: Scalars["String"]["input"];
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

export type Query = {
  __typename?: "Query";
  generateCreditsPackagePaymentLink: UrlResult;
  generateCustomerPortalSession: GenerateCustomerPortalSessionOutput;
  generateSubscriptionPaymentLink: GenerateSubscriptionPaymentLinkResult;
  getCreditsPurchases: CreditsPurchasePageResult;
  getMyCredits: CreditResult;
  getReferralAccount: ReferralAccountResult;
  getReferralRewards: ReferralRewardPageResult;
  getShareableBoard: ShareableBoardResult;
  getSubthread: SubthreadResult;
  getSubthreadGenRequests: GenRequestsPageResult;
  getSubthreads: SubthreadPageResult;
  getTeam: TeamResult;
  getThreads: ThreadPageResult;
  getUserShareableBoard: ShareableBoardPageResult;
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

export type QueryGetUserShareableBoardArgs = {
  filters?: InputMaybe<ShareableBoardFilter>;
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

export type ShareableBoard = {
  __typename?: "ShareableBoard";
  _id: Scalars["String"]["output"];
  createdAt: Scalars["DateTimeISO"]["output"];
  creator: Scalars["String"]["output"];
  ideas: Array<Idea>;
  isPublic: Scalars["Boolean"]["output"];
  threadId: Scalars["String"]["output"];
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
  creator_eq?: InputMaybe<Scalars["String"]["input"]>;
  creator_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  creator_ne?: InputMaybe<Scalars["String"]["input"]>;
  creator_nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  isPublic_eq?: InputMaybe<Scalars["Boolean"]["input"]>;
  threadId_eq?: InputMaybe<Scalars["String"]["input"]>;
  threadId_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  threadId_ne?: InputMaybe<Scalars["String"]["input"]>;
  threadId_nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type ShareableBoardPage = {
  __typename?: "ShareableBoardPage";
  items: Array<ShareableBoard>;
  metadata: Metadata;
};

export type ShareableBoardPageResult = HandledError | ShareableBoardPage;

export type ShareableBoardResult = HandledError | ShareableBoard;

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
  address: Scalars["String"]["output"];
  createdAt: Scalars["DateTimeISO"]["output"];
  imageUrl?: Maybe<Scalars["String"]["output"]>;
  prompt?: Maybe<Scalars["String"]["output"]>;
  strength?: Maybe<Scalars["Float"]["output"]>;
  style?: Maybe<SubthreadStyle>;
  threadId: Scalars["String"]["output"];
  updatedAt: Scalars["DateTimeISO"]["output"];
};

export type SubthreadFilter = {
  _id_eq?: InputMaybe<Scalars["String"]["input"]>;
  _id_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  _id_ne?: InputMaybe<Scalars["String"]["input"]>;
  _id_nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  address_eq?: InputMaybe<Scalars["String"]["input"]>;
  address_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  address_ne?: InputMaybe<Scalars["String"]["input"]>;
  address_nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  createdAt_eq?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_gt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_gte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_lt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_lte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_ne?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
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
  members: Array<TeamMember>;
  name: Scalars["String"]["output"];
  pending: Scalars["Float"]["output"];
  updatedAt: Scalars["DateTimeISO"]["output"];
};

export type TeamMember = {
  __typename?: "TeamMember";
  address: Scalars["String"]["output"];
  role: TeamRole;
};

export type TeamResult = HandledError | Team;

/** Team member role */
export enum TeamRole {
  Admin = "ADMIN",
  Member = "MEMBER",
}

export type Thread = {
  __typename?: "Thread";
  _id: Scalars["String"]["output"];
  address: Scalars["String"]["output"];
  createdAt: Scalars["DateTimeISO"]["output"];
  style?: Maybe<SubthreadStyle>;
  title: Scalars["String"]["output"];
  updatedAt: Scalars["DateTimeISO"]["output"];
};

export type ThreadFilter = {
  _id_eq?: InputMaybe<Scalars["String"]["input"]>;
  _id_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  _id_ne?: InputMaybe<Scalars["String"]["input"]>;
  _id_nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  address_eq?: InputMaybe<Scalars["String"]["input"]>;
  address_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  address_ne?: InputMaybe<Scalars["String"]["input"]>;
  address_nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  createdAt_eq?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_gt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_gte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_lt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_lte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_ne?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
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

export type GenerateSubthreadMutationVariables = Exact<{
  prompt: Scalars["String"]["input"];
  style?: InputMaybe<SubthreadStyle>;
  threadId?: InputMaybe<Scalars["String"]["input"]>;
  imageUrl?: InputMaybe<Scalars["String"]["input"]>;
  numImages?: InputMaybe<Scalars["Float"]["input"]>;
  strength?: InputMaybe<Scalars["Float"]["input"]>;
}>;

export type GenerateSubthreadMutation = {
  __typename?: "Mutation";
  generateSubthread:
    | { __typename?: "HandledError"; code: string; message: string }
    | {
        __typename?: "Subthread";
        _id: string;
        address: string;
        createdAt: any;
        updatedAt: any;
        threadId: string;
        prompt?: string | null;
        style?: SubthreadStyle | null;
        imageUrl?: string | null;
        strength?: number | null;
      };
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
        address: string;
        status: GenRequestStatusEnum;
        metadata: any;
        type: string;
        credits: number;
        createdAt: any;
        updatedAt: any;
        images?: Array<{
          __typename?: "Media";
          alt: string;
          keyS3?: string | null;
          size: number;
          type: string;
          url: string;
        }> | null;
        model_mesh?: {
          __typename?: "Media";
          alt: string;
          keyS3?: string | null;
          size: number;
          type: string;
          url: string;
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
        address: string;
        status: GenRequestStatusEnum;
        metadata: any;
        type: string;
        credits: number;
        createdAt: any;
        updatedAt: any;
        images?: Array<{
          __typename?: "Media";
          alt: string;
          keyS3?: string | null;
          size: number;
          type: string;
          url: string;
        }> | null;
        model_mesh?: {
          __typename?: "Media";
          alt: string;
          keyS3?: string | null;
          size: number;
          type: string;
          url: string;
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
          address: string;
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
          address: string;
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
        address: string;
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
          address: string;
          status: GenRequestStatusEnum;
          metadata: any;
          type: string;
          credits: number;
          createdAt: any;
          updatedAt: any;
          images?: Array<{
            __typename?: "Media";
            alt: string;
            keyS3?: string | null;
            size: number;
            type: string;
            url: string;
          }> | null;
          model_mesh?: {
            __typename?: "Media";
            alt: string;
            keyS3?: string | null;
            size: number;
            type: string;
            url: string;
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
        threadId: string;
        title: string;
        creator: string;
        isPublic: boolean;
        createdAt: any;
        ideas: Array<{
          __typename?: "Idea";
          subthreadId: string;
          prompt?: string | null;
          style?: SubthreadStyle | null;
          createdAt: any;
          genRequests: Array<{
            __typename?: "GenRequestSnapshot";
            genRequestId: string;
            type: GenRequestApp;
            createdAt: any;
            metadata: any;
            images?: Array<{
              __typename?: "Media";
              alt: string;
              keyS3?: string | null;
              size: number;
              type: string;
              url: string;
            }> | null;
            model_mesh?: {
              __typename?: "Media";
              alt: string;
              keyS3?: string | null;
              size: number;
              type: string;
              url: string;
            } | null;
          }>;
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
          threadId: string;
          title: string;
          creator: string;
          isPublic: boolean;
          createdAt: any;
          ideas: Array<{
            __typename?: "Idea";
            subthreadId: string;
            prompt?: string | null;
            style?: SubthreadStyle | null;
            createdAt: any;
            genRequests: Array<{
              __typename?: "GenRequestSnapshot";
              genRequestId: string;
              type: GenRequestApp;
              createdAt: any;
              metadata: any;
              images?: Array<{
                __typename?: "Media";
                alt: string;
                keyS3?: string | null;
                size: number;
                type: string;
                url: string;
              }> | null;
              model_mesh?: {
                __typename?: "Media";
                alt: string;
                keyS3?: string | null;
                size: number;
                type: string;
                url: string;
              } | null;
            }>;
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
  threadId: Scalars["String"]["input"];
}>;

export type CreateShareableBoardMutation = {
  __typename?: "Mutation";
  createShareableBoard:
    | { __typename?: "HandledError"; code: string; message: string }
    | {
        __typename?: "ShareableBoard";
        _id: string;
        threadId: string;
        title: string;
        creator: string;
        isPublic: boolean;
        createdAt: any;
        ideas: Array<{
          __typename?: "Idea";
          subthreadId: string;
          prompt?: string | null;
          style?: SubthreadStyle | null;
          createdAt: any;
          genRequests: Array<{
            __typename?: "GenRequestSnapshot";
            genRequestId: string;
            type: GenRequestApp;
            createdAt: any;
            metadata: any;
            images?: Array<{
              __typename?: "Media";
              alt: string;
              keyS3?: string | null;
              size: number;
              type: string;
              url: string;
            }> | null;
            model_mesh?: {
              __typename?: "Media";
              alt: string;
              keyS3?: string | null;
              size: number;
              type: string;
              url: string;
            } | null;
          }>;
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
        threadId: string;
        title: string;
        creator: string;
        isPublic: boolean;
        createdAt: any;
        ideas: Array<{
          __typename?: "Idea";
          subthreadId: string;
          prompt?: string | null;
          style?: SubthreadStyle | null;
          createdAt: any;
          genRequests: Array<{
            __typename?: "GenRequestSnapshot";
            genRequestId: string;
            type: GenRequestApp;
            createdAt: any;
            metadata: any;
            images?: Array<{
              __typename?: "Media";
              alt: string;
              keyS3?: string | null;
              size: number;
              type: string;
              url: string;
            }> | null;
            model_mesh?: {
              __typename?: "Media";
              alt: string;
              keyS3?: string | null;
              size: number;
              type: string;
              url: string;
            } | null;
          }>;
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
        threadId: string;
        title: string;
        creator: string;
        isPublic: boolean;
        createdAt: any;
        ideas: Array<{
          __typename?: "Idea";
          subthreadId: string;
          prompt?: string | null;
          style?: SubthreadStyle | null;
          createdAt: any;
          genRequests: Array<{
            __typename?: "GenRequestSnapshot";
            genRequestId: string;
            type: GenRequestApp;
            createdAt: any;
            metadata: any;
            images?: Array<{
              __typename?: "Media";
              alt: string;
              keyS3?: string | null;
              size: number;
              type: string;
              url: string;
            }> | null;
            model_mesh?: {
              __typename?: "Media";
              alt: string;
              keyS3?: string | null;
              size: number;
              type: string;
              url: string;
            } | null;
          }>;
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
export const GenerateSubthreadDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "GenerateSubthread" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "prompt" },
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
            name: { kind: "Name", value: "style" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "SubthreadStyle" },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "threadId" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "imageUrl" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "numImages" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "strength" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "generateSubthread" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "prompt" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "prompt" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "style" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "style" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "threadId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "threadId" },
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
              {
                kind: "Argument",
                name: { kind: "Name", value: "numImages" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "numImages" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "strength" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "strength" },
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
} as unknown as DocumentNode<
  GenerateSubthreadMutation,
  GenerateSubthreadMutationVariables
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
                        name: { kind: "Name", value: "threadId" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "creator" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "ideas" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "subthreadId" },
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
                              name: { kind: "Name", value: "genRequests" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "genRequestId",
                                    },
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
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "metadata" },
                                  },
                                ],
                              },
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
                              name: { kind: "Name", value: "threadId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "title" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "creator" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "ideas" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "subthreadId",
                                    },
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
                                    name: {
                                      kind: "Name",
                                      value: "genRequests",
                                    },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "genRequestId",
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
                                            value: "images",
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
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "model_mesh",
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
                                            value: "metadata",
                                          },
                                        },
                                      ],
                                    },
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
            name: { kind: "Name", value: "threadId" },
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
                name: { kind: "Name", value: "threadId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "threadId" },
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
                        name: { kind: "Name", value: "threadId" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "creator" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "ideas" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "subthreadId" },
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
                              name: { kind: "Name", value: "genRequests" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "genRequestId",
                                    },
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
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "metadata" },
                                  },
                                ],
                              },
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
                        name: { kind: "Name", value: "threadId" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "creator" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "ideas" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "subthreadId" },
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
                              name: { kind: "Name", value: "genRequests" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "genRequestId",
                                    },
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
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "metadata" },
                                  },
                                ],
                              },
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
                        name: { kind: "Name", value: "threadId" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "creator" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "ideas" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "subthreadId" },
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
                              name: { kind: "Name", value: "genRequests" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "genRequestId",
                                    },
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
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "metadata" },
                                  },
                                ],
                              },
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

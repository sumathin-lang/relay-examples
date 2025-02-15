import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
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
};

export type Group = {
  __typename?: 'Group';
  description: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']['output']>;
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  myGreeting: Scalars['String']['output'];
  templates?: Maybe<TemplateConnection>;
  workflow?: Maybe<Workflow>;
};

export type Template = {
  __typename?: 'Template';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  workflow?: Maybe<Workflow>;
};

export type TemplateConnection = {
  __typename?: 'TemplateConnection';
  edges?: Maybe<Array<Maybe<TemplateEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type TemplateEdge = {
  __typename?: 'TemplateEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<Template>;
};

export type TemplateProperties = {
  __typename?: 'TemplateProperties';
  categoryNames?: Maybe<Array<Scalars['String']['output']>>;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  galleryName?: Maybe<Scalars['String']['output']>;
  instantiationMessage?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  publishedTime?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
};

export type Workflow = {
  __typename?: 'Workflow';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  properties?: Maybe<WorkflowProperties>;
  type?: Maybe<Scalars['String']['output']>;
};

export type WorkflowProperties = {
  __typename?: 'WorkflowProperties';
  apiId?: Maybe<Scalars['String']['output']>;
  createdTime?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  flowFailureAlertSubscribed?: Maybe<Scalars['Boolean']['output']>;
  flowSuspensionReason?: Maybe<Scalars['String']['output']>;
  flowSuspensionReasonDetails?: Maybe<Scalars['String']['output']>;
  flowSuspensionTime?: Maybe<Scalars['String']['output']>;
  isManaged?: Maybe<Scalars['Boolean']['output']>;
  lastModifiedTime?: Maybe<Scalars['String']['output']>;
  plan?: Maybe<Scalars['String']['output']>;
  provisioningMethod?: Maybe<Scalars['String']['output']>;
  sharingType?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  templateName?: Maybe<Scalars['String']['output']>;
  userType?: Maybe<Scalars['String']['output']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Group: ResolverTypeWrapper<Group>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Query: ResolverTypeWrapper<{}>;
  Template: ResolverTypeWrapper<Template>;
  TemplateConnection: ResolverTypeWrapper<TemplateConnection>;
  TemplateEdge: ResolverTypeWrapper<TemplateEdge>;
  TemplateProperties: ResolverTypeWrapper<TemplateProperties>;
  Workflow: ResolverTypeWrapper<Workflow>;
  WorkflowProperties: ResolverTypeWrapper<WorkflowProperties>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Group: Group;
  String: Scalars['String']['output'];
  PageInfo: PageInfo;
  Boolean: Scalars['Boolean']['output'];
  Query: {};
  Template: Template;
  TemplateConnection: TemplateConnection;
  TemplateEdge: TemplateEdge;
  TemplateProperties: TemplateProperties;
  Workflow: Workflow;
  WorkflowProperties: WorkflowProperties;
};

export type GroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['Group'] = ResolversParentTypes['Group']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasPreviousPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  myGreeting?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  templates?: Resolver<Maybe<ResolversTypes['TemplateConnection']>, ParentType, ContextType>;
  workflow?: Resolver<Maybe<ResolversTypes['Workflow']>, ParentType, ContextType>;
};

export type TemplateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Template'] = ResolversParentTypes['Template']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  workflow?: Resolver<Maybe<ResolversTypes['Workflow']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TemplateConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TemplateConnection'] = ResolversParentTypes['TemplateConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['TemplateEdge']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TemplateEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TemplateEdge'] = ResolversParentTypes['TemplateEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Template']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TemplatePropertiesResolvers<ContextType = any, ParentType extends ResolversParentTypes['TemplateProperties'] = ResolversParentTypes['TemplateProperties']> = {
  categoryNames?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  displayName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  galleryName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  instantiationMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WorkflowResolvers<ContextType = any, ParentType extends ResolversParentTypes['Workflow'] = ResolversParentTypes['Workflow']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  properties?: Resolver<Maybe<ResolversTypes['WorkflowProperties']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WorkflowPropertiesResolvers<ContextType = any, ParentType extends ResolversParentTypes['WorkflowProperties'] = ResolversParentTypes['WorkflowProperties']> = {
  apiId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  displayName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  flowFailureAlertSubscribed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  flowSuspensionReason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  flowSuspensionReasonDetails?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  flowSuspensionTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isManaged?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastModifiedTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  plan?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  provisioningMethod?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sharingType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  templateName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Group?: GroupResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Template?: TemplateResolvers<ContextType>;
  TemplateConnection?: TemplateConnectionResolvers<ContextType>;
  TemplateEdge?: TemplateEdgeResolvers<ContextType>;
  TemplateProperties?: TemplatePropertiesResolvers<ContextType>;
  Workflow?: WorkflowResolvers<ContextType>;
  WorkflowProperties?: WorkflowPropertiesResolvers<ContextType>;
};


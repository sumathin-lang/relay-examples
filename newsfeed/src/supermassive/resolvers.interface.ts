/* eslint-disable */ 
// This file was automatically generated (by @graphitation/supermassive) and should not be edited.
import type { PromiseOrValue } from "@graphitation/supermassive";
import type { ResolveInfo } from "@graphitation/supermassive";
import * as Models from "./models.interface";
export declare namespace Group {
    export interface Resolvers {
        readonly description?: description;
        readonly name?: name;
    }
    export type description = (model: Models.Group, args: {}, context: unknown, info: ResolveInfo) => PromiseOrValue<string>;
    export type name = (model: Models.Group, args: {}, context: unknown, info: ResolveInfo) => PromiseOrValue<string>;
}
export declare namespace Query {
    export interface Resolvers {
        readonly myGreeting?: myGreeting;
        readonly templates?: templates;
        readonly workflow?: workflow;
    }
    export type myGreeting = (model: unknown, args: {}, context: unknown, info: ResolveInfo) => PromiseOrValue<string>;
    export type templates = (model: unknown, args: {}, context: unknown, info: ResolveInfo) => PromiseOrValue<Models.TemplateConnection>;
    export type workflow = (model: unknown, args: {}, context: unknown, info: ResolveInfo) => PromiseOrValue<Models.Workflow | null | undefined>;
}
export declare namespace Template {
    export interface Resolvers {
        readonly id?: id;
        readonly name?: name;
        readonly type?: _type;
        readonly workflow?: workflow;
    }
    export type id = (model: Models.Template, args: {}, context: unknown, info: ResolveInfo) => PromiseOrValue<string | null | undefined>;
    export type name = (model: Models.Template, args: {}, context: unknown, info: ResolveInfo) => PromiseOrValue<string | null | undefined>;
    export type _type = (model: Models.Template, args: {}, context: unknown, info: ResolveInfo) => PromiseOrValue<string | null | undefined>;
    export type workflow = (model: Models.Template, args: {}, context: unknown, info: ResolveInfo) => PromiseOrValue<Models.Workflow>;
}
export declare namespace TemplateConnection {
    export interface Resolvers {
        readonly edges?: edges;
        readonly pageInfo?: pageInfo;
    }
    export type edges = (model: Models.TemplateConnection, args: {}, context: unknown, info: ResolveInfo) => PromiseOrValue<ReadonlyArray<Models.TemplateEdge>>;
    export type pageInfo = (model: Models.TemplateConnection, args: {}, context: unknown, info: ResolveInfo) => PromiseOrValue<Models.PageInfo>;
}
export declare namespace TemplateEdge {
    export interface Resolvers {
        readonly cursor?: cursor;
        readonly node?: node;
    }
    export type cursor = (model: Models.TemplateEdge, args: {}, context: unknown, info: ResolveInfo) => PromiseOrValue<string | null | undefined>;
    export type node = (model: Models.TemplateEdge, args: {}, context: unknown, info: ResolveInfo) => PromiseOrValue<Models.Template>;
}
export declare namespace PageInfo {
    export interface Resolvers {
        readonly endCursor?: endCursor;
        readonly hasNextPage?: hasNextPage;
        readonly hasPreviousPage?: hasPreviousPage;
        readonly startCursor?: startCursor;
    }
    export type endCursor = (model: Models.PageInfo, args: {}, context: unknown, info: ResolveInfo) => PromiseOrValue<string | null | undefined>;
    export type hasNextPage = (model: Models.PageInfo, args: {}, context: unknown, info: ResolveInfo) => PromiseOrValue<boolean | null | undefined>;
    export type hasPreviousPage = (model: Models.PageInfo, args: {}, context: unknown, info: ResolveInfo) => PromiseOrValue<boolean | null | undefined>;
    export type startCursor = (model: Models.PageInfo, args: {}, context: unknown, info: ResolveInfo) => PromiseOrValue<string | null | undefined>;
}
export declare namespace Workflow {
    export interface Resolvers {
        readonly id?: id;
        readonly name?: name;
        readonly type?: _type;
        readonly properties?: properties;
    }
    export type id = (model: Models.Workflow, args: {}, context: unknown, info: ResolveInfo) => PromiseOrValue<string>;
    export type name = (model: Models.Workflow, args: {}, context: unknown, info: ResolveInfo) => PromiseOrValue<string>;
    export type _type = (model: Models.Workflow, args: {}, context: unknown, info: ResolveInfo) => PromiseOrValue<string | null | undefined>;
    export type properties = (model: Models.Workflow, args: {}, context: unknown, info: ResolveInfo) => PromiseOrValue<Models.WorkflowProperties | null | undefined>;
}
export declare namespace TemplateProperties {
    export interface Resolvers {
        readonly categoryNames?: categoryNames;
        readonly description?: description;
        readonly displayName?: displayName;
        readonly galleryName?: galleryName;
        readonly instantiationMessage?: instantiationMessage;
        readonly name?: name;
        readonly publishedTime?: publishedTime;
        readonly summary?: summary;
    }
    export type categoryNames = (model: Models.TemplateProperties, args: {}, context: unknown, info: ResolveInfo) => PromiseOrValue<ReadonlyArray<string> | null | undefined>;
    export type description = (model: Models.TemplateProperties, args: {}, context: unknown, info: ResolveInfo) => PromiseOrValue<string | null | undefined>;
    export type displayName = (model: Models.TemplateProperties, args: {}, context: unknown, info: ResolveInfo) => PromiseOrValue<string | null | undefined>;
    export type galleryName = (model: Models.TemplateProperties, args: {}, context: unknown, info: ResolveInfo) => PromiseOrValue<string | null | undefined>;
    export type instantiationMessage = (model: Models.TemplateProperties, args: {}, context: unknown, info: ResolveInfo) => PromiseOrValue<string | null | undefined>;
    export type name = (model: Models.TemplateProperties, args: {}, context: unknown, info: ResolveInfo) => PromiseOrValue<string | null | undefined>;
    export type publishedTime = (model: Models.TemplateProperties, args: {}, context: unknown, info: ResolveInfo) => PromiseOrValue<string | null | undefined>;
    export type summary = (model: Models.TemplateProperties, args: {}, context: unknown, info: ResolveInfo) => PromiseOrValue<string | null | undefined>;
}
export declare namespace WorkflowProperties {
    export interface Resolvers {
        readonly apiId?: apiId;
        readonly createdTime?: createdTime;
        readonly displayName?: displayName;
        readonly flowFailureAlertSubscribed?: flowFailureAlertSubscribed;
        readonly flowSuspensionReason?: flowSuspensionReason;
        readonly flowSuspensionReasonDetails?: flowSuspensionReasonDetails;
        readonly flowSuspensionTime?: flowSuspensionTime;
        readonly isManaged?: isManaged;
        readonly lastModifiedTime?: lastModifiedTime;
        readonly plan?: plan;
        readonly provisioningMethod?: provisioningMethod;
        readonly sharingType?: sharingType;
        readonly state?: state;
        readonly templateName?: templateName;
        readonly userType?: userType;
    }
    export type apiId = (model: Models.WorkflowProperties, args: {}, context: unknown, info: ResolveInfo) => PromiseOrValue<string | null | undefined>;
    export type createdTime = (model: Models.WorkflowProperties, args: {}, context: unknown, info: ResolveInfo) => PromiseOrValue<string | null | undefined>;
    export type displayName = (model: Models.WorkflowProperties, args: {}, context: unknown, info: ResolveInfo) => PromiseOrValue<string | null | undefined>;
    export type flowFailureAlertSubscribed = (model: Models.WorkflowProperties, args: {}, context: unknown, info: ResolveInfo) => PromiseOrValue<boolean | null | undefined>;
    export type flowSuspensionReason = (model: Models.WorkflowProperties, args: {}, context: unknown, info: ResolveInfo) => PromiseOrValue<string | null | undefined>;
    export type flowSuspensionReasonDetails = (model: Models.WorkflowProperties, args: {}, context: unknown, info: ResolveInfo) => PromiseOrValue<string | null | undefined>;
    export type flowSuspensionTime = (model: Models.WorkflowProperties, args: {}, context: unknown, info: ResolveInfo) => PromiseOrValue<string | null | undefined>;
    export type isManaged = (model: Models.WorkflowProperties, args: {}, context: unknown, info: ResolveInfo) => PromiseOrValue<boolean | null | undefined>;
    export type lastModifiedTime = (model: Models.WorkflowProperties, args: {}, context: unknown, info: ResolveInfo) => PromiseOrValue<string | null | undefined>;
    export type plan = (model: Models.WorkflowProperties, args: {}, context: unknown, info: ResolveInfo) => PromiseOrValue<string | null | undefined>;
    export type provisioningMethod = (model: Models.WorkflowProperties, args: {}, context: unknown, info: ResolveInfo) => PromiseOrValue<string | null | undefined>;
    export type sharingType = (model: Models.WorkflowProperties, args: {}, context: unknown, info: ResolveInfo) => PromiseOrValue<string | null | undefined>;
    export type state = (model: Models.WorkflowProperties, args: {}, context: unknown, info: ResolveInfo) => PromiseOrValue<string | null | undefined>;
    export type templateName = (model: Models.WorkflowProperties, args: {}, context: unknown, info: ResolveInfo) => PromiseOrValue<string | null | undefined>;
    export type userType = (model: Models.WorkflowProperties, args: {}, context: unknown, info: ResolveInfo) => PromiseOrValue<string | null | undefined>;
}

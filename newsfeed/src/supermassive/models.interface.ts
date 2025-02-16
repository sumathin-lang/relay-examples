/* eslint-disable */ 
// This file was automatically generated (by @graphitation/supermassive) and should not be edited.
import type { WorkflowModel as _Workflow } from "../models";
// Base type for all models. Enables automatic resolution of abstract GraphQL types (interfaces, unions)
export interface BaseModel {
    readonly __typename?: string;
}
export interface Group extends BaseModel {
    readonly __typename?: "Group";
    readonly description: string;
    readonly name: string;
}
export interface Template extends BaseModel {
    readonly __typename?: "Template";
    readonly id?: string | null;
    readonly name?: string | null;
    readonly type?: string | null;
    readonly workflow: Workflow;
}
export interface TemplateConnection extends BaseModel {
    readonly __typename?: "TemplateConnection";
    readonly edges: ReadonlyArray<TemplateEdge>;
    readonly pageInfo: PageInfo;
}
export interface TemplateEdge extends BaseModel {
    readonly __typename?: "TemplateEdge";
    readonly cursor?: string | null;
    readonly node: Template;
}
export interface PageInfo extends BaseModel {
    readonly __typename?: "PageInfo";
    readonly endCursor?: string | null;
    readonly hasNextPage?: boolean | null;
    readonly hasPreviousPage?: boolean | null;
    readonly startCursor?: string | null;
}
export interface Workflow extends BaseModel, _Workflow {
    readonly __typename?: "Workflow";
}
export interface TemplateProperties extends BaseModel {
    readonly __typename?: "TemplateProperties";
    readonly categoryNames?: ReadonlyArray<string> | null;
    readonly description?: string | null;
    readonly displayName?: string | null;
    readonly galleryName?: string | null;
    readonly instantiationMessage?: string | null;
    readonly name?: string | null;
    readonly publishedTime?: string | null;
    readonly summary?: string | null;
}
export interface WorkflowProperties extends BaseModel {
    readonly __typename?: "WorkflowProperties";
    readonly apiId?: string | null;
    readonly createdTime?: string | null;
    readonly displayName?: string | null;
    readonly flowFailureAlertSubscribed?: boolean | null;
    readonly flowSuspensionReason?: string | null;
    readonly flowSuspensionReasonDetails?: string | null;
    readonly flowSuspensionTime?: string | null;
    readonly isManaged?: boolean | null;
    readonly lastModifiedTime?: string | null;
    readonly plan?: string | null;
    readonly provisioningMethod?: string | null;
    readonly sharingType?: string | null;
    readonly state?: string | null;
    readonly templateName?: string | null;
    readonly userType?: string | null;
}

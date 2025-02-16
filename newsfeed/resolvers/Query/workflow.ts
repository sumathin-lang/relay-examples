import { PromiseOrValue } from "graphql/jsutils/PromiseOrValue";
import type {
  Query,
  Workflow as WorkflowType,
} from "./../../src/supermassive/resolvers.interface";
import type { Workflow } from "../../src/supermassive/models.interface";

type TEMPRESOLVERTYPE = (
  model: unknown,
  args: {},
  context: unknown,
  info: unknown
) => PromiseOrValue<Workflow>;

export const workflow: TEMPRESOLVERTYPE = async (
  //NonNullable<Query.Resolvers["workflow"]> = async (
  parent,
  arg,
  ctx
) => {
  /* Implement Query.workflow resolver logic here */
  console.log("Query.workflow resolver logic here", parent, arg, ctx);
  return {
    myid: 100,
    name: "Workflow 100",
    type: "Type 100",
    properties: {
      displayName: "Workflow 100 PROP",
    },
  };
};

export const WorkflowResolver: WorkflowType.Resolvers = {
  id: (parent) => {
    console.log("Workflow.id in field resolver");

    return parent.myid;
  },
  name: () => {
    console.log("Workflow.name in field resolver");
    return "Workflow ROOT";
  },
  type: () => {
    console.log("Workflow.type in field resolver");
    return "Type ROOT";
  },
  properties: () => {
    console.log("Workflow.props in field resolver");
    return {
      displayName: "Workflow ROOT PROP",
    };
  },
};
// export const workflow: NonNullable<QueryResolvers['workflow']> = async (_parent, _arg, _ctx) => { /* Implement Query.workflow resolver logic here */ };

import type {
  QueryResolvers,
  WorkflowResolvers,
} from "./../../src/myschema/types.generated";
export const workflow: NonNullable<QueryResolvers["workflow"]> = async (
  parent,
  arg,
  ctx
) => {
  /* Implement Query.workflow resolver logic here */
  console.log("Query.workflow resolver logic here", parent, arg, ctx);
  return {
    id: "100",
    name: "Workflow 100",
    type: "Type 100",
    properties: {
      displayName: "Workflow 100 PROP",
    },
  };
};

export const Workflow: WorkflowResolvers = {
  id: () => {
    console.log("Workflow.id in field resolver");
    return "99";
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

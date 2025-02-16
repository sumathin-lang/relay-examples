import type {
  Query,
  Workflow as WorkflowType,
} from "../../supermassive/resolvers.interface";
//import type { Workflow } from "../../src/supermassive/models.interface";

type TEMPRESOLVERTYPE2 = NonNullable<Query.Resolvers["workflow"]>;

export const workflow: TEMPRESOLVERTYPE2 = async (
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
    console.log("Workflow.id in field resolver", parent.myid.toString());

    return parent.myid.toString();
  },
  name: async (parent, arg, ctx) => {
    console.log("Workflow.name in field resolver", parent.myid);
    const wfObj = await ctx.getWorkflowByIndex.load(999);
    console.log("Workflow.name in field resolver", wfObj);
    return wfObj.name;
  },
  type: async (parent, arg, ctx) => {
    console.log("Workflow.type in field resolver", parent.myid);
    const wfObj = await ctx.getWorkflowByIndex.load(parent.myid);
    console.log("Workflow.type in field resolver", wfObj);
    return wfObj.type;
  },
  properties: () => {
    console.log("Workflow.props in field resolver");
    return {
      displayName: "Workflow ROOT PROP",
    };
  },
};
// export const workflow: NonNullable<QueryResolvers['workflow']> = async (_parent, _arg, _ctx) => { /* Implement Query.workflow resolver logic here */ };

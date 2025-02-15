import type { QueryResolvers } from "./../../src/myschema/types.generated";
export const workflow: NonNullable<QueryResolvers['workflow']> = async (
  parent,
  arg,
  ctx
) => {
  /* Implement Query.workflow resolver logic here */
  console.log("Query.workflow resolver logic here", parent, arg, ctx);
  return {
    id: "99",
    name: "Workflow ROOT",
    type: "Type ROOT",
    properties: {
      displayName: "Workflow ROOT PROP",
    },
  };
};

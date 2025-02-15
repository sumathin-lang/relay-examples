import type { QueryResolvers } from "./../../src/myschema/types.generated";
export const workflow: NonNullable<QueryResolvers["workflow"]> = async (
  _parent,
  _arg,
  _ctx
) => {
  /* Implement Query.workflow resolver logic here */
  return {
    id: "99",
    name: "Workflow ROOT",
    type: "Type ROOT",
    properties: {
      displayName: "Workflow ROOT PROP",
    },
  };
};

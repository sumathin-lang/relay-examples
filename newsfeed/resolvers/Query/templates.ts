import type { QueryResolvers } from "./../../src/myschema/types.generated";
export const templates: NonNullable<QueryResolvers["templates"]> = async (
  _parent,
  _arg,
  _ctx
) => {
  /* Implement Query.templates resolver logic here */
  return {
    totalCount: 3,
    edges: [
      {
        node: {
          name: "Han Solo",
          id: "1",
          workflow: {
            name: "Workflow 1",
            type: "Type 1",
            properties: {
              displayName: "Workflow PROP1",
            },
          },
        },
        cursor: "Y3Vyc29yMg==",
      },
      {
        node: {
          name: "Leia Organa",
          id: "2",
          workflow: {
            name: "Workflow 2",
            type: "Type 2",
            properties: {
              displayName: "Workflow PROP2",
            },
          },
        },
        cursor: "Y3Vyc29yMw==",
      },
    ],
    pageInfo: {
      endCursor: "Y3Vyc29yMw==",
      hasNextPage: false,
    },
  };
};

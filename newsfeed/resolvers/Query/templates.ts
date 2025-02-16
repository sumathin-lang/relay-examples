import { PromiseOrValue } from "graphql/jsutils/PromiseOrValue";
import type { Query } from "./../../src/supermassive/resolvers.interface";
import { TemplateConnection } from "../../src/supermassive/models.interface";
export const templates: MyRESOLVERTYPE = () => {
  return {
    edges: [
      {
        node: {
          name: "Han Solo",
          id: "1",
          workflow: {
            myid: 12,
            name: "Workflow 1",
            type: "Type 1",
            properties: {
              displayName: "Workflow PROP1",
            },
          },
        },
      },
      {
        node: {
          name: "Leia Organa",
          id: "2",
          workflow: {
            myid: 22,
            name: "Workflow 2",
            type: "Type 2",
            properties: {
              displayName: "Workflow PROP2",
            },
          },
        },
      },
    ],
    pageInfo: {
      endCursor: "Y3Vyc29yMw==",
      hasNextPage: false,
    },
  };
};

type MyRESOLVERTYPE = (
  model: unknown,
  args: {},
  context: unknown,
  info: unknown
) => PromiseOrValue<TemplateConnection>;
type test2 = Query.Resolvers["templates"];

// export const templates: NonNullable<Query.Resolvers["templates"]> = async (
//   _parent,
//   _arg,
//   _ctx
// ) => {
//   /* Implement Query.templates resolver logic here */
//   return {
//     totalCount: 3,
//     // edges: [
//     //   {
//     //     node: {
//     //       name: "Han Solo",
//     //       id: "1",
//     //       // workflow: {
//     //       //   id: "12",
//     //       //   name: "Workflow 1",
//     //       //   type: "Type 1",
//     //       //   properties: {
//     //       //     displayName: "Workflow PROP1",
//     //       //   },
//     //       // },
//     //     },
//     //     cursor: "Y3Vyc29yMg==",
//     //   },
//     //   {
//     //     node: {
//     //       name: "Leia Organa",
//     //       id: "2",
//     //       // workflow: {
//     //       //   id: "22",
//     //       //   name: "Workflow 2",
//     //       //   type: "Type 2",
//     //       //   properties: {
//     //       //     displayName: "Workflow PROP2",
//     //       //   },
//     //       // },
//     //     },
//     //     cursor: "Y3Vyc29yMw==",
//     //   },
//     // ],
//     pageInfo: {
//       endCursor: "Y3Vyc29yMw==",
//       hasNextPage: false,
//     },
//   };
// };

import type { Query } from "../../supermassive/resolvers.interface";
export const templates: Query.Resolvers["templates"] = (parent, arg, ctx) => {
  return {
    edges: ctx.getAllTemplates.loadMany([1, 2]),
    pageInfo: {
      endCursor: "Y3Vyc29yMw==",
      hasNextPage: false,
    },
  };
};

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

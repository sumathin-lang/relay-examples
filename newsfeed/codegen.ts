import type { CodegenConfig } from "@graphql-codegen/cli";
import { defineConfig } from "@eddeee888/gcg-typescript-resolver-files";

const config: CodegenConfig = {
  schema: "./schema.graphql",
  //schema: "node_modules/@msteams/data-schema/generated/schema.graphql", // src/**/schema.graphql",
  // schema: "./public/real-schema.graphql", // src/**/schema.graphql",
  // documents: "src/**/*.graphql",
  generates: {
    // "out/file.ts": {
    //   plugins: ["typescript", "typescript-resolvers"],
    //   config: {
    //     useIndexSignature: true,
    //   },
    // },
    "src/myschema": defineConfig({
      resolverGeneration: {
        query: "*",
        mutation: "*",
        subscription: "*",
        scalar: "*",
        object: "", // Disables objects ending with `Ok` or `Error` in every module
        union: "", // Empty string disables all file generation of relevant type in every module
        interface: "*",
      },
      resolverTypesPath: "./src/myschema/types.generated.ts",
    }),
  },
};

// const config: CodegenConfig = {
//   overwrite: true,
//   schema: "./schema.graphql",
//   documents: "src/**/*.tsx",
//   generates: {
//     "src/graphql/__generated__/": {
//       preset: "client",
//       plugins: [],
//     },
//     "./graphql.schema.json": {
//       plugins: ["introspection"],
//     },
//   },
// };

export default config;

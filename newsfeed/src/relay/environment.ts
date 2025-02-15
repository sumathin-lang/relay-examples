import {
  Store,
  RecordSource,
  Environment,
  Network,
  Observable,
  createOperationDescriptor,
  RelayFeatureFlags,
} from "relay-runtime";
import type {
  ExecuteFunction,
  FetchFunction,
  IEnvironment,
  OperationDescriptor,
  RequestParameters,
  Variables,
} from "relay-runtime";

import { graphql, buildSchema, buildASTSchema } from "graphql";
import LiveResolverStore from "relay-runtime/lib/store/live-resolvers/LiveResolverStore";
import { typeDefs } from "../myschema/typeDefs.generated";
import { resolvers } from "../myschema/resolvers.generated";
// import { getSchema } from "../../schema";
import { makeExecutableSchema } from "@graphql-tools/schema";

RelayFeatureFlags.ENABLE_RELAY_RESOLVERS = true;

// It is recommended to log errors thrown by Resolvers
function fieldLogger(event: any) {
  if (event.kind === "relay_resolver.error") {
    // Log this somewhere!
    console.warn(
      `Resolver error encountered in ${event.owner}.${event.fieldPath}`
    );
    console.warn(event.error);
  }
}

const fetchFn: FetchFunction = (params, variables) => {
  const response = fetch("/api", {
    method: "POST",
    headers: [["Content-Type", "application/json"]],
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  });

  return Observable.from(response.then((data) => data.json()));
};

// export function createEnvironment(): IEnvironment {
//   // const network = Network.create(fetchFn);
//   const store = new Store(new RecordSource());
//   return new Environment({
//     store,
//     network: {
//       execute: executor(),
//     },
//   });
// }

// 1. Define your GraphQL schema
// const schema = buildSchema(`
//   type Query {
//     greeting: String
//     user(id: ID!): User
//   }

//   type User {
//     id: ID!
//     name: String
//   }
// `);

const schema = buildSchema(`
type Group {
  description: String!
  name: String!
}

type Query {
  myGreeting: String!
  templates: TemplateConnection
  workflow: Workflow
}

type Template {
  id: String
  name: String
  # properties: TemplateProperties
  type: String
  workflow: Workflow
}

type TemplateConnection {
  edges: [TemplateEdge]
  pageInfo: PageInfo
}

type TemplateEdge {
  cursor: String
  node: Template
}

type PageInfo {
  endCursor: String
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor: String
}

type Workflow {
  id: String
  name: String
  type: String
  properties: WorkflowProperties
}

type TemplateProperties {
  # author: Author
  categoryNames: [String!]
  # connectionReferences: [TemplateConnectionReference!]
  # definitionSummary: DefinitionSummary
  description: String
  displayName: String
  galleryName: String
  instantiationMessage: String
  name: String
  publishedTime: String
  # statistics: Statistics
  summary: String
}

type WorkflowProperties {
  apiId: String
  # connectionReferences: [ConnectionReferences!]
  createdTime: String
  # definitionSummary: DefinitionSummary
  displayName: String
  # environment: Environment
  flowFailureAlertSubscribed: Boolean
  flowSuspensionReason: String
  flowSuspensionReasonDetails: String
  flowSuspensionTime: String
  isManaged: Boolean
  lastModifiedTime: String
  # licenseData: LicenseData
  # parameters: WorkflowPropertiesParameters
  plan: String
  provisioningMethod: String
  # runtimeConfiguration: RuntimeConfiguration
  sharingType: String
  state: String
  templateName: String
  userType: String
}`);
// 2. Create a resolver function
// const resolvers = {
//   myGreeting: () => "Hello from GraphQL!",
//   user: ({ id }: any) => {
//     const users = {
//       "1": { id: "1", name: "John Doe" },
//       "2": { id: "2", name: "Jane Smith" },
//     };
//     return users[id] || null;
//   },
//   workflow: () => {
//     return {
//       id: "99",
//       name: "Workflow ROOT",
//       type: "Type ROOT",
//       properties: {
//         displayName: "Workflow ROOT PROP",
//       },
//     };
//   },
//   templates: () => {
//     return {
//       totalCount: 3,
//       edges: [
//         {
//           node: {
//             name: "Han Solo",
//             id: "1",
//             workflow: {
//               name: "Workflow 1",
//               type: "Type 1",
//               properties: {
//                 displayName: "Workflow PROP1",
//               },
//             },
//           },
//           cursor: "Y3Vyc29yMg==",
//         },
//         {
//           node: {
//             name: "Leia Organa",
//             id: "2",
//             workflow: {
//               name: "Workflow 2",
//               type: "Type 2",
//               properties: {
//                 displayName: "Workflow PROP2",
//               },
//             },
//           },
//           cursor: "Y3Vyc29yMw==",
//         },
//       ],
//       pageInfo: {
//         endCursor: "Y3Vyc29yMw==",
//         hasNextPage: false,
//       },
//     };
//   },
// };

// // 3. Define your GraphQL query
// const query = `
//   query MyQuery($userId: ID!) {
//     greeting
//     user(id: $userId) {
//       id
//       name
//     }
//   }
// `;

let environment: IEnvironment; // = createEnvironment();

export function createEnvironment(): IEnvironment {
  if (environment) {
    return environment;
  }

  // 4. Create a Relay environment
  environment = new Environment({
    network: Network.create(
      async (operations: RequestParameters, variables: Variables) => {
        try {
          const builtSchema = makeExecutableSchema({ typeDefs, resolvers });
          const result = await graphql({
            schema: builtSchema,
            // schema: getSchema(),
            source: operations.text,
            // rootValue: resolvers,
            variableValues: variables,
          });
          return result;
        } catch (error) {
          console.error(error);
          return error;
        }
      }
    ),
    store: new LiveResolverStore(new RecordSource()),
  });
  return environment;
}

// 5. Execute the query
// async function executeQuery(query: OperationDescriptor) {
//   const response$ = await environment.execute({ operation: query }); // .toPromise();
//   // console.log(data.data); // Output: { hello: "Hello world!" }
//   return response$;
// }
// // executeQuery();

// export const executor: () => ExecuteFunction = () => {
//   return (request, variables, _cacheConfig, _uploadables) => {
//     const operationDescriptor = createOperationDescriptor(request, variables);
//     return executeQuery(operationDescriptor);
//   };
// };

// export const executor: () => ExecuteFunction = () => {
//   return (request, _variables, _cacheConfig, _uploadables) =>
//     Observable.create((sink) => {
//       fetch("/api", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           query: request.text,
//           variables: _variables,
//         }),
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           sink.next(data);
//           sink.complete();
//         })
//         .catch((error) => {
//           sink.error(error);
//         });

//       return {
//         unsubscribe() {},
//       };
//     });
// };

// import { graphql, buildSchema } from 'graphql';
// import { RelayEnvironment, Network, Store, RecordSource } from 'relay-runtime';
// // 1. Define your GraphQL schema
// const schema = buildSchema(`
//  type Query {
//    hello: String
//  }
// `);
// // 2. Create a resolver function
// const resolvers = {
//  hello: () => 'Hello world!',
// };
// // 3. Define your GraphQL query
// const query = `
//  query MyQuery {
//    hello
//  }
// `;
// // 4. Create a Relay environment
// const environment = new RelayEnvironment({
//  network: Network.create(async (operations, variables) => {
//    const result = await graphql(schema, operations[0].text, resolvers, null, variables);
//    return [result];
//  }),
//  store: new Store(new RecordSource()),
// });
// // 5. Execute the query
// async function executeQuery() {
//  const data = await environment.execute({ query }).toPromise();
//  console.log(data.data); // Output: { hello: "Hello world!" }
// }
// executeQuery();

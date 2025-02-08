import {
  Store,
  RecordSource,
  Environment,
  Network,
  Observable,
  createOperationDescriptor,
} from "relay-runtime";
import type {
  ExecuteFunction,
  FetchFunction,
  IEnvironment,
  OperationDescriptor,
  RequestParameters,
  Variables,
} from "relay-runtime";

import { graphql, buildSchema } from "graphql";
import { RelayNetwork } from "relay-runtime/lib/network/RelayNetwork";

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
const schema = buildSchema(`
  type Query {
    greeting: String
    user(id: ID!): User
  }

  type User {
    id: ID!
    name: String
  }
`);

// 2. Create a resolver function
const resolvers = {
  greeting: () => "Hello from GraphQL!",
  user: ({ id }: any) => {
    const users = {
      "1": { id: "1", name: "John Doe" },
      "2": { id: "2", name: "Jane Smith" },
    };
    return users[id] || null;
  },
};

// 3. Define your GraphQL query
const query = `
  query MyQuery($userId: ID!) {
    greeting
    user(id: $userId) {
      id
      name
    }
  }
`;

let environment: IEnvironment; // = createEnvironment();

export function createEnvironment(): IEnvironment {
  if (environment) {
    return environment;
  }

  // 4. Create a Relay environment
  environment = new Environment({
    network: Network.create(
      async (operations: RequestParameters, variables: Variables) => {
        const result = await graphql({
          schema,
          source: operations.text,
          rootValue: resolvers,
          variableValues: variables,
        });
        return result;
      }
    ),
    store: new Store(new RecordSource()),
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

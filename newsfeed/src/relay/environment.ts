import {
  Store,
  RecordSource,
  Environment,
  Network,
  Observable,
} from "relay-runtime";
import type {
  ExecuteFunction,
  FetchFunction,
  IEnvironment,
} from "relay-runtime";

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

export function createEnvironment(): IEnvironment {
  // const network = Network.create(fetchFn);
  const store = new Store(new RecordSource());
  return new Environment({
    store,
    network: {
      execute: executor(),
    },
  });
}

export const executor: () => ExecuteFunction = () => {
  return (request, _variables, _cacheConfig, _uploadables) =>
    Observable.create((sink) => {
      fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: request.text,
          variables: _variables,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          sink.next(data);
          sink.complete();
        })
        .catch((error) => {
          sink.error(error);
        });

      return {
        unsubscribe() {},
      };
    });
};

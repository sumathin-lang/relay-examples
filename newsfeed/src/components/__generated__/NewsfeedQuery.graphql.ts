/**
 * @generated SignedSource<<d9cbf0d04581c68fc2ed62b5f5206f2e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NewsfeedQuery$variables = {};
export type NewsfeedQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ParentFragment">;
};
export type NewsfeedQuery = {
  response: NewsfeedQuery$data;
  variables: NewsfeedQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "NewsfeedQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "ParentFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "NewsfeedQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "myGreeting",
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ae1f92c73b269bb265ba2e8a3475ccf9",
    "id": null,
    "metadata": {},
    "name": "NewsfeedQuery",
    "operationKind": "query",
    "text": "query NewsfeedQuery {\n  ...ParentFragment\n}\n\nfragment ParentFragment on Query {\n  myGreeting\n}\n"
  }
};

(node as any).hash = "7638e880e6fedebce013163e59bb1d2c";

export default node;

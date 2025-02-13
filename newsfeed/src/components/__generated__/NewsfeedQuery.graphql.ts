/**
 * @generated SignedSource<<6ed0877ebfc6810128208a25a3a2379f>>
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

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "id",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "type",
    "storageKey": null
  }
];
return {
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
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "TemplateConnection",
        "kind": "LinkedField",
        "name": "templates",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "TemplateEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Template",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": (v0/*: any*/),
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Workflow",
        "kind": "LinkedField",
        "name": "workflow",
        "plural": false,
        "selections": (v0/*: any*/),
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "27de79925fd635979969e60d24945180",
    "id": null,
    "metadata": {},
    "name": "NewsfeedQuery",
    "operationKind": "query",
    "text": "query NewsfeedQuery {\n  ...ParentFragment\n}\n\nfragment ChildOneFragment on Query {\n  templates {\n    edges {\n      node {\n        id\n        name\n        type\n      }\n    }\n  }\n}\n\nfragment ChildTwoFragment on Query {\n  workflow {\n    id\n    name\n    type\n  }\n}\n\nfragment ParentFragment on Query {\n  myGreeting\n  ...ChildOneFragment\n  ...ChildTwoFragment\n}\n"
  }
};
})();

(node as any).hash = "7638e880e6fedebce013163e59bb1d2c";

export default node;

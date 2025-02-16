/**
 * @generated SignedSource<<483270da79e9c02d7ea4e83baac174b1>>
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
  readonly templates: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string | null;
        readonly name: string | null;
        readonly type: string | null;
        readonly workflow: {
          readonly id: string;
          readonly name: string;
          readonly properties: {
            readonly displayName: string | null;
          } | null;
          readonly type: string | null;
        };
      };
    }>;
  };
  readonly " $fragmentSpreads": FragmentRefs<"ParentFragment">;
};
export type NewsfeedQuery = {
  response: NewsfeedQuery$data;
  variables: NewsfeedQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "Workflow",
  "kind": "LinkedField",
  "name": "workflow",
  "plural": false,
  "selections": [
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "WorkflowProperties",
      "kind": "LinkedField",
      "name": "properties",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "displayName",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    (v0/*: any*/),
    (v2/*: any*/)
  ],
  "storageKey": null
};
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
                "selections": [
                  (v0/*: any*/),
                  (v1/*: any*/),
                  (v2/*: any*/),
                  (v3/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
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
                "selections": [
                  (v1/*: any*/),
                  (v0/*: any*/),
                  (v2/*: any*/),
                  (v3/*: any*/)
                ],
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
        "selections": [
          (v1/*: any*/),
          (v0/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b10d07b023d2dcb4ad5285ad1018a597",
    "id": null,
    "metadata": {},
    "name": "NewsfeedQuery",
    "operationKind": "query",
    "text": "query NewsfeedQuery {\n  ...ParentFragment\n  templates {\n    edges {\n      node {\n        name\n        id\n        type\n        workflow {\n          id\n          properties {\n            displayName\n          }\n          name\n          type\n        }\n      }\n    }\n  }\n}\n\nfragment ChildOneFragment on Query {\n  templates {\n    edges {\n      node {\n        id\n        name\n        type\n      }\n    }\n  }\n}\n\nfragment ChildTwoFragment on Query {\n  workflow {\n    id\n    name\n    type\n  }\n}\n\nfragment ParentFragment on Query {\n  myGreeting\n  ...ChildOneFragment\n  ...ChildTwoFragment\n}\n"
  }
};
})();

(node as any).hash = "265b751fd0ba008303e0e29bca2704b2";

export default node;

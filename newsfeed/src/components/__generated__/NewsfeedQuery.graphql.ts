/**
 * @generated SignedSource<<1c8cf4ea8e4f8bc8c2faeb1262aa9c27>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
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
v3 = [
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
              {
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
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "NewsfeedQuery",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "NewsfeedQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "7e3c44f5a815af1ff7a9b027ab2d89ef",
    "id": null,
    "metadata": {},
    "name": "NewsfeedQuery",
    "operationKind": "query",
    "text": "query NewsfeedQuery {\n  templates {\n    edges {\n      node {\n        name\n        id\n        type\n        workflow {\n          id\n          properties {\n            displayName\n          }\n          name\n          type\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "aac1dacaa53c489bc175adbf46d64f14";

export default node;

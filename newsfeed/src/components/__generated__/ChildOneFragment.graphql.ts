/**
 * @generated SignedSource<<823d29109b3bb7f4cb30fd8c3ccb286c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ChildOneFragment$data = {
  readonly templates: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string | null;
        readonly name: string | null;
        readonly type: string | null;
      };
    }>;
  };
  readonly " $fragmentType": "ChildOneFragment";
};
export type ChildOneFragment$key = {
  readonly " $data"?: ChildOneFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ChildOneFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ChildOneFragment",
  "selections": [
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
};

(node as any).hash = "b36fa0b84c2272b27da749d43d92e13c";

export default node;

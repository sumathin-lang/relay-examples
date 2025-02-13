/**
 * @generated SignedSource<<0d7479a5ac3604405573fa05926ba722>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type WorkflowFragment$data = {
  readonly properties: {
    readonly " $fragmentSpreads": FragmentRefs<"WorkflowInnerFragment">;
  } | null;
  readonly " $fragmentType": "WorkflowFragment";
};
export type WorkflowFragment$key = {
  readonly " $data"?: WorkflowFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"WorkflowFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "WorkflowFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "WorkflowProperties",
      "kind": "LinkedField",
      "name": "properties",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "WorkflowInnerFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Workflow",
  "abstractKey": null
};

(node as any).hash = "14d27d9d3f2c7c481403e0d2d3735178";

export default node;

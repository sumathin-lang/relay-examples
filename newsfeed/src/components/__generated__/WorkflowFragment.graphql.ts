/**
 * @generated SignedSource<<5b75e3467591b824ea3601ac22d35044>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type WorkflowFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"WorkflowInnerFragment">;
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "WorkflowInnerFragment"
    }
  ],
  "type": "Workflow",
  "abstractKey": null
};

(node as any).hash = "f31fe408890d814a00d1e7793b3469aa";

export default node;

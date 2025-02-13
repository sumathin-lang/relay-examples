/**
 * @generated SignedSource<<463757cfad5e602d5f278580a0c3a53e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type WorkflowFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"WorkflowInnerFragment" | "WorkflowOuterFragment">;
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "WorkflowOuterFragment"
    }
  ],
  "type": "Workflow",
  "abstractKey": null
};

(node as any).hash = "66eeafaa1df6e7c1aa2655e61393db7a";

export default node;

/**
 * @generated SignedSource<<52f9afe8a4dec2fbe680dbb1967809ad>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type WorkflowOuterFragment$data = {
  readonly type: string | null;
  readonly " $fragmentType": "WorkflowOuterFragment";
};
export type WorkflowOuterFragment$key = {
  readonly " $data"?: WorkflowOuterFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"WorkflowOuterFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "WorkflowOuterFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "type",
      "storageKey": null
    }
  ],
  "type": "Workflow",
  "abstractKey": null
};

(node as any).hash = "9899b55308e0142ade2c3b4410ef6291";

export default node;

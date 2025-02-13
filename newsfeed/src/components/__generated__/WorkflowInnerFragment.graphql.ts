/**
 * @generated SignedSource<<6429ad2c59926db4376feea8f5b2ca57>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type WorkflowInnerFragment$data = {
  readonly apiId: string | null;
  readonly displayName: string | null;
  readonly " $fragmentType": "WorkflowInnerFragment";
};
export type WorkflowInnerFragment$key = {
  readonly " $data"?: WorkflowInnerFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"WorkflowInnerFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "WorkflowInnerFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "apiId",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "displayName",
      "storageKey": null
    }
  ],
  "type": "WorkflowProperties",
  "abstractKey": null
};

(node as any).hash = "1f5a44aacfeac088f1c27f18297fce28";

export default node;

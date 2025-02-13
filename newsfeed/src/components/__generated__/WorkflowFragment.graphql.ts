/**
 * @generated SignedSource<<e0e768c864fe0c62aa089982a99d2b2a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type WorkflowFragment$data = {
  readonly id: string | null;
  readonly name: string | null;
  readonly type: string | null;
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
  "type": "Workflow",
  "abstractKey": null
};

(node as any).hash = "63e003ed0934c58c940eee11893109cb";

export default node;

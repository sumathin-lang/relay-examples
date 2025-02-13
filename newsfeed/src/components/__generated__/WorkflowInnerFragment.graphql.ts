/**
 * @generated SignedSource<<979877216e35709497520dff6fcfb987>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type WorkflowInnerFragment$data = {
  readonly id: string | null;
  readonly name: string | null;
  readonly type: string | null;
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

(node as any).hash = "686e160cc7d2dfce59e78fecef17b753";

export default node;

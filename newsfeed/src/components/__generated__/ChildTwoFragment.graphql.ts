/**
 * @generated SignedSource<<15bd9bdaf11253aae7b6e6f7b2d139fe>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ChildTwoFragment$data = {
  readonly workflow: {
    readonly id: string;
    readonly name: string;
    readonly type: string | null;
  } | null;
  readonly " $fragmentType": "ChildTwoFragment";
};
export type ChildTwoFragment$key = {
  readonly " $data"?: ChildTwoFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ChildTwoFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ChildTwoFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Workflow",
      "kind": "LinkedField",
      "name": "workflow",
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
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "bd2e5c892aabb4defc376fead19d4a3e";

export default node;

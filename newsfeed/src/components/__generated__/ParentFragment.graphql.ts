/**
 * @generated SignedSource<<6c30d66c364deb04a92b3ef0bca87d40>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ParentFragment$data = {
  readonly myGreeting: string;
  readonly " $fragmentSpreads": FragmentRefs<"ChildOneFragment" | "ChildTwoFragment">;
  readonly " $fragmentType": "ParentFragment";
};
export type ParentFragment$key = {
  readonly " $data"?: ParentFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ParentFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ParentFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "myGreeting",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ChildOneFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ChildTwoFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "7fc6c71af41408cc4d1089a3303a2495";

export default node;

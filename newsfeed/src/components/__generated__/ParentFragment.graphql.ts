/**
 * @generated SignedSource<<86cd6423e7c0ba4740e22d6626a19a19>>
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
  readonly " $fragmentSpreads": FragmentRefs<"ChildOneFragment">;
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
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "783c96d87bcf9b85020cf348c127cf8c";

export default node;

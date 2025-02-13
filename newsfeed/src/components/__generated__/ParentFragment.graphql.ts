/**
 * @generated SignedSource<<ab1b13b96bb57d51f27fe3aea6ff09db>>
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
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "5a85197fee06a4d4344e86d9db416a1f";

export default node;

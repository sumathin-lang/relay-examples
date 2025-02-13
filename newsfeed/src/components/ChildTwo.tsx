import * as React from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "react-relay";

import type { ChildTwoFragment$key } from "./__generated__/ChildTwoFragment.graphql";

type Props = {
  childTwo: ChildTwoFragment$key;
};

export const ChildTwoFragment = graphql`
  fragment ChildTwoFragment on Query {
    workflow {
      id
      name
      type
    }
  }
`;

export const ChildTwo = ({ childTwo }: Props) => {
  const data = useFragment(ChildTwoFragment, childTwo);
  return <div>{data.workflow.name}</div>;
};

import * as React from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "react-relay";

import type { ParentFragment$key } from "./__generated__/ParentFragment.graphql";
import { ChildOne } from "./ChildOne";
import { ChildTwo } from "./ChildTwo";
// import { WorkflowInner } from "./WorkflowInner";
// import { WorkflowOuter } from "./WorkflowOuter";

type Props = {
  parent: ParentFragment$key;
};

export const ParentFragment = graphql`
  fragment ParentFragment on Query {
    myGreeting
    ...ChildOneFragment
    ...ChildTwoFragment
  }
`;

export const Parent = ({ parent }: Props) => {
  const data = useFragment(ParentFragment, parent);

  return (
    <>
      <div>{data.myGreeting}</div>;
      <ChildOne childOne={data} />
      <ChildTwo childTwo={data} />
    </>
  );
};

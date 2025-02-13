import * as React from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "react-relay";

import type { ParentFragment$key } from "./__generated__/ParentFragment.graphql";
// import { WorkflowInner } from "./WorkflowInner";
// import { WorkflowOuter } from "./WorkflowOuter";

type Props = {
  parent: ParentFragment$key;
};

export const ParentFragment = graphql`
  fragment ParentFragment on Query {
    myGreeting
  }
`;

export const Parent = ({ parent }: Props) => {
  const data = useFragment(ParentFragment, parent);

  return <div className="workflow">{data.myGreeting}</div>;
  // return (
  //   <>
  //     <WorkflowInner workflowInner={data} />
  //     <WorkflowOuter workflowOuter={data} />
  //   </>
  // );
};

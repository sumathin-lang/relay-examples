import * as React from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "react-relay";

import type { WorkflowFragment$key } from "./__generated__/WorkflowFragment.graphql";
import { WorkflowInner } from "./WorkflowInner";
import { WorkflowOuter } from "./WorkflowOuter";

type Props = {
  workflow: WorkflowFragment$key;
};

export const WorkflowFragment = graphql`
  fragment WorkflowFragment on Workflow {
    # properties {
    #   ...WorkflowInnerFragment
    # }
    ...WorkflowInnerFragment
    ...WorkflowOuterFragment
  }
`;

export const Workflow = ({ workflow }: Props) => {
  const data = useFragment(WorkflowFragment, workflow);

  //   return <div className="workflow">{data}</div>;
  return (
    <>
      <WorkflowInner workflowInner={data} />
      <WorkflowOuter workflowOuter={data} />
    </>
  );
};

import * as React from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "react-relay";

import type { WorkflowOuterFragment$key } from "./__generated__/WorkflowOuterFragment.graphql";

type Props = {
  workflowOuter: WorkflowOuterFragment$key;
};

export const WorkflowOuterFragment = graphql`
  fragment WorkflowOuterFragment on Workflow {
    type
  }
`;

// export const WorkflowInnerFragment = graphql`
//   fragment WorkflowInnerFragment on WorkflowProperties {
//     apiId
//     displayName
//   }
// `;

export const WorkflowOuter = ({ workflowOuter }: Props) => {
  const data = useFragment(WorkflowOuterFragment, workflowOuter);

  return <div className="workflow">{data.type}</div>;
};

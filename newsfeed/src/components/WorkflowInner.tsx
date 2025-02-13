import * as React from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "react-relay";

import type { WorkflowInnerFragment$key } from "./__generated__/WorkflowInnerFragment.graphql";

type Props = {
  workflowInner: WorkflowInnerFragment$key;
};

// export const WorkflowInnerFragment = graphql`
//   fragment WorkflowInnerFragment on Workflow {
//     id
//     name
//     type
//   }
// `;

export const WorkflowInnerFragment = graphql`
  fragment WorkflowInnerFragment on WorkflowProperties {
    apiId
    displayName
  }
`;

export const WorkflowInner = ({ workflowInner }: Props) => {
  const data = useFragment(WorkflowInnerFragment, workflowInner);

  return <div className="workflow">{data.displayName}</div>;
};

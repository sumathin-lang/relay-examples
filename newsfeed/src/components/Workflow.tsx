import * as React from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "react-relay";

import type { WorkflowFragment$key } from "./__generated__/WorkflowFragment.graphql";

type Props = {
  workflow: WorkflowFragment$key;
};

export const WorkflowFragment = graphql`
  fragment WorkflowFragment on Workflow {
    id
    name
    type
  }
`;

export const Workflow = ({ workflow }: Props) => {
  const data = useFragment(WorkflowFragment, workflow);

  return <div className="workflow">{data.name}</div>;
};

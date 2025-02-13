import * as React from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "react-relay";

import type { ChildOneFragment$key } from "./__generated__/ChildOneFragment.graphql";
// import { WorkflowInner } from "./WorkflowInner";
// import { WorkflowOuter } from "./WorkflowOuter";

type Props = {
  childOne: ChildOneFragment$key;
};

export const ChildOneFragment = graphql`
  fragment ChildOneFragment on Query {
    templates {
      edges {
        node {
          id
          name
          type
        }
      }
    }
  }
`;

export const ChildOne = ({ childOne }: Props) => {
  const data = useFragment(ChildOneFragment, childOne);
  const templates = data.templates.edges;
  return (
    <div className="newsfeed">
      {templates.map((template) => (
        <>
          <div key={template.node.id}>{template.node.name}</div>
        </>
      ))}
    </div>
  );
};

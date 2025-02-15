/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { myGreeting as Query_myGreeting } from "./../../resolvers/Query/myGreeting";
import { templates as Query_templates } from "./../../resolvers/Query/templates";
import { workflow as Query_workflow } from "./../../resolvers/Query/workflow";
export const resolvers: Resolvers = {
  Query: {
    myGreeting: Query_myGreeting,
    templates: Query_templates,
    workflow: Query_workflow,
  },
};

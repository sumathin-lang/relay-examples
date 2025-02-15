import type { QueryResolvers } from "./../../src/myschema/types.generated";
export const myGreeting: NonNullable<QueryResolvers["myGreeting"]> = async (
  _parent,
  _arg,
  _ctx
) => {
  /* Implement Query.myGreeting resolver logic here */
  return "Hello from GraphQL!";
};

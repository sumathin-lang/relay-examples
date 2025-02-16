import type { Query } from "../../supermassive/resolvers.interface";
export const myGreeting: NonNullable<Query.Resolvers["myGreeting"]> = async (
  _parent,
  _arg,
  _ctx
) => {
  /* Implement Query.myGreeting resolver logic here */
  return "Hello from GraphQL!";
};

import IPerson from "./interfaces/IPerson";
import MyUser from "./models/MyUser";

/** @gqlQueryField */
export function person(): IPerson {
  return new MyUser();
}

/** @gqlQueryField */
export function myGreeting(): string {
  return "Hello World from GRATS Query";
}

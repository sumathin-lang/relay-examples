import IPerson from "../interfaces/IPerson";
import Group from "./Group";

/** @gqlType MyUser */
export default class MyUserResolver implements IPerson {
  /** @gqlField */
  name(): string {
    return "Alice";
  }
  /** @gqlField */
  groups(): Group[] {
    return [new Group()];
  }

  /** @gqlQueryField */
  static me(): MyUserResolver {
    return new MyUserResolver();
  }

  /** @gqlQueryField */
  static allUsers(): MyUserResolver[] {
    return [new MyUserResolver(), new MyUserResolver()];
  }
}

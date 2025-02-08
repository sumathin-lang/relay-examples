import { DataID } from "relay-runtime";

type BookModel = { name: string; id: DataID };

/**
 * @RelayResolver
 * @onType Query
 * @fieldName Book
 */
export function Book(id: DataID): BookModel {
  return { name: "Book Name", id: id };
}

/**
 * @RelayResolver
 * @onType Book
 * @fieldName title
 */
export function title(): string {
  return "Hello World";
}

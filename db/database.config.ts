import Dexie, { Table } from "dexie";
import { IItem } from "./types/item";

export class DB extends Dexie {
  items!: Table<IItem>;
  constructor() {
    super("myDb");
    this.version(1).stores({
      items: "++id, name, cat",
    });
  }
}

export const db = new DB();
export const itemTable = db.table("items");

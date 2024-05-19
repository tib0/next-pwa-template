import Dexie from "dexie";

const database = new Dexie("database");
database.version(1).stores({
  item: '++id, name, cat',
});

export const itemTable = database.table('item');

export default database;
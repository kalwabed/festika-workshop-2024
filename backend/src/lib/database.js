import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

const defaultData = { events: [] };

const db = new Low(new JSONFile("../backend/src/db.json"), defaultData);

export default db;

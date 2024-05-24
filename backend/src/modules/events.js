import db from "../lib/database.js";

export async function getAllEvents(_, res) {
  await db.read();
  const events = db.data.events;
  return res.json({ data: events });
}

export async function addNewEvent(req, res) {
  const body = req.body;
  const payload = { id: crypto.randomUUID(), ...body };

  await db.read();
  await db.update(({ events }) => events.push(payload));

  const events = db.data.events;

  return res.json({ data: events });
}

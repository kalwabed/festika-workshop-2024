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

export async function updateEvent(req, res) {
  const body = req.body;
  const id = req.params.id;

  await db.read();
  const event = db.data.events.find((event) => event.id === id);

  if (!event) {
    return res
      .status(404)
      .json({ message: "Event is not found!", success: false });
  }

  // TODO:
  // 1. Add fields validation.
  // 2. User can update all the fields.

  event.name = body.name;
  await db.write();

  return res.json({ event });
}

import db from "../../lib/database.js";

export async function getAllEvents(req, res) {
  await db.read();
  const events = db.data.events;
  return res.json({ data: events });
}

export async function addNewEvent(req, res) {
  const body = req.body;
  const payload = {
    ...body,
    id: crypto.randomUUID(),
    createdAt: new Date(),
    cover: req.file.filename,
  };

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

  return res.json({ data: event, success: true });
}

export async function removeEvent(req, res) {
  const id = req.params.id;

  await db.read();
  const deletedEventIdx = db.data.events.findIndex((event) => event.id === id);

  if (deletedEventIdx === -1) {
    return res
      .status(404)
      .json({ message: "Event is not found!", success: false });
  }

  db.data.events.splice(deletedEventIdx, 1);
  await db.write();

  return res
    .status(204)
    .json({ success: true, message: "Event has been deleted!" });
}

export async function getEventById(req, res) {
  const id = req.params.id;

  await db.read();
  const event = db.data.events.find((event) => event.id === id);

  if (!event) {
    return res
      .status(404)
      .json({ message: "Event is not found!", success: false });
  }

  return res.json({ data: event, success: true });
}

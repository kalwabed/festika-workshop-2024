import express from "express";
import {
  addNewEvent,
  getAllEvents,
  removeEvent,
  updateEvent,
} from "./modules/events.js";

const router = express.Router();

router.get("/events", getAllEvents);
router.post("/events", addNewEvent);
router.put("/events/:id", updateEvent);
router.delete("/events/:id", removeEvent);

export default router;

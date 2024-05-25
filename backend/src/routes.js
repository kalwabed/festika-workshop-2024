import express from "express";
import {
  addNewEvent,
  getAllEvents,
  getEventById,
  removeEvent,
  updateEvent,
} from "./modules/events.js";
import { uploadSingle } from "./lib/multer.js";

const router = express.Router();

router.get("/events", getAllEvents);
router.get("/events/:id", getEventById);
router.post("/events", uploadSingle, addNewEvent);
router.put("/events/:id", updateEvent);
router.delete("/events/:id", removeEvent);

export default router;

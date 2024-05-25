import express from "express";
import { addNewEvent, getAllEvents, updateEvent } from "./modules/events.js";

const router = express.Router();

router.get("/events", getAllEvents);
router.post("/events", addNewEvent);
router.put("/events/:id", updateEvent);

export default router;

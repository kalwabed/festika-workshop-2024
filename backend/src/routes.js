import express from "express";
import { addNewEvent, getAllEvents } from "./modules/events.js";

const router = express.Router();

router.get("/events", getAllEvents);

router.post("/events", addNewEvent);

export default router;

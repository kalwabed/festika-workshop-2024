import express from "express";
import { signIn } from "./controller.js";

const router = express.Router();

router.post("/login", signIn);

export default router;

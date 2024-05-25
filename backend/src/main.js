import express from "express";
import auth from "./middlewares/auth.js";
import eventRouter from "./modules/events/route.js";
import authRouter from "./modules/authentication/route.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", authRouter);
app.use(auth);
app.use("/api", eventRouter);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

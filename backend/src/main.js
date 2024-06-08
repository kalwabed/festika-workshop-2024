import express from "express";
import { jwtAuth } from "./middlewares/auth.js";
import eventRouter from "./modules/events/route.js";
import authRouter from "./modules/authentication/route.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(process.cwd() + "/public"));
app.use(jwtAuth);

// auth exception handler
app.use(function (err, _req, res, next) {
  if (err.name === "UnauthorizedError") {
    return res
      .status(401)
      .json({ success: false, message: "User is not authenticated!" });
  } else {
    next(err);
  }
});

app.use("/", authRouter);
app.use("/api", eventRouter);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

import express from "express";
import routes from "./routes.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

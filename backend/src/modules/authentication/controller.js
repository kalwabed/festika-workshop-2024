import jwt from "jsonwebtoken";
import argon2 from "@node-rs/argon2";
import db from "../../lib/database.js";

export async function signIn(req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Username or password is empty!" });
  }

  await db.read();
  const user = db.data.users.find((user) => user.username === username);

  if (!user) {
    return res
      .status(400)
      .json({ success: false, message: "Username or password is not valid!" });
  }

  const isPasswordValid = await argon2.verify(user.password, password);

  if (!isPasswordValid) {
    return res
      .status(400)
      .json({ success: false, message: "Username or password is not valid!" });
  }

  const token = jwt.sign({ username, id: user.id }, "very-secret-KEY", {
    algorithm: "HS512",
    expiresIn: "1 day",
  });

  return res.json({ success: true, token });
}

export async function signUp(req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Username or password is empty!" });
  }

  await db.read();
  const user = db.data.users.find(
    (user) => user.username === username.toLowerCase(),
  );

  if (user) {
    return res
      .status(400)
      .json({ success: false, message: "Username is already taken" });
  }

  const encryptedPassword = await argon2.hash(password);

  db.data.users.push({
    id: crypto.randomUUID(),
    username: username.toLowerCase(),
    password: encryptedPassword,
  });
  await db.write();

  return res.json({
    success: true,
    message: "User has been registered.",
  });
}

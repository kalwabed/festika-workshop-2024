import jwt from "jsonwebtoken";

export async function signIn(req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Username or password is empty!" });
  }

  const token = jwt.sign({ username }, "very-secret-KEY", {
    algorithm: "HS512",
    expiresIn: "1 day",
  });

  return res.json({ success: true, token });
}

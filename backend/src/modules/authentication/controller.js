export async function signIn(req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Username or password is empty!" });
  }

  return res.json({ success: true });
}

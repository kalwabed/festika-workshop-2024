const checkIfUserIsAlreadyLogin = (req, res, next) => {
  if (!req.session?.user) {
    return res
      .status(401)
      .json({ success: false, message: "Please login to proceed!" });
  }
  next();
};

export default checkIfUserIsAlreadyLogin;

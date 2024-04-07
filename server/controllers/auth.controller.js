import jwt from "jsonwebtoken";

const generateAccessToken = (email) => {
  return jwt.sign({ email: email }, process.env.PRIVATE_KEY, {
    expiresIn: "1d",
  });
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email === "" || password === "") {
      return res.status(401).json({
        status: "error",
        message: "Email and password are required",
      });
    }
    const token = generateAccessToken(email);
    res.status(200).json({
      status: "success",
      accessToken: token
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

export { login };

const { User } = require("../model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  createProfile: async (req, res) => {
    try {
      const checkemail = await User.findOne({
        where: { email: req.body.email },
      });

      if (checkemail) {
        return res.status(400).json({ error: "Email already exists" });
      }

      const hashpassword = await bcrypt.hash(req.body.password, 10);

      const user = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashpassword,
      });

      res.status(201).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
  signin: async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(404).json({ error: "Email or Password not found." });
      }

      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(400).json({ error: "User not found." });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(401).json({ error: "Password is incorrect." });
      }

      // Generate a JSON Web Token (JWT) for authentication
      const token = jwt.sign(
        {
          userId: user.id,
          role: user.role,
        },
        process.env.jwt_Secret,
        {
          expiresIn: "1d",
        }
      );
      delete user.dataValues.password;
      delete user.dataValues.id;
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace("-", "+").replace("_", "/");
      const payload = JSON.parse(atob(base64));
      res.status(200).json({ payload, token, message: "succeeded" });
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const user = await User.findAll();
      res.status(201).json(user);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  deleteUser: async (req, res) => {
    const userId = req.params.id;
    try {
      const deletedUser = await User.destroy({ where: { id: userId } });
      res.status(202).json(deletedUser);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  getUserId: (req, res) => {
    const { token } = req.params;
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    const payload = JSON.parse(atob(base64));
    res.status(200).json({ payload });
  },
};

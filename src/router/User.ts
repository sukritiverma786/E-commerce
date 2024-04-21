import express, { Request, Response, Router, NextFunction } from "express";
import { Users } from "../Model/User";
import jwt, { JwtPayload } from "jsonwebtoken";
// import { initializeUserData } from "../app";

interface CustomRequest extends Request {
  user?: any; // Define the user property
}

const router: Router = express.Router();

router.post("/signup", async (req: Request, res: Response) => {
  try {
    // await initializeUserData();
    const { username, email, password } = req.body;

    // Check if a user with the same email already exists
    const existingUser = await Users.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        errors: "A user with this email already exists",
      });
    }

    // If the email is unique, proceed to create a new user
    let cart: { [key: number]: number } = {};
    for (let i = 0; i < 300; i++) {
      cart[i] = 0;
    }
    const user = new Users({
      username,
      email,
      password,
      cartData: cart,
    });
    await user.save();

    const data = {
      user: {
        id: user.id,
      },
    };
    const token = jwt.sign(data, "secret_ecom", {
      expiresIn: "1h",
    });
    res.json({ user, success: true, token });
    console.log(user);
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

router.post("/login", async (req: Request, res: Response) => {
  let user = await Users.findOne({ email: req.body.email });
  console.log(user.username, "is this username");
  let userName = user.username;
  if (user) {
    const passCompare = req.body.password === user.password;
    if (passCompare) {
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, "secret_ecom", {
        expiresIn: "1h",
      });
      res.json({ success: true, token, userName });
    } else {
      res.json({ success: false, errors: "Wrong Password" });
    }
  } else {
    res.json({ success: false, errors: "Wrong Email Id" });
  }
});

const fetchUser = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("auth-token");
  if (!token) {
    return res
      .status(401)
      .send({ errors: "please authenticate using valid token" });
  } else {
    try {
      const data = jwt.verify(token, "secret_ecom") as JwtPayload;
      req.user = data.user;
      next();
    } catch (error) {
      res
        .status(401)
        .send({ errors: "please authenticate using a valid token" });
    }
  }
};

router.post(
  "/addtocart",
  fetchUser,
  async (req: CustomRequest, res: Response) => {
    console.log(req.body, req.user);
    let userData = await Users.findOne({ _id: req.user.id });
    userData.cartData[req.body.itemId] += 1;
    await Users.findOneAndUpdate(
      { _id: req.user.id },
      { cartData: userData.cartData }
    );
    res.send("Added");
  }
);

// creating endpoint to remove product from cartdata
router.post(
  "/removefromcart",
  fetchUser,
  async (req: CustomRequest, res: Response) => {
    console.log("removed", req.body.itemId);
    let userData = await Users.findOne({ _id: req.user.id });
    if (userData.cartData[req.body.itemId] > 0)
      userData.cartData[req.body.itemId] -= 1;
    await Users.findOneAndUpdate(
      { _id: req.user.id },
      { cartData: userData.cartData }
    );
    res.send("Removed");
  }
);

router.post(
  "/getcart",
  fetchUser,
  async (req: CustomRequest, res: Response) => {
    try {
      console.log("GetCart", req.body.itemId);
      let userData = await Users.findOne({ _id: req.user.id });

      // Check if userData exists
      if (userData) {
        res.json(userData.cartData);
      } else {
        // If userData does not exist, send an appropriate response
        res.status(404).json({ error: "User data not found" });
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

// router.post(
//   "/getcart",
//   fetchUser,
//   async (req: CustomRequest, res: Response) => {
//     console.log("GetCart", req.body.itemId);
//     let userData = await Users.findOne({ _id: req.user.id });
//     res.json(userData.cartData);
//   }
// );

export default router;

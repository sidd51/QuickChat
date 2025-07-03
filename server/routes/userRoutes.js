import express from "express"
import { protectRoute } from "../middleware/auth.js";

const userRouter = express.Router();

// ✅ Corrected import
import { login, signup, updateProfile, checkauth } from "../controllers/userController.js";

userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.put("/update-profile", protectRoute, updateProfile);
userRouter.get("/check", protectRoute, checkauth);

export default userRouter;

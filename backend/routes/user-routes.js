import express from "express";
import { getAllUsers, login, signup, dailyCheckin, weeklyCheckin } from "../controllers/user-controller.js";

const router = express.Router();

router.get("/", getAllUsers);
router.post("/signup", signup);
router.post("/login", login);
router.post("/daily-checkin", dailyCheckin);
router.post("/weekly-checkin", weeklyCheckin);

export default router;

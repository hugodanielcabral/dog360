import { Router } from "express";
import { signin, singup, logout } from "../controllers/users.controller.js";

const router = Router();

router.post("/signin", signin);

router.post("/signup", singup);

router.post("/logout", logout);

export default router;

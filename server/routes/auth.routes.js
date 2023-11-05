import { Router } from "express";

const router = Router();

router.post("/signin", (req, res) => {
  res.json({ message: "Welcome to Dog360" });
});

router.post("/signup", (req, res) => {
  res.json({ message: "Welcome to Dog360" });
});

router.post("/signout", (req, res) => {
  res.json({ message: "Welcome to Dog360" });
});

router.get("/profile", (req, res) => {
  res.json({ message: "Welcome to Dog360" });
});

export default router;

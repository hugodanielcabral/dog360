import { Router } from "express";

import {
  getDogs,
  getDog,
  createDog,
  updateDog,
  deleteDog,
} from "../controllers/dogs.controllers.js";

const router = Router();

router.get("/dogs", getDogs);

router.get("/dogs/:id", getDog);

router.post("/dogs", createDog);

router.put("/dogs/:id", updateDog);

router.delete("/dogs/:id", deleteDog);

export default router;

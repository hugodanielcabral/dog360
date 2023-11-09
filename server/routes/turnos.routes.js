import { Router } from "express";

import {
  getTurno,
  createTurno,
  deleteTurno,
} from "../controllers/turnos.controller.js";

const router = Router();

router.get("/turnos/:id", getTurno);

router.post("/turnos", createTurno);

router.delete("/turnos/:id", deleteTurno);

export default router;

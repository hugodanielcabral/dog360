import express from "express";
import { PORT } from "./config.js";

import indexRoutes from "./routes/index.routes.js";
import dogsRoutes from "./routes/dogs.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(express.json());

app.listen(PORT);

//* Routes

app.get("/", (req, res) => {
  res.json({
    message: "Bienvenido a Dog360",
  });
});
app.use("/api", indexRoutes);
app.use("/api", dogsRoutes);
app.use("/api", authRoutes);

//* Error Handler

app.use((req, res, next) => {
  res.status(404).json({
    message: "Direccion no encontrada",
  });
  next();
});

//* Server

console.log(`Server is running on port ${PORT}`);

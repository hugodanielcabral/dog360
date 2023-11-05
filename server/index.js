import express from "express";
import { PORT } from "./config.js";

import indexRoutes from "./routes/index.routes.js";
import dogsRoutes from "./routes/dogs.routes.js";

const app = express();

app.use(express.json());

app.listen(PORT);

app.use(indexRoutes);
app.use(dogsRoutes);

console.log(`Server is running on port ${PORT}`);

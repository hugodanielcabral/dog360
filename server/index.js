import express from "express";
import cors from "cors";
import { PORT } from "./config.js";

import indexRoutes from "./routes/index.routes.js";
import dogsRoutes from "./routes/dogs.routes.js";
import usersRoutes from "./routes/users.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT);

app.use(indexRoutes);
app.use(dogsRoutes);
app.use(usersRoutes);

console.log(`Server is running on port ${PORT}`);

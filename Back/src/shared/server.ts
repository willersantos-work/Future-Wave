import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

import { errorHandler } from "../error/errorHandler";
import { router } from "../http/index.routes";
import { connectDB } from "./database/database";

const app = express();

connectDB();

// Express configuration
app.set("port", process.env.PORT || 5000);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Return error
router.use(errorHandler);

app.use(router);

const port = app.get("port");
const server = app.listen(port, () => console.log(`Server is running on port ${port}`));

export default server;

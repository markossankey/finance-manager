import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import { verifyToken } from "./middleware/auth";
import router from "./routes";
import cookieParser = require("cookie-parser");

dotenv.config();

const app = express();

const isProd = process.env.NODE_ENV === "production";
const port = isProd ? process.env.PROD_PORT : process.env.VITE_DEV_BACKEND_PORT;
const frontendPort = process.env.DEV_FRONTEND_PORT;
const frontendUrl = `http://localhost:${frontendPort}`;

// has to check before other middleware
if (!isProd) {
  app.use(cors({ origin: frontendUrl }));
}
app.use((req, res, next) => {
  console.log("\n\n");
  console.log("\x1b[1m", `incoming request: ${req.url}`);
  return next();
});

// helpers middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes -- first verifies token, then goes to api
app.use("/api", verifyToken, router);

// check to determine whether the fronted should be served from this server or from its own server
if (isProd) {
  app.use(express.static("build/public"));
} else {
  app.use("/", (req, res) => {
    res.redirect(frontendUrl);
  });
}

app.listen(port, () => {
  console.log("\x1b[32m", `Server is running on http://localhost:${port}.`);
});

import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
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

// helpers middleware
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// routes
app.use("/api", router);

// dev util
app.use((req, res, next) => {
  const { url, params, body } = req;
  console.log("\n", url, { params, body }, "\n");
  next();
});

// check to determine whether the fronted should be served from this server or from its own server
if (isProd) {
  app.use(express.static("build/public"));
} else {
  app.use("/", (req, res) => {
    res.redirect(frontendUrl);
  });
}

app.listen(port, () => {
  console.log(`\nServer is running on http://localhost:${port}.\n`);
});

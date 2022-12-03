import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import router from "./routes";

dotenv.config();

const app = express();
const isProd = process.env.NODE_ENV === "production";
const port = isProd ? process.env.PROD_PORT : process.env.VITE_DEV_BACKEND_PORT;
const frontendPort = process.env.DEV_FRONTEND_PORT;
const frontendUrl = `http://localhost:${frontendPort}`;

if (!isProd) {
  app.use(cors({ origin: frontendUrl }));
}

app.use("/api", router);

if (isProd) {
  // in prod, it uses the static build of the frontend
  app.use(express.static("build/public"));
} else {
  // when not in prod, we want to use the hot reload version of the frontend,
  // this will point to the locally running frontend
  app.use("/", (req, res) => {
    res.redirect(frontendUrl);
  });
}

app.listen(port, () => {
  console.log(`\nServer is running on http://localhost:${port}.\n`);
});

import * as dotenv from "dotenv";
import express from "express";
import router from "./routes";

dotenv.config();

const app = express();
const isProd = process.env.NODE_ENV === "production";
const port = isProd ? process.env.PROD_PORT : process.env.DEV_BACKEND_PORT;

app.use("/api", router);

if (isProd) {
  // in prod, it uses the static build of the frontend
  app.use(express.static("build/public"));
} else {
  // when not in prod, we want to use the hot reload version of the frontend,
  // this will point to that, but it also has to be running on a different port than backend
  app.use("/", (req, res) => {
    res.redirect(`http://localhost:${process.env.DEV_FRONTEND_PORT}`);
  });
}

app.listen(port, () => {
  console.log(`\nServer is running on http://localhost:${port}.\n`);
});

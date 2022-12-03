import react from "@vitejs/plugin-react";
import * as dotenv from "dotenv";
import { defineConfig } from "vite";
dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: "frontend",
  server: { port: Number(process.env.DEV_FRONTEND_PORT) },
  build: {
    outDir: "../build/public",
    emptyOutDir: true,
  },
});

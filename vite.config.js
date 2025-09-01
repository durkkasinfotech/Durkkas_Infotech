import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base path for GitHub Pages or subfolder deployment
  base: process.env.NODE_ENV === "production" ? "/dkit-staticsite/" : "/",
});

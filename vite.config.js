import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/ecommerce-full-stack/",
  plugins: [react()],
  exclude: ["js-big-decimal"],
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/rocket-bootcamp-practice/react-week3/dist/",
  plugins: [react()],
});

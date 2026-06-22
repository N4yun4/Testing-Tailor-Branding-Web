import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// base: "./" keeps asset paths relative so the build works under the
// GitHub Pages project sub-path (/Testing-Tailor-Branding-Web/) without
// any client-side routing config.
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
});

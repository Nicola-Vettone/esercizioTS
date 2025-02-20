import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import checker from "vite-plugin-checker";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      // e.g. use TypeScript check
      // typescript: true // la documentazione ad oggi propone questa soluzione
      // la configurazione corretta è invece scritta in questo modo
      typescript: { buildMode: true },
    }),
  ],
});

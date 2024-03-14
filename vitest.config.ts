import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import config from "./vite.config";

export default defineConfig({
  ...config,
  plugins: [react()],
  test: {
    setupFiles: ["./vitest.setup.ts"],
    environment: "jsdom",
    include: ["**/*.test.tsx"],
    globals: true,
  },
});

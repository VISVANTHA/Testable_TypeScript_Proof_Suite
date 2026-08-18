import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["test/**/*.test.ts", "test/**/*.vitest.ts"],
    exclude: ["test/service.test.ts", "node_modules", "dist"]
  }
});

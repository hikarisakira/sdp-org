/// <reference types="@rstest/core" />
import { getViteConfig } from "astro/config";
import { defineConfig } from "@rstest/core";

export default defineConfig({
  include: ["src/**/*.test.{js,jsx,ts,tsx}"],
  testEnvironment: "happy-dom",
});

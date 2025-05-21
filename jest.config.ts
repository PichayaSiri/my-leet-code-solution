import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@daily$": "<rootDir>/src/daily/index.ts", // รองรับ @daily โดยตรง
  },
};

export default config;

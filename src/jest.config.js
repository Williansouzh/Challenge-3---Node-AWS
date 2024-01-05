// jest.config.js
export default {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  extensionsToTreatAsEsm: [".ts"],
  testMatch: ["**/*.test.ts"],
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
};

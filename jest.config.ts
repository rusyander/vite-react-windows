export default {
  rootDir: "src",
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },

  moduleNameMapper: {
    "^.+\\.(css|less|scss|sass)$": "<rootDir>/test/__ mocks __/styleMock.ts",
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__ mocks __/fileMock.ts",
  },

  setupFilesAfterEnv: ["<rootDir>/test/__ mocks __/setupTests.ts"],
  moduleFileExtensions: [
    // Place tsx and ts to beginning as suggestion from Jest team
    // https://jestjs.io/docs/configuration#modulefileextensions-arraystring
    "tsx",
    "ts",
    "web.js",
    "js",
    "web.ts",
    "web.tsx",
    "json",
    "web.jsx",
    "jsx",
    "node",
  ],
  modulePaths: ["<rootDir>/src"],
};

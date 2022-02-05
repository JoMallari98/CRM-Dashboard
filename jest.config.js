const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleDirectories: ["node_modules", "<rootDir>"],
  moduleNameMapper: {
    "\\.svg": "svgr/webpack",
  },
  testTimeout: 20000,
};

module.exports = createJestConfig(customJestConfig);

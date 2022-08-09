module.exports = {
  roots: ["<rootDir>/src/"],
  testMatch: ["**/+(*.)+(test).+(tsx)"],
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/node_modules/",
    "!<rootDir>/path/to/dir/",
  ],
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "babel-jest",
  },
};

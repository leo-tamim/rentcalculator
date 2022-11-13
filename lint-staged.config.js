module.exports = {
  // Run format:fix on changes to all files
  "**/*.(ts|tsx|js|jsx|css|scss|json)?(x)": () => "yarn format",
  // Run type-check on changes to TypeScript files
  "**/*.(ts|tsx)?(x)": () => "yarn type-check",
  // Run ESLint on changes to JavaScript/TypeScript files
  "**/*.(ts|js|tsx|jsx)?(x)": (filenames) =>
    `yarn lint . ${filenames.join(" ")}`,
};

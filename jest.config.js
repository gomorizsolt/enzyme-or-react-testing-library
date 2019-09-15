module.exports = {
    setupFiles: ["<rootDir>/test-configs/enzyme.js"],
    // https://github.com/FormidableLabs/enzyme-matchers/issues/86#issuecomment-458553473
    setupFilesAfterEnv: ["<rootDir>/test-configs/react-testing-library.js"]
};
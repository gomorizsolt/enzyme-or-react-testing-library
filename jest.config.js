module.exports = {
    setupFiles: ["<rootDir>/configs/enzyme.js"],
    // https://github.com/FormidableLabs/enzyme-matchers/issues/86#issuecomment-458553473
    setupFilesAfterEnv: ["<rootDir>/configs/react-testing-library.js"],
};
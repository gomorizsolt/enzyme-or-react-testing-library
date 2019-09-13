module.exports = {
    setupFiles: ["<rootDir>/setup/enzyme.js"],
    /*
        Extending default Jest expects.
        https://github.com/FormidableLabs/enzyme-matchers/issues/86#issuecomment-312489052
        https://github.com/FormidableLabs/enzyme-matchers/issues/86#issuecomment-458553473
    */
    setupFilesAfterEnv: ["<rootDir>/setup/react-testing-library.js"]
};
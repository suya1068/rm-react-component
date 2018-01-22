const paths = require("../paths");

module.exports = {
    "rootDir": paths.root(),
    "verbose": true,
    "testRegex": "test\/.*\\.spec\\.jsx?$",
    "testEnvironment": "jsdom",
    "modulePaths": ["<rootDir>"],
    "transformIgnorePatterns": ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"],
    "moduleFileExtensions": ["js", "jsx", "json", "es6"],
    "transform": {
        "^.+\\.jsx?$": "babel-jest"
    },
    "setupFiles": ["<rootDir>/test/jest.setup.js"],
    "moduleNameMapper": {
        "^.+\\.(css|scss)$": "identity-obj-proxy"
    },
    "snapshotSerializers": [
        "<rootDir>/node_modules/enzyme-to-json/serializer"
    ]
};

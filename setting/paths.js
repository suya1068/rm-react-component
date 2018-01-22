const { resolve } = require("path");

const root = resolve(__dirname, "../");

module.exports = {
    root(path = "", absolute = true) {
        return absolute ? resolve(root, path) : resolve(path);
    }
};
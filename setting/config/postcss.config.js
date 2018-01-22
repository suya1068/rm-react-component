const autoprefixer = require("autoprefixer");
const browserReporter = require("postcss-browser-reporter");
const reporter = require("postcss-reporter");

module.exports = {
    plugins: [
        autoprefixer({
            browsers: ["> 1%", "last 2 versions"]
        }),
        browserReporter(),
        reporter()
    ]
};

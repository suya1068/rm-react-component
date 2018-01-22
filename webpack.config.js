const webpackDevConfig = require("./setting/config/webpack-dev.config");
const webpackProdConfig = require("./setting/config/webpack-prod.config");

module.exports = env => {
    return env.prod ? webpackProdConfig : webpackDevConfig;
};

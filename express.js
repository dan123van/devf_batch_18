"use strict";

const config = (app) => {
    require("./src/routes/index")(app);
};

module.exports = config;

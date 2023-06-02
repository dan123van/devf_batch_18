"use strict";

const express = require("express");
const app = express();

require("./express")(app);

app.listen(3000);

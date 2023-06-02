"use strict";

const testProcess = require("../process/test-process");

const router = (app) => {
  app.post("/", (req, res) => {
    const response = testProcess.createTest(req);
    res.send(response);
  });

  app.get("/:nombre", (req, res) => {
    let datos = {
      nombre: req.params.nombre,
      apellido: req.query.apellido
    }

    const response = testProcess.getTest(datos);
    res.send(response);
  });

  app.put("/", (req, res) => {
    res.send("Hello World TEST :D");
  });

  app.delete("/", (req, res) => {
    res.send("Hello World TEST :D");
  });
};

module.exports = router;

"use strict";

const testProcess = {
  createTest: () => {
    return "Hello World TEST POST :D";
  },
  getTest: (data) => {
    console.log(data);
    return `Hola soy ${data.nombre} ${data.apellido}`;
  },
};

module.exports = testProcess;

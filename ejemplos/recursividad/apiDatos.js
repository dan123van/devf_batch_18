"use strict";

const dbDatos = require("./dbDatos.json");

const buscarDatos = (search, offset, pagina) => {
  let count = 1;
  let datosEncontrados = dbDatos
    .map((dbDato) => {
      if (dbDato.nombre == search) {
        dbDato.id = count++;
        return { ...dbDato };
      }
    })
    .filter((dato) => !!dato);

  let total = datosEncontrados.length;
  let datosFiltrados = [...datosEncontrados.slice(offset, pagina)];
  return {
    data: datosFiltrados,
    total: total,
    offset: offset + datosFiltrados.length
  };
};

module.exports = buscarDatos;

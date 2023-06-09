
function paginacion(nombre, pagina) {
  if (pagina < 1) offset = 1;
  let offset = 3 * pagina;

  let datos = dbDatos
    .map((dato, index) => {
      if (!dato.id) dato.id = index;
      if (nombre == dato.nombre) return dato;
    })
    .filter((dato) => !!dato);

  let response = {
    totalUsuarios: datos.length,
    usuarios: datos.slice(offset - 3, offset),
  };
  return response;
}

const datosEjemplo = (nombre, pagina) => {
  return paginacion(nombre, pagina)
};

module.exports = datosEjemplo;

// Solo retorna 3 valores por pagina 
// Solo recibe como parametros un valor de busqueda y una paginas
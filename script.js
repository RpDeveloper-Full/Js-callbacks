// Función que simula cargar datos con un retardo
function obtenerDatos(callback) {
  document.getElementById("resultado").textContent = "Cargando datos...";

  // Simula un proceso asíncrono con setTimeout
  setTimeout(() => {
    let datos = { nombre: "Ana", edad: 25 };
    callback(datos); // ejecuta el callback con los datos obtenidos
  }, 2000);
}

// Función que muestra los datos en la página
function mostrarDatos(info) {
  document.getElementById("resultado").textContent = 
    `Nombre: ${info.nombre}, Edad: ${info.edad}`;
}

// Función principal que combina todo
function cargarDatos() {
  obtenerDatos(mostrarDatos);
}
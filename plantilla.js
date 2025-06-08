// Espera a que el contenido del DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  // Se carga el archivo 'jugadores.xml' usando fetch
  fetch('jugadores.xml')
    .then(response => response.text())  // Se convierte la respuesta en texto
    .then(data => {
      // Se crea un parser para interpretar el texto como XML
      const parser = new DOMParser();
      const xml = parser.parseFromString(data, 'application/xml');

      // Se obtiene la lista de elementos jugador del XML
      const jugadores = xml.getElementsByTagName('jugador');

      // Se selecciona el body de la tabla donde se insertarán las filas
      const tbody = document.querySelector('#tabla-jugadores tbody');

      // Se recorre cada jugador en la lista
      for (let jugador of jugadores) {
        // Se obtienen los datos de cada jugador desde el XML
        const nombre = jugador.getElementsByTagName('nombre')[0].textContent;
        const posicion = jugador.getElementsByTagName('posicion')[0].textContent;
        const numero = jugador.getElementsByTagName('numero')[0].textContent;
        const goles = jugador.getElementsByTagName('goles')[0].textContent;
        const asistencias = jugador.getElementsByTagName('asistencias')[0].textContent;
       
        // Se crea una nueva fila para la tabla
        const row = document.createElement('tr');
        
        // Se llena la fila con celdas que contienen los datos del jugador
        row.innerHTML = `
          <td>${nombre}</td>
          <td>${posicion}</td>
          <td>${numero}</td>
          <td>${goles}</td>
          <td>${asistencias}</td>
        `;
        
        // Se agrega la fila al cuerpo de la tabla
        tbody.appendChild(row);
      }
    })
    .catch(error => {
      // En caso de error al cargar o procesar el XML, lo muestra en la consola
      console.error('Error al cargar el XML:', error);
    });
});

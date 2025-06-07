document.addEventListener('DOMContentLoaded', () => {
  fetch('jugadores.xml')
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const xml = parser.parseFromString(data, 'application/xml');
      const jugadores = xml.getElementsByTagName('jugador');

      const tbody = document.querySelector('#tabla-jugadores tbody');

      for (let jugador of jugadores) {
        const nombre = jugador.getElementsByTagName('nombre')[0].textContent;
        const posicion = jugador.getElementsByTagName('posicion')[0].textContent;
        const numero = jugador.getElementsByTagName('numero')[0].textContent;
        const goles = jugador.getElementsByTagName('goles')[0].textContent;
        const asistencias = jugador.getElementsByTagName('asistencias')[0].textContent;
       

        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${nombre}</td>
          <td>${posicion}</td>
          <td>${numero}</td>
          <td>${goles}</td>
          <td>${asistencias}</td>
        `;
        tbody.appendChild(row);
      }
    })
    .catch(error => {
      console.error('Error al cargar el XML:', error);
    });
});

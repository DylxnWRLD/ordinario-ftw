document.addEventListener('DOMContentLoaded', () => {
  // Seleccionamos el formulario y los campos de entrada (correo y contraseña)
  const form = document.querySelector('form');
  const correoInput = document.getElementById('correo');
  const contrasenaInput = document.getElementById('contrasena');
  
  // Seleccionamos el elemento donde mostraremos los mensajes de error
  const msjError = document.getElementById('msjError');

  // Función general para mostrar un mensaje de error y enfocar el campo que tiene el error
  function mostrarError(mensaje, campoFoco) {
    msjError.textContent = mensaje;    // Coloca el texto del error
    msjError.removeAttribute('hidden'); // Hace visible el mensaje de error
    campoFoco.focus();                  // Pone el foco en el campo con error
  }

  // Función general para ocultar el mensaje de error
  function ocultarError() {
    msjError.setAttribute('hidden', ''); // Oculta el mensaje de error
  }

  // Evento que se activa cuando el usuario intenta enviar el formulario
  form.addEventListener('submit', e => {
    e.preventDefault();

    // Obtiene los valores escritos por el usuario en correo y contraseña
    const correo = correoInput.value.trim();
    const contrasena = contrasenaInput.value.trim();

    // Revisa si el campo de correo está vacío
    if (correo === '') {
      mostrarError('Por favor, escribe tu correo.', correoInput);
      return; 
    }

    // Revisa si el campo de contraseña está vacío
    if (contrasena === '') {
      mostrarError('Por favor, escribe tu contraseña.', contrasenaInput);
      return;
    }

    // Si ambos campos tienen datos, se compara con valores predefinidos
    if (correo === 'usuario@ejemplo.com' && contrasena === 'nuol2216') {
      ocultarError();               // Oculta mensajes de error previos
      window.location.href = 'menuPrincipal.html'; // Redirige a la página principal
    } else {
      mostrarError('Usuario o contraseña incorrectos.', contrasenaInput);
    }
  });

  // Si el usuario empieza a escribir en cualquiera de los campos, ocultamos el mensaje de error para 
  // que no esté visible mientras corrige
  correoInput.addEventListener('input', ocultarError);
  contrasenaInput.addEventListener('input', ocultarError);
});

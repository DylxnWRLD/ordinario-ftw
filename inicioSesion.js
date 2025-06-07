document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const correoInput = document.getElementById('correo');
  const contrasenaInput = document.getElementById('contrasena');
  const msjError = document.getElementById('msjError');

  function mostrarError(mensaje) {
    msjError.textContent = mensaje;
    msjError.hidden = false;
  }

  function ocultarError() {
    msjError.hidden = true;
  }

  form.addEventListener('submit', e => {
    e.preventDefault();

    const correo = correoInput.value.trim();
    const contrasena = contrasenaInput.value.trim();

    if (correo === '' || contrasena === '') {
      mostrarError('Por favor, completa todos los campos.');
      return;
    }

    if (correo === 'usuario@ejemplo.com' && contrasena === 'nuol2216') {
      ocultarError();
      window.location.href = 'menuPrincipal.html';
    } else {
      mostrarError('Usuario o contraseña incorrectos');
    }
  });

  correoInput.addEventListener('input', ocultarError);
  contrasenaInput.addEventListener('input', ocultarError);
});

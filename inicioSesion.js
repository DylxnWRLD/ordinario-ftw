document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const correoInput = document.getElementById('correo');
  const contrasenaInput = document.getElementById('contrasena');
  const msjError = document.getElementById('msjError');

  function mostrarError(mensaje, campoFoco) {
    msjError.textContent = mensaje;
    msjError.hidden = false;
    campoFoco.focus(); // 💡 Apunta el foco al campo incorrecto
  }

  function ocultarError() {
    msjError.hidden = true;
  }

  form.addEventListener('submit', e => {
    e.preventDefault();

    const correo = correoInput.value.trim();
    const contrasena = contrasenaInput.value.trim();

    if (correo === '') {
      mostrarError('Por favor, escribe tu correo.', correoInput);
      return;
    }

    if (contrasena === '') {
      mostrarError('Por favor, escribe tu contraseña.', contrasenaInput);
      return;
    }

    if (correo === 'usuario@ejemplo.com' && contrasena === 'nuol2216') {
      ocultarError();
      window.location.href = 'menuPrincipal.html';
    } else {
      mostrarError('Usuario o contraseña incorrectos.', contrasenaInput);
    }
  });

  correoInput.addEventListener('input', ocultarError);
  contrasenaInput.addEventListener('input', ocultarError);
});

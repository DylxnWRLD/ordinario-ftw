document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const correoInput = document.getElementById('correo');
  const contrasenaInput = document.getElementById('contrasena');
  const errorMsg = document.getElementById('error-msg');

  form.addEventListener('submit', e => {
    e.preventDefault();

    const correo = correoInput.value.trim();
    const contrasena = contrasenaInput.value.trim();

    if (correo === '' || contrasena === '') {
      errorMsg.textContent = 'Por favor, completa todos los campos.';
      errorMsg.hidden = false;
      return;
    }

    if (correo === 'usuario@ejemplo.com' && contrasena === '1234') {
      errorMsg.hidden = true;
      window.location.href = 'menuPrincipal.html';
    } else {
      errorMsg.textContent = 'Usuario o contraseña incorrectos';
      errorMsg.hidden = false;
    }
  });

  correoInput.addEventListener('input', () => {
    errorMsg.hidden = true;
  });
  contrasenaInput.addEventListener('input', () => {
    errorMsg.hidden = true;
  });
});

let usuarioRegistrado = null; // objeto simulado para almacenar datos del registro

function mostrarRegistro() {
  document.getElementById("form-login").classList.add("hidden");
  document.getElementById("form-register").classList.remove("hidden");
  limpiarMensajes();
}

function mostrarLogin() {
  document.getElementById("form-register").classList.add("hidden");
  document.getElementById("form-login").classList.remove("hidden");
  limpiarMensajes();
}

function registrar() {
  const email = document.getElementById("reg-email").value.trim();
  const pass = document.getElementById("reg-password").value.trim();
  const confirm = document.getElementById("reg-confirm").value.trim();
  const mensaje = document.getElementById("reg-message");

  if (!email || !pass || !confirm) {
    mensaje.textContent = "Todos los campos son obligatorios.";
    return;
  }

  if (!validarCorreo(email)) {
    mensaje.textContent = "Correo electrónico no válido.";
    return;
  }

  if (pass.length < 6) {
    mensaje.textContent = "La contraseña debe tener al menos 6 caracteres.";
    return;
  }

  if (pass !== confirm) {
    mensaje.textContent = "Las contraseñas no coinciden.";
    return;
  }

  usuarioRegistrado = { email, pass };
  mensaje.style.color = "green";
  mensaje.textContent = "Registro exitoso. Puedes iniciar sesión.";
}

function login() {
  const email = document.getElementById("login-email").value.trim();
  const pass = document.getElementById("login-password").value.trim();
  const mensaje = document.getElementById("login-message");

  if (!email || !pass) {
    mensaje.textContent = "Por favor ingresa correo y contraseña.";
    return;
  }

  if (!usuarioRegistrado) {
    mensaje.textContent = "No hay ningún usuario registrado.";
    return;
  }

  if (usuarioRegistrado.email === email && usuarioRegistrado.pass === pass) {
    mensaje.style.color = "green";
    mensaje.textContent = "¡Inicio de sesión exitoso!";
  } else {
    mensaje.textContent = "Correo o contraseña incorrectos.";
  }
}

function validarCorreo(email) {
  // Validación básica de email
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function limpiarMensajes() {
  document.getElementById("reg-message").textContent = "";
  document.getElementById("login-message").textContent = "";
}

document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.getElementById('form-contacto');
  const resultado = document.getElementById('resultado');

  formulario.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevenir envío real del formulario

    // Obtener valores
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
	const asunto = document.getElementById('asunto').value.trim();

	// Validación de email simple
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
      resultado.textContent = 'Ingrese un email válido.';
      resultado.style.color = 'red';
      return;
    }

    // Validación básica
    if (nombre === '' || email === '' || mensaje === '' || asunto === '') {
      resultado.textContent = 'Por favor, complete todos los campos.';
      resultado.style.color = 'red';
      return;
    }

    resultado.textContent = `Gracias por su contacto, ${nombre}. En breve le estaré respondiendo.`;
    resultado.style.color = 'green';

    formulario.reset();
  });
});
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const messageContainer = document.getElementById('form-message');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Previene la recarga de la página
  
      const formData = new FormData(form);
  
      fetch(form.action, {
        method: 'POST',
        body: formData
      })
      .then(response => {
        if (response.ok) {
          messageContainer.textContent = '¡Mensaje enviado con éxito!';
          messageContainer.style.color = 'green';
          form.reset(); // Opcional: limpiar el formulario
        } else {
          throw new Error('Error en el envío del formulario.');
        }
      })
      .catch(error => {
        messageContainer.textContent = 'Hubo un error al enviar el mensaje.';
        messageContainer.style.color = 'red';
      });
    });
  });
  
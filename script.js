document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // ESTO EVITA QUE LA PAGINA SE RECARGUE

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('responseMessage').textContent = '¡Gracias por tu mensaje!';
        this.reset(); // ESTO BORRA TODO DEL FORMULARIO
    } else {
        document.getElementById('responseMessage').textContent = 'Por favor, completa todos los campos.';
        document.getElementById('responseMessage').style.color = 'red';
    }
});
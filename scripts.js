document.getElementById('citaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario
    document.getElementById('modal').style.display = 'block'; // Mostrar el modal
});

document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none'; // Cerrar el modal
});

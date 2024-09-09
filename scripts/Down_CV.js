
// Empieza codigo de boton de descarga CV

document.addEventListener('DOMContentLoaded', function() {

    // Selecciona el botón por su ID

    const downloadButton = document.getElementById('download-cv');
    
    // Establece la URL del archivo CV

    const fileUrl = '/CV/CV_BRANDON.pdf'; // Reemplaza esto con la ruta a tu archivo CV
    
    // Agrega un listener para el evento click
    downloadButton.addEventListener('click', function() {
        // Crea un enlace temporal
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'CV_Brandon_Visoso.pdf'; // Nombre del archivo descargado
        link.style.display = 'none'; // Oculta el enlace
        document.body.appendChild(link); // Añade el enlace al documento
        link.click(); // Simula un clic en el enlace
        document.body.removeChild(link); // Elimina el enlace después de hacer clic
    });
});

// Termina Codigo de boton de descarga CV


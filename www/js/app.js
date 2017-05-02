$(document).ready(function () {
    $("#centralContent").load("http://applica.uno/mobil/nueva_inicio_sesion_personas.php", function () {
        console.log("Contenido cargado exitosamente.");
    });
});
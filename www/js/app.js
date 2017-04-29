$(document).ready(function () {
    $("#centralContent").load("http://applica.uno/aplica/movil/nueva_inicio_sesion_personas.php", function () {
        alert("Load was performed.");
    });
});
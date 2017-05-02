$(document).ready(function () {
    $("#centralContent").load("http://vinculamos.com.co/hoja-vida.php", function () {
        alert("Load was performed.");
    });
});
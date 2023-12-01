function actualizarReloj() {
    var ahora = new Date();
    var horas = ahora.getHours();
    var minutos = ahora.getMinutes();

    // Asegurarse de que las horas y los minutos tengan siempre dos dígitos
    horas = (horas < 10) ? "0" + horas : horas;
    minutos = (minutos < 10) ? "0" + minutos : minutos;

    // Actualizar el contenido de los elementos de hora y minutos
    document.getElementById("hora").innerHTML = horas + ":";
    document.getElementById("minutos").innerHTML = minutos;

    // Actualizar cada segundo
    setTimeout(actualizarReloj, 1000);
}

// Llamar a la función para iniciarla
actualizarReloj();
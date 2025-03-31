function actualizarHora() {
    const opciones = { timeZone: "America/Bogota", hour: "2-digit", minute: "2-digit", second: "2-digit" };
    const fecha = new Date().toLocaleDateString("es-CO");
    const hora = new Date().toLocaleTimeString("es-CO", opciones);
    document.getElementById("fecha-hora").innerHTML = `🕒 ${hora} - 📅 ${fecha}`;
}
setInterval(actualizarHora, 1000);
actualizarHora();
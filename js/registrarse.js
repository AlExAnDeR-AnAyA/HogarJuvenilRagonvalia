document.getElementById("tipoDocumento").addEventListener("change", function() {
    let acudienteContainer = document.getElementById("acudienteContainer");
    let documentosAdicionales = document.getElementById("documentosAdicionales");
    if (this.value === "ti") {
        acudienteContainer.style.display = "block";
        documentosAdicionales.style.display = "block";
    } else {
        acudienteContainer.style.display = "none";
        documentosAdicionales.style.display = "none";
    }
});

document.getElementById("registroForm").addEventListener("submit", function(event) {
    let correo = document.getElementById("correo").value;
    let confirmarCorreo = document.getElementById("confirmarCorreo").value;
    let clave = document.getElementById("clave").value;
    let confirmarClave = document.getElementById("confirmarClave").value;

    if (correo !== confirmarCorreo) {
        alert("Los correos electrónicos no coinciden");
        event.preventDefault();
    }
    if (clave !== confirmarClave) {
        alert("Las contraseñas no coinciden");
        event.preventDefault();
    }
});
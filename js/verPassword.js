 // Función para alternar la visibilidad de la contraseña
 function togglePassword(id) {
    var passwordField = document.getElementById(id);
    var button = passwordField.nextElementSibling;  // Obtiene el botón que está junto al campo de contraseña

    // Cambia el tipo de campo de "password" a "text" y viceversa
    if (passwordField.type === "password") {
        passwordField.type = "text";  // Mostrar la contraseña
        button.textContent = "🙈";  // Cambiar el ícono a "ocultar"
    } else {
        passwordField.type = "password";  // Ocultar la contraseña
        button.textContent = "👁";  // Cambiar el ícono a "ver"
    }
}

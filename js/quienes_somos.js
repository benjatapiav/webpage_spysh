
// ============================================== //
// Coontrol de Texto editorial y Cards Fundadoras
// ============================================== //

const botonFundadoras = document.getElementById("buttonFundadoras");
const botonVolver = document.getElementById("buttonVolver");

const containerEditorial = document.getElementById("capaEditorial")
const containerFundadoras = document.getElementById("capaFundadoras");

botonFundadoras.addEventListener("click", () => {

    containerEditorial.classList.add("oculta");
    containerFundadoras.classList.add("activa");

});

botonVolver.addEventListener("click", () => {

    containerEditorial.classList.remove("oculta");
    containerFundadoras.classList.remove("activa");

});

// ======================= //
// Respuesta de Formulario
// ======================= //

const formularioContacto = document.getElementById("formularioContacto");
const buttonContacto = document.getElementById("buttonContacto");
const respuestaFormulario = document.getElementById("respuestaFormulario");
const iconoRespuesta = document.getElementById("iconoRespuesta");
const tituloRespuesta = document.getElementById("tituloRespuesta");
const textoRespuesta = document.getElementById("textoRespuesta");

console.log("Formulario: ",formularioContacto);
console.log("Botón: ",buttonContacto);
console.log("Bloque de respuesta: ", respuestaFormulario);
console.log("Icono: ", iconoRespuesta);
console.log("Titulo: ", tituloRespuesta);
console.log("Texto: ", textoRespuesta);

// ============================================== //
// PRUEBA 4: MOSTRAR MENSAJE DE RESPUESTA
// ============================================== //

formularioContacto.addEventListener("submit", (evento) => {
    evento.preventDefault();

    console.log("Simulando envío...");

    respuestaFormulario.classList.remove(
        "visible",
        "error"
    );

    buttonContacto.setAttribute("disabled", "");
    buttonContacto.textContent = "Enviando...";

    setTimeout(() => {
        iconoRespuesta.textContent = "✓";
        tituloRespuesta.textContent = "Mensaje enviado";

        textoRespuesta.textContent =
            "Gracias por comunicarte con SPYSH. " +
            "Te responderemos a la brevedad.";

        respuestaFormulario.classList.add("visible");

        buttonContacto.removeAttribute("disabled");
        buttonContacto.textContent = "Enviar";

        console.log("Mensaje de respuesta mostrado.");
    }, 2000);
});
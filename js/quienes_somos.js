
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
/* @type {HTMLButtonElement} */
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

formularioContacto.addEventListener("submit", async (evento)=>{

    evento.preventDefault();

    // Ocultamos cualquier respuesta anterior
    respuestaFormulario.classList.remove("visible","error")

    // Desactivamos el botón mientras se procesa el envío
    buttonContacto.disabled = true;
    buttonContacto.textContent = "Enviando...";

    const datosFormulario = new FormData(formularioContacto);
    
    // fetch
    const respuesta = await fetch("enviar.php",{
        method:"POST",
        body:datosFormulario
    });
    const resultado = await respuesta.json();

    buttonContacto.disabled = false;
    buttonContacto.textContent = "Enviar";

    console.log(resultado);
});

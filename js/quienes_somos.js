
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

    // Recopilamos los datos del formulario
    const datosFormulario = new FormData(formularioContacto);
    

    try{
        // Enviamos los datos a PHP
        const respuesta = await fetch("enviar.php",{
            method:"POST",
            body:datosFormulario
        });
        // Convertimos la respuesta JSON de PHP a un objeto de JS
        const resultado = await respuesta.json();
    
        if(resultado.ok){

            iconoRespuesta.textContent = "✓";
            tituloRespuesta.textContent = "Mensaje enviado";
            textoRespuesta.textContent = 
                "Gracias por comunicarte con SPYSH. Te responderemos a la brevedad";
                
            respuestaFormulario.classList("visible");
                
            // Limpiamos el formulario
            formularioContacto.reset();
        }else{
                
            // PHP respondió, pero informó que ocurrió un problema
            iconoRespuesta.textContent = "!";
            tituloRespuesta.textContent = "No se pudo enviar";
            textoRespuesta.textContent = resultado.mensaje;
            respuestaFormulario.classList.add("visible","error");
        }
    }catch(error){

        // Error durante la comunicación con el servidor
        iconoRespuesta.textContent = "!";
        tituloRespuesta.textContent = "Error de conexión";
        textoRespuesta.textContent =
            "No fue posible enviar el mensaje. Inténtelo nuevamente";

        respuestaFormulario.classList.add("visible","error");

        console.log("Error al enviar el formulario: ", error);

    }finally{

        // Esto ocurre tanto si funcionó como si falló
        buttonContacto.disabled = false;
        buttonContacto.textContent = "Enviar";
    }    
});

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



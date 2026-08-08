const botonFundadoras = document.getElementById("buttonFundadoras");
const botonBack = document.getElementById("buttonBack");

const containerEditorial = document.getElementById("capaEditorial")
const containerFundadoras = document.getElementById("capaFundadoras");

botonFundadoras.addEventListener("click", () => {

    containerEditorial.classList.add("oculta");
    containerFundadoras.classList.add("activa");

});

botonBack.addEventListener("click", () => {

    containerEditorial.classList.remove("oculta");
    containerFundadoras.classList.remove("activa");

});


